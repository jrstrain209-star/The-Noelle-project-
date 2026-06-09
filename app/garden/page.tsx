export default function GardenPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-950 to-emerald-950 perspective-[900px]">
        {/* Moon */}
        <div className="absolute right-10 top-10 h-28 w-28 rounded-full bg-yellow-100 shadow-[0_0_100px_35px_rgba(254,240,138,0.35)]" />

        {/* Stars */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_2px),radial-gradient(circle_at_70%_30%,white_1px,transparent_2px),radial-gradient(circle_at_40%_10%,white_1px,transparent_2px),radial-gradient(circle_at_85%_15%,white_1px,transparent_2px)] opacity-80" />

        {/* Distant glow */}
        <div className="absolute bottom-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />

        {/* Back hills */}
        <div className="absolute bottom-0 left-[-10%] h-64 w-[120%] rounded-t-[50%] bg-emerald-950 shadow-[0_-40px_80px_rgba(16,185,129,0.12)]" />

        {/* Middle grass layer */}
        <div className="absolute bottom-0 left-[-15%] h-48 w-[130%] rounded-t-[50%] bg-emerald-900/80 shadow-[0_-30px_70px_rgba(0,0,0,0.35)]" />

        {/* Front grass layer */}
        <div className="absolute bottom-0 left-[-20%] h-32 w-[140%] rounded-t-[50%] bg-emerald-800 shadow-[0_-25px_60px_rgba(0,0,0,0.45)]" />

        {/* 3D path */}
        <div className="absolute bottom-[-80px] left-1/2 h-[620px] w-[360px] -translate-x-1/2 rotate-x-[62deg] rounded-t-full bg-gradient-to-b from-stone-500 via-stone-700 to-stone-950 shadow-[0_40px_80px_rgba(0,0,0,0.65)]" />

        {/* Path stones */}
        <div className="absolute bottom-32 left-1/2 h-8 w-20 -translate-x-1/2 rounded-full bg-stone-400/70 shadow-lg" />
        <div className="absolute bottom-52 left-[47%] h-7 w-16 rounded-full bg-stone-500/70 shadow-lg" />
        <div className="absolute bottom-72 left-[51%] h-6 w-14 rounded-full bg-stone-500/60 shadow-lg" />

        {/* Fireflies */}
        <div className="absolute left-[15%] top-[35%] h-3 w-3 rounded-full bg-yellow-200 shadow-[0_0_20px_9px_rgba(250,204,21,0.9)]" />
        <div className="absolute left-[42%] top-[50%] h-2 w-2 rounded-full bg-yellow-200 shadow-[0_0_18px_8px_rgba(250,204,21,0.8)]" />
        <div className="absolute left-[72%] top-[38%] h-3 w-3 rounded-full bg-yellow-200 shadow-[0_0_20px_9px_rgba(250,204,21,0.9)]" />

        {/* Garden objects back */}
        <div className="absolute bottom-56 left-[18%] text-4xl drop-shadow-[0_12px_12px_rgba(0,0,0,0.8)] scale-75">🌷🌼🌸</div>
        <div className="absolute bottom-58 right-[18%] text-4xl drop-shadow-[0_12px_12px_rgba(0,0,0,0.8)] scale-75">🌻🌸🌼</div>

        {/* Garden objects middle */}
        <div className="absolute bottom-36 left-[10%] text-6xl drop-shadow-[0_18px_16px_rgba(0,0,0,0.85)]">🌷🌼🌸🌻</div>
        <div className="absolute bottom-40 right-[10%] text-6xl drop-shadow-[0_18px_16px_rgba(0,0,0,0.85)]">🌸🌻🌷🌼</div>

        {/* Mushrooms */}
        <div className="absolute bottom-40 left-[27%] text-7xl drop-shadow-[0_18px_18px_rgba(0,0,0,0.9)]">🍄</div>
        <div className="absolute bottom-48 right-[26%] text-6xl drop-shadow-[0_18px_18px_rgba(0,0,0,0.9)]">🍄</div>
        <div className="absolute bottom-20 left-[43%] text-5xl drop-shadow-[0_16px_14px_rgba(0,0,0,0.9)]">🍄</div>

        {/* Lanterns */}
        <div className="absolute bottom-64 left-[33%] text-6xl drop-shadow-[0_0_24px_rgba(251,191,36,0.9)]">🏮</div>
        <div className="absolute bottom-68 right-[33%] text-6xl drop-shadow-[0_0_24px_rgba(251,191,36,0.9)]">🏮</div>

        {/* Foreground flowers */}
        <div className="absolute bottom-4 left-0 text-7xl drop-shadow-[0_22px_18px_rgba(0,0,0,0.95)]">🌷🌼🌸🌻🌷</div>
        <div className="absolute bottom-6 right-0 text-7xl drop-shadow-[0_22px_18px_rgba(0,0,0,0.95)]">🌸🌻🌷🌼🌸</div>

        {/* Center card */}
        <div className="absolute left-1/2 top-24 w-[90%] max-w-2xl -translate-x-1/2 rounded-3xl border border-white/10 bg-black/45 p-6 text-center shadow-2xl backdrop-blur">
          <p className="mb-3 text-sm uppercase tracking-widest text-yellow-200">
            Noelle’s Memorial Garden
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">Noelle’s Garden</h1>
          <p className="mt-4 text-slate-200">
            A night garden of lanterns, memory mushrooms, flowers, and fireflies of hope.
          </p>
        </div>
      </section>
    </main>
  );
}
