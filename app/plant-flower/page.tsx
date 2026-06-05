"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function PlantFlowerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const form = new FormData(e.currentTarget);

    const { error } = await supabase.from("garden_flowers").insert({
      name: form.get("name") || null,
      message: form.get("message"),
      flower_type: form.get("flower_type") || "daisy",
      dedication: form.get("dedication") || "For Noelle",
      approved: false,
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02030f] px-5 py-12 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.38),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.28),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.30),_transparent_35%),linear-gradient(180deg,_#02030f_0%,_#07071f_45%,_#02030f_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.75)_1px,_transparent_1px)] [background-size:26px_26px]" />

      <section className="mx-auto max-w-2xl">
        <a href="/garden" className="text-sm text-pink-200 underline">
          ← Back to garden
        </a>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
          {submitted ? (
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-200/80">
                Flower Planted
              </p>

              <h1 className="mt-4 text-3xl font-bold">
                Thank you for adding to the garden.
              </h1>

              <p className="mt-4 leading-7 text-white/70">
                Your flower will be reviewed before it appears publicly.
              </p>

              <a
                href="/garden"
                className="mt-8 inline-block rounded-full bg-pink-200 px-8 py-3 text-sm font-bold text-slate-950"
              >
                Return to Garden
              </a>
            </div>
          ) : (
            <>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-200/80">
                Plant a Flower
              </p>

              <h1 className="mt-4 text-4xl font-bold">
                Add Your Light to the Garden
              </h1>

              <p className="mt-4 leading-7 text-white/70">
                Leave a flower, a short message, or a dedication. It can be for
                Noelle, someone you love, or someone who needs hope.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <input
                  name="name"
                  placeholder="Name optional"
                  className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950"
                />

                <select
                  name="flower_type"
                  className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950"
                >
                  <option value="daisy">🌼 Daisy</option>
                  <option value="rose">🌹 Rose</option>
                  <option value="sunflower">🌻 Sunflower</option>
                  <option value="cherry">🌸 Cherry Blossom</option>
                  <option value="lavender">🪻 Lavender</option>
                </select>

                <select
                  name="dedication"
                  className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950"
                >
                  <option value="For Noelle">For Noelle</option>
                  <option value="For someone I miss">For someone I miss</option>
                  <option value="For someone struggling">For someone struggling</option>
                  <option value="For hope">For hope</option>
                  <option value="For healing">For healing</option>
                </select>

                <textarea
                  name="message"
                  required
                  placeholder="Write a short message..."
                  className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950"
                />

                {errorMessage && (
                  <p className="rounded-2xl border border-red-300/20 bg-red-300/10 p-4 text-sm text-red-100">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-pink-200 px-8 py-3 text-sm font-bold text-slate-950 disabled:opacity-60"
                >
                  {loading ? "Planting..." : "Plant Flower"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
