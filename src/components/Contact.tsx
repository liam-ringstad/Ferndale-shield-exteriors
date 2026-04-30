"use client";

import { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import AnimateOnScroll from "./AnimateOnScroll";

const serviceOptions = [
  "Driveway & Concrete Pressure Washing",
  "Roof Soft Wash",
  "Siding Cleaning",
  "Gutter Cleaning",
  "Deck & Patio Restoration",
  "Lawn Care & Maintenance",
  "Spring Refresh Bundle",
  "Curb Appeal Boost Bundle",
  "Total Shield Package",
  "Commercial Property",
  "Other / Multiple Services",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Failed to submit request");
      }

      setSubmitted(true);
      toast.success("Quote request received! We'll respond within 1 hour during business hours.");

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send request. Please try calling us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-forest-700 opacity-50" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-forest-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />

      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <AnimateOnScroll variant="slideLeft">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-500/20 border border-forest-500/30 text-forest-300 text-sm font-semibold mb-6">
              📞 Get In Touch
            </span>
            <h2 className="heading-lg text-white mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="body-md text-white/60 mb-10">
              Fill out the form and we&apos;ll get back to you within 1 hour during business hours (Mon–Fri 7am–7pm, Sat 8am–5pm). Or call us directly — we&apos;re always happy to chat.
            </p>

            <div className="space-y-6">
              <a href="tel:+13603836184" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-forest-500/20 border border-forest-500/30 flex items-center justify-center group-hover:bg-forest-500/30 transition-colors">
                  <svg className="w-5 h-5 text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">(360) 383-6184</p>
                  <p className="text-white/40 text-sm">Call or text anytime</p>
                </div>
              </a>

              <a href="mailto:info@ferndaleshieldexteriors.com" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-forest-500/20 border border-forest-500/30 flex items-center justify-center group-hover:bg-forest-500/30 transition-colors">
                  <svg className="w-5 h-5 text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">info@ferndaleshieldexteriors.com</p>
                  <p className="text-white/40 text-sm">Email for quotes</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-xl bg-forest-500/20 border border-forest-500/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Mon–Fri 7am–7pm · Sat 8am–5pm</p>
                  <p className="text-white/40 text-sm">Business hours</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Form */}
          <AnimateOnScroll variant="slideRight">
            <div className="bg-white/[0.07] backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10 shadow-2xl">
              <h3 className="heading-sm text-white mb-2">Request a Free Quote</h3>
              <p className="text-white/40 text-sm mb-8">No obligation · Response within 1 hour</p>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="heading-sm text-white mb-2">Quote Request Sent!</h4>
                  <p className="text-white/60">We&apos;ll respond within 1 hour during business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text" id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500/50 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-white/70 text-sm font-medium mb-2">Phone *</label>
                      <input
                        type="tel" id="phone" name="phone" required
                        value={formData.phone} onChange={handleChange}
                        placeholder="(360) 555-0000"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email" id="email" name="email" required
                        value={formData.email} onChange={handleChange}
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500/50 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-white/70 text-sm font-medium mb-2">Service Interested In *</label>
                    <select
                      id="service" name="service" required
                      value={formData.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500/50 transition-all appearance-none"
                    >
                      <option value="" className="bg-navy-900">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-navy-900">{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">Message / Details</label>
                    <textarea
                      id="message" name="message" rows={4}
                      value={formData.message} onChange={handleChange}
                      placeholder="Tell us about your property and what you need..."
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-forest-500/50 focus:border-forest-500/50 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-forest-600 hover:bg-forest-500 disabled:bg-forest-600/50 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-forest-600/25 hover:shadow-xl hover:shadow-forest-600/30 hover:-translate-y-0.5 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Quote Request
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-center text-white/30 text-xs">
                    🔒 Your information is secure and never shared.
                  </p>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
