"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const galleryItems = [
  {
    before: "/gallery/edgemoor-siding-before.jpg",
    after: "/gallery/edgemoor-siding-after.jpg",
    location: "Edgemoor",
    service: "Driveway & Siding Wash",
    alt: "Before and after pressure washing of a home exterior in Edgemoor, Bellingham",
  },
  {
    before: "/gallery/fairhaven-full-before.jpg",
    after: "/gallery/fairhaven-full-after.jpg",
    location: "Fairhaven",
    service: "Full Exterior Clean",
    alt: "Before and after full exterior cleaning of a Fairhaven residence",
  },
  {
    before: "/gallery/hill-roof-before.jpg",
    after: "/gallery/hill-roof-after.jpg",
    location: "South Hill",
    service: "Roof Soft Wash",
    alt: "Before and after roof cleaning on South Hill, Bellingham",
  },
  {
    before: "/gallery/valley-deck-before.jpg",
    after: "/gallery/valley-deck-after.jpg",
    location: "Sudden Valley",
    service: "Deck & Patio Restoration",
    alt: "Before and after deck restoration at Sudden Valley",
  },
  {
    before: "/gallery/bay-gutter-before.jpg",
    after: "/gallery/bay-gutter-after.jpg",
    location: "Birch Bay",
    service: "Siding & Gutter Clean",
    alt: "Before and after siding cleaning at a Birch Bay home",
  },
  {
    before: "/gallery/lettered-lawn-before.jpg",
    after: "/gallery/lettered-lawn-after.jpg",
    location: "Lettered Streets",
    service: "Lawn Renovation",
    alt: "Before and after lawn renovation in Bellingham Lettered Streets neighborhood",
  },
  {
    before: "/gallery/barkley-commercial-before.jpg",
    after: "/gallery/barkley-commercial-after.jpg",
    location: "Barkley",
    service: "Commercial Pressure Wash",
    alt: "Before and after commercial pressure washing in Barkley district",
  },
  {
    before: "/gallery/ferndale-full-before.jpg",
    after: "/gallery/ferndale-full-after.jpg",
    location: "Ferndale",
    service: "Full Property Package",
    alt: "Before and after full property cleaning in Ferndale",
  },
  {
    before: "/gallery/colombia-driveway-before.jpg",
    after: "/gallery/colombia-driveway-after.jpg",
    location: "Columbia",
    service: "Driveway Restoration",
    alt: "Before and after driveway pressure washing in Columbia neighborhood",
  },
  {
    before: "/gallery/lynden-exterior-before.jpg",
    after: "/gallery/lynden-exterior-after.jpg",
    location: "Lynden",
    service: "Exterior Refresh",
    alt: "Before and after exterior refresh of a Lynden home",
  },
];

export default function BeforeAfter() {
  return (
    <section id="gallery" className="section-padding bg-silver-50 relative overflow-hidden">
      <div className="container-max">
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">
            📸 Transformations
          </span>
          <h2 className="heading-lg text-navy-900 mb-4">
            Before &amp; After Gallery
          </h2>
          <p className="body-md text-silver-500 max-w-2xl mx-auto">
            Real results from properties across Whatcom County. Hover or tap to see the transformation.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {galleryItems.map((item, i) => (
            <AnimateOnScroll key={item.location + item.service} delay={i * 0.07} variant="scaleIn">
              <div className="group relative rounded-2xl overflow-hidden shadow-lg shadow-navy-900/5 bg-white border border-silver-200/50 aspect-[4/3]">
                {/* After Image (shown by default) */}
                <Image
                  src={item.after}
                  alt={`After: ${item.alt}`}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Before Image (shown on hover) */}
                <Image
                  src={item.before}
                  alt={`Before: ${item.alt}`}
                  fill
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Label Overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-forest-600 text-white shadow-lg group-hover:bg-red-500 transition-colors duration-300">
                    <span className="group-hover:hidden">After</span>
                    <span className="hidden group-hover:inline">Before</span>
                  </span>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent">
                  <p className="text-white font-semibold text-sm">{item.service}</p>
                  <p className="text-white/70 text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                  </p>
                </div>

                {/* Hover instruction */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="px-4 py-2 bg-navy-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    👆 Viewing Before
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-10">
          <p className="text-silver-400 text-sm">
            Hover or tap any image to see the before state · All photos from actual Whatcom County projects
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
