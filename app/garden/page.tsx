"use client";

import { useState } from "react";
import Link from "next/link";

export default function GardenPage() {
  const [gateOpen, setGateOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#07120d] text-white">
      <section className="relative min-h-screen bg-gradient-to-b from-[#07111f] via-[#12301f] to-[#08130d]">

        {/* stars */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_2px),radial-gradient(circle_at_80%_30%,white_1px,transparent_2px),radial-gradient(circle_at_50%_70%,white_1px,transparent_2px)] bg-[length:140px_140px]" />

        {/* fireflies */}
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-2 w-2 rounded-full bg-yellow-200 shadow-[0_0_18px_6px_rgba(255,240,150,0.7)] animate-pulse"
              style={{
                left: `${8 + ((i * 17) % 84)}%`,
                top: `${18 + ((i * 23) % 70)}%`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>

        {/* entrance */}
        {!gateOpen && (
          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <Link href="/" className="absolute left-6 top-6 text-sm text-white/70">
              ← Home
            </Link>

            <div className="mb-8 rounded-3xl border border-amber-700/60 bg-amber-950/40 px-8 py-6 shadow-2xl">
              <p className="mb-2 text-sm tracking-[0.3em] text-amber-200">
                ENTER THE MEMORIAL GARDEN
              </p>
              <h1 className="text-5xl font-bold text-amber-100">
                Noelle&apos;s Garden
              </h1>
              <p className="mt-4 max-w-xl text-white/80">
                Walk gently. Take what you need. Leave what light you can.
              </p>
            </div>

            <button
              onClick={() => setGateOpen(true)}
              className="rounded-full bg-amber-300 px-8 py-4 text-lg font-bold text-amber-950 shadow-[0_0_35px_rgba(252,211,77,0.8)] transition hover:scale-105 hover:bg-amber-200"
            >
              Open the Gate
            </button>
          </div>
        )}

        {/* garden */}
        {gateOpen && (
          <div className="relative z-10 px-5 pb-24 pt-8">
            <Link href="/" className="text-sm text-white/70">
              ← Home
            </Link>

            <section className="mx-auto mt-8 max-w-6xl">
              <div className="rounded-[2rem] border border-amber-700/40 bg-black/25 p-6 shadow-2xl backdrop-blur">
                <h1 className="text-center text-4xl font-bold text-amber-100 md:text-6xl">
                  Noelle&apos;s Garden
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-center text-white/75">
                  A storybook memorial garden where each path leads to light,
                  memory, reflection, and help.
                </p>
              </div>

              {/* winding path */}
              <div className="relative mx-auto mt-12 max-w-4xl">
                <div className="absolute left-1/2 top-0 h-full w-24 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-200/50 via-stone-300/30 to-amber-100/40 blur-sm" />

                <GardenStop
                  side="left"
                  title="Lantern Path"
                  text="Follow the warm lights. Each lantern is a reminder that someone is still here, still trying, still worth finding."
                />

                <MushroomPatch />

                <GardenStop
                  side="right"
                  title="Memory Mushrooms"
                  text="Small glowing places for names, notes, memories, and moments that deserve to be kept alive."
                />

                <TreeSection />

                <GardenStop
                  side="left"
                  title="Noelle’s Tree"
                  text="The heart of the garden. A place to pause, breathe, remember, and feel close."
                />

                <PondSection />

                <GardenStop
                  side="right"
                  title="Reflection Pond"
                  text="A quiet place for grief, hope, and the thoughts that are too heavy to carry alone."
                />

                <ResourceSigns />
              </div>
            </section>
          </div>
        )}
      </section>
    </main>
  );
}

function GardenStop({
  side,
  title,
  text,
}: {
  side: "left" | "right";
  title: string;
  text: string;
}) {
  return (
    <div
      className={`relative my-20 flex ${
        side === "left" ? "justify-start" : "justify-end"
      }`}
    >
      <div className="w-full max-w-sm rounded-xl border-4 border-amber-900 bg-[#6b3f1d] p-5 text-amber-50 shadow-xl transition hover:scale-105">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-amber-100/90">{text}</p>
      </div>
    </div>
  );
}

function MushroomPatch() {
  return (
    <div className="relative my-16 flex justify-center gap-5">
      {["🍄", "🍄", "🍄", "🍄", "🍄"].map((m, i) => (
        <button
          key={i}
          className="text-4xl transition hover:-translate-y-2 hover:scale-125"
          title="Memory mushroom"
        >
          {m}
        </button>
      ))}
    </div>
  );
}

function TreeSection() {
  return (
    <section className="relative my-28 flex flex-col items-center text-center">
      <div className="absolute h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="relative text-[12rem] leading-none drop-shadow-2xl">
        🌳
      </div>

      <div className="relative -mt-6 max-w-xl rounded-3xl border border-emerald-200/30 bg-black/35 p-6 backdrop-blur">
        <h2 className="text-3xl font-bold text-emerald-100">
          Noelle&apos;s Tree
        </h2>
        <p className="mt-3 text-white/80">
          A protected clearing in the center of the garden. This is where the
          page should feel still, sacred, and full of love.
        </p>
      </div>
    </section>
  );
}

function PondSection() {
  return (
    <section className="relative my-28 flex flex-col items-center text-center">
      <div className="h-48 w-full max-w-xl rounded-[50%] border border-sky-200/50 bg-gradient-to-br from-sky-300/40 via-blue-600/30 to-indigo-900/60 shadow-[0_0_60px_rgba(125,211,252,0.45)]" />

      <div className="-mt-10 max-w-md rounded-2xl border border-sky-100/30 bg-black/35 p-5 backdrop-blur">
        <h2 className="text-2xl font-bold text-sky-100">Reflection Pond</h2>
        <p className="mt-2 text-sm text-white/75">
          Sit here for a moment. Let the water hold what feels too heavy.
        </p>
      </div>
    </section>
  );
}

function ResourceSigns() {
  return (
    <section className="my-24 grid gap-5 md:grid-cols-3">
      <a
        href="tel:988"
        className="rounded-xl border-4 border-amber-900 bg-[#75451f] p-5 text-center font-bold text-amber-50 shadow-xl transition hover:scale-105"
      >
        Call 988
      </a>

      <a
        href="sms:988"
        className="rounded-xl border-4 border-amber-900 bg-[#75451f] p-5 text-center font-bold text-amber-50 shadow-xl transition hover:scale-105"
      >
        Text 988
      </a>

      <a
        href="/resources"
        className="rounded-xl border-4 border-amber-900 bg-[#75451f] p-5 text-center font-bold text-amber-50 shadow-xl transition hover:scale-105"
      >
        Find Resources
      </a>
    </section>
  );
}
