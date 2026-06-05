 import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const flowerEmoji: Record<string, string> = {
  rose: "🌹",
  sunflower: "🌻",
  daisy: "🌼",
  cherry: "🌸",
  lavender: "🪻",
};

export default async function GardenPage() {
  const { data: flowers } = await supabase
    .from("garden_flowers")
    .select("id, name, message, flower_type, dedication, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030414] px-5 py-12 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(147,51,234,0.35),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(236,72,153,0.22),_transparent_28%),linear-gradient(180deg,_#030414_0%,_#07071f_55%,_#050816_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-70 bg-[radial-gradient(circle,_rgba(255,255,255,0.95)_1px,_transparent_1px)] [background-size:32px_32px]" />
      <div className="fixed inset-0 -z-10 opacity-30 bg-[radial-gradient(circle,_rgba(255,255,255,0.9)_1px,_transparent_1px)] [background-size:90px_90px]" />

      <section className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-200/80">
          Virtual Memorial Garden
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          A Garden of Light
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
          Each flower was planted with love, memory, hope, or healing.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/plant-flower"
            className="rounded-full bg-pink-200 px-8 py-3 text-sm font-bold text-slate-950"
          >
            Plant a Flower
          </a>

          <a
            href="/memorial"
            className="rounded-full border border-white/15 bg-white/10 px-8 py-3 text-sm font-bold text-white"
          >
            Memorial Wall
          </a>

          <a
            href="/"
            className="rounded-full border border-white/15 bg-white/10 px-8 py-3 text-sm font-bold text-white"
          >
            Back Home
          </a>
        </div>

        <div className="mx-auto mt-8 inline-flex rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm text-white/70">
          🌸 {flowers?.length || 0} flowers planted
        </div>
      </section>

      <section className="relative mx-auto mt-14 min-h-[620px] max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 p-6 shadow-2xl backdrop-blur-sm">
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#101b12] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#101b12]" />

        {flowers && flowers.length > 0 ? (
          <div className="relative h-[560px]">
            {flowers.map((flower, index) => {
              const left = 8 + ((index * 17) % 84);
              const bottom = 8 + ((index * 29) % 58);
              const size = 44 + ((index * 7) % 24);

              return (
                <details
                  key={flower.id}
                  className="group absolute"
                  style={{
                    left: `${left}%`,
                    bottom: `${bottom}%`,
                  }}
                >
                  <summary
                    className="list-none cursor-pointer rounded-full text-center transition-transform duration-300 hover:scale-125"
                    style={{ fontSize: `${size}px` }}
                  >
                    <span className="drop-shadow-[0_0_16px_rgba(244,114,182,0.75)]">
                      {flowerEmoji[flower.flower_type] || "🌼"}
                    </span>
                  </summary>

                  <div className="absolute bottom-16 left-1/2 z-20 w-72 -translate-x-1/2 rounded-3xl border border-white/10 bg-slate-950/95 p-5 text-left shadow-2xl backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-200/80">
                      {flower.dedication || "For Noelle"}
                    </p>

                    <p className="mt-3 whitespace-pre-wrap leading-7 text-white/80">
                      {flower.message}
                    </p>

                    <p className="mt-4 text-sm text-purple-200">
                      — {flower.name || "Anonymous"}
                    </p>
                  </div>
                </details>
              );
            })}
          </div>
        ) : (
          <div className="flex h-[560px] items-center justify-center text-center text-white/70">
            No flowers have been planted yet.
          </div>
        )}
      </section>
    </main>
  );
}
