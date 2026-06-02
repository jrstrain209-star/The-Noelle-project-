import communitystories from "@/components/communitystories";

const helpResources = [
  {
    title: "988 Suicide & Crisis Lifeline",
    description: "Call or text 988 for immediate crisis support in the U.S.",
    url: "https://988lifeline.org/",
  },
  {
    title: "Crisis Text Line",
    description: "Text HOME to 741741 to connect with a crisis counselor.",
    url: "https://www.crisistextline.org/",
  },
  {
    title: "FindTreatment.gov",
    description: "Find mental health and substance use treatment near you.",
    url: "https://findtreatment.gov/",
  },
];
<communitystories />
const futureIdeas = [
  "Anonymous community posts",
  "Memorial wall",
  "Local support group directory",
  "Peer helper profiles",
  "Resource submissions",
  "Mobile app later",
];

const emergencyContacts = [
  { label: "Call 988", href: "tel:988", type: "primary" },
  { label: "Text 988", href: "sms:988", type: "secondary" },
  { label: "Text HOME to 741741", href: "sms:741741?body=HOME", type: "secondary" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050716] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(120,120,255,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,180,210,0.18),_transparent_30%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050716]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-sm font-semibold">Noelle&apos;s Light</p>
            <p className="text-xs text-white/60">You are not alone.</p>
          </div>

          <a
            href="#help"
            className="rounded-full bg-pink-200 px-6 py-2 text-sm font-semibold text-slate-950"
          >
            Get Help Now
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-20 text-center sm:py-28">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-pink-200/80">
          Created in memory of Noelle Ryan Strain
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
          You don&apos;t have to carry it alone.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/70">
          Noelle&apos;s Light is a calm, judgment-free space to share, find
          support, and connect with help.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/submit-story"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950"
          >
            Share Your Story
          </a>

          <a
            href="#resources"
            className="rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-white ring-1 ring-white/20"
          >
            Find Help
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold">What is Noelle&apos;s Light?</h2>

          <p className="mt-4 leading-7 text-white/80">
            A memorial project and peer-support community for people struggling
            with grief, loneliness, mental health, addiction, trauma, and loss.
          </p>
        </div>
      </section>

      <section id="share" className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl border border-pink-200/20 bg-pink-200/5 p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold">
            Share Your Story Anonymously
          </h2>
through
          <p className="mt-4 leading-7 text-white/80">
            Sometimes it helps just to write it out. You can share what
            you&apos;re going  without using your name. Your story may
            help someone else feel less alone.
          </p>

          <div className="mt-5 rounded-xl bg-black/20 p-4 text-sm text-white/70">
            <p>
              You do not have to include your name, phone number, or personal
              details. This is a safe place to be heard without judgment.
            </p>
          </div>

          <a
            href="/submit-story"
            className="mt-6 inline-block rounded-full bg-pink-200 px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-pink-100"
          >
            Submit an Anonymous Story
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl border border-purple-300/20 bg-purple-300/5 p-8 backdrop-blur-sm">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-purple-200/80">
            In Loving Memory
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Noelle&apos;s Memorial Wall
          </h2>

          <p className="mb-6 leading-7 text-white/80">
            A place for photos, letters, memories, and love for Noelle.
          </p>

          <a
            href="/memorial"
            className="inline-block rounded-full bg-purple-400 px-8 py-3 text-sm font-semibold text-slate-950"
          >
            Visit Memorial Wall
          </a>
        </div>
      </section>

      <section id="resources" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="mb-8 text-3xl font-bold">Find Help Near You</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {helpResources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold">{resource.title}</h3>
              <p className="mt-3 text-sm text-white/70">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </section>
      
      <CommunityStories />
      <CommunitySection />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="mb-8 text-3xl font-bold">Ideas for the Future</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {futureIdeas.map((idea) => (
            <div
              key={idea}
              className="rounded-xl border border-white/10 bg-white/[0.06] p-5 text-white/80"
            >
              {idea}
            </div>
          ))}
        </div>
      </section>

      <section id="help" className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl border border-red-300/20 bg-red-300/10 p-8 backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-200/80">
            Immediate Support
          </p>

          <h2 className="mt-4 text-3xl font-bold">Get Help Right Now</h2>

          <p className="mt-4 leading-7 text-white/80">
            If you or someone else is in immediate danger, call emergency
            services.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {emergencyContacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className={`rounded-2xl px-6 py-4 text-center font-bold ${
                  contact.type === "primary"
                    ? "bg-white text-slate-950"
                    : "bg-white/10 text-white ring-1 ring-white/20"
                }`}
              >
                {contact.label}
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-white/70">
            Noelle&apos;s Light is not monitored 24/7 and does not replace
            emergency care.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-12 text-center text-sm text-white/50">
        <p>Created in memory of Noelle Ryan Strain.</p>
        <p className="mt-2">A safe place to be heard.</p>
      </footer>
    </main>
  );
      }
