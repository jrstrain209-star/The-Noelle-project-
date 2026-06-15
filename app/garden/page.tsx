"use client";

const scenes = [
  {
    id: "memory-tree",
    title: "Memory Tree",
    subtitle: "A quiet place to remember.",
    text: "Lanterns hang from the branches like memories held gently in the night.",
    image: "/garden-art/memory-tree.png",
  },
  {
    id: "reflection-pond",
    title: "Reflection Pond",
    subtitle: "It is okay to sit here awhile.",
    text: "Moonlight rests on the water. This space is for grief, breath, and reflection.",
    image: "/garden-art/reflection-pond.png",
  },
  {
    id: "mushroom-hollow",
    title: "Mushroom Hollow",
    subtitle: "Small lights in dark places.",
    text: "Tiny glowing reminders for the people trying to make it one more day.",
    image: "/garden-art/mushroom-hollow.png",
  },
  {
    id: "lantern-grove",
    title: "Lantern Grove",
    subtitle: "For those who need immediate light.",
    text: "Support should be easy to find when the night feels too heavy.",
    image: "/garden-art/lantern-grove.png",
  },
  {
    id: "firefly-field",
    title: "Firefly Field",
    subtitle: "You are not walking alone.",
    text: "Every small light is a reminder that someone else has stood in the dark too.",
    image: "/garden-art/firefly-field.png",
  },
];

export default function GardenPage() {
  return (
    <main className="bg-[#050814] text-white">
      <a
        href="#help"
        className="fixed right-4 top-4 z-50 rounded-full bg-yellow-200 px-5 py-3 text-sm font-black text-slate-950 shadow-[0_0_40px_rgba(253,224,71,.7)]"
      >
        🕯 Get Help Now
      </a>

      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/garden-art/garden-gate.png')" }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 tracking-[0.45em] text-yellow-100">
            NOËLLE&apos;S GARDEN
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Take the path
            <br />
            you need today.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/80">
            A moonlit memorial garden for memory, reflection, hope, and small
            lights in dark places.
          </p>

          <a
            href="#memory-tree"
            className="mt-10 inline-block rounded-full bg-yellow-200 px-9 py-4 font-black text-slate-950 shadow-[0_0_45px_rgba(253,224,71,.7)]"
          >
            🏮 Begin Your Walk
          </a>
        </div>
      </section>
<div className="mx-auto mt-8 max-w-md rotate-[-2deg] rounded-2xl border-2 border-yellow-100/30 bg-[#5a351c]/85 px-6 py-4 shadow-2xl backdrop-blur-md">
  <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-100">
    Garden Under Construction
  </p>
  <p className="mt-2 text-sm leading-6 text-white/75">
    This garden is still being planted. Some paths, memories, and lights are
    still growing.
  </p>
</div>
      {scenes.map((scene, index) => (
        <section
          key={scene.id}
          id={scene.id}
          className="relative flex min-h-screen items-end bg-cover bg-center px-6 py-20"
          style={{ backgroundImage: `url('${scene.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />

          <div
            className={`relative z-10 max-w-xl rounded-3xl border border-white/15 bg-black/35 p-7 shadow-2xl backdrop-blur-md ${
              index % 2 === 0 ? "mr-auto" : "ml-auto"
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-100/80">
              {scene.title}
            </p>

            <h2 className="mt-4 text-4xl font-black">{scene.subtitle}</h2>

            <p className="mt-5 text-lg leading-8 text-white/80">
              {scene.text}
            </p>
          </div>
        </section>
      ))}

      <section
        id="help"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/garden-art/noelles-lantern.png')" }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-2xl rounded-3xl border border-yellow-100/20 bg-black/40 p-8 shadow-[0_0_80px_rgba(253,224,71,.25)] backdrop-blur-md">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-100/80">
            Immediate Support
          </p>

          <h2 className="mt-4 text-4xl font-black">
            There is still light ahead.
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            If you or someone else is in immediate danger, call emergency
            services. For crisis support in the U.S., call or text 988.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:988"
              className="rounded-full bg-yellow-200 px-8 py-4 font-black text-slate-950"
            >
              Call 988
            </a>

            <a
              href="sms:988"
              className="rounded-full bg-white/10 px-8 py-4 font-black text-white ring-1 ring-white/20"
            >
              Text 988
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
