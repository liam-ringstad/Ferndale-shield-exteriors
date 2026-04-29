"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    name: "Sarah & Mike Thompson",
    neighborhood: "Edgemoor",
    rating: 5,
    text: "Our driveway hadn't been cleaned in 8 years and looked terrible. Ferndale Shield made it look brand new in a few hours. The eco reclamation process was a huge plus — we're right near the bay and didn't want chemicals running off.",
    service: "Driveway Pressure Washing",
  },
  {
    name: "David Chen",
    neighborhood: "Fairhaven",
    rating: 5,
    text: "I was quoted $800 elsewhere for my roof cleaning. Ferndale Shield came in at $350 and did an incredible job. The moss is completely gone and they applied a preventative treatment. Already booked them for spring.",
    service: "Roof Soft Wash",
  },
  {
    name: "Jennifer Martinez",
    neighborhood: "South Hill",
    rating: 5,
    text: "They transformed our entire property — pressure washed the siding, cleaned the gutters, and started our lawn on a bi-weekly maintenance plan. The difference is night and day. Neighbors keep asking who we used!",
    service: "Full Property Package",
  },
  {
    name: "Robert & Lisa Anderson",
    neighborhood: "Sudden Valley",
    rating: 5,
    text: "Living in the trees means constant moss and algae. Their team was professional, on time, and thorough. Our deck looks like it did when we first stained it. The eco-friendly approach matters to us out here.",
    service: "Deck & Siding Clean",
  },
  {
    name: "Mark Williams",
    neighborhood: "Birch Bay",
    rating: 5,
    text: "Our vacation rental needed serious curb appeal help. Ferndale Shield pressure washed everything and set up lawn care. Our booking rates have actually increased — guests mention how well-maintained the property looks.",
    service: "Commercial Property",
  },
  {
    name: "Patricia O'Brien",
    neighborhood: "Lettered Streets",
    rating: 5,
    text: "As a Realtor, I recommend Ferndale Shield to all my sellers. They consistently deliver fast, affordable results that boost curb appeal and home value. The spring bundle is an incredible deal.",
    service: "Pre-Sale Exterior Clean",
  },
  {
    name: "James & Karen Foster",
    neighborhood: "Barkley",
    rating: 5,
    text: "We've used three different pressure washing companies over the years. Ferndale Shield is hands down the best. Fair pricing, exceptional work, and they actually care about not damaging your plants and landscaping.",
    service: "Siding & Gutter Clean",
  },
  {
    name: "Emily Nguyen",
    neighborhood: "Columbia",
    rating: 5,
    text: "The lawn care program has been a game-changer. Our yard went from patchy and sad to lush and green in just two months. They adjusted the fertilization plan for our specific soil type. Really impressed.",
    service: "Lawn Care Program",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-silver-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/logo.png')] bg-center bg-no-repeat bg-contain opacity-[0.02]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-500/10 rounded-full blur-3xl" />

      <div className="container-max relative">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-500/20 border border-forest-500/30 text-forest-300 text-sm font-semibold mb-4">
            ⭐ 5-Star Reviews
          </span>
          <h2 className="heading-lg text-white mb-4">
            What Our Neighbors Say
          </h2>
          <p className="body-md text-white/50 max-w-2xl mx-auto">
            Real reviews from real Whatcom County homeowners. Our work speaks for itself.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.08} variant="slideUp">
              <div className="glass-card p-6 h-full flex flex-col">
                <StarRating rating={t.rating} />
                <p className="text-white/80 text-sm leading-relaxed mt-4 mb-6 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {t.neighborhood} · {t.service}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-12">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-white/5 border border-white/10">
            <div>
              <p className="text-3xl font-display font-bold text-white">127+</p>
              <p className="text-white/40 text-xs">5-Star Reviews</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-3xl font-display font-bold text-forest-400">5.0</p>
              <p className="text-white/40 text-xs">Average Rating</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-3xl font-display font-bold text-white">500+</p>
              <p className="text-white/40 text-xs">Projects Completed</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
