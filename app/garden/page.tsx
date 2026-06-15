"use client";

import { useState } from "react";

const scenes = [
  {
    id: "gate",
    title: "Noelle's Garden",
    text: "Walk gently. Take what you need. Leave what you can.",
    image: "/garden-art/garden-gate.png",
  },
  {
    id: "tree",
    title: "Memory Tree",
    text: "A quiet place to remember. Lanterns hang like memories held gently in the night.",
    image: "/garden-art/memory-tree.png",
  },
  {
    id: "pond",
    title: "Reflection Pond",
    text: "It is okay to sit here awhile. Let the water hold what feels too heavy.",
    image: "/garden-art/reflection-pond.png",
  },
  {
    id: "mushrooms",
    title: "Mushroom Hollow",
    text: "Small lights in dark places. Even here, something gentle can grow.",
    image: "/garden-art/mushroom-hollow.png",
  },
  {
    id: "field",
    title: "Firefly Field",
    text: "You are not walking alone. Every light is someone who kept going.",
    image: "/garden-art/firefly-field.png",
  },
  {
    id: "lantern",
    title: "Noelle's Lantern",
    text: "May the love that remains help guide someone else home.",
    image: "/garden-art/noelles-lantern.png",
  },
];

export default function GardenPage() {
  const [index, setIndex] = useState(0);
  const scene = scenes[index];

  const nextScene = () => {
    setIndex((current) => Math.min(current + 1, scenes.length - 1));
  };

  const previousScene = () => {
    setIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url('${scene.image}')` }}
      />

      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

      <a
        href="/"
        className="absolute left-4 top-4 z-30 rounded-full bg-black/35 px-5 py-3 text-sm font-bold text-white backdrop-blur-md"
      >
        ← Home
      </a>

      {scene.id === "gate" ? (
        <>
          <button
            onClick={nextScene}
            className="absolute inset-0 z-10 cursor-pointer"
            aria-label="Open the gate"
          />

          <WoodSign className="absolute bottom-24 left-5 z-20 max-w-[260px] rotate-[-3deg]">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-yellow-100">
              Garden Under Construction
            </p>
            <p className="mt-2 text-xs leading-5 text-white/80">
              This memorial garden is still being planted. Some paths, memories,
              and lights are still growing.
            </p>
          </WoodSign>

          <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/35 px-6 py-3 text-sm font-bold text-yellow-100 backdrop-blur-md">
            Tap the gate to enter
          </div>
        </>
      ) : (
        <>
          <WoodSign className="absolute bottom-28 left-1/2 z-20 w-[88%] max-w-md -translate-x-1/2 rotate-[-1deg]">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-100/85">
              Noelle&apos;s Garden
            </p>

            <h1 className="mt-3 text-3xl font-black md:text-5xl">
              {scene.title}
            </h1>

            <p className="mt-4 text-base leading-7 text-white/85">
              {scene.text}
            </p>
          </WoodSign>

          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-3">
            <button
              onClick={previousScene}
              className="rounded-full bg-black/35 px-6 py-3 font-bold text-white backdrop-blur-md"
            >
              Back
            </button>

            {index < scenes.length - 1 ? (
              <button
                onClick={nextScene}
                className="rounded-full bg-yellow-200 px-7 py-3 font-black text-slate-950 shadow-[0_0_35px_rgba(253,224,71,.55)]"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={() => setIndex(0)}
                className="rounded-full bg-yellow-200 px-7 py-3 font-black text-slate-950 shadow-[0_0_35px_rgba(253,224,71,.55)]"
              >
                Return
              </button>
            )}
          </div>
        </>
      )}

      <div className="absolute right-4 top-4 z-30 rounded-full bg-black/35 px-4 py-2 text-xs font-bold text-yellow-100 backdrop-blur-md">
        {index + 1} / {scenes.length}
      </div>

      <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {scenes.map((item, sceneIndex) => (
          <button
            key={item.id}
            onClick={() => setIndex(sceneIndex)}
            aria-label={item.title}
            className={`h-2 rounded-full transition-all ${
              sceneIndex === index ? "w-8 bg-yellow-200" : "w-2 bg-white/45"
            }`}
          />
        ))}
      </div>
    </main>
  );
}

function WoodSign({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border-2 border-yellow-100/25 bg-[#5a351c]/90 p-5 text-center shadow-[0_12px_35px_rgba(0,0,0,.45)] backdrop-blur-sm ${className}`}
    >
      <div className="absolute -left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-yellow-100/50" />
      <div className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-yellow-100/50" />
      {children}
    </div>
  );
}
