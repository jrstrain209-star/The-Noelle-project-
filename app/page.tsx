'use client';

export default function Home() {
  const crisisResources = [
    { label: '988', desc: 'Suicide & Crisis Lifeline', href: 'tel:988' },
    { label: '911', desc: 'Emergency Services', href: 'tel:911' },
    { label: 'Text 741741', desc: 'Crisis Text Line (text HOME)', href: 'sms:741741?body=HOME' },
  ];

  const resources = [
    { icon: '🧠', title: 'Mental Health', items: ['NAMI: 1-800-950-6264', 'SAMHSA: 1-800-662-4357', 'Psychology Today Finder'] },
    { icon: '💙', title: 'Grief Support', items: ['The Dinner Party', 'GriefShare', 'Grief Support Groups'] },
    { icon: '🌱', title: 'Recovery', items: ['AA Meetings', 'NA Meetings', 'SMART Recovery'] },
    { icon: '🌈', title: 'LGBTQ+', items: ['Trevor Project: 866-488-7386', 'Trans Lifeline: 877-565-8860', 'PFLAG'] },
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
          href="#crisis"
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
            href="#crisis"
            className="hidden sm:block px-6 py-2 bg-pink-400 hover:bg-pink-500 text-slate-950 font-semibold rounded-full transition-colors text-sm"
          >
            Get Help
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-5 py-16 md:py-24 text-center">
        <p className="text-pink-300 text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">
          ✦ A Memorial of Light ✦
        </p>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
          You don&apos;t have to carry it alone.
        </h2>
        <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
          Noelle&apos;s Light is a judgment-free community for those struggling with grief, loneliness, mental health challenges, addiction, and loss. Share your story. Find support. You matter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#share"
            className="px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-slate-950 font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-sm"
          >
            Share Your Story
          </a>
          <a
            href="#resources"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all duration-300 text-sm"
          >
            Find Resources
          </a>
        </div>
      </section>

      {/* Crisis Section */}
      <section id="crisis" className="relative max-w-6xl mx-auto px-5 py-12">
        <div className="bg-gradient-to-br from-red-500/10 via-rose-500/5 to-pink-500/10 border border-rose-400/30 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
          <p className="text-rose-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            🆘 In Crisis Right Now?
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Help is available 24/7
          </h3>
          <p className="text-white/80 text-sm md:text-base mb-6">
            You deserve support immediately. All services are confidential and free. Call, text, or reach out now.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {crisisResources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.href}
                className="group p-5 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl transition-all duration-300 text-center"
              >
                <div className="text-2xl md:text-3xl font-black text-pink-400 mb-2">{resource.label}</div>
                <p className="text-white font-semibold text-sm">{resource.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section id="share" className="relative max-w-6xl mx-auto px-5 py-12">
        <div className="bg-gradient-to-br from-pink-500/10 via-rose-500/5 to-pink-500/10 border border-pink-400/20 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
          <p className="text-pink-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            💭 Share Your Story
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Speak anonymously. Be heard.
          </h3>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
            Sometimes the first step is just saying &quot;I&apos;m not okay.&quot; Share what you&apos;re going through completely anonymously. Your story matters and could help someone feel less alone.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNvI1Huqg9_hOqRXn9BkhgsRS5ZtMX18hIYKmehAG8QYLGyA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-slate-950 font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-sm"
          >
            Open Anonymous Form
          </a>
          <p className="text-white/60 text-xs md:text-sm mt-4">
            Submissions reviewed before sharing. All responses confidential.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section id="resources" className="relative max-w-6xl mx-auto px-5 py-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">Get Support By Type</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((category, idx) => (
            <div key={idx} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300">
              <div className="text-3xl mb-3">{category.icon}</div>
              <h4 className="text-white font-bold mb-3 text-lg">{category.title}</h4>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="text-white/70 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why This Exists */}
      <section className="relative max-w-6xl mx-auto px-5 py-12">
        <div className="bg-gradient-to-br from-violet-500/5 via-indigo-500/5 to-violet-500/5 border border-violet-400/20 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
          <p className="text-violet-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            💫 From Noelle&apos;s Dad
          </p>
          <p className="text-white/80 text-base leading-relaxed">
            I know how loneliness feels. People struggle in different ways—through grief, mental illness, loss, addiction, shame, and fear. Sometimes just being able to talk to someone who understands can help a person feel less alone. That&apos;s what Noelle&apos;s Light is for. You are not alone. Your life matters.
          </p>
        </div>
      </section>

      {/* Submit Support Group */}
      <section className="relative max-w-6xl mx-auto px-5 py-12">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Know a Support Group?</h3>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
            Help us build a directory of grief groups, recovery meetings, and mental health resources in your area.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeRwrptBHTHtRc0A7PfwCPk0N-LYTbjck-6LatZcVxarOvf5Q/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-full transition-colors text-sm"
          >
            Submit a Resource
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 mt-16 py-8 text-center text-white/60 text-xs md:text-sm">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-base md:text-lg font-semibold text-white mb-2">
            Created in memory of Noelle Ryan Strain
          </p>
          <p className="mb-4">A safe place to be heard. A community of light in the darkness.</p>
          <div className="border-t border-white/10 pt-4 text-white/50">
            <p>Noelle&apos;s Light is not a crisis service. If in immediate danger, call 911 or text 988.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}