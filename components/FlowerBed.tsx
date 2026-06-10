export default function FlowerBed({
  left,
  bottom,
  size = "medium",
}: {
  left: string;
  bottom: string;
  size?: "small" | "medium" | "large";
}) {
  const scale =
    size === "large" ? "scale-125" : size === "small" ? "scale-75" : "scale-100";

  return (
    <div className={`absolute flex items-end gap-2 ${scale}`} style={{ left, bottom }}>
      <Flower color="bg-pink-300" height="h-14" />
      <Flower color="bg-purple-300" height="h-10" />
      <Flower color="bg-yellow-300" height="h-16" />
      <Flower color="bg-rose-300" height="h-12" />
      <Flower color="bg-blue-300" height="h-9" />
    </div>
  );
}

function Flower({ color, height }: { color: string; height: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`h-5 w-5 rounded-full ${color} shadow-[0_0_14px_rgba(255,255,255,0.25)]`} />
      <div className={`${height} w-1 bg-green-400`} />
      <div className="h-3 w-8 rounded-full bg-green-600" />
    </div>
  );
}
