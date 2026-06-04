"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function StoryReactionButton({
  storyId,
  initialCount,
}: {
  storyId: string;
  initialCount: number;
}) {
  const [count, setCount] = useState(initialCount);
  const [clicked, setClicked] = useState(false);

  async function react() {
    if (clicked) return;

    setClicked(true);
    setCount((current) => current + 1);

    await supabase.from("story_reactions").insert({
      story_id: storyId,
      reaction_type: "heart",
    });
  }

  return (
    <button
      onClick={react}
      className="mt-5 rounded-full border border-pink-200/20 bg-pink-200/10 px-4 py-2 text-sm font-semibold text-pink-100"
    >
      ❤️ {count}
    </button>
  );
}
