const resources = [
  {
    category: "Crisis Help",
    items: [
      {
        name: "988 Suicide & Crisis Lifeline",
        description: "Call or text 988 if you or someone else is in emotional distress or crisis.",
        action: "Call or Text 988",
        href: "tel:988",
      },
      {
        name: "Crisis Text Line",
        description: "Text HOME to 741741 to connect with a trained crisis counselor.",
        action: "Text HOME",
        href: "sms:741741?body=HOME",
      },
      {
        name: "Emergency Services",
        description: "If someone is in immediate danger, call emergency services.",
        action: "Call 911",
        href: "tel:911",
      },
    ],
  },
  {
    category: "Youth & Teen Support",
    items: [
      {
        name: "The Trevor Project",
        description: "Crisis support for LGBTQ+ young people.",
        action: "Visit Trevor Project",
        href: "https://www.thetrevorproject.org/get-help/",
      },
      {
        name: "Teen Line",
        description: "Teen-to-teen support for young people who need someone to talk to.",
        action: "Visit Teen Line",
        href: "https://www.teenline.org/",
      },
    ],
  },
  {
    category: "Mental Health & Treatment",
    items: [
      {
        name: "FindTreatment.gov",
        description: "Find mental health and substance use treatment near you.",
        action: "Find Treatment",
        href: "https://findtreatment.gov/",
      },
      {
        name: "NAMI",
        description: "Mental health education, support, and local affiliate resources.",
        action: "Visit NAMI",
        href: "https://www.nami.org/",
      },
    ],
  },
  {
    category: "Grief & Loss",
    items: [
      {
        name: "The Dinner Party",
        description: "Peer support for grieving young adults.",
        action: "Visit The Dinner Party",
        href: "https://www.thedinnerparty.org/",
      },
      {
        name: "Dougy Center",
        description: "Grief support resources for children, teens, young adults, and families.",
        action: "Visit Dougy Center",
        href: "https://www.dougy.org/",
      },
    ],
  },
  {
    category: "Local Help",
    items: [
      {
        name: "211",
        description: "Connects people with local food, housing, mental health, utility, and family support resources.",
        action: "Call 211",
        href: "tel:211",
      },
      {
        name: "Stanislaus County Behavioral Health & Recovery Services",
        description: "Local mental health and recovery services for Stanislaus County.",
        action: "Visit Stanislaus BHRS",
        href: "https://www.stancounty.com/bhrs/",
      },
    ],
  },
];

export default function SupportPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02030f] px-5 py-12 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.38),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.28),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.30),_transparent_35%),linear-gradient(180deg,_#02030f_0%,_#07071f_45%,_#02030f_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.75)_1px,_transparent_1px)] [background-size:26px_26px]" />

      <section className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-200/80">
          Support Directory
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Find Help When You Need It
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
          A simple place to find crisis support, grief resources, mental health help,
          recovery support, and local services.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="tel:988"
            className="rounded-full bg-pink-200 px-8 py-3 text-sm font-bold text-slate-950"
          >
            Call 988 Now
          </a>

          <a
            href="/"
            className="rounded-full border border-white/15 bg-white/10 px-8 py-3 text-sm font-bold text-white"
          >
            Back Home
          </a>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl space-y-10">
        {resources.map((group) => (
          <div key={group.category}>
            <h2 className="mb-5 text-2xl font-bold">{group.category}</h2>

            <div className="grid gap-5 md:grid-cols-2">
              {group.items.map((item) => (
                <article
                  key={item.name}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold">{item.name}</h3>

                  <p className="mt-3 leading-7 text-white/70">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-5 inline-block rounded-full bg-white px-6 py-2 text-sm font-bold text-slate-950"
                  >
                    {item.action}
                  </a>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-4xl rounded-3xl border border-red-300/20 bg-red-300/10 p-8 text-center">
        <h2 className="text-2xl font-bold">Important</h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
          Noelle&apos;s Light is not monitored 24/7 and does not replace emergency,
          medical, or mental health care. If someone is in immediate danger, call 911.
          If you are in crisis, call or text 988.
        </p>
      </section>
    </main>
  );
}
