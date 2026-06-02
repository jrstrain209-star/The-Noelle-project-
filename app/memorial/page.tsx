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

return (
  <main className="min-h-screen bg-[#050716] px-5 py-12 text-white">
    <section className="mx-auto max-w-5xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-200/80">
        Memorial Wall
      </p>

      <h1 className="mt-4 text-4xl font-bold md:text-6xl">
        A Place to Remember
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-white/70">
        Share memories, stories, photos, and messages for those who will never
        be forgotten.
      </p>
    </section>
