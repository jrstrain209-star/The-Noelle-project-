"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type CommunityPost = {
  id: string;
  display_name: string | null;
  category: string;
  message: string;
};

const categories = [
  "Grief",
  "Loneliness",
  "Mental Health",
  "Addiction",
  "Family",
  "General",
];

export default function CommunitySection() {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [displayName, setDisplayName] = useState("");
  const [category, setCategory] = useState("General");
  const [message, setMessage] = useState("");

  async function loadPosts() {
    const { data } = await supabase
      .from("community_posts")
      .select("*")
      .order("created_at", { ascending: false });

    setPosts(data || []);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await supabase.from("community_posts").insert({
      display_name: displayName || "Anonymous",
      category,
      message,
      approved: true,
    });

    setDisplayName("");
    setMessage("");

    loadPosts();
  }

  return (
    <section id="share" className="mx-auto max-w-6xl px-5 py-16">
      <div className="rounded-3xl border border-pink-200/20 bg-pink-200/5 p-8 backdrop-blur-sm">
        <h2 className="text-3xl font-bold">Share Anonymously</h2>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Nickname (optional)"
            className="rounded-2xl bg-black/20 p-4 text-white"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-2xl bg-black/20 p-4 text-white"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's on your mind?"
            className="min-h-[140px] rounded-2xl bg-black/20 p-4 text-white"
          />

          <button
            type="submit"
            className="rounded-full bg-pink-200 px-8 py-3 font-semibold text-slate-950"
          >
            Post Anonymously
          </button>
        </form>
      </div>

      <div className="mt-10 grid gap-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="mb-2 text-sm text-pink-200">
              {post.display_name} • {post.category}
            </div>

            <p className="text-white/90 whitespace-pre-wrap">
              {post.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
