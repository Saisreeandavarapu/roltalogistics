import React from 'react';
import { Phone, MapPin, ExternalLink, ShieldCheck, Truck, ArrowRight, CheckCircle2, MessageSquare, Building2, Globe, Route } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SEO from '../components/SEO';
import { getBreadcrumbSchema, BUSINESS_INFO, SITE_URL } from '../seoConfig';
import { CONTACT_CONFIG, buildGeneralWhatsAppUrl } from '../config/contactConfig';

/**
 * Authentic WhatsApp SVG Icon Component
 */
function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function Contact() {
  const [infoRef, infoVisible] = useScrollReveal({ threshold: 0.12 });
  const [mapsRef, mapsVisible] = useScrollReveal({ threshold: 0.15 });

  const contactSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact roltaLogistics — FTL Freight Transportation',
      'description': 'Contact roltaLogistics to book Full Truck Load freight transport or request a price quote directly on WhatsApp or phone.',
      'url': `${SITE_URL}/contact`,
      'mainEntity': {
        '@type': 'LogisticsService',
        'name': CONTACT_CONFIG.companyName,
        'telephone': CONTACT_CONFIG.phoneDisplay,
        'hasMap': CONTACT_CONFIG.mapsUrl,
        'areaServed': CONTACT_CONFIG.coverage,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': BUSINESS_INFO.address.addressLocality,
          'addressRegion': BUSINESS_INFO.address.addressRegion,
          'addressCountry': BUSINESS_INFO.address.addressCountry,
        },
      },
    },
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact Us', url: '/contact' },
    ]),
  ];

  return (
    <div className="space-y-0">
      {/* Dynamic SEO & Contact Schema */}
      <SEO
        title="Contact roltaLogistics | FTL Transportation Enquiry & WhatsApp Quote"
        description="Contact roltaLogistics for Full Truck Load (FTL) truck transportation across India. Send enquiries directly via WhatsApp or phone (+91 77831589 / +91 9177831589) for fast corridor freight rates."
        canonical="/contact"
        keywords="Contact logistics company, request logistics quotation, truck transport quote, WhatsApp logistics enquiry, freight rates Hyderabad, FTL pricing India"
        schema={contactSchema}
      />

      {/* Main Two-Column Contact Section */}
      <section ref={infoRef} className="py-12 sm:py-16 lg:py-20 bg-[#F7F9FC] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* LEFT COLUMN — Contact Information (Section 3) */}
            <div
              className={`lg:col-span-5 space-y-6 sm:space-y-8 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Eyebrow, Heading & Supporting Text */}
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-[#2567A8]/30 text-[#2567A8] text-xs font-bold uppercase tracking-wider">
                  <span>GET IN TOUCH</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                  Let's Move Your Load.
                </h1>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed pt-1">
                  Planning a shipment? Share your pickup location, delivery destination, and cargo requirements. Contact our team to discuss your full truck load transportation needs.
                </p>
              </div>

              {/* Direct Company & Logistics Credentials Card */}
              <div className="bg-white border border-gray-200 p-6 sm:p-8 shadow-xs space-y-5">
                <h2 className="text-lg font-extrabold text-[#111827] pb-3 border-b border-gray-100 flex items-center justify-between">
                  <span>Official Contact Details</span>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Verified Business</span>
                </h2>

                {/* Company Name */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-[#F7F9FC] border border-gray-200 text-[#2567A8] shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Company</p>
                    <p className="text-sm font-extrabold text-[#111827]">{CONTACT_CONFIG.companyName}</p>
                  </div>
                </div>

                {/* Service */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-[#F7F9FC] border border-gray-200 text-[#2567A8] shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Service</p>
                    <p className="text-sm font-extrabold text-[#111827]">{CONTACT_CONFIG.service}</p>
                    <p className="text-xs text-gray-500">Dedicated vehicles • Zero transshipment</p>
                  </div>
                </div>

                {/* Coverage */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-[#F7F9FC] border border-gray-200 text-[#2567A8] shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Coverage</p>
                    <p className="text-sm font-extrabold text-[#111827]">{CONTACT_CONFIG.coverage}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-[#F7F9FC] border border-gray-200 text-[#2567A8] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Phone</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={CONTACT_CONFIG.phoneTel}
                        className="text-base font-extrabold text-[#111827] hover:text-[#2567A8] transition-colors"
                      >
                        {CONTACT_CONFIG.phoneDisplayLegacy}
                      </a>
                      <span className="text-xs text-gray-400">/</span>
                      <a
                        href={CONTACT_CONFIG.phoneTel}
                        className="text-base font-extrabold text-[#111827] hover:text-[#2567A8] transition-colors"
                      >
                        {CONTACT_CONFIG.phoneDisplay}
                      </a>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">Direct line for transport planning</p>
                  </div>
                </div>

                {/* WhatsApp Line */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-600 shrink-0">
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">WhatsApp</p>
                    <p className="text-sm font-extrabold text-emerald-700">Official roltaLogistics WhatsApp Number</p>
                    <p className="text-xs text-gray-500 mt-0.5">Click below to chat directly with our coordinators</p>
                  </div>
                </div>

                {/* Daily Corridor Routes */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#2567A8] uppercase tracking-wider mb-2.5">
                    <Route className="w-3.5 h-3.5" />
                    <span>Primary Daily Routes</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {CONTACT_CONFIG.routes.map((city, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-1 bg-[#F7F9FC] border border-gray-200 text-xs font-semibold text-gray-800"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* PROMINENT WHATSAPP CONTACT BUTTON (Section 3 Requirement) */}
              <div className="bg-[#111827] text-white border border-gray-800 p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F6DE50] uppercase tracking-wider">
                    Instant Mobile Communication
                  </span>
                  <span className="inline-flex items-center text-[11px] bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 px-2 py-0.5 font-mono">
                    Online
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    Chat Directly on WhatsApp
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    Have an urgent load requirement or want to discuss immediate vehicle availability? Reach out directly to our team via WhatsApp.
                  </p>
                </div>

                <a
                  href={buildGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open WhatsApp conversation with roltaLogistics"
                  className="w-full inline-flex items-center justify-center space-x-3 py-3.5 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 active:scale-98 shadow-md group select-none"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Start WhatsApp Conversation</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>

                <p className="text-[11px] text-gray-400 text-center">
                  Opens official chat with verified number: <span className="text-gray-200 font-mono">+{CONTACT_CONFIG.whatsappNumber}</span>
                </p>
              </div>

              {/* Office Location Box */}
              <div className="bg-white border border-gray-200 p-6 shadow-xs flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#F7F9FC] border border-gray-200 text-[#2567A8]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Hyderabad Office</p>
                    <p className="text-xs font-bold text-[#111827]">Central Logistics Hub, Hyderabad</p>
                  </div>
                </div>
                <a
                  href={CONTACT_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-[#2567A8] hover:underline"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN — Contact Form (Section 3 & 4) */}
            <div
              className={`lg:col-span-7 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '120ms' }}
            >
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Section Preserved from original */}
      <section ref={mapsRef} className="py-14 sm:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-[#F7F9FC] border border-gray-200 p-8 text-center max-w-4xl mx-auto space-y-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              mapsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="w-12 h-12 bg-white text-[#2567A8] border border-gray-200 flex items-center justify-center mx-auto shadow-xs">
              <MapPin className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-extrabold text-[#111827]">
              Visit or Locate roltaLogistics
            </h3>

            <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
              Find our exact dispatch and office pin on Google Maps for operational coordination, truck movement planning, or in-person business meetings.
            </p>

            <div className="pt-2">
              <a
                href={CONTACT_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#111827] hover:bg-[#2567A8] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:scale-98 border border-gray-700 shadow-xs"
              >
                <span>View Verified Google Maps Pin</span>
                <ExternalLink className="w-4 h-4 ml-2 text-[#F6DE50]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
