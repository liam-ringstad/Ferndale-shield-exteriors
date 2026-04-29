import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Ferndale Shield Exteriors | Eco-Friendly Pressure Washing & Lawn Care — Bellingham, WA",
  description:
    "Bellingham's premier eco-friendly pressure washing and lawn care service. Driveways, roofs, siding, gutters, and seasonal lawn care with eco water reclamation. 25+ years combined experience. Licensed & insured. Serving Whatcom County.",
  keywords: [
    "pressure washing Bellingham",
    "power washing Bellingham WA",
    "lawn care Bellingham",
    "eco-friendly pressure washing",
    "roof cleaning Bellingham",
    "gutter cleaning Whatcom County",
    "driveway cleaning Bellingham",
    "Ferndale pressure washing",
    "Sudden Valley power washing",
    "Birch Bay lawn care",
    "eco water reclamation",
    "exterior cleaning Bellingham WA",
  ],
  authors: [{ name: "Ferndale Shield Exteriors" }],
  creator: "Ferndale Shield Exteriors",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ferndaleshieldexteriors.com",
    siteName: "Ferndale Shield Exteriors",
    title:
      "Ferndale Shield Exteriors | Eco-Friendly Pressure Washing & Lawn Care",
    description:
      "Bellingham's premier eco-friendly pressure washing and lawn care service. Results you can see in hours, not days.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ferndale Shield Exteriors - Eco-Friendly Pressure Washing & Lawn Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ferndale Shield Exteriors | Eco-Friendly Pressure Washing & Lawn Care",
    description:
      "Bellingham's premier eco-friendly pressure washing and lawn care. 25+ years experience. Licensed & insured.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ferndaleshieldexteriors.com",
  },
};

// JSON-LD LocalBusiness Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ferndale Shield Exteriors",
  image: "https://ferndaleshieldexteriors.com/logo.png",
  url: "https://ferndaleshieldexteriors.com",
  telephone: "(360) 555-0132",
  email: "info@ferndaleshieldexteriors.com",
  description:
    "Eco-friendly pressure washing and lawn care serving Bellingham and Whatcom County, WA. Specializing in eco water reclamation technology.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ferndale",
    addressRegion: "WA",
    postalCode: "98248",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8468,
    longitude: -122.5906,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Bellingham",
      sameAs: "https://en.wikipedia.org/wiki/Bellingham,_Washington",
    },
    { "@type": "City", name: "Ferndale" },
    { "@type": "City", name: "Lynden" },
    { "@type": "City", name: "Birch Bay" },
    { "@type": "AdministrativeArea", name: "Whatcom County" },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "127",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Exterior Cleaning & Lawn Care Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pressure Washing",
          description:
            "Professional pressure washing for driveways, roofs, siding, and gutters with eco water reclamation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lawn Care & Maintenance",
          description:
            "Complete lawn care and seasonal maintenance for residential and commercial properties.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#0f172a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics placeholder */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}} />
        */}
      </head>
      <body className="font-sans antialiased">
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#0f172a",
              color: "#fff",
              borderRadius: "12px",
              padding: "16px 24px",
              fontSize: "15px",
              fontWeight: "500",
            },
            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#fff",
              },
            },
          }}
        />
        {/* Vercel Analytics placeholder — uncomment after installing @vercel/analytics */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
