export default function LanternTree() {
  return (
    <div className="absolute bottom-36 left-1/2 -translate-x-1/2">
      <div className="mx-auto h-64 w-10 rounded-t-full bg-[#3b2416]" />

      <div className="absolute -left-32 top-0 h-40 w-40 rounded-full bg-emerald-950 shadow-[0_0_60px_rgba(34,197,94,0.25)]" />
      <div className="absolute -right-32 top-0 h-40 w-40 rounded-full bg-emerald-950 shadow-[0_0_60px_rgba(34,197,94,0.25)]" />
      <div className="absolute -top-16 left-1/2 h-48 w-56 -translate-x-1/2 rounded-full bg-emerald-900 shadow-[0_0_70px_rgba(34,197,94,0.25)]" />

      <Lantern left="-70px" top="30px" />
      <Lantern left="60px" top="20px" />
      <Lantern left="-10px" top="-20px" />
    </div>
  );
}

function Lantern({ left, top }: { left: string; top: string }) {
  return (
    <div className="absolute" style={{ left, top }}>
      <div className="mx-auto h-8 w-1 bg-stone-700" />
      <div className="relative h-12 w-9 rounded-xl border border-yellow-200/60 bg-yellow-300/20 shadow-[0_0_35px_12px_rgba(250,204,21,0.45)]">
        <div className="absolute inset-2 rounded-full bg-yellow-200 blur-sm" />
      </div>
    </div>
  );
}
