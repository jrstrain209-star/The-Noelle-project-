"use client";

import { useState, type ReactNode } from "react";

const memoryMessages = [
  "Your memory is safe here.",
  "Love does not end.",
  "We carry your light forward.",
  "You are missed. You are loved.",
];

export default function GardenPage() {
  const [scene, setScene] = useState<"gate" | "tree" | "growing">("gate");
  const [isOpening, setIsOpening] = useState(false);
  const [activeMemory, setActiveMemory] = useState("");
  const [showMemory, setShowMemory] = useState(false);

  const enterGarden = () => {
    setIsOpening(true);
    setTimeout(() => {
      setScene("tree");
      setIsOpening(false);
    }, 900);
  };

  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">
      <div
        className={`absolute inset-0 bg-center bg-no-repeat transition-all duration-1000 ${
          scene === "gate" ? "bg-contain scale-100" : "bg-cover scale-105"
        }`}
        style={{
          backgroundImage:
            scene === "tree"
              ? "url('/garden-art/memory-tree.png')"
              : "url('/garden-art/garden-gate.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 to-transparent" />

      {isOpening && (
        <div className="absolute inset-0 z-50 animate-gardenFade bg-yellow-100/20 backdrop-blur-sm" />
      )}

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
            onClick={enterGarden}
            className="absolute inset-0 z-20 cursor-pointer"
            aria-label="Enter Noelle's Garden"
          />

          <div className="absolute left-1/2 top-[54%] z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/10 blur-3xl animate-pulse" />

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
          {/* Invisible tap zones over the tree lanterns */}
          {[
            { left: "25%", top: "31%" },
            { left: "42%", top: "26%" },
            { left: "57%", top: "30%" },
            { left: "72%", top: "35%" },
          ].map((spot, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveMemory(memoryMessages[i]);
                setShowMemory(true);
              }}
              className="absolute z-30 h-16 w-16 rounded-full"
              style={spot}
              aria-label={`Read memory lantern ${i + 1}`}
            >
              <span className="absolute inset-3 rounded-full bg-yellow-200/20 shadow-[0_0_35px_18px_rgba(253,224,71,.25)] animate-lanternGlow" />
            </button>
          ))}

          <WoodSign className="absolute bottom-28 left-1/2 z-30 w-[86%] max-w-md -translate-x-1/2 rotate-[-1deg]">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-100/85">
              Memory Tree
            </p>
            <h1 className="mt-3 text-3xl font-black md:text-5xl">
              A quiet place to remember.
            </h1>
            <p className="mt-4 text-base leading-7 text-white/85">
              Tap the lanterns beneath the branches.
            </p>
          </WoodSign>

          {showMemory && (
            <WoodSign className="absolute left-1/2 top-24 z-40 w-[84%] max-w-sm -translate-x-1/2 rotate-[1deg] animate-dropSign">
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
              Return
            </button>
          </div>
        </>
      )}

      <style jsx>{`
        .firefly {
          animation: fireflyDrift 8s ease-in-out infinite alternate,
            fireflyBlink 2.7s ease-in-out infinite;
        }

        @keyframes fireflyDrift {
          0% {
            transform: translate(0, 0) scale(0.8);
          }
          100% {
            transform: translate(22px, -34px) scale(1.15);
          }
        }

        @keyframes fireflyBlink {
          0%,
          100% {
            opacity: 0.15;
          }
          45% {
            opacity: 0.95;
          }
          65% {
            opacity: 0.25;
          }
          80% {
            opacity: 0.75;
          }
        }

        .animate-lanternGlow {
          animation: lanternGlow 2.6s ease-in-out infinite;
        }

        @keyframes lanternGlow {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.75;
            transform: scale(1.12);
          }
        }

        .animate-dropSign {
          animation: dropSign 350ms ease-out;
        }

        @keyframes dropSign {
          from {
            transform: translate(-50%, -18px) rotate(1deg);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0) rotate(1deg);
            opacity: 1;
          }
        }

        .animate-gardenFade {
          animation: gardenFade 900ms ease-in-out forwards;
        }

        @keyframes gardenFade {
          0% {
            opacity: 0;
          }
          45% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}

function Fireflies() {
  return (
    <>
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="firefly pointer-events-none absolute z-30"
          style={{
            left: `${10 + ((i * 23) % 78)}%`,
            top: `${12 + ((i * 37) % 72)}%`,
            animationDelay: `${i * 0.43}s`,
          }}
        >
          <span className="block h-1 w-2 rounded-full bg-yellow-100 shadow-[0_0_12px_5px_rgba(253,224,71,.28)]" />
          <span className="absolute left-1 top-[-2px] h-1 w-1 rounded-full bg-white/40" />
        </span>
      ))}
    </>
  );
}

function WoodSign({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border-2 border-yellow-100/25 bg-[#5a351c]/90 p-5 text-center shadow-[0_12px_35px_rgba(0,0,0,.45)] backdrop-blur-sm ${className}`}
    >
      <div className="absolute left-1/2 top-[-18px] h-5 w-1 -translate-x-1/2 bg-yellow-100/30" />
      <div className="absolute -left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-yellow-100/50" />
      <div className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-yellow-100/50" />
      {children}
    </div>
  );
}
