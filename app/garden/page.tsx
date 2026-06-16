"use client";

import { useState } from "react";

const memoryMessages = [
  "Your memory is safe here.",
  "Love does not end.",
  "We carry your light forward.",
  "A quiet place to remember.",
  "You are missed. You are loved.",
];

export default function GardenPage() {
  const [scene, setScene] = useState<"gate" | "tree" | "growing">("gate");
  const [activeMemory, setActiveMemory] = useState(memoryMessages[0]);
  const [showMemory, setShowMemory] = useState(false);

  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">
      <div
        className={`absolute inset-0 bg-center bg-no-repeat transition-all duration-700 ${
          scene === "gate" ? "bg-contain" : "bg-cover"
        }`}
        style={{
          backgroundImage:
            scene === "tree"
              ? "url('/garden-art/memory-tree.png')"
              : "url('/garden-art/garden-gate.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />

      <a
        href="/"
        className="absolute left-4 top-4 z-40 rounded-full bg-black/35 px-5 py-3 text-sm font-bold text-white backdrop-blur-md"
      >
        ← Home
      </a>

      <Fireflies />

      {scene === "gate" && (
        <>
          <button
            onClick={() => setScene("tree")}
            className="absolute inset-0 z-20 cursor-pointer"
            aria-label="Enter Noelle's Garden"
          />

          <div className="absolute left-1/2 top-1/2 z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/10 blur-3xl animate-pulse" />

          <WoodSign className="absolute bottom-24 left-5 z-30 max-w-[270px] rotate-[-3deg]">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-yellow-100">
              Garden Under Construction
            </p>
            <p className="mt-2 text-xs leading-5 text-white/80">
              This memorial garden is still being planted. Some paths, memories,
              and lights are still growing.
            </p>
          </WoodSign>

          <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 rounded-full bg-black/35 px-6 py-3 text-sm font-bold text-yellow-100 backdrop-blur-md">
            Tap the gate to enter
          </div>
        </>
      )}

      {scene === "tree" && (
        <>
          <WoodSign className="absolute bottom-28 left-1/2 z-30 w-[88%] max-w-md -translate-x-1/2 rotate-[-1deg]">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-100/85">
              Noelle&apos;s Garden
            </p>
            <h1 className="mt-3 text-3xl font-black md:text-5xl">
              Memory Tree
            </h1>
            <p className="mt-4 text-base leading-7 text-white/85">
              Tap a lantern beneath the branches to reveal a small memory.
            </p>
          </WoodSign>

          {memoryMessages.map((message, i) => (
            <button
              key={message}
              onClick={() => {
                setActiveMemory(message);
                setShowMemory(true);
              }}
              className="absolute z-30 h-8 w-8 rounded-full bg-yellow-200/80 shadow-[0_0_35px_16px_rgba(253,224,71,.45)] transition hover:scale-125"
              style={{
                left: `${22 + i * 14}%`,
                top: `${30 + (i % 2) * 11}%`,
              }}
              aria-label={`Reveal memory ${i + 1}`}
            />
          ))}

          {showMemory && (
            <WoodSign className="absolute left-1/2 top-24 z-40 w-[86%] max-w-sm -translate-x-1/2 rotate-[1deg]">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-100">
                Memory Lantern
              </p>
              <p className="mt-3 text-lg leading-7 text-white/90">
                “{activeMemory}”
              </p>
              <button
                onClick={() => setShowMemory(false)}
                className="mt-4 rounded-full bg-yellow-200 px-5 py-2 text-sm font-black text-slate-950"
              >
                Close
              </button>
            </WoodSign>
          )}

          <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
            <button
              onClick={() => setScene("gate")}
              className="rounded-full bg-black/35 px-6 py-3 font-bold backdrop-blur-md"
            >
              Back
            </button>
            <button
              onClick={() => setScene("growing")}
              className="rounded-full bg-yellow-200 px-7 py-3 font-black text-slate-950 shadow-[0_0_35px_rgba(253,224,71,.55)]"
            >
              Continue
            </button>
          </div>
        </>
      )}

      {scene === "growing" && (
        <>
          <WoodSign className="absolute left-1/2 top-1/2 z-30 w-[88%] max-w-md -translate-x-1/2 -translate-y-1/2 rotate-[-1deg]">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-100/85">
              This Garden Is Still Growing
            </p>
            <h1 className="mt-3 text-3xl font-black">
              More paths are being planted.
            </h1>
            <p className="mt-4 text-base leading-7 text-white/85">
              Reflection Pond, Mushroom Hollow, Firefly Field, and Noelle&apos;s
              Lantern are coming soon.
            </p>
          </WoodSign>

          <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
            <button
              onClick={() => setScene("tree")}
              className="rounded-full bg-black/35 px-6 py-3 font-bold backdrop-blur-md"
            >
              Back
            </button>
            <button
              onClick={() => setScene("gate")}
              className="rounded-full bg-yellow-200 px-7 py-3 font-black text-slate-950"
            >
              Return to Gate
            </button>
          </div>
        </>
      )}

      <div className="absolute right-4 top-4 z-40 rounded-full bg-black/35 px-4 py-2 text-xs font-bold text-yellow-100 backdrop-blur-md">
        {scene === "gate" ? "1" : scene === "tree" ? "2" : "3"} / 3
      </div>

      <style jsx>{`
        .firefly {
          animation: floatFirefly 7s ease-in-out infinite alternate;
        }

        @keyframes floatFirefly {
          0% {
            transform: translate(0, 0);
            opacity: 0.25;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(22px, -32px);
            opacity: 0.65;
          }
        }
      `}</style>
    </main>
  );
}

function Fireflies() {
  return (
    <>
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="firefly pointer-events-none absolute z-30 h-1.5 w-1.5 rounded-full bg-yellow-200 shadow-[0_0_18px_7px_rgba(253,224,71,.35)]"
          style={{
            left: `${8 + ((i * 19) % 84)}%`,
            top: `${10 + ((i * 31) % 76)}%`,
            animationDelay: `${i * 0.35}s`,
          }}
        />
      ))}
    </>
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
      className={`relative rounded-2xl border-2 border-yellow-100/25 bg-[#5a351c]/90 p-5 text-center shadow-[0_12px_35px_rgba(0,0,0,.45)] backdrop-blur-sm ${className}`}
    >
      <div className="absolute -left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-yellow-100/50" />
      <div className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-yellow-100/50" />
      {children}
    </div>
  );
}
