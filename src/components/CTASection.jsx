import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import ctaTruckImg from '../assets/images/hero_truck_highway.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTASection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="py-16 sm:py-20 bg-[#F7F9FC] border-t border-b border-gray-200 overflow-hidden relative">
      <div ref={sectionRef} className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Premium Dark CTA Banner Container */}
        <div
          className={`bg-[#111827] text-white rounded-2xl sm:rounded-3xl border border-gray-800 shadow-xl overflow-hidden relative transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.985]'
          }`}
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[420px] lg:min-h-[460px] relative">
            
            {/* Left Content Area (Text & Action Buttons) */}
            <div
              className={`lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6 relative z-20 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              
              {/* Eyebrow Label */}
              <div className="inline-flex items-center space-x-2.5">
                <span className="w-6 h-[2px] bg-[#2567A8]"></span>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#F6DE50]">
                  FULL LOAD TRANSPORTATION
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.15]">
                Need a Truck for Your <br className="hidden sm:block" /> Next Full Load?
              </h2>

              {/* Supporting Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Tell us your pickup, delivery and shipment requirements. Our team will help you plan reliable full-load transportation across India.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                
                {/* Primary Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-extrabold text-[#111827] bg-[#F6DE50] hover:bg-[#ebd23c] rounded-xl border border-[#e0c735] transition-all duration-200 shadow-md hover:-translate-y-0.5 active:scale-98 text-center group"
                >
                  <span>Request a Transport Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                {/* Secondary Call Button */}
                <a
                  href="tel:9177831589"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/20 transition-all duration-200 active:scale-98 text-center"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#F6DE50]" />
                  <span>Call 9177831589</span>
                </a>

              </div>

            </div>

            {/* Right Visual Area (Truck Image with Clip-path Reveal + Contact Pills) */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full flex items-center justify-end overflow-hidden z-10 group/truck">
              
              {/* Truck Photograph with Clip-path Reveal from Right */}
              <div
                className={`absolute inset-0 transition-all duration-1100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible
                    ? '[clip-path:inset(0_0_0_0)]'
                    : '[clip-path:inset(0_0_0_100%)]'
                }`}
              >
                <img
                  src={ctaTruckImg}
                  alt="Full load truck transportation across India"
                  className="w-full h-full object-cover object-center transform scale-102 group-hover/truck:scale-103 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              
              {/* Dark Gradient Overlay to blend left text area with right truck image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/75 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-black/30 z-10 pointer-events-none"></div>

              {/* Floating Contact Information Pills */}
              <div className="relative z-20 p-6 sm:p-8 lg:p-10 w-full flex flex-col items-end space-y-4">
                
                {/* Contact Pill 1: Phone Call */}
                <a
                  href="tel:9177831589"
                  className={`w-full sm:w-auto min-w-[240px] bg-[#111827]/90 hover:bg-[#111827] backdrop-blur-md border border-gray-700/80 hover:border-[#2567A8] rounded-2xl p-4 shadow-xl transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center space-x-3.5 group hover:-translate-y-0.5 active:scale-98 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                  }`}
                  style={{ transitionDelay: '250ms' }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#2567A8]/30 border border-[#2567A8] text-[#F6DE50] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Call For Inquiry
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#F6DE50] transition-colors">
                      9177831589
                    </span>
                  </div>
                </a>

                {/* Contact Pill 2: Quote Inquiry */}
                <Link
                  to="/contact"
                  className={`w-full sm:w-auto min-w-[240px] bg-[#111827]/90 hover:bg-[#111827] backdrop-blur-md border border-gray-700/80 hover:border-[#2567A8] rounded-2xl p-4 shadow-xl transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center space-x-3.5 group hover:-translate-y-0.5 active:scale-98 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                  }`}
                  style={{ transitionDelay: '370ms' }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#2567A8]/30 border border-[#2567A8] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <MessageSquare className="w-5 h-5 text-[#2567A8]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Get a Transport Quote
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#F6DE50] transition-colors">
                      Contact Our Team
                    </span>
                  </div>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
