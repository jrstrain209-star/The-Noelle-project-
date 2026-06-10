export default function MemoryMushroom({
  left,
  bottom,
  size,
  color = "purple",
}: {
  left: string;
  bottom: string;
  size: "small" | "medium" | "large";
  color?: "red" | "purple" | "gold" | "blue" | "pink" | "white";
}) {
  const scale =
    size === "large" ? "scale-125" : size === "medium" ? "scale-100" : "scale-75";

  const colors = {
    red: "bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.55)]",
    purple: "bg-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.55)]",
    gold: "bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.55)]",
    blue: "bg-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.55)]",
    pink: "bg-pink-400 shadow-[0_0_25px_rgba(244,114,182,0.55)]",
    white: "bg-white shadow-[0_0_25px_rgba(255,255,255,0.45)]",
  };

  const meanings = {
    red: "Family memory",
    purple: "Favorite story",
    gold: "Lesson or wisdom",
    blue: "Encouragement",
    pink: "Laughter and joy",
    white: "Anonymous memory",
  };

  return (
    <button
      className={`absolute ${scale} transition hover:scale-110`}
      style={{ left, bottom }}
      title={meanings[color]}
      aria-label={meanings[color]}
    >
      <div className={`relative h-12 w-24 rounded-t-full ${colors[color]}`}>
        <div className="absolute left-5 top-3 h-3 w-3 rounded-full bg-white/80" />
        <div className="absolute left-12 top-2 h-2 w-2 rounded-full bg-white/80" />
        <div className="absolute right-5 top-4 h-3 w-3 rounded-full bg-white/80" />
      </div>
      <div className="mx-auto h-16 w-9 rounded-b-full bg-stone-200 shadow-xl" />
    </button>
  );
}
