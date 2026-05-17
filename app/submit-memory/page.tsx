'use client';

export default function SubmitMemory() {
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
            <p className="text-xs md:text-sm text-white/60 mt-1">Share a Memory</p>
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
          ✦ Keep Her Light Alive ✦
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
          Share a Memory
        </h2>
        <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          Photos, stories, letters, and memories help keep Noelle&apos;s light alive.
        </p>
      </section>

      {/* What You Can Submit Section */}
      <section className="relative max-w-4xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
            <p className="text-pink-300 text-xs font-bold uppercase tracking-widest mb-3">
              📸 Photos
            </p>
            <h3 className="text-white font-bold mb-2 text-lg">Share Photos</h3>
            <p className="text-white/70 text-sm">
              Upload pictures of moments with Noelle, or images that remind you of her light.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
            <p className="text-pink-300 text-xs font-bold uppercase tracking-widest mb-3">
              💌 Letters
            </p>
            <h3 className="text-white font-bold mb-2 text-lg">Write Letters</h3>
            <p className="text-white/70 text-sm">
              Share words you want to say to or about Noelle. Let your heart speak.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
            <p className="text-pink-300 text-xs font-bold uppercase tracking-widest mb-3">
              🌟 Memories
            </p>
            <h3 className="text-white font-bold mb-2 text-lg">Share Memories</h3>
            <p className="text-white/70 text-sm">
              Tell a story. Share a moment. Describe what Noelle meant to you.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
            <p className="text-pink-300 text-xs font-bold uppercase tracking-widest mb-3">
              💬 Messages
            </p>
            <h3 className="text-white font-bold mb-2 text-lg">Leave Messages</h3>
            <p className="text-white/70 text-sm">
              Send your thoughts, condolences, or anything you&apos;d like the community to know.
            </p>
          </div>
        </div>
      </section>

      {/* Google Form Section */}
      <section className="relative max-w-4xl mx-auto px-5 py-12">
        <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-purple-400/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="text-center mb-8">
            <p className="text-purple-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-2">
              💝 Submit Your Tribute
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Fill Out the Form Below
            </h3>
          </div>

          {/* Placeholder Google Form iFrame */}
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              className="w-full"
              style={{ minHeight: '600px' }}
            >
              Loading…
            </iframe>
          </div>

          <p className="text-white/70 text-sm text-center mt-6">
            The form may take a moment to load. If you experience any issues, you can also email your submission directly.
          </p>
        </div>
      </section>

      {/* Privacy & Review Note */}
      <section className="relative max-w-2xl mx-auto px-5 py-12">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-white/70 text-sm leading-relaxed">
            <span className="block font-semibold text-white mb-2">🔒 All submissions are reviewed before being shared publicly.</span>
            This helps us ensure that every memory added to Noelle&apos;s memorial is respectful and authentic. We honor every voice.
          </p>
        </div>
      </section>

      {/* Back to Memorial Link */}
      <section className="relative max-w-2xl mx-auto px-5 py-12">
        <div className="text-center">
          <a
            href="/memorial"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-slate-950 font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            ← Back to Memorial Wall
          </a>
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
