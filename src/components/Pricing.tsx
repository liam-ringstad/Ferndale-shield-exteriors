"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const bundles = [
  {
    name: "Spring Refresh",
    tagline: "Most Popular",
    price: "$449",
    originalPrice: "$575",
    savings: "Save $126",
    description: "Complete exterior revival to shake off the PNW winter. Perfect for getting your home ready for summer.",
    features: [
      "Full driveway & walkway pressure wash",
      "House siding soft wash (up to 2,500 sq ft)",
      "Gutter cleaning & flush",
      "One lawn mow + edge + blow",
      "Eco water reclamation included",
    ],
    cta: "Book Spring Refresh",
    featured: true,
    urgency: "Limited spots — Spring 2026",
  },
  {
    name: "Curb Appeal Boost",
    tagline: "Quick Wins",
    price: "$249",
    originalPrice: "$310",
    savings: "Save $61",
    description: "Targeted exterior clean for maximum impact. Ideal for pre-listing prep or quick property refresh.",
    features: [
      "Driveway OR patio pressure wash",
      "Front walkway cleaning",
      "Front-facing siding wash",
      "Eco water reclamation included",
    ],
    cta: "Book Curb Appeal",
    featured: false,
    urgency: "Book by May 31, 2026",
  },
  {
    name: "Total Shield Package",
    tagline: "Best Value",
    price: "$799",
    originalPrice: "$1,050",
    savings: "Save $251",
    description: "The ultimate property transformation. Everything your home needs inside one comprehensive package.",
    features: [
      "Full driveway, walkways & patio wash",
      "Complete house siding soft wash",
      "Roof soft wash & moss treatment",
      "Gutter cleaning inside & out",
      "Full lawn service (mow, edge, fertilize)",
      "Eco water reclamation included",
      "30-day satisfaction guarantee",
    ],
    cta: "Book Total Shield",
    featured: false,
    urgency: "Only 10 slots per month",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-forest-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60" />

      <div className="container-max relative">
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">
            🌸 Spring 2026 Specials
          </span>
          <h2 className="heading-lg text-navy-900 mb-4">
            Seasonal Bundles &amp; Pricing
          </h2>
          <p className="body-md text-silver-500 max-w-2xl mx-auto">
            Lock in spring pricing before the summer rush. Bundle and save up to 25% on our most popular services.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {bundles.map((bundle, i) => (
            <AnimateOnScroll key={bundle.name} delay={i * 0.12} variant="slideUp">
              <div
                className={`relative rounded-3xl p-8 h-full flex flex-col ${
                  bundle.featured
                    ? "bg-gradient-to-br from-navy-900 via-navy-800 to-forest-700 text-white ring-2 ring-forest-500/50 shadow-2xl shadow-navy-900/20 scale-[1.02]"
                    : "card-elevated"
                }`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${
                      bundle.featured
                        ? "bg-forest-500/30 text-forest-300"
                        : "bg-forest-50 text-forest-700"
                    }`}
                  >
                    {bundle.tagline}
                  </span>
                  <span
                    className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                      bundle.featured
                        ? "bg-amber-400/20 text-amber-300"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {bundle.savings}
                  </span>
                </div>

                <h3
                  className={`heading-sm mb-2 ${
                    bundle.featured ? "text-white" : "text-navy-900"
                  }`}
                >
                  {bundle.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className={`text-4xl font-display font-bold ${
                      bundle.featured ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {bundle.price}
                  </span>
                  <span
                    className={`text-lg line-through ${
                      bundle.featured ? "text-white/40" : "text-silver-400"
                    }`}
                  >
                    {bundle.originalPrice}
                  </span>
                </div>

                <p
                  className={`text-sm mb-6 ${
                    bundle.featured ? "text-white/60" : "text-silver-500"
                  }`}
                >
                  {bundle.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {bundle.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          bundle.featured ? "text-forest-400" : "text-forest-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={bundle.featured ? "text-white/80" : "text-navy-700"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                    bundle.featured
                      ? "bg-forest-500 hover:bg-forest-400 text-white shadow-lg shadow-forest-500/30"
                      : "btn-outline text-sm"
                  }`}
                >
                  {bundle.cta}
                </a>

                {/* Urgency */}
                <p
                  className={`text-center text-xs mt-4 font-medium ${
                    bundle.featured ? "text-amber-300" : "text-amber-600"
                  }`}
                >
                  ⏰ {bundle.urgency}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-12">
          <p className="text-silver-400 text-sm">
            All bundles include eco water reclamation · Prices for standard residential properties · Custom quotes for larger properties
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
