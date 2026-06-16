"use client";

import { useState } from "react";
import Link from "next/link";

const gateImage = "public/garden-art/garden-gate.png";
const treeImage = "public/garden-art/noelles-tree.png";
const pondImage = "/reflection-pond.png";

export default function GardenPage() {
  const [entered, setEntered] = useState(false);
  const [message, setMessage] = useState("Follow the lantern path.");

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {!entered ? (
        <section
          className="relative min-h-screen bg-cover bg-center flex items-end justify-center"
          style={{ backgroundImage: `url(${gateImage})` }}
        >
          <div className="absolute inset-0 bg-black/25" />

          <Link href="/" className="absolute left-5 top-5 z-20 text-white/80">
            ← Home
          </Link>

          <div className="relative z-10 mb-12 text-center">
            <h1 className="text-5xl font-bold drop-shadow-lg">
              Noelle&apos;s Garden
            </h1>

            <p className="mt-3 text-white/85">
              A quiet place of memory, light, and reflection.
            </p>

            <button
              onClick={() => setEntered(true)}
              className="mt-6 rounded-full bg-amber-300 px-8 py-4 font-bold text-amber-950 shadow-[0_0_35px_rgba(252,211,77,.85)] hover:scale-105 transition"
            >
              Enter the Garden
            </button>
          </div>
        </section>
      ) : (
        <>
          <GardenScene
            image={treeImage}
            title="Noelle&apos;s Tree"
            subtitle="The heart of the garden."
            message={message}
          >
            <Hotspot
              top="30%"
              left="22%"
              label="Memory Lantern"
              onClick={() =>
                setMessage("This lantern is for someone who still needs light.")
              }
            />

            <Hotspot
              top="62%"
              left="50%"
              label="Noelle’s Tree"
              onClick={() =>
                setMessage("This is the center of the garden. A place to pause and remember.")
              }
            />

            <Hotspot
              top="72%"
              left="75%"
              label="Memory Mushrooms"
              onClick={() =>
                setMessage("These can become little memory spots for names, notes, or photos.")
              }
            />
          </GardenScene>

          <GardenScene
            image={pondImage}
            title="Reflection Pond"
            subtitle="A quiet place to breathe."
            message="Let the water hold what feels too heavy."
          >
            <Hotspot
              top="58%"
              left="50%"
              label="Sit by the pond"
              onClick={() =>
                setMessage("Take one slow breath. You are still here.")
              }
            />
          </GardenScene>

          <section className="relative bg-[#07120d] px-5 py-20 text-center">
            <h2 className="text-4xl font-bold text-amber-100">
              Need help now?
            </h2>

            <div className="mx-auto mt-8 grid max-w-3xl gap-4 md:grid-cols-3">
              <a className="wood-sign" href="tel:988">Call 988</a>
              <a className="wood-sign" href="sms:988">Text 988</a>
              <Link className="wood-sign" href="/resources">Resources</Link>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

function GardenScene({
  image,
  title,
  subtitle,
  message,
  children,
}: {
  image: string;
  title: string;
  subtitle: string;
  message: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <Fireflies />

      <div className="relative z-10 flex min-h-screen flex-col justify-between p-5">
        <Link href="/" className="w-fit text-white/80">
          ← Home
        </Link>

        {children}

        <div className="mx-auto mb-8 max-w-xl rounded-2xl border-4 border-[#3a2111] bg-[#70421f]/95 p-5 text-center shadow-2xl">
          <h1 className="text-3xl font-bold text-amber-100">{title}</h1>
          <p className="mt-1 text-amber-100/80">{subtitle}</p>
          <p className="mt-4 text-white/90">{message}</p>
        </div>
      </div>
    </section>
  );
}

function Hotspot({
  top,
  left,
  label,
  onClick,
}: {
  top: string;
  left: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/90 px-4 py-2 text-sm font-bold text-amber-950 shadow-[0_0_30px_rgba(252,211,77,.9)] hover:scale-110 transition"
      style={{ top, left }}
    >
      {label}
    </button>
  );
}

function Fireflies() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {Array.from({ length: 34 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-yellow-200 shadow-[0_0_18px_7px_rgba(255,235,130,.65)] animate-pulse"
          style={{
            left: `${6 + ((i * 19) % 88)}%`,
            top: `${10 + ((i * 23) % 78)}%`,
            animationDelay: `${i * 0.25}s`,
          }}
        />
      ))}
    </div>
  );
}
