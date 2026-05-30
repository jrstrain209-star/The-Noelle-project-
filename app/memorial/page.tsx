"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  supabase,
  uploadMemorialPhoto,
  submitMemorial,
} from "@/lib/supabaseClient";

type ApprovedMemorial = {
  id: string;
  name: string | null;
  relationship: string | null;
  message: string;
  photo_url: string | null;
  created_at: string;
};

export default function MemorialPage() {
  const [candles, setCandles] = useState(27);
  const [name, setName] = useState("");
  const [story, setStory] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [approvedMemorials, setApprovedMemorials] = useState<ApprovedMemorial[]>([]);

  useEffect(() => {
    async function loadApprovedMemorials() {
      const { data } = await supabase
        .from("memorial_submissions")
        .select("id, name, relationship, message, photo_url, created_at")
        .eq("approved", true)
        .order("created_at", { ascending: false });

      setApprovedMemorials(data || []);
    }

    loadApprovedMemorials();
  }, []);

  const lovedOnes = [
    {
      name: "Noelle Ryan Strain",
      story:
        "Her light continues through every act of kindness, every memory shared, and every person who finds comfort here.",
      image: "/noelle-swing.jpg",
    },
    {
      name: "Memories",
      story: "A place where families and friends can remember loved ones together.",
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

      <section className="mx-auto mt-16 max-w-5xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-purple
