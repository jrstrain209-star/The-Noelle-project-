export default function MemoryMushroom({
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
    <button
      className={`absolute ${scale} transition hover:scale-110`}
      style={{ left, bottom }}
    >
      <div className="relative h-12 w-24 rounded-t-full bg-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.55)]">
        <div className="absolute left-5 top-3 h-3 w-3 rounded-full bg-white/80" />
        <div className="absolute left-12 top-2 h-2 w-2 rounded-full bg-white/80" />
        <div className="absolute right-5 top-4 h-3 w-3 rounded-full bg-white/80" />
      </div>
      <div className="mx-auto h-16 w-9 rounded-b-full bg-stone-200 shadow-xl" />
    </button>
  );
}
