import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || ""
);

export default async function CommunityPage() {
  const { data: stories, error } = await supabase
    .from("stories")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-[#050716] px-5 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-pink-200 underline">
          ← Back to home
        </Link>

        <h1 className="mt-8 text-4xl font-bold">Community Stories</h1>

        <p className="mt-4 text-white/70">
          Stories shared by people who wanted someone else to feel less alone.
        </p>

        {error && (
          <p className="mt-6 rounded-2xl bg-red-500/10 p-4 text-red-200">
            Could not load stories.
          </p>
        )}

        <div className="mt-8 grid gap-6">
          {stories?.length ? (
            stories.map((story) => (
              <article
                key={story.id}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
              >
                <h2 className="text-xl font-bold">
                  {story.is_anonymous ? "Anonymous" : story.name || "Anonymous"}
                </h2>

                <p className="mt-4 whitespace-pre-wrap text-white/80">
                  {story.story}
                </p>
              </article>
            ))
          ) : (
            <p className="text-white/60">
              No approved stories yet.
            </p>
          )}
        </div>
      </div>
    </main>
  );
              }
