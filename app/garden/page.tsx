export default function GardenPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#090b2f] via-[#101533] to-[#07160f]">

        {/* Moon */}
        <div className="absolute right-10 top-10 h-28 w-28 rounded-full bg-yellow-100 shadow-[0_0_90px_35px_rgba(254,240,138,0.35)]" />

        {/* Stars */}
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_2px),radial-gradient(circle_at_70%_25%,white_1px,transparent_2px),radial-gradient(circle_at_45%_10%,white_1px,transparent_2px),radial-gradient(circle_at_85%_35%,white_1px,transparent_2px)]" />

        {/* Glow */}
        <div className="absolute bottom-44 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-purple-400/20 blur-3xl" />

        {/* Hills */}
        <div className="absolute bottom-0 left-[-10%] h-72 w-[120%] rounded-t-[50%] bg-[#052e1b]" />
        <div className="absolute bottom-0 left-[-15%] h-52 w-[130%] rounded-t-[50%] bg-[#064326]" />
        <div className="absolute bottom-0 left-[-20%] h-32 w-[140%] rounded-t-[50%] bg-[#086337]" />

        {/* Path */}
        <div className="absolute bottom-[-80px] left-1/2 h-[620px] w-[360px] -translate-x-1/2 rounded-t-full bg-gradient-to-b from-stone-500 via-stone-700 to-stone-950 shadow-2xl" />

        {/* Fireflies */}
        <Firefly left="15%" top="32%" />
        <Firefly left="32%" top="48%" />
        <Firefly left="62%" top="38%" />
        <Firefly left="78%" top="52%" />

        {/* Lanterns */}
        <Lantern left="30%" bottom="260px" />
        <Lantern left="64%" bottom="280px" />

        {/* Mushrooms */}
        <Mushroom left="20%" bottom="150px" size="large" />
        <Mushroom left="72%" bottom="160px" size="medium" />
        <Mushroom left="45%" bottom="90px" size="small" />
        <Mushroom left="58%" bottom="120px" size="small" />

        {/* Flowers */}
        <FlowerPatch left="5%" bottom="45px" />
        <FlowerPatch left="76%" bottom="50px" />
        <FlowerPatch left="12%" bottom="170px" small />
        <FlowerPatch left="68%" bottom="190px" small />

        {/* Mist */}
        <div className="absolute bottom-20 left-0 h-24 w-full bg-white/10 blur-3xl" />

        {/* Title card */}
        <div className="absolute left-1/2 top-24 w-[90%] max-w-2xl -translate-x-1/2 rounded-3xl border border-white/10 bg-black/45 p-6 text-center shadow-2xl backdrop-blur">
          <p className="mb-3 text-sm uppercase tracking-widest text-yellow-200">
            Noelle’s Memorial Garden
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">Noelle’s Garden</h1>
          <p className="mt-4 text-slate-200">
            A night garden of lanterns, memory mushrooms, flowers, and fireflies
            of hope.
          </p>
        </div>
      </section>
    </main>
  );
}

function Firefly({ left, top }: { left: string; top: string }) {
  return (
    <div
      className="absolute h-2 w-2 animate-pulse rounded-full bg-yellow-200 shadow-[0_0_20px_8px_rgba(250,204,21,0.9)]"
      style={{ left, top }}
    />
  );
}

function Lantern({ left, bottom }: { left: string; bottom: string }) {
  return (
    <div className="absolute" style={{ left, bottom }}>
      <div className="mx-auto h-10 w-1 bg-stone-700" />
      <div className="relative h-16 w-12 rounded-xl border border-yellow-200/60 bg-yellow-300/20 shadow-[0_0_35px_12px_rgba(250,204,21,0.45)]">
        <div className="absolute inset-3 rounded-full bg-yellow-200 blur-sm" />
      </div>
    </div>
  );
}

function Mushroom({
  left,
  bottom,
  size,
}: {
  left: string;
  bottom: string;
  size: "small" | "medium" | "large";
}) {
  const scale =
    size === "large" ? "scale-125" : size === "medium" ? "scale-100" : "scale-75";

  return (
    <div className={`absolute ${scale}`} style={{ left, bottom }}>
      <div className="relative h-12 w-24 rounded-t-full bg-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.55)]">
        <div className="absolute left-5 top-3 h-3 w-3 rounded-full bg-white/80" />
        <div className="absolute left-12 top-2 h-2 w-2 rounded-full bg-white/80" />
        <div className="absolute right-5 top-4 h-3 w-3 rounded-full bg-white/80" />
      </div>
      <div className="mx-auto h-16 w-9 rounded-b-full bg-stone-200 shadow-xl" />
    </div>
  );
}

function FlowerPatch({
  left,
  bottom,
  small = false,
}: {
  left: string;
  bottom: string;
  small?: boolean;
}) {
  return (
    <div
      className={`absolute flex items-end gap-3 ${small ? "scale-75" : "scale-100"}`}
      style={{ left, bottom }}
    >
      <Flower color="bg-pink-300" />
      <Flower color="bg-yellow-300" />
      <Flower color="bg-purple-300" />
      <Flower color="bg-rose-300" />
    </div>
  );
}

function Flower({ color }: { color: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`h-5 w-5 rounded-full ${color} shadow-lg`} />
      <div className="h-14 w-1 bg-green-400" />
      <div className="h-3 w-8 rounded-full bg-green-500" />
    </div>
  );
}
