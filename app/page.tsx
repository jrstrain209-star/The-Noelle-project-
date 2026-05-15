import { Heart, MapPin, MessageCircle, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07091a] text-white">
      <div className="stars-bg fixed inset-0" />
      <div className="fixed inset-0 bg-gradient-to-b from-indigo-950/30 via-[#07091a]/70 to-[#050611]" />

      <a
        href="#help-now"
        className="fixed bottom-4 left-4 right-4 z-50 rounded-full bg-rose-200 px-5 py-4 text-center text-base font-bold text-slate-950 shadow-2xl shadow-rose-200/20 sm:left-auto sm:right-6 sm:w-auto"
      >
        Get Help Now
      </a>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 pb-28 pt-10 sm:px-8">
        <header className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 shadow-lg ring-1 ring-white/15">
              <Heart className="h-5 w-5 text-rose-200" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide">
                Noelle’s Light
              </p>
              <p className="text-xs text-slate-300">You are not alone.</p>
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col justify-center">
          <p className="mb-4 max-w-xl text-sm font-medium uppercase tracking-[0.25em] text-rose-200/90">
            A safe place to be heard
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
            A calm support space for people carrying more than they can say.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Noelle’s Light is being built in memory of Noelle — a gentle,
            judgment-free place to talk, find support groups, connect with help
            nearby, and remind each other there is still light in the dark.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#help-now"
              className="rounded-full bg-white px-6 py-4 text-center font-bold text-slate-950 shadow-xl"
            >
              Find help now
            </a>
            <a
              href="#community"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center font-semibold text-white backdrop-blur"
            >
              Learn about the community
            </a>
          </div>
        </div>
      </section>

      <section
        id="community"
        className="relative z-10 mx-auto grid max-w-5xl gap-4 px-5 pb-16 sm:grid-cols-3 sm:px-8"
      >
        <Feature
          icon={<MessageCircle className="h-6 w-6" />}
          title="Talk without judgment"
          text="A peer-support space for sharing what feels too heavy to carry alone."
        />
        <Feature
          icon={<Users className="h-6 w-6" />}
          title="Find support groups"
          text="Join online groups or discover in-person support in your area."
        />
        <Feature
          icon={<MapPin className="h-6 w-6" />}
          title="Help near you"
          text="Simple pathways to crisis resources, local help, and community care."
        />
      </section>

      <section
        id="help-now"
        className="relative z-10 mx-auto max-w-5xl px-5 pb-32 sm:px-8"
      >
        <div className="rounded-3xl border border-rose-200/20 bg-rose-100/10 p-6 shadow-2xl backdrop-blur">
          <h2 className="text-2xl font-bold">Need help right now?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-200">
            If you or someone else may be in immediate danger, call emergency
            services now. In the U.S., call or text <strong>988</strong> for the
            Suicide & Crisis Lifeline.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:988"
              className="rounded-full bg-rose-200 px-6 py-4 text-center font-bold text-slate-950"
            >
              Call 988
            </a>
            <a
              href="sms:988"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center font-semibold text-white"
            >
              Text 988
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({
  icon,
  title,
  text
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-rose-200">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </div>
  );
}
