import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ExternalLink, Truck, ShieldCheck, Route } from 'lucide-react';
import logoWhiteImg from '../assets/logo/logo-white.png';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BUSINESS_INFO } from '../seoConfig';

export default function Footer() {
  const [footerRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <footer ref={footerRef} className="bg-[#111827] text-white border-t-4 border-[#2567A8]">
      {/* Upper Operational Info Band */}
      <div className="border-b border-gray-800 bg-[#0b101b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 text-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <div className="flex items-center space-x-3 text-gray-300">
              <div className="p-2 bg-gray-800/80 text-[#F6DE50] border border-gray-700">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white uppercase text-xs tracking-wider">Vehicle Specialization</p>
                <p className="text-gray-400">Dedicated Full Truck Loads (FTL) Only</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-gray-300">
              <div className="p-2 bg-gray-800/80 text-[#2567A8] border border-gray-700">
                <Route className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white uppercase text-xs tracking-wider">Primary Daily Network</p>
                <p className="text-gray-400">Hyderabad ↔ Eastern & Northeastern Cities</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-gray-300">
              <div className="p-2 bg-gray-800/80 text-[#F6DE50] border border-gray-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white uppercase text-xs tracking-wider">Coverage Area</p>
                <p className="text-gray-400">Pan-India Freight Logistics Movement</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Logo & Info */}
          <div
            className={`space-y-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            style={{ transitionDelay: '60ms' }}
          >
            <Link to="/" className="inline-block">
              <img
                src={logoWhiteImg}
                alt="roltaLogistics - Full Truck Load Freight Logistics Across India"
                loading="lazy"
                decoding="async"
                width="160"
                height="40"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-normal">
              Full Load Truck Transportation Across India. Dependable FTL services connecting major commercial hubs with precision and reliability.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1 bg-gray-800 text-[#F6DE50] text-xs font-semibold border border-gray-700">
                Pan-India Operations
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div
            className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            style={{ transitionDelay: '120ms' }}
          >
            <h3 className="text-sm font-bold tracking-wider text-[#F6DE50] uppercase mb-4 pb-2 border-b border-gray-800">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#2567A8] mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#2567A8] mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#2567A8] mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/routes"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#2567A8] mr-2"></span>
                  Route Network
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#2567A8] mr-2"></span>
                  Contact & Quotes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Logistics Services */}
          <div
            className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            style={{ transitionDelay: '180ms' }}
          >
            <h3 className="text-sm font-bold tracking-wider text-[#F6DE50] uppercase mb-4 pb-2 border-b border-gray-800">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#F6DE50] mr-2 mt-2"></span>
                <span>Full Truck Load (FTL)</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#F6DE50] mr-2 mt-2"></span>
                <span>Interstate Transportation</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#F6DE50] mr-2 mt-2"></span>
                <span>Pan-India Truck Movement</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#F6DE50] mr-2 mt-2"></span>
                <span>Dedicated Commercial Consignments</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div
            className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            style={{ transitionDelay: '240ms' }}
          >
            <h3 className="text-sm font-bold tracking-wider text-[#F6DE50] uppercase mb-4 pb-2 border-b border-gray-800">
              Contact Us
            </h3>
            <div className="space-y-3.5 text-sm">
              <a
                href="tel:9177831589"
                className="flex items-center text-gray-300 hover:text-[#F6DE50] transition-colors group"
              >
                <Phone className="w-4 h-4 mr-2.5 text-[#F6DE50] shrink-0" />
                <span className="font-semibold">9177831589</span>
              </a>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white border border-gray-700 transition-all duration-200 hover:-translate-y-0.5 text-xs font-semibold"
                >
                  <MapPin className="w-3.5 h-3.5 mr-2 text-[#F6DE50]" />
                  <span>Google Maps Location</span>
                  <ExternalLink className="w-3 h-3 ml-2 opacity-70" />
                </a>
              </div>

              <p className="text-xs text-gray-400 pt-2 leading-normal">
                Serving all major commercial corridors across India with specialized daily movement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 bg-[#090d15] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 space-y-3 sm:space-y-0">
          <p>© 2026 roltaLogistics. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-gray-400">
            <span>Full Truck Load Logistics</span>
            <span>•</span>
            <span>All Over India Coverage</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
