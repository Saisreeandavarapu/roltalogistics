import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MapPin, ArrowRight, Navigation, Truck, ShieldCheck, Activity } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Structured Route Network Data
export const routesData = [
  {
    id: 'bhubaneswar',
    origin: 'HYDERABAD',
    originState: 'TELANGANA',
    destination: 'BHUBANESWAR',
    destinationState: 'ODISHA',
    corridor: 'Eastern Commercial Corridor',
    transitTime: '24–36 Hrs Transit',
    type: 'Full Truck Load (FTL)',
    tags: ['FULL TRUCK LOAD', 'TRUCK TRANSPORTATION', 'INTERSTATE MOVEMENT'],
    description: 'Reliable dedicated FTL dispatches linking Hyderabad with key industrial centers in Odisha.',
    highlight: 'Daily Direct Link',
    code: 'HYD → BBI'
  },
  {
    id: 'kolkata',
    origin: 'HYDERABAD',
    originState: 'TELANGANA',
    destination: 'KOLKATA',
    destinationState: 'WEST BENGAL',
    corridor: 'Major Industrial Metro Link',
    transitTime: '36–48 Hrs Transit',
    type: 'Full Truck Load (FTL)',
    tags: ['FULL TRUCK LOAD', 'TRUCK TRANSPORTATION', 'INTERSTATE MOVEMENT'],
    description: 'High-density commercial cargo corridor for full-vehicle long-haul freight directly to West Bengal.',
    highlight: 'High Capacity Corridor',
    code: 'HYD → CCU'
  },
  {
    id: 'siliguri',
    origin: 'HYDERABAD',
    originState: 'TELANGANA',
    destination: 'SILIGURI',
    destinationState: 'WEST BENGAL',
    corridor: 'North Bengal Strategic Gateway',
    transitTime: '48–60 Hrs Transit',
    type: 'Full Truck Load (FTL)',
    tags: ['FULL TRUCK LOAD', 'TRUCK TRANSPORTATION', 'INTERSTATE MOVEMENT'],
    description: 'Strategic North Bengal transit corridor connecting Hyderabad directly to eastern trade hubs.',
    highlight: 'North Bengal Gateway',
    code: 'HYD → IXB'
  },
  {
    id: 'guwahati',
    origin: 'HYDERABAD',
    originState: 'TELANGANA',
    destination: 'GUWAHATI',
    destinationState: 'ASSAM',
    corridor: 'Northeast Commercial Supply Chain',
    transitTime: '60–72 Hrs Transit',
    type: 'Full Truck Load (FTL)',
    tags: ['FULL TRUCK LOAD', 'TRUCK TRANSPORTATION', 'INTERSTATE MOVEMENT'],
    description: 'Dedicated long-haul truck transportation delivering seamless logistics to Assam and Northeast India.',
    highlight: 'Northeast Express FTL',
    code: 'HYD → GAU'
  },
  {
    id: 'pan-india',
    origin: 'HYDERABAD',
    originState: 'TELANGANA',
    destination: 'PAN INDIA',
    destinationState: 'NATIONWIDE MOVEMENT',
    corridor: 'Pan-India Transportation Network',
    transitTime: 'Scheduled On Demand',
    type: 'Full Truck Load (FTL)',
    tags: ['FULL TRUCK LOAD', 'PAN-INDIA MOVEMENT', 'INTERSTATE MOVEMENT'],
    description: 'Nationwide truck load capacity connecting Hyderabad to major commercial and industrial destinations across India.',
    highlight: 'Pan-India Coverage',
    code: 'HYD → ALL INDIA'
  }
];

// Marquee track sequence cities
const marqueeCities = [
  { name: 'HYDERABAD', state: 'TELANGANA', routeId: 'bhubaneswar' },
  { name: 'BHUBANESWAR', state: 'ODISHA', routeId: 'bhubaneswar' },
  { name: 'KOLKATA', state: 'WEST BENGAL', routeId: 'kolkata' },
  { name: 'SILIGURI', state: 'WEST BENGAL', routeId: 'siliguri' },
  { name: 'GUWAHATI', state: 'ASSAM', routeId: 'guwahati' },
  { name: 'PAN INDIA', state: 'NATIONWIDE', routeId: 'pan-india' }
];

export default function RouteNetwork() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const activeRoute = routesData[activeIndex];

  // Rotate route index cleanly with smooth fade transition
  const goToNextRoute = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % routesData.length);
      setIsTransitioning(false);
    }, 280);
  }, []);

  const selectRoute = useCallback((index) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 250);
  }, [activeIndex]);

  // Handle automatic route rotation every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      goToNextRoute();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goToNextRoute]);

  // Tripled array for seamless infinite linear scrolling marquee loop
  const tripledMarquee = [...marqueeCities, ...marqueeCities, ...marqueeCities];

  return (
    <section
      ref={sectionRef}
      id="route-network"
      aria-label="Route Network and Transportation Corridors"
      className="py-16 sm:py-24 bg-[#F7F9FC] border-b border-gray-200 overflow-hidden relative select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================
           1. DESKTOP & TABLET EDITORIAL HEADER + ACTIVE ROUTE AREA
           ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          
          {/* Left Column: Eyebrow + Staggered Heading & Copy */}
          <div
            className={`lg:col-span-5 space-y-5 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-[#2567A8]/30 text-[#2567A8] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Navigation className="w-3.5 h-3.5 text-[#2567A8]" />
              <span>ROUTE NETWORK</span>
            </div>

            {/* Masked Upward / Line Reveal Style Heading */}
            <div className="overflow-hidden">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.12]">
                Connecting Businesses <br className="hidden sm:inline" />
                <span className="text-[#2567A8]">Across India</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed max-w-xl">
              Reliable full truck load transportation connecting Hyderabad with major eastern and northeastern destinations, with pan-India movement available for business cargo.
            </p>

            {/* Quick Route Selector Tabs */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">
                SELECT TRANSPORTATION CORRIDOR
              </span>
              <div className="flex flex-wrap gap-2">
                {routesData.map((r, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={r.id}
                      onClick={() => selectRoute(idx)}
                      onFocus={() => setIsPaused(true)}
                      onBlur={() => setIsPaused(false)}
                      className={`px-3 py-1.5 text-xs font-bold transition-all duration-200 border text-left flex items-center space-x-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-[#111827] text-white border-[#111827] shadow-sm'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-[#2567A8] hover:text-[#2567A8]'
                      }`}
                      aria-label={`Select route to ${r.destination}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isActive ? 'bg-[#F6DE50]' : 'bg-gray-300'
                        }`}
                      ></span>
                      <span>{r.destination}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Active Route Information Card & Visualization */}
          <div
            className={`lg:col-span-7 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div
              className="bg-white border border-gray-200 p-6 sm:p-8 shadow-xs relative overflow-hidden group"
              aria-live="polite"
            >
              {/* Card Header Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-gray-100 mb-6 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F6DE50] border border-[#111827] animate-yellow-pulse"></span>
                  <span className="font-extrabold text-[#111827] uppercase tracking-wider">
                    ACTIVE FTL CORRIDOR
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gray-500 font-mono text-[11px]">
                  <span className="px-2 py-0.5 bg-[#F7F9FC] border border-gray-200 font-bold text-[#2567A8]">
                    {activeRoute.code}
                  </span>
                  <span className="hidden sm:inline">{activeRoute.transitTime}</span>
                </div>
              </div>

              {/* Central Dynamic Route Line Visualization */}
              <div className="py-4 my-2 px-3 sm:px-5 bg-[#F7F9FC] border border-gray-200/80 mb-6 relative">
                
                {/* Corridor Badge Header Row */}
                <div className="text-center mb-3">
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#2567A8] bg-white border border-gray-200 px-2.5 py-1 inline-block font-extrabold shadow-2xs">
                    {activeRoute.corridor}
                  </span>
                </div>

                {/* Visual Route Endpoints */}
                <div className="flex items-center justify-between text-xs font-extrabold text-[#111827] mb-3">
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[10px] text-gray-400 font-mono font-normal">ORIGIN HUB</span>
                    <span className="text-sm sm:text-base font-black text-[#111827] leading-tight">{activeRoute.origin}</span>
                    <span className="text-[10px] sm:text-[11px] text-[#2567A8] font-bold">{activeRoute.originState}</span>
                  </div>

                  <div className="flex items-center px-2 text-[#2567A8]">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                  </div>

                  <div className="flex flex-col text-right">
                    <span className="text-[9px] sm:text-[10px] text-gray-400 font-mono font-normal">DESTINATION</span>
                    <span
                      className={`text-sm sm:text-base font-black text-[#111827] leading-tight transition-all duration-300 ${
                        isTransitioning ? 'opacity-30 translate-x-1' : 'opacity-100 translate-x-0'
                      }`}
                    >
                      {activeRoute.destination}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#2567A8] font-bold">
                      {activeRoute.destinationState}
                    </span>
                  </div>
                </div>

                {/* Animated Interactive Route Line */}
                <div className="relative h-7 my-1 flex items-center">
                  {/* Origin Point Dot */}
                  <div className="w-3.5 h-3.5 rounded-full bg-[#111827] border-2 border-[#F6DE50] shrink-0 z-10 shadow-2xs"></div>

                  {/* Connecting Line Container */}
                  <div className="flex-1 relative h-1 bg-gray-200 mx-1 overflow-hidden">
                    {/* Active Solid Blue Line */}
                    <div className="absolute inset-0 bg-[#2567A8]"></div>
                    
                    {/* Travelling Truck Icon along line */}
                    <div className="absolute top-1/2 -translate-y-1/2 animate-truck-travel pointer-events-none z-20 flex items-center">
                      <div className="bg-[#111827] text-[#F6DE50] p-1 rounded-xs shadow-md border border-[#F6DE50]/60 flex items-center justify-center">
                        <Truck className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Destination Point Active Dot */}
                  <div className="w-4 h-4 rounded-full bg-[#F6DE50] border-2 border-[#111827] shrink-0 z-10 shadow-2xs animate-yellow-pulse"></div>
                </div>

                {/* Mobile specific route indicator summary */}
                <div className="mt-3 pt-2.5 border-t border-gray-200 flex flex-wrap items-center justify-between text-[11px] text-gray-700 font-medium gap-1">
                  <span className="flex items-center text-[#2567A8] font-bold">
                    <Truck className="w-3.5 h-3.5 mr-1" /> FTL Direct Transport
                  </span>
                  <span className="font-mono font-bold text-[#111827]">{activeRoute.transitTime}</span>
                </div>
              </div>

              {/* Route Details & Tags */}
              <div
                className={`transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isTransitioning ? 'opacity-20 translate-y-1' : 'opacity-100 translate-y-0'
                }`}
              >
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-5 font-normal">
                  {activeRoute.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-gray-100">
                  {activeRoute.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-[#F7F9FC] border border-gray-200 text-[#111827] text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress Dots Indicator for Auto Rotation */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100 text-xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  AUTOMATIC ROUTE ROTATION
                </span>
                <div className="flex items-center space-x-1.5">
                  {routesData.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => selectRoute(dotIdx)}
                      className={`h-1.5 transition-all duration-300 ${
                        dotIdx === activeIndex
                          ? 'w-6 bg-[#2567A8]'
                          : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to route slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ============================================================
           2. PREMIUM INFINITE AUTOMATIC ROUTE MARQUEE STRIP
           ============================================================ */}
        <div
          className={`transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* Marquee Section Label Bar */}
          <div className="flex items-center justify-between mb-3 px-1 text-xs font-bold text-gray-500">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#2567A8]"></span>
              <span className="uppercase tracking-widest text-[11px] text-[#111827]">
                CONTINUOUS CITY & ROUTE MARQUEE
              </span>
            </div>
            <span className="text-[10px] font-mono text-gray-400 hidden sm:inline">
              HOVER TO PAUSE | CLICK CITY TO VIEW ROUTE
            </span>
          </div>

          {/* Marquee Container (Strictly contained overflow-hidden) */}
          <div className="bg-white border border-gray-200 shadow-2xs py-4 sm:py-5 overflow-hidden relative group/marquee">
            
            {/* Left & Right Soft Fade Gradients for Seamless Editorial Look */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Continuous Marquee Track */}
            <div
              className={`animate-marquee-strip flex items-center ${
                isPaused ? 'paused' : ''
              }`}
            >
              {tripledMarquee.map((item, mIdx) => {
                const targetRouteIndex = routesData.findIndex((r) => r.id === item.routeId);
                const isItemActive = targetRouteIndex === activeIndex;

                return (
                  <div
                    key={mIdx}
                    onClick={() => selectRoute(targetRouteIndex >= 0 ? targetRouteIndex : 0)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        selectRoute(targetRouteIndex >= 0 ? targetRouteIndex : 0);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Route hub ${item.name}`}
                    className={`flex items-center shrink-0 px-4 sm:px-6 py-2 transition-all duration-250 cursor-pointer group/city ${
                      isItemActive ? 'scale-[1.02]' : 'hover:scale-[1.02]'
                    }`}
                  >
                    {/* City Content Box */}
                    <div className="flex flex-col items-start space-y-0.5 relative">
                      
                      {/* Top indicator tag */}
                      <div className="flex items-center space-x-1">
                        <MapPin className={`w-3 h-3 transition-colors ${
                          isItemActive ? 'text-[#2567A8]' : 'text-gray-400 group-hover/city:text-[#2567A8]'
                        }`} />
                        <span className={`text-[9px] font-bold tracking-widest uppercase transition-colors ${
                          isItemActive ? 'text-[#2567A8]' : 'text-gray-400 group-hover/city:text-[#2567A8]'
                        }`}>
                          {item.state}
                        </span>
                        {isItemActive && (
                          <span className="ml-1 px-1 py-0.2 bg-[#F6DE50] text-[#111827] text-[8px] font-black uppercase tracking-wider">
                            FTL ROUTE
                          </span>
                        )}
                      </div>

                      {/* Strong City Name Typography */}
                      <span className={`text-base sm:text-lg lg:text-xl font-black uppercase tracking-tight transition-all duration-200 relative ${
                        isItemActive
                          ? 'text-[#2567A8]'
                          : 'text-[#111827] group-hover/city:text-[#2567A8]'
                      }`}>
                        {item.name}
                        {/* Hover Underline */}
                        <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2567A8] transition-all duration-200 ${
                          isItemActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover/city:opacity-100 group-hover/city:scale-x-100'
                        }`}></span>
                      </span>

                    </div>

                    {/* Small Connecting Arrow Divider */}
                    <div className="ml-6 sm:ml-8 flex items-center justify-center text-gray-300 group-hover/city:text-[#2567A8] transition-colors">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Marquee Footer Assurance */}
          <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-gray-500 font-medium px-1 gap-2">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#2567A8]" />
              <span>Full Vehicle Capacity (FTL) Dispatches Across All Corridors</span>
            </div>
            <div className="flex items-center space-x-3 text-[11px]">
              <span className="font-bold text-[#111827]">PAN-INDIA COVERAGE</span>
              <span className="text-gray-300">|</span>
              <span className="font-bold text-[#2567A8]">DIRECT HIGHWAY TRANSPORTATION</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
