"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const benefits = [
  {
    icon: "🌿",
    title: "Eco-Friendly Process",
    description:
      "Our water reclamation system captures 100% of wastewater, protecting Bellingham Bay and local waterways from chemical runoff.",
    accent: "from-forest-50 to-forest-100",
    iconBg: "bg-forest-100",
  },
  {
    icon: "⚡",
    title: "Fast Response Times",
    description:
      "Most quotes within 1 hour. Scheduling within 48 hours. We know your time is valuable — we show up on time, every time.",
    accent: "from-amber-50 to-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    icon: "✅",
    title: "Satisfaction Guaranteed",
    description:
      'If you\'re not 100% thrilled, we\'ll re-do the job free of charge. Our "Shield Promise" means your property is protected.',
    accent: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    icon: "📍",
    title: "Local Whatcom Team",
    description:
      "We live and work in Whatcom County. Our team knows the local climate, common issues, and what PNW properties need.",
    accent: "from-purple-50 to-purple-100",
    iconBg: "bg-purple-100",
  },
  {
    icon: "🏅",
    title: "25+ Years Experience",
    description:
      "Our combined team experience means we've tackled every type of surface, stain, and challenge the Northwest weather can throw at a property.",
    accent: "from-rose-50 to-rose-100",
    iconBg: "bg-rose-100",
  },
  {
    icon: "🔒",
    title: "Licensed & Fully Insured",
    description:
      "Peace of mind with full liability coverage and proper licensing. We protect your property like it's our own.",
    accent: "from-teal-50 to-teal-100",
    iconBg: "bg-teal-100",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-white relative">
      <div className="container-max">
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">
            💎 The Ferndale Shield Difference
          </span>
          <h2 className="heading-lg text-navy-900 mb-4">
            Why Whatcom County Trusts Us
          </h2>
          <p className="body-md text-silver-500 max-w-2xl mx-auto">
            We&apos;re not just another pressure washing company. Here&apos;s what sets Ferndale Shield Exteriors apart.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <AnimateOnScroll key={b.title} delay={i * 0.1}>
              <div className="card-elevated p-8 h-full group">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${b.accent} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {b.icon}
                </div>
                <h3 className="heading-sm text-navy-900 mb-3">{b.title}</h3>
                <p className="text-silver-500 leading-relaxed">{b.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
