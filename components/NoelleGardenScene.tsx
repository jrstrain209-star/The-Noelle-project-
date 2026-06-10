"use client";

import { useState } from "react";
import Firefly from "./Firefly";
import FlowerBed from "./FlowerBed";
import GardenPath from "./GardenPath";
import LanternTree from "./LanternTree";
import MemoryMushroom from "./MemoryMushroom";
import ReflectionPond from "./ReflectionPond";

export default function NoelleGardenScene() {
  const [entered, setEntered] = useState(false);

  function beginWalk() {
    setEntered(true);

    setTimeout(() => {
      document
        .getElementById("garden-main")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {!entered && (
        <section className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#050616] via-[#11183d] to-[#07160f] px-6">
          <div className="absolute right-10 top-10 h-28 w-28 rounded-full bg-yellow-100 shadow-[0_0_90px_35px_rgba(254,240,138,0.35)]" />

          <Firefly left="18%" top="30%" color="gold" delay="0s" />
          <Firefly left="72%" top="36%" color="violet" delay="1.5s" />
          <Firefly left="50%" top="20%" color="white" delay="2.5s" />

          <div className="max-w-2xl rounded-3xl border border-yellow-200/20 bg-black/50 p-8 text-center shadow-[0_0_70px_rgba(250,204,21,0.15)] backdrop-blur">
            <p className="mb-3 text-sm uppercase tracking-widest text-yellow-200">
              Welcome to
            </p>

            <h1 className="mb-5 text-4xl font-bold md:text-6xl">
              Noelle’s Garden
            </h1>

            <p className="mx-auto mb-6 max-w-xl text-slate-200">
              This garden is still growing. Please walk gently. Thank you for
              helping it bloom one light, one memory, and one act of hope at a
              time.
            </p>

            <button
              onClick={beginWalk}
              className="rounded-full bg-yellow-300 px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_0_35px_rgba(250,204,21,0.55)] transition hover:scale-105 hover:bg-yellow-200"
            >
              Begin Your Walk
            </button>
          </div>
        </section>
      )}

      <section
        id="garden-main"
        className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#070820] via-[#11183d] to-[#07160f]"
      >
        <div className="absolute right-10 top-10 h-28 w-28 rounded-full bg-yellow-100 shadow-[0_0_90px_35px_rgba(254,240,138,0.35)]" />

        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_2px),radial-gradient(circle_at_70%_25%,white_1px,transparent_2px),radial-gradient(circle_at_45%_10%,white_1px,transparent_2px),radial-gradient(circle_at_85%_35%,white_1px,transparent_2px)]" />

        <div className="absolute bottom-0 left-[-10%] h-72 w-[120%] rounded-t-[50%] bg-[#052e1b]" />
        <div className="absolute bottom-0 left-[-15%] h-52 w-[130%] rounded-t-[50%] bg-[#064326]" />
        <div className="absolute bottom-0 left-[-20%] h-32 w-[140%] rounded-t-[50%] bg-[#086337]" />

        <GardenPath />
        <LanternTree />
        <ReflectionPond />

        <MemoryMushroom left="18%" bottom="140px" size="large" color="purple" />
        <MemoryMushroom left="72%" bottom="150px" size="medium" color="red" />
        <MemoryMushroom left="44%" bottom="95px" size="small" color="gold" />
        <MemoryMushroom left="58%" bottom="110px" size="small" color="blue" />
        <MemoryMushroom left="28%" bottom="90px" size="small" color="pink" />
        <MemoryMushroom left="82%" bottom="95px" size="small" color="white" />

        <FlowerBed left="6%" bottom="55px" size="large" />
        <FlowerBed left="76%" bottom="60px" size="large" />
        <FlowerBed left="12%" bottom="185px" size="small" />
        <FlowerBed left="68%" bottom="200px" size="small" />

        <Firefly left="14%" top="34%" color="gold" delay="0s" />
        <Firefly left="31%" top="49%" color="violet" delay="1.4s" />
        <Firefly left="63%" top="37%" color="blue" delay="2.2s" />
        <Firefly left="80%" top="53%" color="green" delay="3s" />
        <Firefly left="52%" top="28%" color="white" delay="4s" />

        <div className="absolute left-1/2 top-20 w-[90%] max-w-2xl -translate-x-1/2 rounded-3xl border border-white/10 bg-black/45 p-6 text-center shadow-2xl backdrop-blur">
          <p className="mb-3 text-sm uppercase tracking-widest text-yellow-200">
            Noelle’s Memorial Garden
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">Noelle’s Garden</h1>
          <p className="mt-4 text-slate-200">
            A peaceful night garden of lanterns, memory mushrooms, flowers, and
            fireflies of hope. This garden is still growing. Thank you for your
            patience as new paths, memories, and places of reflection continue
            to bloom.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 w-[90%] max-w-xl -translate-x-1/2 rounded-2xl border border-white/10 bg-black/35 p-4 text-center text-sm text-slate-200 backdrop-blur">
          <p className="font-semibold text-yellow-100">
            This garden is still growing.
          </p>
          <p>
            Fireflies, mushrooms, and lanterns carry different colors and
            meanings. Please be patient as new paths continue to bloom.
          </p>
        </div>
      </section>

      <section className="bg-[#050816] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-sm uppercase tracking-widest text-yellow-200">
            Future Features
          </p>

          <h2 className="mb-6 text-center text-3xl font-bold md:text-5xl">
            The Growing Seasons of Noelle’s Garden
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center text-slate-300">
            Noelle’s Garden is still growing. Each season will add new paths,
            memories, lights, and places of reflection. Thank you for your
            patience as this memorial garden continues to bloom one light at a
            time.
          </p>

          <div className="mb-12 grid gap-4 md:grid-cols-3">
            <MeaningCard
              title="✨ Fireflies"
              text="Fireflies represent people — someone remembered, someone needing light, someone healing, hope, or a quiet prayer."
            />
            <MeaningCard
              title="🍄 Mushrooms"
              text="Mushrooms preserve stories — family memories, favorite moments, encouragement, laughter, lessons, and anonymous memories."
            />
            <MeaningCard
              title="🏮 Lanterns"
              text="Lanterns carry intentions — remembrance, mental health awareness, peace, recovery, reflection, gratitude, and celebration of life."
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <SeasonCard
              title="Season One: Planting the Path"
              text="The first version of the garden begins with moonlight, fireflies, lanterns, mushrooms, flowers, and a quiet place to remember."
            />
            <SeasonCard
              title="Season Two: Memory Mushroom Grove"
              text="Visitors will be able to add memories, photos, stories, and messages. Each memory will help the mushroom grove grow."
            />
            <SeasonCard
              title="Season Three: Fireflies of Hope"
              text="Fireflies will carry meaning through color — for someone remembered, someone needing light, someone healing, or someone finding hope."
            />
            <SeasonCard
              title="Season Four: The Lantern Tree"
              text="Visitors will be able to light lanterns for loved ones, mental health awareness, peace, recovery, gratitude, and remembrance."
            />
            <SeasonCard
              title="Season Five: Reflection Pond"
              text="A quiet space for visitors to pause, breathe, reflect, and remember — with lantern light and fireflies reflected on the water."
            />
            <SeasonCard
              title="Season Six: Community Garden"
              text="The garden will grow through visitor suggestions, shared memories, support messages, and ideas from the people who walk through it."
            />
          </div>

          <div className="mt-14 rounded-3xl border border-yellow-200/30 bg-yellow-200/10 p-8 text-center shadow-[0_0_50px_rgba(250,204,21,0.18)]">
            <h3 className="mb-3 text-2xl font-bold text-yellow-100">
              Help the Garden Grow
            </h3>

            <p
