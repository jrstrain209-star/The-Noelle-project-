"use client";

const lovedOnes = [
  {
    name: "Noelle Ryan Strain",
    story:
      "Her light continues through every act of kindness, every memory shared, and every person who finds comfort here.",
    image: "/noelle-swing.jpg",
  },
  {
    name: "Memories",
    story:
      "A place where family, friends, classmates, and loved ones can remember together.",
    image: "/noelle-family.jpg",
  },
  {
    name: "Forever Loved",
    story: "Every photo and every story keeps their light alive.",
    image: "/noelle-ocean.jpg",
  },
];

export default function MemorialPage() {
  return (
    <main className="min-h-screen bg-[#050716] px-5 py-12 text-white">
      <section className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-200/80">
          Memorial Wall
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          A Place to Remember
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-white/70">
          Share memories, stories, photos, and messages for those who will never
          be forgotten.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/submit-memory"
            className="rounded-full bg-pink-200 px-8 py-3 text-sm font-bold text-slate-950"
          >
            Submit a Memory
          </a>

          <a
            href="/"
            className="rounded-full border border-white/15 bg-white/10 px-8 py-3 text-sm font-bold text-white hover:bg-white/15"
          >
            Back Home
          </a>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
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

      <section className="mx-auto mt-16 max-w-4xl rounded-3xl border border-pink-200/20 bg-pink-200/5 p-8 text-center">
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
