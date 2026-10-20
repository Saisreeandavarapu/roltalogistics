import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ArrowRight, Route, CheckCircle2, Building2 } from 'lucide-react';
import CTASection from '../components/CTASection';
import aboutTruckImg from '../assets/images/hero_truck_longhaul.jpg';
import operationsImg from '../assets/images/hero_truck_sunset.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const [introRef, introVisible] = useScrollReveal({ threshold: 0.15 });
  const [pillarsRef, pillarsVisible] = useScrollReveal({ threshold: 0.15 });
  const [standardsRef, standardsVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <div className="space-y-0">
      {/* Page Header Hero */}
      <section className="bg-white border-b border-gray-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 animate-[sectionFadeUp_600ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F7F9FC] border border-[#2567A8]/30 text-[#2567A8] text-xs font-bold uppercase tracking-wider">
              <span>COMPANY PRESENTATION</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
              About roltaLogistics
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Dedicated Full Truck Load (FTL) transportation services connecting commercial enterprises and industrial shippers across India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Editorial Presentation */}
      <section ref={introRef} className="py-16 sm:py-24 bg-white border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div
              className={`lg:col-span-6 space-y-6 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F7F9FC] border border-gray-200 text-[#2567A8] text-xs font-bold uppercase tracking-wider">
                <span>WHAT WE DO</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                Full Truck Load Transportation Across India
              </h2>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                roltaLogistics is an established transport organization providing Full Truck Load (FTL) logistics services across India. We focus strictly on heavy truck movements, offering dedicated vehicle capacity for businesses that require full-vehicle freight transportation.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Our core daily transportation network connects Hyderabad directly with key commercial hubs in Eastern and Northeastern India, including Bhubaneswar, Kolkata, Siliguri, and Guwahati, alongside full truck transport capabilities across all Indian states.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-gray-800">
                <div className="p-3.5 bg-[#F7F9FC] border border-gray-200 hover:border-[#2567A8]/40 transition-colors">
                  <span className="text-[#2567A8] block mb-1 font-extrabold uppercase">Vehicle Focus</span>
                  <span>Freight Trucks Only</span>
                </div>
                <div className="p-3.5 bg-[#F7F9FC] border border-gray-200 hover:border-[#2567A8]/40 transition-colors">
                  <span className="text-[#2567A8] block mb-1 font-extrabold uppercase">Service Type</span>
                  <span>Full Truck Loads (FTL)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 group/img">
              <div
                className={`border border-gray-200 p-2 bg-[#F7F9FC] shadow-xs overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  introVisible
                    ? '[clip-path:inset(0_0_0_0)] opacity-100'
                    : '[clip-path:inset(0_100%_0_0)] opacity-60'
                }`}
              >
                <img
                  src={aboutTruckImg}
                  alt="roltaLogistics Commercial Truck on Highway"
                  className="w-full h-[380px] sm:h-[450px] object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.02]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Operational Pillars Grid */}
      <section ref={pillarsRef} className="py-16 sm:py-24 bg-[#F7F9FC] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div
            className={`max-w-3xl mb-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
              Our Transportation Pillars
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Structured transport planning focused on direct movement and dedicated truck capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* How We Work */}
            <div
              className={`bg-white border border-gray-200 p-8 flex flex-col justify-between hover:border-[#2567A8]/50 hover:shadow-md hover:-translate-y-[3px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group ${
                pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '80ms' }}
            >
              <div>
                <div className="w-10 h-10 bg-[#F7F9FC] text-[#2567A8] border border-gray-200 flex items-center justify-center mb-6 transition-transform duration-200 group-hover:translate-x-1">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-3 group-hover:text-[#2567A8] transition-colors">How We Work</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  We operate through professional, route-focused transportation planning. Every full load shipment is assigned dedicated truck capacity to ensure direct, un-handled transit from pickup point to final delivery destination.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#2567A8]">
                Route-Focused Planning
              </div>
            </div>

            {/* Where We Operate */}
            <div
              className={`bg-white border border-gray-200 p-8 flex flex-col justify-between hover:border-[#2567A8]/50 hover:shadow-md hover:-translate-y-[3px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group ${
                pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '160ms' }}
            >
              <div>
                <div className="w-10 h-10 bg-[#F7F9FC] text-[#2567A8] border border-gray-200 flex items-center justify-center mb-6 transition-transform duration-200 group-hover:translate-x-1">
                  <Route className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-3 group-hover:text-[#2567A8] transition-colors">Where We Operate</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  We provide truck transportation across all over India, with primary daily movement involving Hyderabad, Bhubaneswar, Kolkata, Siliguri, and Guwahati.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#2567A8]">
                Pan-India & Daily Corridors
              </div>
            </div>

            {/* Why FTL */}
            <div
              className={`bg-white border border-gray-200 p-8 flex flex-col justify-between hover:border-[#2567A8]/50 hover:shadow-md hover:-translate-y-[3px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group ${
                pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '240ms' }}
            >
              <div>
                <div className="w-10 h-10 bg-[#F7F9FC] text-[#2567A8] border border-gray-200 flex items-center justify-center mb-6 transition-transform duration-200 group-hover:translate-x-1">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-3 group-hover:text-[#2567A8] transition-colors">Why FTL</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Dedicated truck capacity provides a direct, secure transportation solution for large consignments. Full loads eliminate intermediate hub transshipment and minimize transit delays.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#2567A8]">
                Dedicated Capacity Solution
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Large Image Showcase & Principles */}
      <section ref={standardsRef} className="py-16 sm:py-24 bg-white border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1 group/img">
              <div
                className={`border border-gray-200 p-2 bg-[#F7F9FC] overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  standardsVisible
                    ? '[clip-path:inset(0_0_0_0)] opacity-100'
                    : '[clip-path:inset(0_100%_0_0)] opacity-60'
                }`}
              >
                <img
                  src={operationsImg}
                  alt="roltaLogistics Highway Transportation"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.02]"
                />
              </div>
            </div>

            <div
              className={`lg:col-span-6 order-1 lg:order-2 space-y-6 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                standardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F7F9FC] border border-gray-200 text-[#2567A8] text-xs font-bold uppercase tracking-wider">
                <span>OPERATIONAL STANDARDS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                Practical & Business-Focused Logistics
              </h2>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We believe in straightforward, reliable logistics operations. By specializing strictly in full truck load transportation, roltaLogistics provides commercial clients with transparent route planning and dependable truck dispatches across Indian highway corridors.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Direct point-to-point truck dispatches',
                  'Dedicated vehicle space for complete cargo safety',
                  'Consistent daily connectivity on Eastern & Northeastern corridors',
                  'Nationwide full load truck availability',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start text-xs sm:text-sm font-semibold text-gray-800 hover:translate-x-1 transition-transform duration-200">
                    <CheckCircle2 className="w-4 h-4 text-[#2567A8] mr-2.5 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#F6DE50] hover:bg-[#ebd23c] text-[#111827] font-bold text-sm border border-[#e0c735] transition-all duration-200 hover:-translate-y-0.5 active:scale-98 shadow-xs group"
                >
                  <span>Request Transport Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
