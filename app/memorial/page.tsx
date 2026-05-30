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
