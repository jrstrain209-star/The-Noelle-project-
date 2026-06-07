"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function StoryCommentForm({
  storyId,
}: {
  storyId: string;
}) {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function submitComment() {
    if (!message.trim()) return;

    const { error } = await supabase.from("story_comments").insert({
      story_id: storyId,
      comment: message,
      approved: false,
    });

    if (!error) {
      setSubmitted(true);
      setMessage("");
    }
  }

  if (submitted) {
    return (
      <p className="mt-4 text-sm text-green-300">
        Comment submitted for review ❤️
      </p>
    );
  }

  return (
    <div className="mt-4">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Leave a supportive comment..."
        className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white"
      />

      <button
        onClick={submitComment}
        className="mt-3 rounded-full bg-pink-200 px-5 py-2 font-bold text-slate-950"
      >
        Send Comment
      </button>
    </div>
  );
}
