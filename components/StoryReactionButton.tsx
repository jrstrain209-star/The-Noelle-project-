"use client";

import { useEffect, useState } from "react";
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

  async function loadCount() {
    const { count } = await supabase
      .from("story_reactions")
      .select("*", { count: "exact", head: true })
      .eq("story_id", storyId);

    setCount(count || 0);
  }

  useEffect(() => {
    loadCount();
  }, [storyId]);

  async function react() {
    if (clicked) return;

    setClicked(true);
    setCount((current) => current + 1);

    const { error } = await supabase.from("story_reactions").insert({
      story_id: storyId,
      reaction_type: "heart",
    });

    if (error) {
      setClicked(false);
      setCount((current) => Math.max(0, current - 1));
      alert(error.message);
      return;
    }

    loadCount();
  }

  return (
    <button
      onClick={react}
      disabled={clicked}
      className="mt-5 rounded-full border border-pink-200/20 bg-pink-200/10 px-4 py-2 text-sm font-semibold text-pink-100 disabled:opacity-70"
    >
      ❤️ {count}
    </button>
  );
}
