"use client";

import { useState } from "react";

const scenes = [
  {
    id: "gate",
    title: "Noëlle's Garden",
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
    title: "Noëlle's Lantern",
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

      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />

      <a
        href="/"
        className="absolute left-4 top-4 z-20 rounded-full bg-black/35 px-5 py-3 text-sm font-bold text-white backdrop-blur-md"
      >
        ← Home
      </a>

      <div className="absolute bottom-10 left-1/2 z-20 w-[90%] max-w-xl -translate-x-1/2 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-100/80">
          {scene.id === "gate" ? "Enter the memorial garden" : "Noëlle's Garden"}
        </p>

        <h1 className="mt-3 text-4xl font-black md:text-6xl">{scene.title}</h1>

        <p className="mx-auto mt-4 max-w-lg text-lg leading-8 text-white/85">
          {scene.text}
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          {index > 0 && (
            <button
              onClick={previousScene}
              className="rounded-full bg-white/15 px-6 py-3 font-bold backdrop-blur-md"
            >
              Back
            </button>
          )}

          {index < scenes.length - 1 ? (
            <button
              onClick={nextScene}
              className="rounded-full bg-yellow-200 px-8 py-4 font-black text-slate-950 shadow-[0_0_45px_rgba(253,224,71,.65)]"
            >
              {index === 0 ? "Open the Gate" : "Continue the Walk"}
            </button>
          ) : (
            <button
              onClick={() => setIndex(0)}
              className="rounded-full bg-yellow-200 px-8 py-4 font-black text-slate-950 shadow-[0_0_45px_rgba(253,224,71,.65)]"
            >
              Return to the Gate
            </button>
          )}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {scenes.map((item, sceneIndex) => (
          <button
            key={item.id}
            onClick={() => setIndex(sceneIndex)}
            aria-label={item.title}
            className={`h-2 rounded-full transition-all ${
              sceneIndex === index
                ? "w-8 bg-yellow-200"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
