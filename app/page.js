export default function SteppeWarriorsLanding() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),_transparent_35%),linear-gradient(to_bottom,rgba(12,10,9,0.55),rgba(12,10,9,0.92))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Mongolia Luxury Camping</div>
              <div className="text-xl font-semibold tracking-wide">STEPPE WARRIORS</div>
            </div>
            <a href="#contact" className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-stone-950 transition hover:bg-amber-300">
              Book Your Journey
            </a>
          </header>

          <div className="grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-amber-200">
                Exclusive Nomadic Experience
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                Luxury Camping in the Wild Heart of Mongolia
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                Discover Mongolia with Steppe Warriors — a premium camping experience designed for travelers who want
                untouched landscapes, authentic culture, and the comfort of a private luxury camp.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#experiences" className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15">
                  Explore Experiences
                </a>
                <a href="#contact" className="rounded-full border border-amber-300/40 px-6 py-3 text-sm font-medium text-amber-200 hover:bg-amber-300/10">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Private Luxury Camp", "Spacious tent, premium bedding, private comfort setup"],
                  ["Chef-Curated Meals", "Fresh outdoor dining prepared to your taste"],
                  ["Flexible Routes", "Terelj, Gobi, lakes, mountains, and tailor-made journeys"],
                  ["Safe & Fully Guided", "Experienced local team for a smooth and worry-free trip"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-stone-900/70 p-5">
                    <h3 className="text-base font-semibold text-amber-200">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Luxury in Nature", "Enjoy the beauty of Mongolia without giving up comfort. Our camps are designed for privacy, relaxation, and premium service."],
            ["Authentic Experiences", "Ride across the steppe, sleep under the stars, meet nomadic families, and connect with the spirit of Mongolia."],
            ["Tailor-Made Journeys", "From luxury camping escapes to adventure expeditions, we create flexible itineraries for couples, families, and private groups."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-lg">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-4 text-base leading-7 text-stone-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experiences" className="bg-stone-900/80">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Signature Experiences</div>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Journeys Designed Around Comfort and Adventure</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Terelj Luxury Escape",
                text: "A refined short getaway with mountain landscapes, scenic walks, and a private camp experience near Ulaanbaatar.",
              },
              {
                title: "Gobi Desert Prestige Tour",
                text: "Explore dunes, canyons, cliffs, and open desert horizons while staying in a premium mobile camp setup.",
              },
              {
                title: "Custom Mongolia Expedition",
                text: "Create your own route with hiking, horseback riding, fishing, nomadic culture, and luxury camping anywhere in Mongolia.",
              },
            ].map((item) => (
              <div key={item.title} className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-7 transition hover:-translate-y-1 hover:border-amber-300/30">
                <div className="mb-5 h-48 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(251,191,36,0.18),rgba(255,255,255,0.04))]" />
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-amber-300/15 bg-amber-300/5 p-8">
            <div className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Why Steppe Warriors</div>
            <h2 className="mt-4 text-4xl font-semibold">A Premium Standard for Mongolia Travel</h2>
            <p className="mt-5 text-base leading-8 text-stone-300">
              We combine wild landscapes with thoughtful comfort — luxury tented camping, private service, personalized
              itineraries, and a team dedicated to safety and unforgettable experiences.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Private toilet & shower setup",
              "Electricity & internet in camp",
              "Professional chef and outdoor dining",
              "Comfortable beds and premium linens",
              "English-speaking guided service",
              "Ideal for 1–12 guests and private groups",
            ].map((item) => (
              <div key={item} className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 text-base text-stone-200 shadow-md">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-stone-950">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Contact</div>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Plan Your Luxury Camping Journey</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
                Tell us your preferred route, travel dates, and group size. We will create a private Mongolia journey that
                matches your style, pace, and comfort level.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
              <div className="space-y-5 text-sm text-stone-300">
                <div>
                  <div className="text-stone-400">Phone</div>
                  <div className="mt-1 text-lg font-medium text-white">+976 XX XX XXXX</div>
                </div>
                <div>
                  <div className="text-stone-400">Email</div>
                  <div className="mt-1 text-lg font-medium text-white">hello@steppewarriors.mn</div>
                </div>
                <div>
                  <div className="text-stone-400">Instagram</div>
                  <div className="mt-1 text-lg font-medium text-white">@steppewarriors</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-stone-950 hover:bg-amber-300">
                  WhatsApp Us
                </a>
                <a href="#" className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium hover:bg-white/10">
                  View Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
