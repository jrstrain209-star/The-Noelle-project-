"use client";

import { useRef, useState } from "react";

export default function NoellesGardenPage() {
  const gardenRef = useRef<HTMLDivElement | null>(null);
  const [lanternNote, setLanternNote] = useState("");
  const [lanternNotes, setLanternNotes] = useState([
    "I made it through today.",
    "Someone still needs your light.",
    "You are not alone tonight.",
  ]);

  const beginWalk = () => {
    gardenRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addLanternNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lanternNote.trim()) return;
    setLanternNotes([lanternNote.trim(), ...lanternNotes]);
    setLanternNote("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen px-4 sm:px-6 pb-24 pt-12 text-center flex flex-col justify-center">
        {/* Dark night sky background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(30,40,80,0.4),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(60,20,100,0.3),transparent_50%)]" />

        {/* Large moon in upper right */}
        <div className="absolute top-16 right-8 sm:top-24 sm:right-16">
          <div className="relative h-32 w-32 sm:h-48 sm:w-48 rounded-full bg-yellow-100 opacity-85 blur-[2px] shadow-[0_0_60px_rgba(255,240,150,0.6)]">
            {/* Moon craters */}
            <div className="absolute top-6 left-8 h-3 w-3 rounded-full bg-yellow-900/40" />
            <div className="absolute top-16 right-12 h-2 w-2 rounded-full bg-yellow-900/30" />
            <div className="absolute bottom-8 left-12 h-2.5 w-2.5 rounded-full bg-yellow-900/35" />
          </div>
        </div>

        {/* Top navigation */}
        <nav className="relative z-10 mx-auto flex max-w-3xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-6 py-4 sm:px-7 sm:py-5 shadow-2xl backdrop-blur w-full">
          <a href="/" className="text-white/70 text-sm sm:text-base">
            ← Home
          </a>
          <a
            href="/get-help-now"
            className="rounded-full bg-yellow-200 px-4 sm:px-6 py-2 sm:py-3 font-bold text-slate-950 text-sm sm:text-base shadow-[0_0_35px_rgba(255,240,120,.45)] hover:scale-105 transition"
          >
            Get Help Now
          </a>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 mx-auto mt-20 sm:mt-40 max-w-3xl px-4">
          <p className="mb-6 sm:mb-8 tracking-[0.45em] text-yellow-100/80 text-xs sm:text-sm">
            NOËLLE&apos;S GARDEN
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
            Take the path
            <br />
            you need today.
          </h1>

          <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-white/70">
            A storybook-real memorial garden with watercolor softness — a peaceful place for memory, reflection, hope, and light.
          </p>

          <button
            onClick={beginWalk}
            className="mt-8 sm:mt-12 rounded-full bg-white px-8 sm:px-12 py-3 sm:py-5 text-base sm:text-lg font-bold text-slate-950 shadow-xl transition hover:scale-105"
          >
            Begin Your Walk
          </button>
        </div>

        {/* Floating fireflies in hero */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`hero-firefly-${i}`}
            className="absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-200 shadow-[0_0_12px_rgba(255,240,140,.8)]"
            style={{
              left: `${15 + i * 14}%`,
              top: `${35 + (i % 3) * 20}%`,
              animation: `floatFirefly ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </section>

      {/* GARDEN PATH SECTION */}
      <section ref={gardenRef} className="relative px-4 sm:px-6 py-20 sm:py-32">
        {/* Winding stone path down the page */}
        <svg
          className="absolute left-1/2 top-0 h-full w-32 sm:w-40 -translate-x-1/2 opacity-40 pointer-events-none"
          viewBox="0 0 280 2000"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Path stones */}
          <circle cx="140" cy="80" r="45" fill="rgba(168,162,158,0.25)" stroke="rgba(120,113,108,0.3)" strokeWidth="2" />
          <circle cx="140" cy="220" r="50" fill="rgba(168,162,158,0.25)" stroke="rgba(120,113,108,0.3)" strokeWidth="2" />
          <circle cx="140" cy="360" r="48" fill="rgba(168,162,158,0.25)" stroke="rgba(120,113,108,0.3)" strokeWidth="2" />
          <circle cx="140" cy="500" r="52" fill="rgba(168,162,158,0.25)" stroke="rgba(120,113,108,0.3)" strokeWidth="2" />
          <circle cx="140" cy="640" r="48" fill="rgba(168,162,158,0.25)" stroke="rgba(120,113,108,0.3)" strokeWidth="2" />
          <circle cx="140" cy="780" r="50" fill="rgba(168,162,158,0.25)" stroke="rgba(120,113,108,0.3)" strokeWidth="2" />
          <circle cx="140" cy="920" r="46" fill="rgba(168,162,158,0.25)" stroke="rgba(120,113,108,0.3)" strokeWidth="2" />
          <circle cx="140" cy="1060" r="50" fill="rgba(168,162,158,0.25)" stroke="rgba(120,113,108,0.3)" strokeWidth="2" />
          <circle cx="140" cy="1200" r="48" fill="rgba(168,162,158,0.25)" stroke="rgba(120,113,108,0.3)" strokeWidth="2" />
          <circle cx="140" cy="1340" r="52" fill="rgba(168,162,158,0.25)" stroke="rgba(120,113,108,0.3)" strokeWidth="2" />
          <circle cx="140" cy="1480" r="48" fill="rgba(168,162,158,0.25)" stroke="rgba(120,113,108,0.3)" strokeWidth="2" />
          <circle cx="140" cy="1620" r="50" fill="rgba(168,162,158,0.25)" stroke="rgba(120,113,108,0.3)" strokeWidth="2" />

          {/* Connecting lines */}
          <path
            d="M140 125 L140 195 M140 265 L140 335 M140 405 L140 475 M140 545 L140 615 M140 685 L140 755 M140 825 L140 895 M140 965 L140 1035 M140 1105 L140 1175 M140 1245 L140 1315 M140 1385 L140 1455 M140 1525 L140 1595 M140 1665 L140 1750"
            stroke="rgba(168,162,158,0.15)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Garden content container */}
        <div className="relative z-10 mx-auto max-w-5xl space-y-20 sm:space-y-32">
          {/* MEMORY TREE AREA */}
          <div className="relative flex flex-col items-center">
            <div className="absolute -left-8 sm:left-0 top-0 w-32 h-32 sm:w-40 sm:h-40 text-6xl sm:text-7xl opacity-70 flex items-center justify-center">
              🌳
            </div>
            <div className="bg-black/30 backdrop-blur border border-green-400/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-lg sm:max-w-2xl ml-0 sm:ml-32">
              <div className="bg-gradient-to-br from-emerald-300/15 to-yellow-100/10 border border-green-400/10 rounded-2xl p-6 sm:p-8">
                <p className="mb-2 tracking-[0.35em] text-xs sm:text-sm font-bold text-green-100/80">
                  MEMORY TREE
                </p>
                <h2 className="text-2xl sm:text-3xl font-black mb-3">Leave a memory beneath the branches.</h2>
                <p className="text-sm sm:text-base leading-relaxed text-white/70">
                  A place for names, stories, photos, and love that still lives here.
                </p>
                <button className="mt-4 rounded-full bg-green-400/80 px-6 py-2 font-bold text-slate-950 text-sm hover:bg-green-400 transition">
                  Leave a Memory
                </button>
              </div>
            </div>
          </div>

          {/* REFLECTION POND AREA */}
          <div className="relative flex flex-col items-center">
            {/* Blue glowing pond shape */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-48 sm:w-64 h-32 sm:h-40 bg-blue-400/15 rounded-[50%_50%_40%_40%] blur-2xl shadow-[0_0_40px_rgba(100,200,255,0.3)]" />
            
            <div className="relative bg-black/30 backdrop-blur border border-blue-400/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-lg sm:max-w-2xl">
              <div className="bg-gradient-to-br from-blue-300/15 to-slate-100/10 border border-blue-400/10 rounded-2xl p-6 sm:p-8">
                <p className="mb-2 tracking-[0.35em] text-xs sm:text-sm font-bold text-blue-100/80">
                  REFLECTION POND
                </p>
                <h2 className="text-2xl sm:text-3xl font-black mb-3">Sit beside the water for a moment.</h2>
                <p className="text-sm sm:text-base leading-relaxed text-white/70">
                  Gentle prompts for grief, hope, memory, and quiet breathing.
                </p>
                <button className="mt-4 rounded-full bg-blue-400/80 px-6 py-2 font-bold text-slate-950 text-sm hover:bg-blue-400 transition">
                  Sit and Reflect
                </button>
              </div>
            </div>
          </div>

          {/* MEMORY MUSHROOMS - scattered around */}
          <div className="relative h-40 sm:h-48">
            {/* Scattered mushroom plaques */}
            <div className="absolute left-0 top-0 w-36 sm:w-40 bg-black/30 backdrop-blur border border-amber-400/20 rounded-2xl p-4 sm:p-5">
              <div className="bg-gradient-to-br from-amber-300/15 to-orange-100/10 border border-amber-400/10 rounded-xl p-4">
                <p className="text-3xl mb-2">🍄</p>
                <h3 className="text-sm font-bold text-amber-100/90">Small lights</h3>
                <p className="text-xs text-white/60 mt-1">in dark places</p>
              </div>
            </div>

            <div className="absolute left-40 sm:left-48 top-12 w-36 sm:w-40 bg-black/30 backdrop-blur border border-amber-400/20 rounded-2xl p-4 sm:p-5">
              <div className="bg-gradient-to-br from-amber-300/15 to-orange-100/10 border border-amber-400/10 rounded-xl p-4">
                <p className="text-3xl mb-2">🍄</p>
                <h3 className="text-sm font-bold text-amber-100/90">Glowing reminders</h3>
                <p className="text-xs text-white/60 mt-1">of hope & light</p>
              </div>
            </div>

            <div className="absolute right-0 top-4 w-36 sm:w-40 bg-black/30 backdrop-blur border border-amber-400/20 rounded-2xl p-4 sm:p-5">
              <div className="bg-gradient-to-br from-amber-300/15 to-orange-100/10 border border-amber-400/10 rounded-xl p-4">
                <p className="text-3xl mb-2">🍄</p>
                <h3 className="text-sm font-bold text-amber-100/90">Anonymous notes</h3>
                <p className="text-xs text-white/60 mt-1">of encouragement</p>
              </div>
            </div>
          </div>

          {/* LANTERN GROVE - hanging lanterns */}
          <div className="relative py-12 sm:py-16">
            <p className="text-center mb-4 tracking-[0.35em] text-xs sm:text-sm font-bold text-yellow-100/80 uppercase">
              Lantern Grove
            </p>
            <h2 className="text-center text-2xl sm:text-3xl font-black mb-12">For those who need immediate light.</h2>
            
            {/* Hanging lantern display */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {lanternNotes.slice(0, 3).map((note, index) => (
                <div
                  key={`lantern-display-${index}`}
                  className="relative flex flex-col items-center"
                  style={{
                    animation: `sway ${3 + index * 0.5}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  {/* String */}
                  <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-yellow-300/40 to-transparent mb-2" />
                  {/* Lantern */}
                  <div className="w-16 sm:w-20 h-20 sm:h-24 bg-gradient-to-b from-yellow-100 via-yellow-50 to-orange-100 rounded-[40%_40%_30%_30%] shadow-[inset_0_0_20px_rgba(255,240,120,0.3),0_0_30px_rgba(255,240,120,0.5)] border border-yellow-200/30 flex items-center justify-center">
                    <p className="text-2xl sm:text-3xl opacity-60">🔥</p>
                  </div>
                  {/* Glow */}
                  <div className="absolute -inset-3 sm:-inset-4 bg-yellow-400/10 rounded-full blur-xl" />
                </div>
              ))}
            </div>

            {/* Lantern notes input */}
            <div className="mt-12 mx-auto max-w-2xl bg-black/30 backdrop-blur border border-yellow-400/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="bg-gradient-to-br from-yellow-300/15 to-orange-100/10 border border-yellow-400/10 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-black mb-2">Light a Lantern</h3>
                <p className="text-sm sm:text-base text-white/70 mb-4">
                  Leave a short anonymous message of hope, memory, or encouragement.
                </p>

                <form onSubmit={addLanternNote} className="space-y-3">
                  <textarea
                    value={lanternNote}
                    onChange={(e) => setLanternNote(e.target.value)}
                    maxLength={120}
                    placeholder="Example: I made it through today."
                    className="w-full min-h-24 rounded-2xl border border-white/10 bg-black/25 p-4 text-white outline-none placeholder:text-white/40 text-sm sm:text-base"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-yellow-200 px-6 py-3 font-bold text-slate-950 shadow-[0_0_35px_rgba(255,240,120,.35)] hover:scale-105 transition text-sm sm:text-base"
                  >
                    Light a Lantern
                  </button>
                </form>

                {/* Display all lantern notes scrollable */}
                <div className="mt-6 max-h-40 overflow-y-auto space-y-2">
                  {lanternNotes.map((note, index) => (
                    <div
                      key={`lantern-note-${index}`}
                      className="bg-black/20 border border-yellow-100/10 rounded-xl p-3 text-yellow-100/90 text-sm italic"
                    >
                      "{note}"
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FIREFLY FIELD - floating fireflies */}
          <div className="relative py-12 sm:py-16 min-h-48 sm:min-h-64">
            <p className="text-center mb-4 tracking-[0.35em] text-xs sm:text-sm font-bold text-cyan-100/80 uppercase">
              Firefly Field
            </p>
            <h2 className="text-center text-2xl sm:text-3xl font-black mb-8">You are not walking alone.</h2>

            {/* Scattered floating fireflies */}
            {[...Array(12)].map((_, i) => (
              <div
                key={`firefly-${i}`}
                className="absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(165,242,254,.8)]"
                style={{
                  left: `${10 + (i % 4) * 22}%`,
                  top: `${20 + (i % 3) * 28}%`,
                  animation: `floatFirefly ${6 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            ))}

            <div className="relative mx-auto max-w-2xl bg-black/30 backdrop-blur border border-cyan-400/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="bg-gradient-to-br from-cyan-300/15 to-indigo-200/10 border border-cyan-400/10 rounded-2xl p-6 sm:p-8 text-center">
                <p className="mb-2 tracking-[0.35em] text-xs sm:text-sm font-bold text-cyan-100/80">
                  COMMUNITY STORIES
                </p>
                <h3 className="text-xl sm:text-2xl font-black mb-3">Community stories, shared struggles, victories, and support.</h3>
                <button className="mt-4 rounded-full bg-cyan-400/80 px-6 py-2 font-bold text-slate-950 text-sm hover:bg-cyan-400 transition">
                  Read Stories
                </button>
              </div>
            </div>
          </div>

          {/* GARDEN GATE - end of path with arch */}
          <div className="relative pt-12 sm:pt-16 pb-20">
            {/* Arch gate shape */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-48 sm:w-64 h-32 sm:h-40 border-l-2 border-r-2 border-t-4 border-slate-300/20 rounded-t-full" />

            <div className="relative mx-auto max-w-2xl bg-black/30 backdrop-blur border border-slate-300/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="bg-gradient-to-br from-slate-300/15 to-slate-100/10 border border-slate-300/10 rounded-2xl p-6 sm:p-8 text-center">
                <div className="mb-4 text-4xl sm:text-5xl">🌙</div>
                <p className="mb-2 tracking-[0.35em] text-xs sm:text-sm font-bold text-slate-100/80">
                  GARDEN GATE
                </p>
                <h2 className="text-2xl sm:text-3xl font-black mb-3">
                  May you carry a little more light into tomorrow.
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-white/70 mb-6">
                  Thank you for walking through Noëlle&apos;s Garden.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="rounded-full bg-white px-6 sm:px-8 py-2 sm:py-3 font-bold text-slate-950 text-sm hover:scale-105 transition"
                  >
                    Return to Top
                  </button>
                  <a
                    href="/get-help-now"
                    className="rounded-full bg-yellow-200 px-6 sm:px-8 py-2 sm:py-3 font-bold text-slate-950 text-sm hover:scale-105 transition"
                  >
                    Get Help Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes floatFirefly {
          0% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          25% {
            transform: translate(20px, -25px);
            opacity: 0.8;
          }
          50% {
            transform: translate(-15px, -40px);
            opacity: 1;
          }
          75% {
            transform: translate(25px, -20px);
            opacity: 0.6;
          }
          100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
        }

        @keyframes sway {
          0% {
            transform: translateX(0) rotate(0deg);
          }
          25% {
            transform: translateX(8px) rotate(2deg);
          }
          50% {
            transform: translateX(0) rotate(0deg);
          }
          75% {
            transform: translateX(-8px) rotate(-2deg);
          }
          100% {
            transform: translateX(0) rotate(0deg);
          }
        }
      `}</style>
    </main>
  );
}
