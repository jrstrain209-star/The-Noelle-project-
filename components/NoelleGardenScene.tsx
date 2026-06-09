import LanternTree from "./LanternTree";
import MemoryMushroom from "./MemoryMushroom";
import Firefly from "./Firefly";
import ReflectionPond from "./ReflectionPond";
import GardenPath from "./GardenPath";

export default function NoelleGardenScene() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#070820] via-[#11183d] to-[#07160f]">
        <div className="absolute right-10 top-10 h-28 w-28 rounded-full bg-yellow-100 shadow-[0_0_90px_35px_rgba(254,240,138,0.35)]" />

        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_2px),radial-gradient(circle_at_70%_25%,white_1px,transparent_2px),radial-gradient(circle_at_45%_10%,white_1px,transparent_2px),radial-gradient(circle_at_85%_35%,white_1px,transparent_2px)]" />

        <div className="absolute bottom-0 left-[-10%] h-72 w-[120%] rounded-t-[50%] bg-[#052e1b]" />
        <div className="absolute bottom-0 left-[-15%] h-52 w-[130%] rounded-t-[50%] bg-[#064326]" />
        <div className="absolute bottom-0 left-[-20%] h-32 w-[140%] rounded-t-[50%] bg-[#086337]" />

        <GardenPath />

        <LanternTree />

        <ReflectionPond />

        <MemoryMushroom left="18%" bottom="140px" size="large" />
        <MemoryMushroom left="72%" bottom="150px" size="medium" />
        <MemoryMushroom left="44%" bottom="95px" size="small" />
        <MemoryMushroom left="58%" bottom="110px" size="small" />

        <Firefly left="14%" top="34%" />
        <Firefly left="31%" top="49%" />
        <Firefly left="63%" top="37%" />
        <Firefly left="80%" top="53%" />

        <div className="absolute left-1/2 top-20 w-[90%] max-w-2xl -translate-x-1/2 rounded-3xl border border-white/10 bg-black/45 p-6 text-center shadow-2xl backdrop-blur">
          <p className="mb-3 text-sm uppercase tracking-widest text-yellow-200">
            Noelle’s Memorial Garden
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">Noelle’s Garden</h1>
          <p className="mt-4 text-slate-200">
            A peaceful night garden of lanterns, memory mushrooms, flowers, and
            fireflies of hope.
          </p>
        </div>
      </section>
    </main>
  );
}
