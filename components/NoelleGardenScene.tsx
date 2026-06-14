"use client";

const areas = [
  {
    id: "tree",
    label: "Memory Tree",
    title: "A quiet place to remember.",
    text: "Lanterns hang from the branches like memories held gently in the night. This is the heart of the garden.",
    side: "md:mr-auto",
  },
  {
    id: "pond",
    label: "Reflection Pond",
    title: "It is okay to sit here awhile.",
    text: "Moonlight rests on the water. Floating lanterns drift slowly. This space is for grief, breath, and reflection.",
    side: "md:ml-auto",
  },
  {
    id: "meadow",
    label: "Flower Meadow",
    title: "A place where hope can grow.",
    text: "Flowers can represent love, survival, remembrance, encouragement, and the people still fighting.",
    side: "md:mr-auto",
  },
  {
    id: "lanterns",
    label: "Lantern Walk",
    title: "There is still light ahead.",
    text: "A gentle path of messages for those we lost, those still hurting, and those trying to make it one more day.",
    side: "md:ml-auto",
  },
];

export default function NoelleGardenScene() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07110d] text-white">
      <section className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_30%),radial-gradient(circle_at_25%_30%,_rgba(147,197,253,0.16),_transparent_35%),linear-gradient(180deg,_#070817_0%,_#0b1831_45%,_#08180f_100%)] px-5 py-8">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.75)_1px,_transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-yellow-100 shadow-[0_0_90px_35px_rgba(254,240,138,0.35)]" />

        <Firefly className="left-[12%] top-[16%]" />
        <Firefly className="left-[78%] top-[22%]" />
        <Firefly className="left-[32%] top-[48%]" />
        <Firefly className="left-[84%] top-[62%]" />
        <Firefly className="left-[18%] top-[78%]" />

        <Mushroom className="left-[8%] top-[34%]" />
        <Mushroom className="right-[10%] top-[44%] scale-75" />
        <Mushroom className="left-[14%] top-[70%] scale-90" />
        <Mushroom className="right-[18%] top-[82%]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <nav className="mb-10 flex items-center justify-between rounded-full border border-white/10 bg-black/25 px-5 py-3 backdrop-blur-md">
            <a href="/" className="text-sm text-white/70 hover:text-white">
              ← Home
            </a>
            <a
              href="#help"
              className="rounded-full bg-yellow-200 px-4 py-2 text-sm font-bold text-slate-950"
            >
              Get Help Now
            </a>
          </nav>

          <section className="mx-auto max-w-3xl py-16 text-center md:py-24">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-100/80">
              Noelle&apos;s Garden
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Take the path you need today.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              A storybook-real memorial garden with watercolor softness — a
              peaceful place for memory, reflection, hope, and light.
            </p>

            <a
              href="#tree"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-bold text-slate-950"
            >
              Begin Your Walk
            </a>
          </section>

          <section className="relative mx-auto max-w-5xl pb-20">
            <div className="absolute left-1/2 top-0 hidden h-full w-8 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-100/50 via-stone-200/30 to-amber-100/40 md:block" />

            {areas.map((area) => (
              <div key={area.id} id={area.id} className="relative py-12 md:py-20">
                <div
                  className={`max-w-xl rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-md ${area.side}`}
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-100/80">
                    {area.label}
                  </p>
                  <h2 className="text-3xl font-bold md:text-4xl">{area.title}</h2>
                  <p className="mt-4 leading-7 text-white/75">{area.text}</p>

                  <div className="mt-6 h-44 overflow-hidden rounded-3xl border border-white/10 bg-black/20">
                    <Illustration type={area.id} />
                  </div>
                </div>

                <div className="mx-auto mt-8 hidden h-5 w-5 rounded-full bg-yellow-200 shadow-[0_0_30px_12px_rgba(253,224,71,0.35)] md:block" />
              </div>
            ))}
          </section>
        </div>
      </section>

      <section id="help" className="bg-[#050816] px-5 py-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-red-200/20 bg-red-200/10 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-100/80">
            Immediate Support
          </p>
          <h2 className="mt-4 text-3xl font-bold">Get Help Right Now</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            If you or someone else is in immediate danger, call emergency
            services. For crisis support in the U.S., call or text 988.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="tel:988" className="rounded-full bg-white px-7 py-3 font-bold text-slate-950">
              Call 988
            </a>
            <a href="sms:988" className="rounded-full bg-white/10 px-7 py-3 font-bold text-white ring-1 ring-white/20">
              Text 988
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes floatFirefly {
          0% { transform: translate3d(0, 0, 0); opacity: .45; }
          50% { opacity: 1; }
          100% { transform: translate3d(18px, -24px, 0); opacity: .7; }
        }
      `}</style>
    </main>
  );
}

function Firefly({ className }: { className: string }) {
  return (
    <span
      className={`absolute h-2 w-2 rounded-full bg-yellow-200 shadow-[0_0_18px_8px_rgba(253,224,71,0.45)] ${className}`}
      style={{ animation: "floatFirefly 6s ease-in-out infinite alternate" }}
    />
  );
}

function Mushroom({ className }: { className: string }) {
  return (
    <span className={`absolute ${className}`} aria-hidden="true">
      <span className="block h-5 w-8 rounded-t-full bg-red-300 shadow-[0_0_18px_rgba(252,165,165,0.25)]" />
      <span className="mx-auto block h-6 w-3 rounded-b-full bg-stone-200" />
    </span>
  );
}

function Illustration({ type }: { type: string }) {
  if (type === "tree") {
    return (
      <div className="relative h-full bg-gradient-to-b from-indigo-950 to-emerald-950">
        <div className="absolute bottom-0 left-1/2 h-24 w-8 -translate-x-1/2 rounded-t-full bg-amber-950" />
        <div className="absolute bottom-16 left-1/2 h-28 w-44 -translate-x-1/2 rounded-full bg-emerald-800" />
        <div className="absolute bottom-20 left-[38%] h-3 w-3 rounded-full bg-yellow-200 shadow-[0_0_20px_8px_rgba(253,224,71,0.35)]" />
        <div className="absolute bottom-24 left-[58%] h-3 w-3 rounded-full bg-yellow-200 shadow-[0_0_20px_8px_rgba(253,224,71,0.35)]" />
      </div>
    );
  }

  if (type === "pond") {
    return (
      <div className="relative h-full bg-gradient-to-b from-slate-950 to-emerald-950">
        <div className="absolute bottom-8 left-1/2 h-24 w-72 -translate-x-1/2 rounded-[50%] bg-sky-300/35 shadow-[0_0_50px_rgba(125,211,252,0.25)]" />
        <div className="absolute bottom-16 left-[42%] h-2 w-12 rounded-full bg-yellow-100" />
      </div>
    );
  }

  if (type === "meadow") {
    return (
      <div className="relative h-full bg-gradient-to-b from-indigo-950 to-emerald-900">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute bottom-8 h-7 w-2 rounded-full bg-pink-200"
            style={{ left: `${8 + i * 5}%` }}
          />
        ))}
        <div className="absolute bottom-0 h-10 w-full bg-emerald-800" />
      </div>
    );
  }

  return (
    <div className="relative h-full bg-gradient-to-b from-indigo-950 to-slate-950">
      {Array.from({ length: 7 }).map((_, i) => (
        <span
          key={i}
          className="absolute bottom-10 h-16 w-5 rounded-t-full bg-yellow-100/80 shadow-[0_0_24px_rgba(254,240,138,0.45)]"
          style={{ left: `${12 + i * 12}%` }}
        />
      ))}
    </div>
  );
}
