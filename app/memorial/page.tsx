"use client";

import { FormEvent, useState } from "react";

export default function MemorialPage() {const [name, setName] = useState("");const [story, setStory] = useState("");const [submitting, setSubmitting] = useState(false);const [submitted, setSubmitted] = useState(false);

async function handleSubmit(event: FormEvent) {event.preventDefault();

if (!story.trim()) {
  alert("Please write a memory before submitting.");
  return;
}

setSubmitting(true);

// Temporary placeholder until Supabase is reconnected
setTimeout(() => {
  setSubmitted(true);
  setName("");
  setStory("");
  setSubmitting(false);
}, 1000);

}

const lovedOnes = [{name: "Noelle Ryan Strain",story:"Her light continues through every act of kindness, every memory shared, and every person who finds comfort here.",image: "/noelle-swing.jpg",},{name: "Memories",story:"A place where families and friends can remember loved ones together.",image: "/noelle-family.jpg",},{name: "Forever Loved",story:"Every photo and every story keeps their light alive.",image: "/noelle-ocean.jpg",},];

return (Memorial Wall

    <h1 className="mt-4 text-4xl font-bold md:text-6xl">
      A Place to Remember
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-white/70">
      Share memories, stories, photos, and messages for those who will
      never be forgotten.
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
          <p className="mt-3 leading-7 text-white/70">
            {person.story}
          </p>
        </div>
      </div>
    ))}
  </section>

  <section className="mx-auto mt-16 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8">
    <h2 className="text-center text-3xl font-bold">
      Share a Memory
    </h2>

    <p className="mt-3 text-center text-white/70">
      Leave a message, memory, or letter for someone you love.
    </p>

    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <input
        type="text"
        placeholder="Your Name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white"
      />

      <textarea
        rows={6}
        placeholder="Write your memory here..."
        value={story}
        onChange={(e) => setStory(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white"
      />

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-pink-500 px-6 py-4 font-bold transition hover:bg-pink-400"
      >
        {submitting ? "Submitting..." : "Share Memory"}
      </button>

      {submitted && (
        <p className="text-center text-green-400">
          Thank you for sharing your memory.
        </p>
      )}
    </form>
  </section>
</main>

);}
