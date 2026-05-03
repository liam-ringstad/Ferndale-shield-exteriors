import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Quote Request Received | Ferndale Shield Exteriors",
  description: "Thank you for requesting a quote. We will get back to you shortly.",
};

export default function QuoteReceived() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-navy-900 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-forest-700 opacity-50" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-forest-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />
        
        <div className="container-max relative z-10 text-center max-w-2xl mx-auto px-4">
          <div className="w-20 h-20 bg-forest-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-forest-500/30">
            <svg className="w-10 h-10 text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="heading-xl text-white mb-6">Quote Request Received!</h1>
          <p className="body-lg text-white/70 mb-10">
            Thank you for reaching out to Ferndale Shield Exteriors. We've successfully received your information and our team will get back to you within 1 hour during business hours to discuss your property needs.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-forest-600 hover:bg-forest-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-forest-600/25 hover:shadow-xl hover:shadow-forest-600/30 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
