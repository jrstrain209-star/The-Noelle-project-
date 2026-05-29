"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function SubmitStoryPage() {
  const [name, setName] = useState("");
  const [story, setStory] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const { error } = await supabase.from("stories").insert({
      name: isAnonymous ? null : name,
      story,
      is_anonymous: isAnonymous,
      approved: false,
    });

    setLoading(false);

    if (error) {
      setErrorMessage("Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
    setName("");
    setStory("");
    setIsAnonymous(true);
  }

  return (
    <main className="min-h-screen bg-[#050716] px-5 py-10 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(120,120,255,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,180,210,0.18),_transparent_30%)]" />

      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-sm text-pink-200 underline">
          ← Back to home
        </Link>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
          {submitted ? (
            <div className="text-center">
              <h1 className="text-3xl font-bold">Thank you for sharing.</h1>

              <p className="mt-4 leading-7 text-white/75">
                Your story was submitted. It will be reviewed before it appears
                publicly.
              </p>

              <Link
                href="/"
                className="mt-8 inline-block rounded-full bg-pink-200 px-8 py-3 text-sm font-semibold text-slate-950"
              >
                Return Home
              </Link>
            </div>
          ) : (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-200/80">
                Share Anonymously
              </p>

              <h1 className="mt-4 text-4xl font-bold">Submit Your Story</h1>

              <p className="mt-4 leading-7 text-white/75">
                You can share what you’re going through, what helped you, or
                what you want someone else to know. You do not have to use your
                real name.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/80">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="h-4 w-4"
                  />
                  Submit anonymously
                </label>

                {!isAnonymous && (
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white/80">
                      Your name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name or nickname"
                      className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950 outline-none"
                    />
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white/80">
                    Your story
                  </label>
                  <textarea
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    required
                    placeholder="Write your story here..."
                    className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950 outline-none"
                  />
                </div>

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
                  {loading ? "Submitting..." : "Submit Story"}
                </button>

                <p className="text-center text-xs leading-5 text-white/50">
                  Noelle&apos;s Light is not monitored 24/7. If you are in
                  immediate danger, call emergency services or 988.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
