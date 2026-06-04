"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SuggestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const form = new FormData(e.currentTarget);

    const { error } = await supabase.from("suggestions").insert({
      name: form.get("name") || null,
      email: form.get("email") || null,
      category: form.get("category") || "general",
      message: form.get("message"),
      reviewed: false,
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
        <a href="/" className="text-sm text-pink-200 underline">
          ← Back to home
        </a>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
          {submitted ? (
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-200/80">
                Thank You
              </p>

              <h1 className="mt-4 text-3xl font-bold">
                Your suggestion was sent.
              </h1>

              <p className="mt-4 leading-7 text-white/70">
                Thank you for helping improve Noelle&apos;s Light.
              </p>

              <a
                href="/"
                className="mt-8 inline-block rounded-full bg-pink-200 px-8 py-3 text-sm font-bold text-slate-950"
              >
                Return Home
              </a>
            </div>
          ) : (
            <>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-200/80">
                Suggestions & Comments
              </p>

              <h1 className="mt-4 text-4xl font-bold">
                Help Improve Noelle&apos;s Light
              </h1>

              <p className="mt-4 leading-7 text-white/70">
                Share ideas, report something confusing, suggest a resource, or
                tell us what would make this space more helpful.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <input
                  name="name"
                  placeholder="Name optional"
                  className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email optional"
                  className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950"
                />

                <select
                  name="category"
                  className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950"
                >
                  <option value="general">General suggestion</option>
                  <option value="resource">Suggest a resource</option>
                  <option value="bug">Report a problem</option>
                  <option value="memorial">Memorial idea</option>
                  <option value="safety">Safety concern</option>
                </select>

                <textarea
                  name="message"
                  required
                  placeholder="Write your suggestion or comment here..."
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
                  {loading ? "Sending..." : "Send Suggestion"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
