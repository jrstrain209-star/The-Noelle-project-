"use client";

import { FormEvent, useState } from "react";
import {
  uploadMemorialPhoto,
  submitMemorial,
} from "@/lib/supabaseClient";

export default function MemorialPage() {
  const [candles, setCandles] = useState(27);
  const [name, setName] = useState("");
  const [story, setStory] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const lovedOnes = [
    {
      name: "Noelle Ryan Strain",
      story:
        "Her light continues through every act of kindness, every memory shared, and every person who finds comfort here.",
      image: "/noelle-swing.jpg",
    },
    {
      name: "Memories",
      story:
        "A place where families and friends can remember loved ones together.",
      image: "/noelle-family.jpg",
    },
    {
      name: "Forever Loved",
      story: "Every photo and every story keeps their light alive.",
      image: "/noelle-ocean.jpg",
    },
  ];

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!story.trim()) {
      alert("Please write a memory or letter before submitting.");
      return;
    }

    try {
      setSubmitting(true);
      setSubmitted(false);

      let photoUrl: string | null = null;

      if (photo) {
        photoUrl = await uploadMemorialPhoto(photo);
      }

      await submitMemorial({
        name: name.trim() || "Anonymous",
        message: story.trim(),
        photo_url: photoUrl,
        permission_to_post: true,
      });

      setSubmitted(true);
      setName("");
      setStory("");
      setPhoto(null);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <section className="mx-auto max-w-5xl py-12 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-300">
          Memorial Wall
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          A place to remember the ones we love
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-white/70">
          Share photos, memories, stories, and light a candle for someone who
          will never be forgotten.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {lovedOnes.map((person) => (
          <div
            key={person.name}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06]"
          >
            <img
              src={person.image}
              alt={person.name}
              className="h-80 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">{person.name}</h2>

              <p className="mt-3 leading-7 text-white/70">{person.story}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-3xl rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-8 text-center">
        <div className="mb-4 text-6xl">🕯️</div>

        <h2 className="text-3xl font-bold">Light a Candle</h2>

        <p className="mt-4 text-white/70">
          Light a candle in memory, prayer, love, or quiet remembrance.
        </p>

        <button
          type="button"
          onClick={() => setCandles(candles + 1)}
          className="mt-6 rounded-full bg-yellow-200 px-8 py-3 font-bold text-slate-950"
        >
          Light a Candle
        </button>

        <p className="mt-6 text-xl font-semibold">
          {candles} candles have been lit
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-3xl rounded-3xl border border-pink-300/20 bg-pink-300/10 p-8">
        <h2 className="text-center text-3xl font-bold">
          Submit a Photo or Letter
        </h2>

        <p className="mt-4 text-center text-white/70">
          Share a photo, memory, story, or letter. Submissions will be reviewed
          before being posted publicly.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50"
            placeholder="Your name or Anonymous"
          />

          <textarea
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="min-h-40 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50"
            placeholder="Write your letter, memory, or story..."
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white"
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-pink-300 px-8 py-4 font-bold text-slate-950 disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit Photo or Letter"}
          </button>

          {submitted && (
            <p className="text-center font-semibold text-green-300">
              Submission received ❤️
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
