export default function Firefly({ left, top }: { left: string; top: string }) {
  return (
    <div
      className="absolute h-2 w-2 animate-pulse rounded-full bg-yellow-200 shadow-[0_0_20px_8px_rgba(250,204,21,0.9)]"
      style={{ left, top }}
    />
  );
}
