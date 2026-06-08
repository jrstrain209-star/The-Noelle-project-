export default function GardenPage() {
  const fireflies = [
    { type: "In Memory", message: "For someone we miss every day." },
    { type: "Needs Light", message: "For someone trying to make it through tonight." },
    { type: "Found Light", message: "For someone who found their way back." },
  ];

  const mushrooms = [
    "A favorite memory",
    "A story about Noelle",
    "A photo or moment",
    "A message from someone who loves her",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-black text-white overflow-hidden">
      <section className="relative px-6 py-20 text-center">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_20%,#facc15,transparent_8%),radial-gradient(circle_at_20%_40%,#a78bfa,transparent_6%),radial-gradient(circle_at_80%_35%,#fef3c7,transparent_5%)]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-yellow-200 tracking-widest uppercase text-sm mb-4">
            Noelle’s Memorial Garden
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Noelle’s Garden
          </h1>

          <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
            A peaceful night garden of lanterns, memory mushrooms, and fireflies.
            Some lights shine for those we have lost. Some shine for those who
            still need light. Together, they remind us that no one has to walk
            through the dark alone.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Fireflies of Hope</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {fireflies.map((fly) => (
            <div
              key={fly.type}
              className="rounded-3xl border border-yellow-200/20 bg-yellow-100/10 p-6 shadow-lg shadow-yellow-300/10"
            >
              <div className="text-3xl mb-3">✨</div>
              <h3 className="text-xl font-semibold text-yellow-100">{fly.type}</h3>
              <p className="text-slate-300 mt-2">{fly.message}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Memory Mushrooms</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {mushrooms.map((memory, index) => (
            <div
              key={memory}
              className="rounded-3xl bg-purple-500/10 border border-purple-300/20 p-6 text-center"
            >
              <div className="text-5xl mb-4">{index % 2 === 0 ? "🍄" : "🌙"}</div>
              <p className="text-slate-200">{memory}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 text-center max-w-3xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold mb-4">Garden Plaque</h2>
          <p className="text-slate-200 leading-relaxed">
            The lanterns honor those we miss. The mushrooms hold memories that
            continue to grow. The fireflies shine for those we have lost, those
            who need light, and those who have found their way.
          </p>
          <p className="mt-6 text-purple-200 font-semibold">
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
    <div className="rounded-3xl bg-white/10 border border-white/10 p-6 text-center backdrop-blur">
      <div className="text-5xl mb-4">{emoji}</div>
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="text-slate-300">{text}</p>
    </div>
  );
}
