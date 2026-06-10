export default function Firefly({
  left,
  top,
  color = "gold",
  delay = "0s",
}: {
  left: string;
  top: string;
  color?: "gold" | "violet" | "blue" | "green" | "white";
  delay?: string;
}) {
  const colors = {
    gold: "bg-yellow-200 shadow-[0_0_22px_9px_rgba(250,204,21,0.9)]",
    violet: "bg-purple-300 shadow-[0_0_22px_9px_rgba(168,85,247,0.9)]",
    blue: "bg-sky-300 shadow-[0_0_22px_9px_rgba(125,211,252,0.9)]",
    green: "bg-emerald-300 shadow-[0_0_22px_9px_rgba(110,231,183,0.9)]",
    white: "bg-white shadow-[0_0_22px_9px_rgba(255,255,255,0.85)]",
  };

  return (
    <div
      className={`absolute h-2 w-2 rounded-full ${colors[color]} animate-[floatFirefly_7s_ease-in-out_infinite]`}
      style={{ left, top, animationDelay: delay }}
      title={getMeaning(color)}
    />
  );
}

function getMeaning(color: string) {
  if (color === "gold") return "Someone remembered";
  if (color === "violet") return "Someone who needs light";
  if (color === "blue") return "Someone healing";
  if (color === "green") return "Hope for the future";
  return "A prayer, wish, or quiet thought";
}
