"use client";

import Link from "next/link";
import { useState } from "react";

export default function GardenPage() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07130f] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#243b55_0%,#102316_45%,#050806_100%)]" />

      <Fireflies />

      {!entered ? (
        <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 text-center">
          <Link href="/" className="absolute left-5 top-5 text-sm text-white/70">
            ← Home
          </Link>

          <div className="relative w-full max-w-4xl rounded-[2rem] border border-amber-200/20 bg-black/30 p-8 shadow-2xl backdrop-blur">
            <div className="mx-auto mb-8 flex h-[420px] max-w-3xl items-end justify-center rounded-t-[18rem] border-[14px] border-[#5a3419] bg-gradient-to-b from-[#07111f] via-[#18351f] to-[#0b160d] shadow-[inset_0_0_80px_rgba(0,0,0,.8)]">
              <div className="mb-10 rounded-xl bg-[#6b3f1d] px-8 py-4 text-amber-100 shadow-xl">
                Noelle&apos;s Garden
              </div>
            </div>

            <h1 className="text-4xl font-bold text-amber-100 md:text-6xl">
              Enter Noelle&apos;s Garden
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-white/75">
              A quiet storybook garden of memory, light, reflection, and help.
            </p>

            <button
              onClick={() => setEntered(true)}
              className="mt-8 rounded-full bg-amber-300 px-8 py-4 font-bold text-amber-950 shadow-[0_0_35px_rgba(252,211,77,.7)] transition hover:scale-105"
            >
              Open the Gate
            </button>
          </div>
        </section>
      ) : (
        <section className="relative z-10">
          <GardenHero />
          <LanternPath />
          <TreeClearing />
          <ReflectionPond />
          <GardenResources />
        </section>
      )}
    </main>
  );
}

function GardenHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-5 py-20">
      <Link href="/" className="absolute left-5 top-5 text-sm text-white/70">
        ← Home
      </Link>

      <div className="max-w-4xl text-center">
        <p className="mb-3 tracking-[0.35em] text-amber-200/80">
          MEMORIAL GARDEN
        </p>

        <h1 className="text-5xl font-bold text-amber-100 md:text-7xl">
          Noelle&apos;s Garden
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Follow the lantern path. Each area has its own purpose — memory,
          reflection, support, and light.
        </p>

        <div className="mx-auto mt-14 h-[520px] max-w-5xl rounded-[3rem] border border-emerald-200/20 bg-[radial-gradient(circle_at_center,#345d35_0%,#19351f_45%,#07110b_100%)] shadow-[inset_0_0_90px_rgba(0,0,0,.75),0_0_80px_rgba(120,255,180,.12)]">
          <div className="relative h-full">
            <Path />
            <Lantern className="left-[18%] top-[22%]" />
            <Lantern className="right-[18%] top-[34%]" />
            <Lantern className="left-[28%] bottom-[20%]" />
            <Lantern className="right-[28%] bottom-[16%]" />

            <WoodSign className="left-[8%] top-[55%]" title="Memory Path" />
            <WoodSign className="right-[8%] top-[18%]" title="Keep Going" />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-amber-100/20 px-6 py-3 text-sm text-amber-100 backdrop-blur">
              Scroll to walk deeper into the garden ↓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LanternPath() {
  return (
    <section className="relative px-5 py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <WoodPanel
          title="Lantern Path"
          text="This should feel like the beginning of a small video-game world. The visitor is guided forward by warm lights, signs, mushrooms, and fireflies."
        />

        <div className="relative min-h-[420px] rounded-[2rem] border border-amber-200/20 bg-black/25 shadow-2xl">
          <Path />
          <Lantern className="left-[20%] top-[20%]" />
          <Lantern className="right-[22%] top-[36%]" />
          <Lantern className="left-[30%] bottom-[20%]" />

          {["left-[12%] bottom-[14%]", "right-[12%] bottom-[22%]", "left-[38%] top-[35%]"].map(
            (pos) => (
              <div
                key={pos}
                className={`absolute ${pos} h-10 w-10 rounded-full bg-red-300 shadow-[0_0_20px_rgba(255,200,120,.45)]`}
              >
                <div className="mx-auto mt-5 h-8 w-4 rounded-b-full bg-amber-100" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function TreeClearing() {
  return (
    <section className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl rounded-[3rem] border border-emerald-200/20 bg-[radial-gradient(circle,#315837_0%,#102414_55%,#050806_100%)] p-8 shadow-[0_0_100px_rgba(90,255,150,.12)]">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative flex min-h-[520px] items-end justify-center">
            <div className="absolute bottom-8 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto h-72 w-20 rounded-t-full bg-[#5a3419]" />
              <div className="-mt-96 h-96 w-96 rounded-full bg-[radial-gradient(circle,#5f8f4e_0%,#2f5f34_55%,#14331d_100%)] shadow-[0_0_80px_rgba(120,255,160,.25)]" />
            </div>
          </div>

          <WoodPanel
            title="Noelle’s Tree"
            text="This is the heart of the page. It should have space around it, like a sacred clearing. Nothing should compete with it."
          />
        </div>
      </div>
    </section>
  );
}

function ReflectionPond() {
  return (
    <section className="relative px-5 py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <WoodPanel
          title="Reflection Pond"
          text="This area should feel separate and quiet — a place to sit with grief, breathe, and find calm before leaving."
        />

        <div className="relative min-h-[420px] rounded-[3rem] border border-sky-200/20 bg-black/25 p-8 shadow-2xl">
          <div className="absolute left-1/2 top-1/2 h-56 w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(circle,#9bdcf5_0%,#2f80a8_45%,#102c4e_100%)] shadow-[0_0_70px_rgba(125,211,252,.45)]" />
          <div className="absolute bottom-14 left-10 h-8 w-32 rounded-full bg-stone-400/50" />
          <div className="absolute bottom-20 right-12 h-7 w-24 rounded-full bg-stone-300/40" />
        </div>
      </div>
    </section>
  );
}

function GardenResources() {
  return (
    <section className="relative px-5 py-28">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold text-amber-100">
          When someone needs help
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          These should feel like wooden signs at the edge of the garden, not
          floating website cards.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <a href="tel:988" className="wood-link">
            Call 988
          </a>
          <a href="sms:988" className="wood-link">
            Text 988
          </a>
          <Link href="/resources" className="wood-link">
            Resources
          </Link>
        </div>
      </div>
    </section>
  );
}

function Fireflies() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[2]">
      {Array.from({ length: 36 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-yellow-200 opacity-80 shadow-[0_0_20px_8px_rgba(255,235,130,.45)]"
          style={{
            width: `${3 + (i % 4)}px`,
            height: `${3 + (i % 4)}px`,
            left: `${5 + ((i * 19) % 90)}%`,
            top: `${8 + ((i * 23) % 84)}%`,
            animation: `float ${5 + (i % 6)}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

function Path() {
  return (
    <div className="absolute left-1/2 top-0 h-full w-28 -translate-x-1/2 bg-gradient-to-b from-amber-200/30 via-stone-200/25 to-amber-100/20 blur-sm" />
  );
}

function Lantern({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="mx-auto h-16 w-1 bg-[#4a2b15]" />
      <div className="h-12 w-9 rounded-b-xl rounded-t-md border border-amber-100/60 bg-amber-300/70 shadow-[0_0_35px_rgba(252,211,77,.8)] transition hover:scale-110" />
    </div>
  );
}

function WoodSign({
  title,
  className,
}: {
  title: string;
  className: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className="rounded-lg border-2 border-amber-950 bg-[#70421f] px-4 py-2 text-sm font-bold text-amber-100 shadow-xl">
        {title}
      </div>
      <div className="mx-auto h-10 w-2 bg-[#4a2b15]" />
    </div>
  );
}

function WoodPanel({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border-4 border-[#3a2111] bg-[#6f431f] p-6 text-amber-50 shadow-2xl">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4 leading-relaxed text-amber-100/90">{text}</p>
    </div>
  );
}
