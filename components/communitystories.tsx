export const dynamic = "force-dynamic";
export const revalidate = 0;

import { createClient } from "@supabase/supabase-js";
import StoryReactionButton from "@/components/StoryReactionButton";
import StoryCommentForm from "@/components/StoryCommentForm";

export default async function CommunityStories() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: stories } = await supabase
    .from("stories")
    .select("id, story, name, is_anonymous, created_at, story_reactions(id)")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  return (
    <section
      id="community-stories"
      className="mx-auto max-w-4xl px-6 py-16"
    >
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-purple-300">
          Community Stories
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Shared by people who needed a place to be heard
        </h2>

        <p className="mt-4 text-white/70">
          These stories are shared anonymously or with a chosen name. Every
          story is reviewed before appearing here.
        </p>
      </div>

      <div className="space-y-6">
        {stories?.length ? (
          stories.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <p className="whitespace-pre-line leading-7 text-white/80">
                {item.story}
              </p>

              <p className="mt-5 text-sm text-purple-200">
                — {item.is_anonymous ? "Anonymous" : item.name || "Anonymous"}
              </p>

              <StoryReactionButton
                storyId={item.id}
                initialCount={item.story_reactions?.length || 0}
              />
            </article>
          ))
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/70">
            No community stories are posted yet.
          </div>
        )}
      </div>
    </section>
  );
}
