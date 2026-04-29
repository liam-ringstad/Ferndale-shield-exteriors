"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trustSignals = [
  { icon: "🏆", text: "25+ Years Combined Experience" },
  { icon: "🛡️", text: "Licensed & Insured" },
  { icon: "⭐", text: "5-Star Google Rating" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      role="banner"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-forest-700" />
      <div className="absolute inset-0 bg-[url('/logo.png')] bg-center bg-no-repeat bg-contain opacity-[0.04]" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-900/40" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-forest-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container-max section-padding pt-32 md:pt-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-500/20 border border-forest-500/30 text-forest-300 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-forest-400 rounded-full animate-pulse-soft" />
              Serving Bellingham &amp; Whatcom County
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="heading-xl text-white mb-6 text-balance"
          >
            Bellingham&apos;s Premier Eco-Friendly{" "}
            <span className="text-forest-400">Pressure Washing</span> &amp;{" "}
            <span className="text-forest-400">Lawn Care</span>
            <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl font-normal text-white/70">
              — Results You Can See in Hours, Not Days
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="body-lg text-white/60 mb-10 max-w-2xl"
          >
            Transform your property with our eco water reclamation technology.
            We protect your home{" "}
            <em>and</em> Bellingham&apos;s waterways — no harsh runoff, just
            stunning results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <a href="#contact" className="btn-primary text-base">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Get Instant Quote
            </a>
            <a href="#pricing" className="btn-secondary text-base">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Book Spring Special
            </a>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-6 md:gap-10"
          >
            {trustSignals.map((signal) => (
              <div
                key={signal.text}
                className="flex items-center gap-3 text-white/70"
              >
                <span className="text-2xl">{signal.icon}</span>
                <span className="text-sm font-medium">{signal.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Shield Logo Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block absolute right-8 xl:right-16 bottom-24 xl:bottom-32"
        >
          <div className="relative w-64 xl:w-80 h-64 xl:h-80 animate-float">
            <Image
              src="/logo.png"
              alt="Ferndale Shield Exteriors shield emblem"
              fill
              className="object-contain opacity-20 drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#services" aria-label="Scroll to services" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
          <span className="text-xs uppercase tracking-widest font-medium">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
