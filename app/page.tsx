'use client';

export default function Home() {
  const helpResources = [
    {
      title: 'Suicide & Crisis Lifeline',
      description: 'Call or text 988 for immediate support',
      url: 'https://988lifeline.org/',
      type: 'crisis'
    },
    {
      title: 'Find Treatment',
      description: 'Locate mental health and addiction services',
      url: 'https://www.findtreatment.gov/',
      type: 'treatment'
    },
    {
      title: 'NAMI Support Groups',
      description: 'Connect with peer support communities',
      url: 'https://www.nami.org/support-groups/',
      type: 'support'
    }
  ];

  const futureIdeas = [
    'Anonymous posts and replies',
    'Local support group directory',
    'Topic-based support rooms',
    'Volunteer listener program',
    'Mental health resources hub',
    'Grief support network'
  ];

  const emergencyContacts = [
    { label: 'Call 911', href: 'tel:911', type: 'primary' },
    { label: 'Call or Text 988', href: 'tel:988', type: 'primary' },
    { label: 'Text HOME to 741741', href: 'sms:741741?body=HOME', type: 'secondary' }
  ];

  return (
    <main className="min-h-screen bg-[#050716] text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(120,120,255,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,180,210,0.18),_transparent_30%),#050716]" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050716]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-sm font-semibold">Noelle&apos;s Light</p>
            <p className="text-xs text-white/60">You are not alone.</p>
          </div>
          <a
            href="#help"
            className="rounded-full bg-pink-200 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg hover:bg-pink-300 transition-colors"
          >
            Get Help Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center sm:py-28">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-pink-200/80">
          A safe place to be heard
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
          You&apos;re carrying something heavy. You don&apos;t have to carry it alone.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/70">
          Noelle&apos;s Light is a judgment-free space to share, find support, and connect with help. 
          Built in memory of Noelle Ryan Strain, this community reminds us there&apos;s still light in the dark.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#share"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90 transition-colors"
          >
            Share Your Story
          </a>
          <a
            href="#resources"
            className="rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-colors"
          >
            Find Help
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold">What is Noelle&apos;s Light?</h2>
          <p className="mt-4 leading-7 text-white/80">
            A memorial project and peer-support community for people struggling with grief, loneliness, mental health, addiction, and loss. 
            This is a place to speak honestly—not a replacement for emergency help, therapy, or medical care, but a companion on your journey.
          </p>
        </div>
      </section>

      {/* Share Anonymously */}
      <section id="share" className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl border border-pink-200/20 bg-pink-200/5 p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold">Share Anonymously</h2>
          <p className="mt-4 leading-7 text-white/80">
            Sometimes the first step is just being able to say, &quot;I&apos;m not okay.&quot; 
            Share what you&apos;re going through without using your real name. Your story matters.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNvI1Huqg9_hOqRXn9BkhgsRS5ZtMX18hIYKmehAG8QYLGyA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-pink-200 px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-pink-300 transition-colors"
          >
            Open Story Form
          </a>
          <p className="mt-4 text-sm text-white/60">
            Submissions are reviewed before sharing publicly.
          </p>
        </div>
      </section>

      {/* Find Help Near You */}
      <section id="resources" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="mb-8 text-3xl font-bold">Find Help Near You</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {helpResources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all hover:bg-white/[0.12] hover:border-white/20"
            >
              <h3 className="text-xl font-bold group-hover:text-pink-200 transition-colors">{resource.title}</h3>
              <p className="mt-3 text-sm text-white/70">{resource.description}</p>
              <div className="mt-4 flex items-center text-pink-200 text-sm font-semibold">
                Visit <span className="ml-2">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Support Resources Grid */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="mb-8 text-3xl font-bold">Resources by Category</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Immediate Danger', desc: 'Call 911 or go to nearest ER' },
            { title: 'Suicide & Crisis', desc: 'Call or text 988' },
            { title: 'Crisis Text Line', desc: 'Text HOME to 741741' },
            { title: 'Grief Support', desc: 'Local groups & online communities' },
            { title: 'Mental Health', desc: 'Therapists, counselors, clinics' },
            { title: 'Addiction Recovery', desc: 'Support groups & treatment' }
          ].map((resource) => (
            <div
              key={resource.title}
              className="rounded-xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm"
            >
              <h3 className="font-bold text-white">{resource.title}</h3>
              <p className="mt-2 text-sm text-white/70">{resource.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dad's Note */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-200/80">
            A note from Noelle&apos;s dad
          </p>
          <h2 className="mt-4 text-3xl font-bold">Why This Matters</h2>
          <p className="mt-6 leading-8 text-white/80">
            I know how loneliness feels. People struggle in different ways—grief, mental health, loss, addiction, shame, fear. 
            Sometimes just being able to talk to someone who&apos;s been there can make a person feel less alone. 
            That&apos;s what Noelle&apos;s Light is for.
          </p>
        </div>
      </section>

      {/* Submit Support Group */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold">Submit a Support Group</h2>
          <p className="mt-4 leading-7 text-white/80">
            Know of a grief group, recovery meeting, mental health resource, or community support? 
            Help us build a directory so others can find support near them.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeRwrptBHTHtRc0A7PfwCPk0N-LYTbjck-6LatZcVxarOvf5Q/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-pink-200 px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-pink-300 transition-colors"
          >
            Submit a Group
          </a>
        </div>
      </section>

      {/* Future Ideas */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="mb-8 text-3xl font-bold">Ideas for the Future</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {futureIdeas.map((idea) => (
            <div
              key={idea}
              className="rounded-xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm text-white/80 font-medium"
            >
              {idea}
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Help Section */}
      <section id="help" className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl border border-red-300/20 bg-red-300/10 p-8 backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-200/80">
            Immediate Support
          </p>
          <h2 className="mt-4 text-3xl font-bold">Get Help Right Now</h2>
          <p className="mt-4 leading-7 text-white/80">
            If you or someone else is in immediate danger, please reach out. You deserve help right now.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {emergencyContacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className={`rounded-2xl px-6 py-4 text-center font-bold transition-colors ${
                  contact.type === 'primary'
                    ? 'bg-white text-slate-950 hover:bg-white/90'
                    : 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20'
                }`}
              >
                {contact.label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/70">
            Noelle&apos;s Light is not monitored 24/7 and does not replace emergency care or professional crisis support.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-12 text-center text-sm text-white/50">
        <p>Created in memory of Noelle Ryan Strain.</p>
        <p className="mt-2">A safe place to be heard.</p>
      </footer>
    </main>
  );
}