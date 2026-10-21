import React from 'react';
import { Phone, MapPin, ExternalLink, ShieldCheck, Truck } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SEO from '../components/SEO';
import { getBreadcrumbSchema, BUSINESS_INFO, SITE_URL } from '../seoConfig';

export default function Contact() {
  const [infoRef, infoVisible] = useScrollReveal({ threshold: 0.15 });
  const [mapsRef, mapsVisible] = useScrollReveal({ threshold: 0.15 });

  const contactSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact roltaLogistics',
      'description': 'Contact roltaLogistics to book Full Truck Load freight transport or request a price quote.',
      'url': `${SITE_URL}/contact`,
      'mainEntity': {
        '@type': 'LogisticsService',
        'name': BUSINESS_INFO.name,
        'telephone': BUSINESS_INFO.telephone,
        'hasMap': BUSINESS_INFO.mapsUrl,
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
        title="Contact roltaLogistics | Request a Logistics Quotation"
        description="Contact roltaLogistics to request a Full Truck Load (FTL) quote. Direct phone support (+91 77831589), verified Google Maps location, and fast freight dispatch planning."
        canonical="/contact"
        keywords="Contact logistics company, request logistics quotation, truck transport quote, freight rates Hyderabad, FTL pricing India"
        schema={contactSchema}
      />
      {/* Contact Hero Header */}
      <section className="bg-white border-b border-gray-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 animate-[sectionFadeUp_600ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F7F9FC] border border-[#2567A8]/30 text-[#2567A8] text-xs font-bold uppercase tracking-wider">
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
              Let's Move Your Load.
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Tell us your pickup location, destination, and shipment requirements. Our transport team will organize your Full Truck Load (FTL) movement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Details Grid */}
      <section ref={infoRef} className="py-16 sm:py-24 bg-[#F7F9FC] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Information Column */}
            <div
              className={`lg:col-span-5 space-y-8 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              
              <div className="bg-white border border-gray-200 p-8 shadow-xs space-y-6">
                <h2 className="text-xl font-extrabold text-[#111827] pb-3 border-b border-gray-100">
                  Direct Contact Information
                </h2>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F7F9FC] border border-gray-200 text-[#2567A8] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Inquiry</p>
                    <a
                      href="tel:+9177831589"
                      className="text-lg font-extrabold text-[#111827] hover:text-[#2567A8] transition-colors"
                    >
                      +91 77831589
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">Direct line for transport planning</p>
                  </div>
                </div>

                {/* Service Scope */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F7F9FC] border border-gray-200 text-[#2567A8] shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Service Focus</p>
                    <p className="text-sm font-extrabold text-[#111827]">Pan-India Full Truck Load (FTL)</p>
                    <p className="text-xs text-gray-500 mt-0.5">Dedicated truck capacity only</p>
                  </div>
                </div>

                {/* Vehicle Type */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F7F9FC] border border-gray-200 text-[#2567A8] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Vehicle Type</p>
                    <p className="text-sm font-extrabold text-[#111827]">Freight Trucks Only</p>
                    <p className="text-xs text-gray-500 mt-0.5">Multi-axle, container & open-body trucks</p>
                  </div>
                </div>

                {/* Primary Daily Corridors */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-[#2567A8] uppercase tracking-wider mb-2">
                    Primary Daily Corridors
                  </p>
                  <p className="text-xs font-semibold text-gray-800">
                    Hyderabad ↔ Bhubaneswar • Kolkata • Siliguri • Guwahati
                  </p>
                </div>
              </div>

              {/* Google Maps Location Info Box */}
              <div className="bg-[#111827] text-white border border-gray-800 p-8 shadow-xs space-y-4">
                <div className="flex items-center space-x-2 text-[#F6DE50]">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-base font-extrabold uppercase tracking-wider">Office Location</h3>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  Connect with our transport team or visit our verified Google Maps location link below:
                </p>

                <div className="pt-2">
                  <a
                    href="https://maps.app.goo.gl/tGRmDj36vXuapWND6?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-5 py-3 bg-[#F6DE50] hover:bg-[#ebd23c] text-[#111827] font-bold text-xs border border-[#e0c735] transition-all duration-200 hover:-translate-y-0.5 active:scale-98 group"
                  >
                    <span>Open Location in Google Maps</span>
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Quote Request Form Column */}
            <div
              className={`lg:col-span-7 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section ref={mapsRef} className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-[#F7F9FC] border border-gray-200 p-8 text-center max-w-4xl mx-auto space-y-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              mapsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="w-12 h-12 bg-white text-[#2567A8] border border-gray-200 flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-extrabold text-[#111827]">
              Google Maps Location
            </h3>

            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Access the exact location pin of roltaLogistics on Google Maps for directions and office location details.
            </p>

            <div className="pt-2">
              <a
                href="https://maps.app.goo.gl/tGRmDj36vXuapWND6?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#111827] hover:bg-[#2567A8] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:scale-98 border border-gray-700"
              >
                <span>View Google Maps Pin</span>
                <ExternalLink className="w-4 h-4 ml-2 text-[#F6DE50]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
