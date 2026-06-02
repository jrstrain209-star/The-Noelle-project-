import { createClient } from "@supabase/supabase-js";

export default async function CommunityStories() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: stories } = await supabase
    .from("stories")
    .select("id, title, content, nickname, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-purple-300">
          Community Stories
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">
          Shared by people who needed a place to be heard
        </h2>
        <p className="mt-4 text-white/70">
          These stories are shared anonymously or with a chosen name. Every story is reviewed before appearing here.
        </p>
      </div>

      <div className="space-y-6">
        {stories?.length ? (
          stories.map((story) => (
            <article
              key={story.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              {story.title && (
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {story.title}
                </h3>
              )}

              <p className="whitespace-pre-line leading-7 text-white/80">
                {story.content}
              </p>

              <p className="mt-5 text-sm text-purple-200">
                — {story.nickname || "Anonymous"}
              </p>
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
