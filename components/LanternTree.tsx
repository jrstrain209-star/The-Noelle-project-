export default function LanternTree() {
  return (
    <div className="absolute bottom-36 left-1/2 -translate-x-1/2">
      {/* Ground glow */}
      <div className="absolute left-1/2 top-[250px] h-32 w-80 -translate-x-1/2 rounded-full bg-yellow-300/15 blur-3xl" />

      {/* Tree trunk */}
      <div className="mx-auto h-64 w-10 rounded-t-full bg-[#3b2416] shadow-[0_0_30px_rgba(0,0,0,0.55)]" />

      {/* Tree crown */}
      <div className="absolute -left-32 top-0 h-40 w-40 rounded-full bg-emerald-950 shadow-[0_0_60px_rgba(34,197,94,0.25)]" />
      <div className="absolute -right-32 top-0 h-40 w-40 rounded-full bg-emerald-950 shadow-[0_0_60px_rgba(34,197,94,0.25)]" />
      <div className="absolute -top-16 left-1/2 h-48 w-56 -translate-x-1/2 rounded-full bg-emerald-900 shadow-[0_0_70px_rgba(34,197,94,0.25)]" />

      {/* Branches */}
      <div className="absolute left-[-72px] top-28 h-3 w-32 -rotate-12 rounded-full bg-[#3b2416]" />
      <div className="absolute right-[-72px] top-24 h-3 w-32 rotate-12 rounded-full bg-[#3b2416]" />
      <div className="absolute left-[-35px] top-14 h-3 w-28 -rotate-[28deg] rounded-full bg-[#3b2416]" />
      <div className="absolute right-[-35px] top-12 h-3 w-28 rotate-[28deg] rounded-full bg-[#3b2416]" />

      <Lantern left="-85px" top="40px" color="amber" meaning="In loving memory" />
      <Lantern left="75px" top="30px" color="violet" meaning="Mental health awareness" />
      <Lantern left="-20px" top="-25px" color="blue" meaning="Peace and comfort" />
      <Lantern left="20px" top="90px" color="green" meaning="Recovery and resilience" />
      <Lantern left="-115px" top="118px" color="white" meaning="Reflection and remembrance" />
      <Lantern left="120px" top="112px" color="gold" meaning="Gratitude and celebration of life" />
    </div>
  );
}

function Lantern({
  left,
  top,
  color,
  meaning,
}: {
  left: string;
  top: string;
  color: "amber" | "violet" | "green" | "blue" | "white" | "gold";
  meaning: string;
}) {
  const styles = {
    amber: "border-orange-200/70 bg-orange-300/25 shadow-[0_0_35px_12px_rgba(251,146,60,0.45)]",
    violet: "border-purple-200/70 bg-purple-300/25 shadow-[0_0_35px_12px_rgba(168,85,247,0.45)]",
    green: "border-emerald-200/70 bg-emerald-300/25 shadow-[0_0_35px_12px_rgba(52,211,153,0.45)]",
    blue: "border-sky-200/70 bg-sky-300/25 shadow-[0_0_35px_12px_rgba(125,211,252,0.45)]",
    white: "border-white/70 bg-white/25 shadow-[0_0_35px_12px_rgba(255,255,255,0.38)]",
    gold: "border-yellow-200/70 bg-yellow-300/25 shadow-[0_0_38px_14px_rgba(250,204,21,0.5)]",
  };

  return (
    <div className="absolute" style={{ left, top }} title={meaning}>
      <div className="mx-auto h-8 w-1 bg-stone-700" />
      <div className={`relative h-12 w-9 rounded-xl border ${styles[color]}`}>
        <div className="absolute inset-2 rounded-full bg-white/60 blur-sm" />
      </div>
    </div>
  );
}
