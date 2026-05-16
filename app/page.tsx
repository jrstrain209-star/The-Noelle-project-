'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Stars/Galaxy Background */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        {/* Galaxy gradient layers */}
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

        {/* CSS for twinkling animation */}
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
          href="#get-help-now"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-slate-950 font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 text-sm md:text-base"
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
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Noelle&apos;s Light
            </h1>
            <p className="text-xs md:text-sm text-white/60 mt-1">A safe space to be heard</p>
          </div>
          <a
            href="#get-help-now"
            className="hidden sm:block px-6 py-2 bg-pink-400 hover:bg-pink-500 text-slate-950 font-semibold rounded-full transition-colors text-sm"
          >
            Get Help Now
          </a>
        </div>
      </header>

      {/* SECTION 1: Hero */}
      <section className="relative max-w-6xl mx-auto px-5 py-16 md:py-28 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-pink-300 text-xs md:text-sm font-semibold uppercase tracking-widest mb-6">
            ✦ A Memorial of Light ✦
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
            You&apos;re carrying something heavy.
          </h2>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 font-light">
            You don&apos;t have to carry it alone.
          </p>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
            Noelle&apos;s Light is a judgment-free sanctuary for those struggling with grief, loneliness, mental health challenges, addiction, and loss. Share your story. Find support. Remember you matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#share-your-story"
              className="px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-slate-950 font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
            >
              Share Your Story
            </a>
            <a
              href="#resources"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all duration-300"
            >
              Find Resources
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: Get Help Now */}
      <section id="get-help-now" className="relative max-w-6xl mx-auto px-5 py-16">
        <div className="bg-gradient-to-br from-red-500/10 via-rose-500/5 to-pink-500/10 border border-rose-400/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <p className="text-rose-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
            🆘 Immediate Support Available
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            If you&apos;re in crisis right now
          </h3>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl">
            You deserve help immediately. Please reach out using one of these resources. You are not alone, and your life matters.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {/* 988 */}
            <a
              href="tel:988"
              className="group p-6 bg-white/5 hover:bg-white/10 border border-white/20 rounded-2xl transition-all duration-300 text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-pink-400 mb-2">988</div>
              <p className="text-white font-bold mb-1">Suicide & Crisis Lifeline</p>
              <p className="text-white/70 text-sm">Call or text 24/7</p>
              <p className="text-rose-300 text-xs mt-3 font-semibold group-hover:text-rose-200">Tap to call →</p>
            </a>

            {/* 911 */}
            <a
              href="tel:911"
              className="group p-6 bg-red-500/10 hover:bg-red-500/20 border border-red-400/50 rounded-2xl transition-all duration-300 text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-red-400 mb-2">911</div>
              <p className="text-white font-bold mb-1">Emergency Services</p>
              <p className="text-white/70 text-sm">Immediate danger</p>
              <p className="text-red-300 text-xs mt-3 font-semibold group-hover:text-red-200">Tap to call →</p>
            </a>

            {/* Crisis Text Line */}
            <a
              href="sms:741741?body=HOME"
              className="group p-6 bg-white/5 hover:bg-white/10 border border-white/20 rounded-2xl transition-all duration-300 text-center"
            >
              <div className="text-2xl md:text-3xl font-black text-purple-400 mb-2">741741</div>
              <p className="text-white font-bold mb-1">Crisis Text Line</p>
              <p className="text-white/70 text-sm">Text &quot;HOME&quot;</p>
              <p className="text-purple-300 text-xs mt-3 font-semibold group-hover:text-purple-200">Tap to text →</p>
            </a>
          </div>

          <p className="text-white/60 text-xs md:text-sm text-center border-t border-white/10 pt-6">
            Noelle&apos;s Light is not a crisis service and does not replace professional emergency care. These resources are available 24/7.
          </p>
        </div>
      </section>

      {/* SECTION 3: You Are Not Alone */}
      <section className="relative max-w-6xl mx-auto px-5 py-16">
        <div className="bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 border border-purple-400/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <p className="text-purple-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
            ✨ You Are Not Alone
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            One in five adults experience mental illness
          </h3>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
            Grief. Loneliness. Anxiety. Depression. Addiction. Shame. Fear. Whatever you&apos;re facing, countless others understand exactly what you&apos;re going through. This community exists because silence makes pain heavier. Speaking—even anonymously—can help you feel less alone.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Grief Support', 'Mental Health', 'Recovery', 'Loneliness', 'Anxiety', 'Depression', 'Loss', 'Healing'].map((item) => (
              <div key={item} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-white/80 font-medium text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Share Your Story */}
      <section id="share-your-story" className="relative max-w-6xl mx-auto px-5 py-16">
        <div className="bg-gradient-to-br from-pink-500/10 via-rose-500/5 to-pink-500/10 border border-pink-400/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <p className="text-pink-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
            💭 Share Anonymously
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Tell us what you&apos;re going through
          </h3>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
            Sometimes the first step is just being able to say: &quot;I&apos;m not okay.&quot;
          </p>
          <p className="text-white/70 text-base mb-8">
            Share your story completely anonymously. No names needed. No judgment. Just honest words from a real person. Your story could be exactly what someone else needs to hear to feel less alone. All submissions are reviewed before being shared with the community.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNvI1Huqg9_hOqRXn9BkhgsRS5ZtMX18hIYKmehAG8QYLGyA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-slate-950 font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 mb-4"
          >
            Open Story Form
          </a>
          <p className="text-white/60 text-sm">
            📋 Takes about 5 minutes. All responses are confidential and reviewed by moderators.
          </p>
        </div>
      </section>

      {/* SECTION 5: Noelle's Story */}
      <section className="relative max-w-6xl mx-auto px-5 py-16">
        <div className="bg-gradient-to-br from-violet-500/5 via-indigo-500/5 to-violet-500/5 border border-violet-400/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <p className="text-violet-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
            💫 Why This Exists
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            A message from Noelle&apos;s dad
          </h3>
          <div className="space-y-6">
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              I know how loneliness feels. I know how pain can make you feel invisible. People struggle in different ways—through grief, mental illness, loss, addiction, shame, and fear.
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Sometimes just being able to talk to someone who understands—someone who&apos;s been there—can help a person feel less alone. That small moment of connection can matter more than we realize.
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Noelle&apos;s Light is built on that belief: that connection saves lives, and that your story—and your pain—deserves to be heard with compassion.
            </p>
            <p className="text-pink-300 text-lg md:text-xl font-semibold italic mt-8">
              You are not alone. Your life matters.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Future Ideas */}
      <section className="relative max-w-6xl mx-auto px-5 py-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">What&apos;s Coming</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '💬', title: 'Anonymous Discussions', desc: 'Share and reply to posts completely anonymously' },
            { icon: '📍', title: 'Local Support Groups', desc: 'Find grief groups and recovery meetings near you' },
            { icon: '🏠', title: 'Support Rooms', desc: 'Topic-specific spaces for focused peer support' },
            { icon: '👥', title: 'Trained Listeners', desc: 'Connect with volunteers who\'ve trained in peer support' },
            { icon: '📚', title: 'Resource Hub', desc: 'Comprehensive mental health and recovery resources' },
            { icon: '💝', title: 'Grief Network', desc: 'Connect with others who understand loss' },
          ].map((idea) => (
            <div key={idea.title} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300">
              <div className="text-4xl mb-3">{idea.icon}</div>
              <h4 className="text-white font-bold mb-2 text-lg">{idea.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed">{idea.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: Footer */}
      <footer className="relative border-t border-white/10 mt-20 py-12 text-center text-white/60 text-sm md:text-base">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-lg md:text-xl font-semibold text-white mb-2">
            Created in memory of Noelle Ryan Strain
          </p>
          <p className="mb-6">A safe place to be heard. A community of light in the darkness.</p>
          <div className="border-t border-white/10 pt-6 text-white/50 text-xs">
            <p>Noelle&apos;s Light is a peer-support community and memorial project.</p>
            <p className="mt-2">We are not a crisis service. If you are in immediate danger, call 911 or text 988.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}