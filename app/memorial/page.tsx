import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const photos = [
  {
    src: "/noelle-swing.jpg",
    title: "Noelle Ryan Strain",
    caption: "Forever loved. Forever remembered.",
  },
  {
    src: "/noelle-family.jpg",
    title: "Her Light",
    caption: "Every memory keeps her light shining.",
  },
  {
    src: "/noelle-ocean.jpg",
    title: "Never Forgotten",
    caption: "Loved beyond words and missed every day.",
  },
];

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function MemorialPage() {
  const { data: memories } = await supabase
    .from("memorial_submissions")
    .select("id, name, relationship, message, photo_url, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02030f] px-5 py-12 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.38),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.28),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.30),_transparent_35%),linear-gradient(180deg,_#02030f_0%,_#07071f_45%,_#02030f_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.75)_1px,_transparent_1px)] [background-size:26px_26px]" />

      <section className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-200/80">
          Memorial Wall
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Noelle&apos;s Light Lives Here
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
          This page is for Noelle Ryan Strain — for her photos, her memories,
          her story, and the love that will always remain.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/submit-memory"
            className="rounded-full bg-pink-200 px-8 py-3 text-sm font-bold text-slate-950"
          >
            Share a Memory
          </a>

          <a
            href="/#help"
            className="rounded-full border border-white/15 bg-white/10 px-8 py-3 text-sm font-bold text-white"
          >
            Get Help Now
          </a>

          <a
            href="/"
            className="rounded-full border border-white/15 bg-white/10 px-8 py-3 text-sm font-bold text-white"
          >
            Back Home
          </a>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-5xl rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-200/80">
          From Her Dad
        </p>

        <h2 className="mt-3 text-3xl font-bold">For Noelle</h2>

        <p className="mt-5 leading-8 text-white/75">
          Noelle, this space was created in your memory. It is here for the
          people who miss you, the people who love you, and the people who need
          a reminder that they are not alone. Your life mattered. Your story
          matters. Your light is still reaching people.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-200/80">
            Photo Memories
          </p>

          <h2 className="mt-3 text-3xl font-bold">Moments We Hold Close</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <article
              key={photo.src}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-sm"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{photo.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{photo.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-200/80">
            Shared Memories
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Memories, Letters, and Love
          </h2>
        </div>

        {memories && memories.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {memories.map((memory) => (
              <article
                key={memory.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
              >
                {memory.photo_url && (
                  <img
                    src={memory.photo_url}
                    alt={memory.name || "Submitted memorial photo"}
                    className="mb-5 max-h-96 w-full rounded-2xl object-cover"
                  />
                )}

                <p className="whitespace-pre-wrap leading-8 text-white/80">
                  {memory.message}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-pink-200">
                    {memory.name || "Anonymous"}
                  </p>

                  {memory.relationship && (
                    <p className="mt-1 text-sm text-white/50">
                      {memory.relationship}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-center text-white/70">
            No approved memories have been posted yet.
          </div>
        )}
      </section>

      <section className="mx-auto mt-16 max-w-4xl rounded-3xl border border-pink-200/20 bg-pink-200/5 p-8 text-center backdrop-blur-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-200/80">
          Keep Her Light Going
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          Add a memory, letter, or photo
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Memories submitted through Noelle&apos;s Light are reviewed before
          appearing publicly so this space stays safe, respectful, and loving.
        </p>

        <a
          href="/submit-memory"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-slate-950"
        >
          Share a Memory
        </a>
      </section>
    </main>
  );
}
