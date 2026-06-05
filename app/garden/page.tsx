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
    <main className="relative min-h-screen overflow-hidden bg-[#02030f] px-5 py-12 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.38),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.28),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.30),_transparent_35%),linear-gradient(180deg,_#02030f_0%,_#07071f_45%,_#02030f_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.75)_1px,_transparent_1px)] [background-size:26px_26px]" />

      <section className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-200/80">
          Virtual Memorial Garden
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          A Garden of Light
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
          Plant a flower in memory of Noelle, for someone you love, or for
          anyone who needs a reminder that they are not alone.
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
      </section>

      <section className="mx-auto mt-14 max-w-6xl">
        {flowers && flowers.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {flowers.map((flower) => (
              <article
                key={flower.id}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-center shadow-2xl backdrop-blur-sm"
              >
                <div className="text-6xl">
                  {flowerEmoji[flower.flower_type] || "🌼"}
                </div>

                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-pink-200/80">
                  {flower.dedication || "For Noelle"}
                </p>

                <p className="mt-4 whitespace-pre-wrap leading-7 text-white/80">
                  {flower.message}
                </p>

                <p className="mt-5 text-sm text-purple-200">
                  — {flower.name || "Anonymous"}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-center text-white/70">
            No flowers have been planted yet.
          </div>
        )}
      </section>
    </main>
  );
}
