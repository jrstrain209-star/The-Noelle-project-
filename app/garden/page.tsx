export default function GardenPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-950 to-emerald-950">
        <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-yellow-100 shadow-[0_0_80px_25px_rgba(254,240,138,0.35)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_2px),radial-gradient(circle_at_70%_30%,white_1px,transparent_2px),radial-gradient(circle_at_40%_10%,white_1px,transparent_2px),radial-gradient(circle_at_85%_15%,white_1px,transparent_2px)]" />

        <div className="absolute left-[15%] top-[35%] h-3 w-3 rounded-full bg-yellow-200 shadow-[0_0_18px_8px_rgba(250,204,21,0.8)]" />
        <div className="absolute left-[42%] top-[50%] h-2 w-2 rounded-full bg-yellow-200 shadow-[0_0_18px_8px_rgba(250,204,21,0.8)]" />
        <div className="absolute left-[72%] top-[38%] h-3 w-3 rounded-full bg-yellow-200 shadow-[0_0_18px_8px_rgba(250,204,21,0.8)]" />

        <div className="absolute bottom-0 left-1/2 h-[430px] w-[300px] -translate-x-1/2 rounded-t-full bg-gradient-to-b from-stone-600 to-stone-950 opacity-80" />

        <div className="absolute bottom-10 left-4 text-5xl">🌷🌼🌸🌻</div>
        <div className="absolute bottom-16 right-4 text-5xl">🌸🌻🌷🌼</div>
        <div className="absolute bottom-36 left-16 text-4xl">🌼🌷🌸</div>
        <div className="absolute bottom-40 right-20 text-4xl">🌻🌸🌼</div>

        <div className="absolute bottom-28 left-[25%] text-6xl">🍄</div>
        <div className="absolute bottom-36 right-[25%] text-5xl">🍄</div>
        <div className="absolute bottom-16 left-[45%] text-4xl">🍄</div>

        <div className="absolute bottom-52 left-[32%] text-5xl drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]">
          🏮
        </div>
        <div className="absolute bottom-56 right-[32%] text-5xl drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]">
          🏮
        </div>

        <div className="absolute left-1/2 top-24 w-[90%] max-w-2xl -translate-x-1/2 rounded-3xl border border-white/10 bg-black/45 p-6 text-center backdrop-blur">
          <p className="mb-3 text-sm uppercase tracking-widest text-yellow-200">
            Noelle’s Memorial Garden
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">Noelle’s Garden</h1>
          <p className="mt-4 text-slate-200">
            A night garden of lanterns, memory mushrooms, flowers, and fireflies
            of hope.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
        <GardenCard
          emoji="🏮"
          title="Light a Lantern"
          text="Leave a light in memory of someone you love."
        />
        <GardenCard
          emoji="🍄"
          title="Memory Mushrooms"
          text="Each mushroom holds a memory, story, photo, or message."
        />
        <GardenCard
          emoji="✨"
          title="Release a Firefly"
          text="For someone remembered, someone struggling, or someone who found light."
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">Garden Plaque</h2>
          <p className="leading-relaxed text-slate-300">
            The lanterns honor those we miss. The mushrooms hold memories that
            continue to grow. The fireflies shine for those we have lost, those
            who need light, and those who have found their way.
          </p>
          <p className="mt-6 font-semibold text-purple-200">
            In memory of Noelle Ryan Strain.
          </p>
        </div>
      </section>
    </main>
  );
}

function GardenCard({
  emoji,
  title,
  text,
}: {
  emoji: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur">
      <div className="mb-4 text-5xl">{emoji}</div>
      <h2 className="mb-3 text-2xl font-bold">{title}</h2>
      <p className="text-slate-300">{text}</p>
    </div>
  );
}
