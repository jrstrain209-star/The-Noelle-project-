"use client";

import { useRef, useState } from "react";

const gardenStops = [
  {
    title: "Memory Tree",
    eyebrow: "Leave a memory beneath the branches.",
    text: "A place for names, stories, photos, and love that still lives here.",
    icon: "🌳",
  },
  {
    title: "Reflection Pond",
    eyebrow: "Sit beside the water for a moment.",
    text: "Gentle prompts for grief, hope, memory, and quiet breathing.",
    icon: "🪞",
  },
  {
    title: "Memory Mushrooms",
    eyebrow: "Small lights in dark places.",
    text: "Tiny glowing reminders, encouragement, and anonymous notes of hope.",
    icon: "🍄",
  },
  {
    title: "Lantern Grove",
    eyebrow: "For those who need immediate light.",
    text: "Crisis support, 988, text lines, and help resources gathered in one place.",
    icon: "🕯️",
  },
  {
    title: "Firefly Field",
    eyebrow: "You are not walking alone.",
    text: "Community stories, shared struggles, victories, and messages of support.",
    icon: "✨",
  },
];

const gardenThemes = [
  "from-emerald-300/15 to-yellow-100/10",
  "from-blue-300/15 to-slate-100/10",
  "from-purple-300/15 to-amber-100/10",
  "from-yellow-200/20 to-orange-100/10",
  "from-cyan-200/15 to-indigo-200/10",
];

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

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <section className="relative min-h-screen px-6 pb-24 pt-12 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(255,244,156,0.45),transparent_18%),linear-gradient(to_bottom,#11170d,#07111f_65%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:82px_82px]" />

        <div className="absolute right-8 top-32 h-40 w-40 rounded-full bg-yellow-100 opacity-90 blur-[1px] shadow-[0_0_80px_rgba(255,245,160,.75)]" />

        {[...Array(9)].map((_, i) => (
          <span
            key={i}
            className="firefly absolute h-2 w-2 rounded-full bg-yellow-200 shadow-[0_0_18px_rgba(255,240,140,.9)]"
            style={{
              left: `${10 + i * 10}%`,
              top: `${28 + (i % 4) * 16}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}

        <nav className="relative z-10 mx-auto flex max-w-3xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-7 py-5 shadow-2xl backdrop-blur">
          <a href="/" className="text-white/70">
            ← Home
          </a>

          <a
            href="/get-help-now"
            className="rounded-full bg-yellow-200 px-6 py-3 font-bold text-slate-950 shadow-[0_0_35px_rgba(255,240,120,.45)]"
          >
            Get Help Now
          </a>
        </nav>

        <div className="relative z-10 mx-auto mt-40 max-w-3xl">
          <p className="mb-8 tracking-[0.45em] text-yellow-100/80">
            NOËLLE&apos;S GARDEN
          </p>

          <h1 className="text-5xl font-black leading-tight sm:text-7xl">
            Take the path
            <br />
            you need today.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-white/70">
            A storybook-real memorial garden with watercolor softness — a
            peaceful place for memory, reflection, hope, and light.
          </p>

          <button
            onClick={beginWalk}
            className="mt-12 rounded-full bg-white px-12 py-5 text-lg font-bold text-slate-950 shadow-xl transition hover:scale-105"
          >
            Begin Your Walk
          </button>
        </div>
      </section>

      <section ref={gardenRef} className="relative px-6 py-24">
        <div className="absolute left-1/2 top-0 h-full w-24 -translate-x-1/2 rounded-full bg-gradient-to-b from-stone-300/20 via-stone-200/10 to-transparent blur-sm" />

        <svg
          className="absolute left-1/2 top-0 h-full w-[220px] -translate-x-1/2 opacity-50"
          viewBox="0 0 220 1200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M110 0 C40 120 185 220 100 340 C20 460 195 560 115 700 C45 820 180 920 95 1040 C60 1090 95 1160 110 1200"
            fill="none"
            stroke="rgba(255,255,255,.35)"
            strokeWidth="34"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-4xl space-y-28">
          {gardenStops.map((stop, index) => (
            <article
              key={stop.title}
              className={`relative max-w-xl rounded-[2rem] border border-white/10 bg-gradient-to-br ${
                gardenThemes[index]
              } p-8 shadow-2xl backdrop-blur-md ${
                index % 2 === 0 ? "mr-auto" : "ml-auto"
              }`}
            >
              <div className="absolute -top-4 left-8 h-8 w-8 rounded-full bg-stone-200/40 shadow-[0_0_20px_rgba(255,255,255,.25)]" />
              <div className="absolute -bottom-5 right-10 h-10 w-10 rounded-full bg-stone-300/30 shadow-[0_0_20px_rgba(255,255,255,.2)]" />

              <div className="mb-5 text-5xl">{stop.icon}</div>

              <p className="mb-3 tracking-[0.35em] text-sm font-bold text-yellow-100/80">
                {stop.title.toUpperCase()}
              </p>

              <h2 className="text-3xl font-black">{stop.eyebrow}</h2>

              <p className="mt-4 text-lg leading-8 text-white/70">
                {stop.text}
              </p>

              <button className="mt-6 rounded-full bg-white/90 px-6 py-3 font-bold text-slate-950 shadow-lg">
                Enter This Space
              </button>
            </article>
          ))}

          <div className="mx-auto max-w-2xl rounded-[2rem] border border-yellow-100/20 bg-yellow-100/10 p-8 text-center shadow-2xl backdrop-blur">
            <div className="mb-4 text-5xl">🏮</div>

            <p className="mb-3 tracking-[0.35em] text-sm font-bold text-yellow-100/80">
              LANTERN NOTES
            </p>

            <h2 className="text-3xl font-black">
              Light a small lantern for someone walking through the dark.
            </h2>

            <p className="mt-4 text-white/70">
              Leave a short anonymous message of hope, memory, or encouragement.
            </p>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();

                if (!lanternNote.trim()) return;

                setLanternNotes([lanternNote.trim(), ...lanternNotes]);
                setLanternNote("");
              }}
            >
              <textarea
                value={lanternNote}
                onChange={(e) => setLanternNote(e.target.value)}
                maxLength={120}
                placeholder="Example: I made it through today."
                className="min-h-28 w-full rounded-3xl border border-white/10 bg-black/25 p-5 text-white outline-none placeholder:text-white/40"
              />

              <button
                type="submit"
                className="mt-4 rounded-full bg-yellow-200 px-8 py-4 font-bold text-slate-950 shadow-[0_0_35px_rgba(255,240,120,.35)]"
              >
                Light a Lantern
              </button>
            </form>

            <div className="mt-8 grid gap-4 text-left">
              {lanternNotes.map((note, index) => (
                <div
                  key={`${note}-${index}`}
                  className="rounded-3xl border border-yellow-100/10 bg-black/20 p-5"
                >
                  <p className="text-yellow-100">“{note}”</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-2xl rounded-[2rem] border border-yellow-100/20 bg-yellow-100/10 p-8 text-center shadow-2xl backdrop-blur">
            <div className="mb-4 text-5xl">🌙</div>

            <p className="mb-3 tracking-[0.35em] text-sm font-bold text-yellow-100/80">
              GARDEN GATE
            </p>

            <h2 className="text-3xl font-black">
              May you carry a little more light into tomorrow.
            </h2>

            <p className="mt-4 text-white/70">
              Thank you for walking through Noëlle&apos;s Garden.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-6 rounded-full bg-white px-8 py-4 font-bold text-slate-950 shadow-lg"
            >
              Return to the Top
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .firefly {
          animation: floatFirefly 7s ease-in-out infinite;
        }

        @keyframes floatFirefly {
          0% {
            transform: translate(0, 0);
            opacity: 0.35;
          }

          50% {
            transform: translate(18px, -28px);
            opacity: 1;
          }

          100% {
            transform: translate(0, 0);
            opacity: 0.35;
          }
        }
      `}</style>
    </main>
  );
}
