"use client";

import { useState } from "react";

export default function MemorialPage() {
  const [candles, setCandles] = useState(27);

  const lovedOnes = [
    {
      name: "Noelle Ryan Strain",
      story:
        "Her light continues through every act of kindness, every memory shared, and every person who finds comfort here.",
      image: "/memory1.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white px-5 py-10">
      <section className="mx-auto max-w-5xl text-center py-12">
        <p className="text-pink-300 uppercase tracking-widest text-sm font-bold">
          Memorial Wall
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold">
          A place to remember the ones we love
        </h1>
        <p className="mt-6 text-white/70 max-w-2xl mx-auto">
          Share a photo, a short story, or light a candle in memory of someone
          whose love still shines.
        </p>
      </section>

      <section className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
        {lovedOnes.map((person) => (
          <div
            key={person.name}
            className="rounded-3xl border border-white/10 bg-white/[0.06] overflow-hidden"
          >
            <img
              src={person.image}
              alt={person.name}
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold">{person.name}</h2>
              <p className="mt-3 text-white/70 leading-7">{person.story}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl mt-16 rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-8 text-center">
        <div className="text-6xl mb-4">🕯️</div>
        <h2 className="text-3xl font-bold">Light a Candle</h2>
        <p className="mt-4 text-white/70">
          Light a candle in memory, prayer, love, or quiet remembrance.
        </p>

        <button
          onClick={() => setCandles(candles + 1)}
          className="mt-6 rounded-full bg-yellow-200 px-8 py-3 font-bold text-slate-950"
        >
          Light a Candle
        </button>

        <p className="mt-6 text-xl font-semibold">
          {candles} candles have been lit
        </p>
      </section>

      <section className="mx-auto max-w-3xl mt-16 rounded-3xl border border-pink-300/20 bg-pink-300/10 p-8">
        <h2 className="text-3xl font-bold text-center">
          Submit a Loved One’s Memory
        </h2>
        <p className="mt-4 text-center text-white/70">
          Submissions can include a photo, name, and short story. They will be
          reviewed before being posted publicly.
        </p>

        <form className="mt-8 space-y-5">
          <input
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white"
            placeholder="Loved one's name"
          />

          <textarea
            className="w-full min-h-32 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white"
            placeholder="Write a short story or memory..."
          />

          <input
            type="file"
            accept="image/*"
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white"
          />

          <input
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white"
            placeholder="Your name or Anonymous"
          />

          <button
            type="button"
            className="w-full rounded-full bg-pink-300 px-8 py-4 font-bold text-slate-950"
          >
            Submit Memory
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-white/50">
          This form is visual for now. Next step is connecting it to Google
          Forms, Supabase, or email submissions.
        </p>
      </section>
    </main>
  );
}                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: opacity,
                  animation: `twinkle ${duration}s infinite`,
                  animationDelay: `${delay}s`,
                }}
              ></div>
            );
          })}
        </div>

        <style jsx>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.9; }
          }
        `}</style>
      </div>

      {/* Fixed "Get Help Now" Button */}
      <div className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8">
        <a
          href="/#help"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-slate-950 font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
          </span>
          Get Help Now
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="/" className="flex-1 hover:opacity-80 transition-opacity">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Noelle&apos;s Light
            </h1>
            <p className="text-xs md:text-sm text-white/60 mt-1">Memorial Wall</p>
          </a>
          <a
            href="/"
            className="hidden sm:block px-6 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors text-sm border border-white/20"
          >
            Back Home
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-4xl mx-auto px-5 py-16 md:py-24 text-center">
        <p className="text-pink-300 text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">
          ✦ A Place of Remembrance ✦
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
          Noelle&apos;s Memorial Wall
        </h2>
        <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          A place to remember Noelle, share love, post memories, and leave words that keep her light alive.
        </p>
      </section>

      {/* Photos Section */}
      <section className="relative max-w-6xl mx-auto px-5 py-12">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Photo Memories</h3>
          <p className="text-white/60 text-sm">Moments that shine forever</p>
        </div>
        
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {photoMemories.map((photo) => (
    <figure
      key={photo.title}
      className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-pink-300/40 transition-all duration-300 group shadow-2xl"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={photo.src}
          alt={photo.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <figcaption className="p-5">
        <p className="text-white font-semibold text-sm">{photo.title}</p>
      </figcaption>
    </figure>
  ))}
</div>

        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">
          Submit your photos.</p>
        </div>
      </section>

      {/* Letters Section */}
      <section className="relative max-w-6xl mx-auto px-5 py-12">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Letters & Words</h3>
          <p className="text-white/60 text-sm">Memories shared with love</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {letters.map((letter, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
              <p className="text-pink-300 text-xs font-bold uppercase tracking-widest mb-3">
                💌 Letter
              </p>
              <h4 className="text-white font-bold mb-3 text-lg">{letter.title}</h4>
              <p className="text-white/60 text-sm italic">&quot;{letter.preview}&quot;</p>
              <p className="text-white/40 text-xs mt-4">— Shared by someone who loved Noelle</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">Share your own letter or memory below.</p>
        </div>
      </section>

      {/* Submit Section */}
      <section className="relative max-w-2xl mx-auto px-5 py-12">
        <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-purple-400/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm text-center">
          <p className="text-purple-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
            💝 Share Your Tribute
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Add to the Memorial
          </h3>
          <p className="text-white/80 text-base leading-relaxed mb-8">
            Do you have a photo or letter you&apos;d like to share? Help keep Noelle&apos;s light alive.
          </p>
          <a
            href="/submit-memory"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-slate-950 font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
          >
            Submit a Photo or Letter
          </a>
          <p className="text-white/60 text-xs md:text-sm mt-4">
            Submissions reviewed before being posted publicly.
          </p>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="relative max-w-2xl mx-auto px-5 py-12">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-white/70 text-sm">
            🔒 <span className="block mt-2">Please only submit photos or letters you are comfortable sharing publicly. All submissions will be reviewed before being added to the memorial.</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 mt-16 py-8 text-center text-white/60 text-xs md:text-sm">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-base md:text-lg font-semibold text-white mb-2">
            Noelle&apos;s Light
          </p>
          <p className="mb-4">Her memory lives on in our hearts and in the connections we share.</p>
          <div className="border-t border-white/10 pt-4 text-white/50">
            <p>Created in memory of Noelle Ryan Strain</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
