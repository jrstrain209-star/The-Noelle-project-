'use client';

export default function Memorial() {
const photoMemories = [
  { title: "School day memory", src: "/memory1.jpg" },
  { title: "Joy on the swing", src: "/memory2.jpg" },
  { title: "Sisters by the ocean", src: "/memory3.jpg" },
  { title: "Family in the sunshine", src: "/memory4.jpg" },
  { title: "Butterfly moment", src: "/memory5.jpg" },
];

  const letters = [
    { title: 'A letter to Noelle', preview: 'Words of love and remembrance...' },
    { title: 'A memory I\'ll carry', preview: 'A moment that will stay with me forever...' },
    { title: 'Something I wish I could say', preview: 'Words left unsaid, now shared...' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Stars/Galaxy Background */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(88,86,214,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_0%,rgba(168,85,247,0.08),transparent_60%)]"></div>
        
        {/* Stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 150 }).map((_, i) => {
            const size = Math.random() * 2 + 0.5;
            const opacity = Math.random() * 0.7 + 0.3;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 2;
            return (
              <div
                key={`star-${i}`}
                className="absolute rounded-full bg-white"
                style={{
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
            Real photos can be submitted and added to the memorial wall.</p>
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
