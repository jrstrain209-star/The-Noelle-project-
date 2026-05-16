export default function Home() {
  return (
    <main className="min-h-screen bg-[#050716] text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(120,120,255,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,180,210,0.18),_transparent_30%),#050716]" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050716]/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-sm font-semibold">Noelle's Light</p>
            <p className="text-xs text-white/60">You are not alone.</p>
          </div>

          <a
            href="#help"
            className="rounded-full bg-pink-200 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg"
          >
            Get Help Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pb-16 pt-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-pink-200/80">
          A safe place to be heard
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
          A calm support space for people carrying more than they can say.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">
          Noelle's Light is being built in memory of Noelle Ryan Strain — a
          gentle, judgment-free place to talk, find support groups, connect with
          help nearby, and remind each other there is still light in the dark.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#share"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950"
          >
            Share anonymously
          </a>

          <a
            href="#about"
            className="rounded-full bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/15"
          >
            Learn about the community
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-200/80">
            About
          </p>

          <h2 className="mt-3 text-3xl font-bold">What Noelle's Light is</h2>

          <p className="mt-4 leading-7 text-white/70">
            Noelle's Light is a memorial project and future peer-support
            community. The goal is to create a place where people can speak
            honestly about grief, loneliness, mental health, addiction, family
            struggles, loss, and the things they may be afraid to say out loud.
          </p>

          <p className="mt-4 leading-7 text-white/70">
            This is not meant to replace emergency help, therapy, or medical
            care. It is meant to help people feel less alone and guide them
            toward support when they need it.
          </p>
        </div>
      </section>

      {/* Main cards */}
      <section className="mx-auto grid max-w-5xl gap-5 px-5 py-10 sm:grid-cols-2">
        <div
          id="share"
          className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
        >
          <h2 className="text-2xl font-bold">Share anonymously</h2>

          <p className="mt-4 leading-7 text-white/70">
            You can share what you are going through without having to use your
            real name. Sometimes the first step is just being able to say,
            "I'm not okay."
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNvI1Huqg9_hOqRXn9BkhgsRS5ZtMX18hIYKmehAG8QYLGyA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block rounded-full bg-pink-200 px-6 py-3 text-center text-sm font-semibold text-slate-950"
          >
            Open Anonymous Story Form
          </a>

          <p className="mt-4 text-sm leading-6 text-white/50">
            Submissions can be reviewed before anything is shared publicly.
            This page is not monitored 24/7.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
          <h2 className="text-2xl font-bold">Find support nearby</h2>

          <p className="mt-4 leading-7 text-white/70">
            The goal is to help people find local and online resources,
            including grief support, mental health support, addiction recovery,
            crisis help, and community groups.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
          <h2 className="text-2xl font-bold">Support Resources</h2>

          <p className="mt-4 leading-7 text-white/70">
            Find crisis lines, grief support, mental health resources, addiction
            and alcohol recovery support, and places to start when you do not
            know who to talk to.
          </p>

          <a
            href="#resources"
            className="mt-5 block rounded-full bg-pink-200 px-6 py-3 text-center text-sm font-semibold text-slate-950"
          >
            View Support Resources
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
          <h2 className="text-2xl font-bold">Support groups</h2>

          <p className="mt-4 leading-7 text-white/70">
            Noelle's Light can grow into a place where people can join support
            groups based on what they are facing, or submit information about
            in-person groups that may help others.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
          <h2 className="text-2xl font-bold">
            Help others feel less alone
          </h2>

          <p className="mt-4 leading-7 text-white/70">
            People who have been through hard things may be able to encourage
            someone else who is still in the middle of it. A kind message at
            the right time can matter more than people realize.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
          <h2 className="text-2xl font-bold">Submit a Support Group</h2>

          <p className="mt-4 leading-7 text-white/70">
            Know of a grief group, recovery meeting, mental health resource, church/community support group, or in-person meeting that could help someone? Submit it so Noelle's Light can eventually help people find support near them.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeRwrptBHTHtRc0A7PfwCPk0N-LYTbjck-6LatZcVxarOvf5Q/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block rounded-full bg-pink-200 px-6 py-3 text-center text-sm font-semibold text-slate-950"
          >
            Submit a Group
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
          <h2 className="text-2xl font-bold">Support the project</h2>

          <p className="mt-4 leading-7 text-white/70">
            Noelle's Light is built by volunteers and supported by people who believe in creating a safe, judgment-free space for those who are struggling. Your time or contribution matters.
          </p>

          <a
            href="#"
            className="mt-5 block rounded-full bg-pink-200 px-6 py-3 text-center text-sm font-semibold text-slate-950"
          >
            Get Involved
          </a>
        </div>
      </section>

      {/* Dad note */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl border border-pink-200/20 bg-pink-200/10 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-200/80">
            A note from Noelle's dad
          </p>

          <h2 className="mt-3 text-3xl font-bold">Why this matters</h2>

          <p className="mt-4 leading-7 text-white/75">
            I know how loneliness feels. I have been struggling with my own
            demons, and I know how hard it can be to find someone to talk to
            when everything feels heavy.
          </p>

          <p className="mt-4 leading-7 text-white/75">
            People struggle in different ways — grief, mental health, loss,
            addiction, alcohol, family problems, shame, fear, and things they
            may not know how to explain. Sometimes being able to talk to someone
            who has been there before can make a person feel a little less
            alone.
          </p>

          <p className="mt-4 leading-7 text-white/75">
            Noelle's Light is being created in memory of Noelle Ryan Strain,
            with the hope that it can become a safe place for people who need
            someone to listen.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-200/80">
            Support Resources
          </p>

          <h2 className="mt-3 text-3xl font-bold">Places to start</h2>

          <p className="mt-4 leading-7 text-white/70">
            If you are overwhelmed, grieving, struggling with mental health, addiction,
            alcohol, loneliness, or family problems, you do not have to figure it out
            alone. These are starting points for help.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/[0.06] p-4">
              <h3 className="font-bold">Immediate danger</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                If someone may be in immediate danger, call 911 or go to the nearest
                emergency room.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.06] p-4">
              <h3 className="font-bold">Suicide & crisis support</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Call or text 988 to reach the Suicide & Crisis Lifeline.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.06] p-4">
              <h3 className="font-bold">Crisis Text Line</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Text HOME to 741741 to connect with a trained crisis counselor.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.06] p-4">
              <h3 className="font-bold">Grief and loss</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Look for local grief groups, hospice grief programs, church/community
                support, or online grief communities.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.06] p-4">
              <h3 className="font-bold">Drug and alcohol struggles</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Recovery groups, outpatient programs, counseling, and peer support can
                help people take the next step.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.06] p-4">
              <h3 className="font-bold">Mental health support</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                A primary doctor, therapist, counselor, school counselor, local clinic,
                or community mental health center can be a place to start.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-6 text-white/55">
            Noelle's Light is not monitored 24/7 and does not replace emergency care,
            therapy, medical care, or professional crisis support.
          </p>
        </div>
      </section>

      {/* Submit a Support Group */}
      <section id="submit-group" className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-200/80">
            Community Resources
          </p>

          <h2 className="mt-3 text-3xl font-bold">Submit a Support Group</h2>

          <p className="mt-4 leading-7 text-white/70">
            Noelle's Light is collecting support group information so this project can eventually help people find real help in their area. You can submit grief groups, addiction or alcohol recovery meetings, mental health resources, family support groups, church/community groups, or other safe support options.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeRwrptBHTHtRc0A7PfwCPk0N-LYTbjck-6LatZcVxarOvf5Q/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-full bg-pink-200 px-6 py-3 text-center text-sm font-semibold text-slate-950"
          >
            Submit Support Group Info
          </a>

          <p className="mt-4 text-sm leading-6 text-white/55">
            Submissions can be reviewed before anything is listed publicly. Noelle's Light is still being built and is not monitored 24/7.
          </p>
        </div>
      </section>

      {/* Future ideas */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
          <h2 className="text-3xl font-bold">Ideas for the future</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/[0.06] p-4">
              Anonymous posts and replies
            </div>

            <div className="rounded-2xl bg-white/[0.06] p-4">
              Local support group directory
            </div>

            <div className="rounded-2xl bg-white/[0.06] p-4">
              Submit an in-person group
            </div>

            <div className="rounded-2xl bg-white/[0.06] p-4">
              Topic-based support rooms
            </div>

            <div className="rounded-2xl bg-white/[0.06] p-4">
              Mental health and grief resources
            </div>

            <div className="rounded-2xl bg-white/[0.06] p-4">
              Volunteer listener program
            </div>
          </div>
        </div>
      </section>

      {/* Help */}
      <section id="help" className="mx-auto max-w-5xl px-5 py-10 pb-20">
        <div className="rounded-3xl border border-red-300/20 bg-red-300/10 p-6 sm:p-8">
          <h2 className="text-3xl font-bold">Get Help Now</h2>

          <p className="mt-4 leading-7 text-white/75">
            If you or someone else may be in immediate danger, call 911 or go to
            the nearest emergency room.
          </p>

          <div className="mt-6 space-y-4">
            <a
              href="tel:988"
              className="block rounded-2xl bg-white px-5 py-4 text-center font-bold text-slate-950"
            >
              Call or text 988 — Suicide & Crisis Lifeline
            </a>

            <a
              href="sms:988"
              className="block rounded-2xl bg-white/10 px-5 py-4 text-center font-bold text-white ring-1 ring-white/15"
            >
              Text 988
            </a>
          </div>

          <p className="mt-5 text-sm leading-6 text-white/60">
            Noelle's Light is still being built. This page is not monitored 24/7
            and should not be used for emergencies.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/50">
        Created in memory of Noelle Ryan Strain.
      </footer>
    </main>
  );
}
