"use client";

const stones = Array.from({ length: 26 });
const fireflies = Array.from({ length: 34 });

const hopeNotes = [
  "Keep walking.",
  "You are not alone.",
  "One breath at a time.",
  "Your light still matters.",
  "Stay for tomorrow.",
];

export default function GardenPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050b14] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_78%_12%,rgba(255,245,170,.55),transparent_13%),linear-gradient(to_bottom,#081226,#071320_45%,#06140d)]" />
      <div className="fixed inset-0 -z-10 opacity-30 [background-image:radial-gradient(rgba(255,255,255,.75)_1px,transparent_1px)] [background-size:70px_70px]" />

      {fireflies.map((_, i) => (
        <span
          key={i}
          className="firefly fixed z-20 h-1.5 w-1.5 rounded-full bg-yellow-200 shadow-[0_0_18px_7px_rgba(253,224,71,.35)]"
          style={{
            left: `${4 + ((i * 19) % 92)}%`,
            top: `${8 + ((i * 29) % 84)}%`,
            animationDelay: `${i * 0.35}s`,
          }}
        />
      ))}

      <a
        href="#help"
        className="fixed right-4 top-4 z-50 rounded-full bg-yellow-200 px-5 py-3 text-sm font-black text-slate-950 shadow-[0_0_35px_rgba(253,224,71,.6)]"
      >
        🕯 Get Help
      </a>

      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <div className="absolute bottom-0 h-[42vh] w-[150vw] rounded-t-[100%] bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent" />

        <div className="absolute bottom-12 h-[58vh] w-[82vw] max-w-xl rounded-t-full border-x-8 border-t-8 border-yellow-100/20 shadow-[0_0_90px_rgba(254,240,138,.18)]" />

        <div className="absolute bottom-0 left-1/2 h-[52vh] w-36 -translate-x-1/2 bg-gradient-to-b from-stone-200/45 via-stone-300/25 to-transparent [clip-path:polygon(40%_0,60%_0,100%_100%,0_100%)]" />

        <div className="relative z-10 max-w-3xl">
          <div className="mx-auto mb-8 w-fit rotate-[-2deg] rounded-2xl border border-yellow-100/20 bg-[#5a351c]/85 px-8 py-5 shadow-2xl">
            <p className="tracking-[0.4em] text-yellow-100/80">
              NOËLLE&apos;S GARDEN
            </p>
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Take the path
            <br />
            you need today.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75">
            A moonlit memorial garden for memory, reflection, hope, and small
            lights in dark places.
          </p>

          <a
            href="#walk"
            className="mt-10 inline-block rounded-full bg-yellow-200 px-9 py-4 font-black text-slate-950 shadow-[0_0_45px_rgba(253,224,71,.6)]"
          >
            🏮 Begin Your Walk
          </a>
        </div>
      </section>

      <section id="walk" className="relative px-5 pb-32">
        <div className="absolute left-1/2 top-0 h-full w-28 -translate-x-1/2 bg-gradient-to-b from-stone-300/25 via-stone-200/15 to-transparent blur-sm" />

        {stones.map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 h-9 w-14 rounded-[50%] bg-stone-200/35 shadow-[0_0_20px_rgba(255,255,255,.12)]"
            style={{
              top: `${i * 165 + 40}px`,
              transform: `translateX(${i % 2 === 0 ? "-85px" : "25px"}) rotate(${
                i % 2 === 0 ? "-8deg" : "8deg"
              })`,
            }}
          />
        ))}

        <div className="relative z-10 mx-auto max-w-6xl space-y-52">
          <section id="tree" className="min-h-[80vh] pt-24">
            <div className="relative mx-auto h-[560px] max-w-5xl">
              <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-700 shadow-[0_0_110px_rgba(52,211,153,.25)]" />
              <div className="absolute left-1/2 top-40 h-80 w-28 -translate-x-1/2 rounded-t-full bg-[#5a351c]" />
              <div className="absolute left-1/2 top-72 h-44 w-[85%] -translate-x-1/2 rounded-[50%] bg-emerald-950/80 blur-sm" />

              <div className="absolute left-[20%] top-28 text-5xl drop-shadow-[0_0_20px_rgba(253,224,71,.8)]">
                🏮
              </div>
              <div className="absolute right-[22%] top-32 text-5xl drop-shadow-[0_0_20px_rgba(253,224,71,.8)]">
                🏮
              </div>

              <WoodSign className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <p className="text-xs tracking-[0.3em] text-yellow-100/80">
                  MEMORY TREE
                </p>
                <h2 className="mt-3 text-3xl font-black">
                  A quiet place to remember.
                </h2>
                <p className="mt-4 text-white/75">
                  Lanterns hang from the branches like memories held gently in
                  the night.
                </p>
              </WoodSign>
            </div>
          </section>

          <section id="pond" className="min-h-[75vh]">
            <div className="relative mx-auto max-w-5xl text-center">
              <div className="mx-auto h-72 max-w-3xl rounded-[50%] bg-sky-300/25 shadow-[inset_0_0_70px_rgba(255,255,255,.2),0_0_110px_rgba(125,211,252,.28)]" />
              <div className="mx-auto mt-[-9rem] h-36 max-w-2xl rounded-[50%] border border-white/15 bg-blue-950/40" />

              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {[
                  "Breathe.",
                  "Rest here.",
                  "You can feel it all.",
                ].map((text) => (
                  <span
                    key={text}
                    className="rounded-[50%] bg-stone-300/25 px-8 py-5 text-white/85 shadow-xl"
                  >
                    {text}
                  </span>
                ))}
              </div>

              <WoodSign className="mx-auto mt-12">
                <p className="text-xs tracking-[0.3em] text-blue-100/80">
                  REFLECTION POND
                </p>
                <h2 className="mt-3 text-3xl font-black">
                  It is okay to sit here awhile.
                </h2>
              </WoodSign>
            </div>
          </section>

          <section id="mushrooms" className="min-h-[75vh]">
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-x-0 top-20 h-72 rounded-[50%] bg-purple-400/10 blur-3xl" />

              <div className="grid grid-cols-4 gap-7 pt-20 text-center text-6xl md:text-7xl">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className={`${i % 2 ? "translate-y-12" : ""} drop-shadow-[0_0_20px_rgba(253,224,71,.25)]`}
                  >
                    🍄
                  </div>
                ))}
              </div>

              <WoodSign className="mx-auto mt-20">
                <p className="text-xs tracking-[0.3em] text-purple-100/80">
                  MUSHROOM HOLLOW
                </p>
                <h2 className="mt-3 text-3xl font-black">
                  Small lights in dark places.
                </h2>
                <p className="mt-5 text-xl text-yellow-100">
                  “{hopeNotes[0]}”
                </p>
              </WoodSign>
            </div>
          </section>

          <section id="help" className="min-h-[75vh]">
            <div className="relative mx-auto max-w-5xl text-center">
              <div className="absolute inset-x-0 top-0 h-96 bg-yellow-200/10 blur-3xl" />

              <div className="grid grid-cols-2 gap-8 pt-12 md:grid-cols-4">
                {[
                  { label: "Call 988", href: "tel:988" },
                  { label: "Text 988", href: "sms:988" },
                  {
                    label: "Crisis Text Line",
                    href: "https://www.crisistextline.org/",
                  },
                  {
                    label: "Find Treatment",
                    href: "https://findtreatment.gov/",
                  },
                ].map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`rounded-full border border-yellow-100/20 bg-yellow-200/15 p-7 shadow-[0_0_70px_rgba(253,224,71,.25)] backdrop-blur transition hover:scale-105 ${
                      i % 2 ? "translate-y-12" : ""
                    }`}
                  >
                    <div className="text-6xl">🏮</div>
                    <p className="mt-4 font-black text-yellow-100">
                      {item.label}
                    </p>
                  </a>
                ))}
              </div>

              <WoodSign className="mx-auto mt-28">
                <p className="text-xs tracking-[0.3em] text-yellow-100/80">
                  LANTERN GROVE
                </p>
                <h2 className="mt-3 text-3xl font-black">
                  For those who need immediate light.
                </h2>
              </WoodSign>
            </div>
          </section>

          <section id="field" className="min-h-[80vh] pb-20">
            <div className="relative mx-auto max-w-5xl text-center">
              <div className="absolute inset-0 rounded-[50%] bg-cyan-300/10 blur-3xl" />

              <div className="grid grid-cols-2 gap-5 pt-16 md:grid-cols-5">
                {hopeNotes.map((note, i) => (
                  <div
                    key={note}
                    className={`rounded-full bg-black/20 p-5 shadow-[0_0_45px_rgba(253,224,71,.18)] backdrop-blur ${
                      i % 2 ? "translate-y-10" : ""
                    }`}
                  >
                    <div className="text-3xl">✨</div>
                    <p className="mt-3 text-yellow-100">“{note}”</p>
                  </div>
                ))}
              </div>

              <div className="mt-32 text-[9rem] drop-shadow-[0_0_70px_rgba(253,224,71,.9)]">
                🏮
              </div>

              <WoodSign className="mx-auto">
                <p className="text-xs tracking-[0.3em] text-yellow-100/80">
                  NOËLLE&apos;S LANTERN
                </p>
                <h2 className="mt-3 text-4xl font-black">
                  May the love that remains help guide someone else home.
                </h2>
              </WoodSign>
            </div>
          </section>
        </div>
      </section>

      <style jsx>{`
        .firefly {
          animation: floatFirefly 8s ease-in-out infinite alternate;
        }

        @keyframes floatFirefly {
          0% {
            transform: translate(0, 0);
            opacity: 0.25;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(22px, -36px);
            opacity: 0.7;
          }
        }
      `}</style>
    </main>
  );
}

function WoodSign({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-md rotate-[-1deg] rounded-2xl border border-yellow-100/20 bg-[#5a351c]/85 p-6 text-center shadow-2xl backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}
