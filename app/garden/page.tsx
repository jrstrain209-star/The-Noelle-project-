"use client";

import { useRef, useState } from "react";

const hopeMessages = [
  "I made it through today.",
  "You are not alone tonight.",
  "Someone still needs your light.",
  "Keep walking. One step is enough.",
  "Your story is not over.",
];

const reflectionPrompts = [
  "What memory brings you comfort tonight?",
  "What would you tell someone carrying the same pain?",
  "What is one small reason to stay for tomorrow?",
];

export default function NoellesGardenPage() {
  const gardenRef = useRef<HTMLDivElement | null>(null);
  const [activeMessage, setActiveMessage] = useState(hopeMessages[0]);

  const beginWalk = () => {
    gardenRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#06101d] text-white">
      {/* SKY */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_78%_12%,rgba(255,244,170,.55),transparent_13%),linear-gradient(to_bottom,#0b1627,#07111f_45%,#041018)]" />
      <div className="fixed inset-0 -z-10 opacity-35 [background-image:radial-gradient(rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:80px_80px]" />

      {/* FLOATING FIREFLIES */}
      {[...Array(26)].map((_, i) => (
        <span
          key={i}
          className="firefly fixed z-20 h-1.5 w-1.5 rounded-full bg-yellow-200 shadow-[0_0_18px_rgba(255,240,120,.95)]"
          style={{
            left: `${5 + ((i * 17) % 90)}%`,
            top: `${10 + ((i * 23) % 82)}%`,
            animationDelay: `${i * 0.45}s`,
          }}
        />
      ))}

      {/* HELP LANTERN */}
      <a
        href="/get-help-now"
        className="fixed right-4 top-4 z-50 rounded-full border border-yellow-100/30 bg-yellow-200 px-5 py-3 text-sm font-black text-slate-950 shadow-[0_0_35px_rgba(255,230,120,.65)]"
      >
        🕯 Get Help Now
      </a>

      {/* GARDEN GATE HERO */}
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <div className="absolute bottom-0 h-[42vh] w-[140vw] rounded-t-[100%] bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent" />

        <div className="absolute bottom-10 h-[58vh] w-[86vw] max-w-xl rounded-t-full border-t-8 border-x-8 border-yellow-100/20 shadow-[0_0_80px_rgba(255,230,140,.12)]" />

        <div className="absolute bottom-0 left-1/2 h-[52vh] w-32 -translate-x-1/2 bg-gradient-to-b from-stone-200/45 via-stone-300/25 to-stone-800/5 blur-[1px] [clip-path:polygon(38%_0,62%_0,100%_100%,0_100%)]" />

        <div className="relative z-10 max-w-3xl">
          <div className="mx-auto mb-8 w-fit rotate-[-2deg] rounded-2xl border border-yellow-100/20 bg-[#5b3b20]/80 px-8 py-5 shadow-2xl">
            <p className="tracking-[0.45em] text-yellow-100/80">
              NOËLLE&apos;S GARDEN
            </p>
          </div>

          <h1 className="text-5xl font-black leading-tight sm:text-7xl">
            Take the path
            <br />
            you need today.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-white/75">
            A quiet moonlit garden for memory, reflection, support, and small
            lights in dark places.
          </p>

          <button
            onClick={beginWalk}
            className="mt-12 rounded-full bg-yellow-200 px-10 py-5 text-lg font-black text-slate-950 shadow-[0_0_45px_rgba(255,235,120,.65)] transition hover:scale-105"
          >
            🏮 Begin Your Walk
          </button>
        </div>
      </section>

      {/* GARDEN WALK */}
      <section ref={gardenRef} className="relative px-5 pb-32">
        {/* WINDING PATH */}
        <svg
          className="absolute left-1/2 top-0 h-full w-[360px] -translate-x-1/2 opacity-70"
          viewBox="0 0 360 2500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M180 0 C70 190 300 330 165 520 C45 700 310 850 190 1050 C80 1230 285 1390 150 1580 C55 1715 300 1910 180 2100 C130 2190 160 2370 180 2500"
            fill="none"
            stroke="rgba(226,218,190,.35)"
            strokeWidth="82"
            strokeLinecap="round"
          />
          <path
            d="M180 0 C70 190 300 330 165 520 C45 700 310 850 190 1050 C80 1230 285 1390 150 1580 C55 1715 300 1910 180 2100 C130 2190 160 2370 180 2500"
            fill="none"
            stroke="rgba(255,255,255,.18)"
            strokeWidth="14"
            strokeDasharray="18 38"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-6xl space-y-40">
          {/* MEMORY TREE */}
          <scene className="block min-h-[75vh] pt-24">
            <div className="relative mx-auto max-w-4xl">
              <div className="mx-auto h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

              <div className="absolute left-1/2 top-6 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-800 shadow-[0_0_80px_rgba(80,220,150,.25)]" />
              <div className="absolute left-1/2 top-44 h-64 w-20 -translate-x-1/2 rounded-t-full bg-[#5a321c]" />
              <div className="absolute left-1/2 top-64 h-32 w-72 -translate-x-1/2 rounded-full bg-emerald-950/80 blur-sm" />

              {["left-24 top-28", "right-28 top-36", "left-1/2 top-20"].map(
                (pos, i) => (
                  <span
                    key={i}
                    className={`absolute ${pos} text-4xl drop-shadow-[0_0_18px_rgba(255,235,120,.85)]`}
                  >
                    🏮
                  </span>
                )
              )}

              <div className="relative mx-auto mt-[-5rem] max-w-sm rotate-[-2deg] rounded-2xl border border-yellow-100/20 bg-[#6b4526]/85 p-6 text-center shadow-2xl">
                <p className="text-sm tracking-[0.35em] text-yellow-100/80">
                  MEMORY TREE
                </p>
                <h2 className="mt-3 text-3xl font-black">
                  Leave a memory beneath the branches.
                </h2>
                <p className="mt-4 text-white/75">
                  Names, stories, photos, and love that still lives here.
                </p>
              </div>
            </div>
          </scene>

          {/* REFLECTION POND */}
          <scene className="block min-h-[70vh]">
            <div className="relative mx-auto max-w-5xl">
              <div className="mx-auto h-64 max-w-2xl rounded-[50%] bg-blue-300/30 shadow-[inset_0_0_60px_rgba(255,255,255,.25),0_0_90px_rgba(120,190,255,.25)]" />
              <div className="mx-auto mt-[-8rem] h-32 max-w-xl rounded-[50%] border border-white/20 bg-blue-950/40" />

              <div className="mx-auto mt-10 max-w-sm rotate-1 rounded-2xl border border-blue-100/20 bg-slate-900/65 p-6 text-center backdrop-blur">
                <p className="text-sm tracking-[0.35em] text-blue-100/80">
                  REFLECTION POND
                </p>
                <h2 className="mt-3 text-3xl font-black">
                  Sit beside the water for a moment.
                </h2>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {reflectionPrompts.map((prompt) => (
                  <div
                    key={prompt}
                    className="rounded-[40%] border border-white/10 bg-stone-300/20 p-5 text-center text-white/80 shadow-xl backdrop-blur"
                  >
                    {prompt}
                  </div>
                ))}
              </div>
            </div>
          </scene>

          {/* MUSHROOM HOLLOW */}
          <scene className="block min-h-[70vh]">
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-x-0 top-24 h-64 rounded-[50%] bg-purple-400/10 blur-3xl" />

              <div className="grid grid-cols-3 gap-6 pt-24 text-center text-6xl sm:text-7xl">
                {[...Array(12)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setActiveMessage(hopeMessages[i % hopeMessages.length])
                    }
                    className={`mushroom transition hover:scale-125 ${
                      i % 2 ? "translate-y-10" : ""
                    }`}
                  >
                    🍄
                  </button>
                ))}
              </div>

              <div className="mx-auto mt-12 max-w-md rounded-2xl border border-purple-100/20 bg-purple-950/50 p-6 text-center shadow-[0_0_60px_rgba(180,120,255,.22)] backdrop-blur">
                <p className="text-sm tracking-[0.35em] text-purple-100/80">
                  MUSHROOM HOLLOW
                </p>
                <h2 className="mt-3 text-3xl font-black">
                  Small lights in dark places.
                </h2>
                <p className="mt-5 text-xl text-yellow-100">
                  “{activeMessage}”
                </p>
              </div>
            </div>
          </scene>

          {/* LANTERN GROVE */}
          <scene className="block min-h-[75vh]">
            <div className="relative mx-auto max-w-5xl text-center">
              <div className="absolute inset-x-0 top-0 h-96 bg-yellow-200/10 blur-3xl" />

              <div className="grid grid-cols-2 gap-8 pt-16 sm:grid-cols-4">
                {[
                  { label: "Call 988", href: "tel:988" },
                  { label: "Text 988", href: "sms:988" },
                  { label: "Crisis Text Line", href: "https://www.crisistextline.org/" },
                  { label: "Find Treatment", href: "https://findtreatment.gov/" },
                ].map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`block rounded-full border border-yellow-100/20 bg-yellow-200/15 p-8 shadow-[0_0_60px_rgba(255,220,100,.28)] backdrop-blur transition hover:scale-105 ${
                      i % 2 ? "translate-y-12" : ""
                    }`}
                  >
                    <div className="text-6xl">🏮</div>
                    <p className="mt-4 font-black text-yellow-100">
                      {item.label}
                    </p>
                  </a>
                ))}
              </div>

              <div className="mx-auto mt-28 max-w-md rounded-2xl border border-yellow-100/20 bg-[#5b3b20]/75 p-6 shadow-2xl">
                <p className="text-sm tracking-[0.35em] text-yellow-100/80">
                  LANTERN GROVE
                </p>
                <h2 className="mt-3 text-3xl font-black">
                  For those who need immediate light.
                </h2>
              </div>
            </div>
          </scene>

          {/* FIREFLY FIELD */}
          <scene className="block min-h-[75vh]">
            <div className="relative mx-auto max-w-5xl text-center">
              <div className="absolute inset-0 rounded-[50%] bg-cyan-300/10 blur-3xl" />

              <div className="relative mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-3">
                {hopeMessages.map((message, i) => (
                  <div
                    key={message}
                    className={`rounded-full border border-yellow-100/10 bg-black/25 p-6 shadow-[0_0_35px_rgba(255,230,120,.16)] backdrop-blur ${
                      i % 2 ? "translate-y-8" : ""
                    }`}
                  >
                    <div className="text-3xl">✨</div>
                    <p className="mt-3 text-yellow-100/90">“{message}”</p>
                  </div>
                ))}
              </div>

              <div className="mx-auto mt-24 max-w-md rotate-[-1deg] rounded-2xl border border-cyan-100/20 bg-slate-900/70 p-6 shadow-2xl">
                <p className="text-sm tracking-[0.35em] text-cyan-100/80">
                  FIREFLY FIELD
                </p>
                <h2 className="mt-3 text-3xl font-black">
                  You are not walking alone.
                </h2>
              </div>
            </div>
          </scene>

          {/* NOELLE'S LANTERN */}
          <scene className="block min-h-screen pb-20 pt-16">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <div className="absolute top-20 h-96 w-96 rounded-full bg-yellow-200/20 blur-3xl" />

              <div className="relative text-[9rem] drop-shadow-[0_0_70px_rgba(255,230,120,.85)]">
                🏮
              </div>

              <div className="relative mt-6 max-w-xl rounded-3xl border border-yellow-100/25 bg-black/35 p-8 shadow-[0_0_80px_rgba(255,230,120,.18)] backdrop-blur">
                <p className="text-sm tracking-[0.35em] text-yellow-100/80">
                  NOËLLE&apos;S LANTERN
                </p>
                <h2 className="mt-4 text-4xl font-black">
                  May the love that remains help guide someone else home.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/75">
                  This garden was made for memory, for grief, for hope, and for
                  anyone who needs a quiet place to keep walking.
                </p>
              </div>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="relative mt-10 rounded-full bg-white px-8 py-4 font-black text-slate-950 shadow-xl"
              >
                Return to the Garden Gate
              </button>
            </div>
          </scene>
        </div>
      </section>

      <style jsx>{`
        .firefly {
          animation: floatFirefly 8s ease-in-out infinite;
        }

        .mushroom {
          filter: drop-shadow(0 0 18px rgba(255, 220, 120, 0.35));
        }

        @keyframes floatFirefly {
          0% {
            transform: translate(0, 0);
            opacity: 0.25;
          }
          50% {
            transform: translate(20px, -34px);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0);
            opacity: 0.25;
          }
        }
      `}</style>
    </main>
  );
}
