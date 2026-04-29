"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Driveway & Concrete",
    price: "From $149",
    description: "Remove years of grime, oil stains, and moss from driveways, patios, and walkways. Our hot-water system cuts through the toughest buildup.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: ["Oil & rust stain removal", "Moss & algae treatment", "Concrete sealing available"],
  },
  {
    title: "Roof Cleaning",
    price: "From $299",
    description: "Soft-wash technology safely removes black streaks, moss, and algae without damaging shingles. Extend your roof's lifespan by years.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ["Soft-wash safe process", "Moss prevention treatment", "All roof types"],
  },
  {
    title: "Siding & Gutters",
    price: "From $199",
    description: "Restore your home's curb appeal with deep-clean siding treatment and thorough gutter clearing — inside and out.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    features: ["Vinyl, wood & fiber cement", "Gutter flush & debris removal", "Downspout clearing"],
  },
  {
    title: "Lawn Care & Maintenance",
    price: "From $79/visit",
    description: "Complete lawn programs: mowing, edging, fertilization, aeration, and seasonal cleanups tailored to the Pacific Northwest climate.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    features: ["Weekly / bi-weekly mowing", "Fertilization programs", "Fall & spring cleanups"],
  },
  {
    title: "Seasonal Bundles",
    price: "Save 15–25%",
    description: "Combine services for maximum savings. Our Spring Refresh and Fall Shield bundles keep your property pristine year-round.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ["Spring Refresh bundle", "Fall Shield package", "Year-round maintenance plans"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-60" />

      <div className="container-max relative">
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Our Services
          </span>
          <h2 className="heading-lg text-navy-900 mb-4">
            Professional Exterior Cleaning & Lawn Care
          </h2>
          <p className="body-md text-silver-500 max-w-2xl mx-auto">
            From pressure washing to complete lawn maintenance — we deliver results that transform your property and protect your investment.
          </p>
        </AnimateOnScroll>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 0.1}>
              <div className="card-elevated p-8 h-full flex flex-col group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-forest-50 to-forest-100 flex items-center justify-center text-forest-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="heading-sm text-navy-900">{service.title}</h3>
                  <span className="text-forest-600 font-bold text-sm bg-forest-50 px-3 py-1 rounded-full whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
                <p className="text-silver-500 mb-5 flex-1 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-navy-700">
                      <svg className="w-4 h-4 text-forest-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Eco Water Reclamation Highlight */}
        <AnimateOnScroll variant="scaleIn">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-forest-700 p-8 md:p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-forest-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy-500/20 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-500/20 border border-forest-500/30 text-forest-300 text-sm font-semibold mb-6">
                  🌿 Our Differentiator
                </span>
                <h3 className="heading-md text-white mb-4">
                  Eco Water Reclamation Technology
                </h3>
                <p className="body-md text-white/70 mb-6">
                  Unlike conventional pressure washers, we capture, filter, and properly dispose of all wastewater. No harmful chemicals or dirty runoff enter Bellingham&apos;s streams, Bellingham Bay, or storm drains.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "100% wastewater captured & filtered",
                    "No chemical runoff into waterways",
                    "Compliant with WA state environmental regulations",
                    "Protects Bellingham Bay & local ecosystems",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <span className="w-6 h-6 rounded-full bg-forest-500/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-forest-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary">
                  Learn More About Our Eco Process
                </a>
              </div>
              <div className="w-full lg:w-80 xl:w-96 aspect-square rounded-2xl bg-gradient-to-br from-forest-500/20 to-navy-500/20 border border-white/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💧</div>
                  <p className="text-3xl font-display font-bold text-white mb-2">0 gal</p>
                  <p className="text-white/60 text-sm">Harmful runoff per job</p>
                  <div className="w-16 h-px bg-white/20 mx-auto my-4" />
                  <p className="text-3xl font-display font-bold text-forest-400 mb-2">100%</p>
                  <p className="text-white/60 text-sm">Water recaptured & filtered</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
