import Image from "next/image";

const serviceAreaLinks = [
  "Bellingham", "Ferndale", "Lynden", "Birch Bay",
  "Sudden Valley", "Blaine", "Everson", "Sumas",
];

const serviceLinks = [
  "Pressure Washing", "Roof Cleaning", "Siding & Gutters",
  "Lawn Care", "Seasonal Bundles",
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70 border-t border-white/5" role="contentinfo">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12">
                <Image src="/logo.png" alt="Ferndale Shield Exteriors" fill className="object-contain" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg leading-tight">Ferndale Shield</p>
                <p className="text-forest-400 text-xs font-semibold uppercase tracking-widest">Exteriors</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Bellingham&apos;s premier eco-friendly pressure washing &amp; lawn care. Protecting your property and our waterways since day one.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 bg-forest-400 rounded-full animate-pulse-soft" />
              Licensed &amp; Insured · Whatcom County
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm hover:text-forest-400 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreaLinks.map((area) => (
                <li key={area}>
                  <a href="#areas" className="text-sm hover:text-forest-400 transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <a href="tel:+13605550132" className="flex items-center gap-3 hover:text-forest-400 transition-colors">
                <svg className="w-4 h-4 text-forest-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (360) 555-0132
              </a>
              <a href="mailto:info@ferndaleshieldexteriors.com" className="flex items-center gap-3 hover:text-forest-400 transition-colors">
                <svg className="w-4 h-4 text-forest-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@ferndaleshieldexteriors.com
              </a>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-forest-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon–Fri 7am–7pm · Sat 8am–5pm
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Ferndale Shield Exteriors. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <span>Bellingham, WA</span>
            <span>·</span>
            <span>Eco Water Reclamation</span>
            <span>·</span>
            <span>Licensed &amp; Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
