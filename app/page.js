import Image from "next/image";

const highlights = [
  "Luxury camping with comfort in remote nature",
  "Private customized routes across Mongolia",
  "Adventure and leisure options for any number of days",
  "Experienced team focused on safety and smooth logistics",
];

const destinations = [
  {
    title: "Ulaanbaatar",
    text: "The capital of Mongolia, combining history, culture, museums, monasteries, modern life, and shopping.",
    image: "/images/image1.jpeg",
  },
  {
    title: "Terelj National Park",
    text: "A scenic area near Ulaanbaatar known for rock formations, green valleys, horse riding, and traditional stays.",
    image: "/images/image13.jpeg",
  },
  {
    title: "Gobi Desert",
    text: "Mongolia’s iconic desert landscape with sand dunes, camel riding, red cliffs, and unforgettable sunsets.",
    image: "/images/image34.jpeg",
  },
  {
    title: "Khuvsgul Lake",
    text: "The Blue Pearl of Mongolia, surrounded by forests and mountains, perfect for peaceful relaxation.",
    image: "/images/image50.jpeg",
  },
  {
    title: "Orkhon Valley",
    text: "A UNESCO-listed cultural landscape with waterfalls, ancient heritage, and nomadic life.",
    image: "/images/image44.jpeg",
  },
  {
    title: "Hustai National Park",
    text: "A protected reserve famous for the rare Przewalski’s horse in its natural habitat.",
    image: "/images/image86.jpeg",
  },
];

const activities = [
  "Hiking and trekking",
  "Horse and camel riding",
  "Fishing and ice fishing",
  "Shooting practice and training",
  "Nomadic life experience",
  "Star gazing and healing time",
];

export default function Home() {
  return (
    <main className="bg-stone-950 text-white">
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/image1.jpeg"
            alt="Steppe Warriors hero"
            fill
            priority
            className="object-cover"
          />
          <div className="overlay absolute inset-0" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/8 px-5 py-3 backdrop-blur">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-amber-300/90">Luxury Camping · Mongolia</div>
              <div className="text-xl font-semibold tracking-wide">STEPPE WARRIORS</div>
            </div>
            <a href="#contact" className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-300">
              Contact Us
            </a>
          </header>

          <div className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-amber-200">
                Comfort · Adventure · Nature
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                Luxury Camping and Adventure Travel in Mongolia
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
                Steppe Warriors creates private journeys across Mongolia with luxury camping, experienced guides,
                cultural immersion, and carefully planned travel for guests seeking both comfort and real adventure.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#destinations" className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15">
                  Explore Destinations
                </a>
                <a href="#activities" className="rounded-full border border-amber-300/40 px-6 py-3 text-sm font-medium text-amber-200 hover:bg-amber-300/10">
                  View Activities
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/25 p-6 shadow-2xl backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-stone-900/75 p-5 text-sm leading-6 text-stone-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Who We Are", "Steppe Warriors is a private security and adventure tourism company founded by Sergeant Major of the Armed Forces (Ret) D. Enkhbayar. The company brings together experienced officers and professionals with fieldcraft, security, and operational knowledge."],
            ["Why Mongolia", "From mountains and grasslands to rivers, lakes, and deserts, Mongolia offers untouched landscapes, open skies, and a true feeling of freedom, peace, and connection with nature."],
            ["Accommodation Style", "Guests can stay in luxury camping setups with comfortable beds, fan and heater support, mobile shower facilities, portable toilets, and a peaceful night under star-filled skies."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-lg">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 text-base leading-7 text-stone-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="destinations" className="bg-stone-900/70">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Must Visit Destinations</div>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Signature Landscapes of Mongolia</h2>
            <p className="mt-5 text-base leading-8 text-stone-300">
              Discover major highlights from the presentation and build a route that matches your group, interests, and time frame.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {destinations.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
                <div className="relative h-56">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-stone-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="activities" className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-amber-300/15 bg-amber-300/5 p-8">
            <div className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Activities</div>
            <h2 className="mt-4 text-4xl font-semibold">Adventure, Culture, and Relaxation</h2>
            <p className="mt-5 text-base leading-8 text-stone-300">
              The presentation highlights a wide variety of travel experiences, from trekking and fishing to nomadic culture,
              outdoor dining, and peaceful healing moments in nature.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {activities.map((item) => (
              <div key={item} className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 text-base text-stone-200 shadow-md">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900/70">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
              <div className="relative h-72">
                <Image src="/images/image50.jpeg" alt="Camping comfort" fill className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="text-3xl font-semibold">Camping Experience with Steppe Warriors</h3>
                <ul className="mt-5 space-y-3 text-stone-300">
                  <li>• Guided by experienced staff with high safety standards</li>
                  <li>• Flexible routes and customized itineraries</li>
                  <li>• Comfortable tent-style accommodation with amenities</li>
                  <li>• Open-air dining, fresh air, peaceful nights, and star-filled skies</li>
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
              <div className="relative h-72">
                <Image src="/images/image34.jpeg" alt="Travel tips and planning" fill className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="text-3xl font-semibold">Travel Tips</h3>
                <ul className="mt-5 space-y-3 text-stone-300">
                  <li>• Weather changes quickly, so layered clothing is recommended</li>
                  <li>• Comfortable walking shoes, sunscreen, sunglasses, and a hat are essential</li>
                  <li>• Cards are common in Ulaanbaatar, while cash is useful in rural areas</li>
                  <li>• Vegetarian food is available with advance notice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-stone-950">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Contact</div>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Plan Your Journey with Steppe Warriors</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
                We create travel programs for any number of days and your chosen route, offering both adventure and leisure options,
                tailored to your budget and travel style.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
              <div className="space-y-5 text-sm text-stone-300">
                <div>
                  <div className="text-stone-400">Phone</div>
                  <div className="mt-1 text-lg font-medium text-white">+976-88102234</div>
                </div>
                <div>
                  <div className="text-stone-400">Email</div>
                  <div className="mt-1 text-lg font-medium text-white">steppewarriorss@gmail.com</div>
                </div>
                <div>
                  <div className="text-stone-400">Address</div>
                  <div className="mt-1 text-lg font-medium text-white">25th khoroo 32/3 (2nd floor), Ulaanbaatar, Mongolia</div>
                </div>
                <div>
                  <div className="text-stone-400">Instagram</div>
                  <div className="mt-1 text-lg font-medium text-white">@steppe_warriors</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:steppewarriorss@gmail.com" className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-stone-950 hover:bg-amber-300">
                  Email Us
                </a>
                <a href="https://instagram.com/steppe_warriors" className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium hover:bg-white/10">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
