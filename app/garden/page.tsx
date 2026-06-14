"use client";

import { useRef } from "react";

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

export default function NoellesGardenPage() {
  const gardenRef = useRef<HTMLDivElement | null>(null);

  const beginWalk = () => {
    gardenRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <section className="relative min-h-screen px-6 pb-24 pt-12 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,244,156,0.5),transparent_16%),linear-gradient(to_bottom,#11170d,#07111f_65%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="absolute right-8 top-28 h-40 w-40 rounded-full bg-yellow-100 opacity-90 blur-[1px] shadow-[0_0_80px_rgba(255,245,160,.75)]" />

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

      <section
        ref={gardenRef}
        className="relative px-6 py-24"
      >
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
              className={`rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-md ${
                index % 2 === 0 ? "mr-auto" : "ml-auto"
              } max-w-xl`}
            >
              <div className="mb-5 text-5xl">{stop.icon}</div>
              <p className="mb-3 tracking-[0.35em] text-sm font-bold text-yellow-100/80">
                {stop.title.toUpperCase()}
              </p>
              <h2 className="text-3xl font-black">{stop.eyebrow}</h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                {stop.text}
              </p>
            </article>
          ))}

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
