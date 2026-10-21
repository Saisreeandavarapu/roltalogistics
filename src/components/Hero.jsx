import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ChevronDown, MapPin, Truck, Calendar, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../assets/images/hero_truck_highway.png';
import img2 from '../assets/images/hero_truck_warehouse.png';
import img3 from '../assets/images/hero_truck_loading.png';
import img4 from '../assets/images/hero_truck_sunset.png';
import img5 from '../assets/images/hero_truck_longhaul.png';

export default function Hero() {
  const slides = [
    {
      img: img1,
      tag: 'FULL LOAD TRANSPORTATION ACROSS INDIA',
      title: 'Moving Full Loads\n& Cargo Service',
      subtitle: 'Reliable FTL truck transportation connecting businesses across India, with dependable daily movement from Hyderabad to Bhubaneswar, Kolkata, Siliguri, Guwahati and beyond.',
      routeBadge: 'HYDERABAD → EAST & NORTHEAST',
    },
    {
      img: img2,
      tag: 'INTERSTATE FREIGHT TRANSPORTATION',
      title: 'Dedicated Trucks.\nDirect Delivery.',
      subtitle: 'Exclusive vehicle allocation for commercial consignments. No transshipment stops, ensuring maximum cargo safety and direct highway movement.',
      routeBadge: 'PAN-INDIA FTL NETWORK',
    },
    {
      img: img3,
      tag: 'HIGHWAY LOGISTICS SPECIALIZATION',
      title: 'Heavy Consignments.\nPlanned Movement.',
      subtitle: 'Full truck load logistics designed for manufacturers, suppliers, and distributors requiring reliable scheduled dispatches across Indian trade corridors.',
      routeBadge: 'DEDICATED FLEET DISPATCH',
    },
    {
      img: img4,
      tag: 'DAILY SERVICE CORRIDORS',
      title: 'Connecting Hubs.\nAcross All India.',
      subtitle: 'Regular daily transportation connectivity between Telangana, Odisha, West Bengal, North Bengal, and Assam with dedicated heavy freight trucks.',
      routeBadge: 'HYD ↔ BHUBANESWAR • KOLKATA',
    },
    {
      img: img5,
      tag: 'LONG-HAUL TRUCK TRANSPORT',
      title: 'Reliable Freight.\nOn-Time Delivery.',
      subtitle: 'High-mileage highway truck dispatches engineered for heavy cargo volume and business freight requirements nationwide.',
      routeBadge: 'HYD ↔ SILIGURI • GUWAHATI',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // background image slide
  const [displayIndex, setDisplayIndex] = useState(0);   // active text slide
  const [direction, setDirection] = useState(1);         // 1 = next/auto (upward exit), -1 = prev (downward exit)
  const [isExiting, setIsExiting] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const exitTimerRef = useRef(null);
  const autoTimerRef = useRef(null);

  const changeSlide = useCallback((nextIndex, dir = 1) => {
    // Clear existing timers
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    if (exitTimerRef.current) {
      clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }

    setDirection(dir);
    setCurrentIndex(nextIndex);
    setIsExiting(true);

    // 220ms exit phase behind clipping mask, then swap content and trigger entry sequence
    exitTimerRef.current = setTimeout(() => {
      setDisplayIndex(nextIndex);
      setIsExiting(false);
      setAnimKey((prev) => prev + 1);
      exitTimerRef.current = null;
    }, 220);

    // Restart 6.8s autoplay
    autoTimerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevImg) => {
        const next = (prevImg + 1) % slides.length;
        setIsExiting(true);

        if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
        exitTimerRef.current = setTimeout(() => {
          setDisplayIndex(next);
          setIsExiting(false);
          setAnimKey((p) => p + 1);
          exitTimerRef.current = null;
        }, 220);

        return next;
      });
    }, 6800);
  }, [slides.length]);

  useEffect(() => {
    autoTimerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevImg) => {
        const next = (prevImg + 1) % slides.length;
        setIsExiting(true);

        if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
        exitTimerRef.current = setTimeout(() => {
          setDisplayIndex(next);
          setIsExiting(false);
          setAnimKey((p) => p + 1);
          exitTimerRef.current = null;
        }, 220);

        return next;
      });
    }, 6800);

    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, [slides.length]);

  const handlePrev = () => {
    const prev = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    changeSlide(prev, -1);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % slides.length;
    changeSlide(next, 1);
  };

  const currentSlide = slides[displayIndex];
  const titleLines = currentSlide.title.split('\n');

  return (
    <section className="relative bg-[#111827] text-white overflow-hidden select-none">
      {/* Editorial Mask Reveal Keyframes */}
      <style>{`
        /* Tag horizontal reveal */
        @keyframes heroTagMaskReveal {
          from {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
          }
          to {
            clip-path: inset(0 0% 0 0);
            opacity: 1;
          }
        }

        /* H1 vertical directional reveals */
        @keyframes heroH1EnterUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0%);
          }
        }

        @keyframes heroH1EnterDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0%);
          }
        }

        @keyframes heroH1ExitUp {
          from {
            opacity: 1;
            transform: translateY(0%);
          }
          to {
            opacity: 0;
            transform: translateY(-100%);
          }
        }

        @keyframes heroH1ExitDown {
          from {
            opacity: 1;
            transform: translateY(0%);
          }
          to {
            opacity: 0;
            transform: translateY(100%);
          }
        }

        /* Subtitle horizontal left-to-right mask reveal */
        @keyframes heroSubtitleMaskReveal {
          from {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
          }
          to {
            clip-path: inset(0 0% 0 0);
            opacity: 1;
          }
        }

        /* CTA lateral subtle entrances */
        @keyframes heroCtaFromLeft {
          from {
            opacity: 0;
            transform: translateX(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes heroCtaFromRight {
          from {
            opacity: 0;
            transform: translateX(15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Route badge lateral reveal */
        @keyframes heroRouteFromLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Continuous Forward Zoom for Background Images */
        @keyframes heroSlowZoom {
          from {
            transform: scale(1.02);
          }
          to {
            transform: scale(1.06);
          }
        }

        /* Utility classes */
        .editorial-tag-anim {
          animation: heroTagMaskReveal 520ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 0ms;
        }

        .editorial-h1-enter-up {
          animation: heroH1EnterUp 580ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .editorial-h1-enter-down {
          animation: heroH1EnterDown 580ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .editorial-h1-exit-up {
          animation: heroH1ExitUp 220ms cubic-bezier(0.22, 1, 0.36, 1) forwards !important;
        }

        .editorial-h1-exit-down {
          animation: heroH1ExitDown 220ms cubic-bezier(0.22, 1, 0.36, 1) forwards !important;
        }

        .editorial-subtitle-anim {
          animation: heroSubtitleMaskReveal 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 260ms;
        }

        .editorial-cta-primary-anim {
          animation: heroCtaFromLeft 480ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 380ms;
        }

        .editorial-cta-secondary-anim {
          animation: heroCtaFromRight 480ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 440ms;
        }

        .editorial-route-anim {
          animation: heroRouteFromLeft 450ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 520ms;
        }

        .editorial-text-exit-generic {
          opacity: 0 !important;
          transition: opacity 220ms ease-in !important;
        }

        .hero-img-active {
          animation: heroSlowZoom 7500ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (max-width: 640px) {
          @keyframes heroH1EnterUp {
            from {
              opacity: 0;
              transform: translateY(75%);
            }
            to {
              opacity: 1;
              transform: translateY(0%);
            }
          }
          @keyframes heroH1EnterDown {
            from {
              opacity: 0;
              transform: translateY(-75%);
            }
            to {
              opacity: 1;
              transform: translateY(0%);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .editorial-tag-anim,
          .editorial-h1-enter-up,
          .editorial-h1-enter-down,
          .editorial-subtitle-anim,
          .editorial-cta-primary-anim,
          .editorial-cta-secondary-anim,
          .editorial-route-anim,
          .hero-img-active {
            animation: none !important;
            transform: none !important;
            clip-path: none !important;
            opacity: 1 !important;
          }
          .editorial-h1-exit-up,
          .editorial-h1-exit-down,
          .editorial-text-exit-generic {
            animation: none !important;
            transform: none !important;
            opacity: 0 !important;
          }
        }
      `}</style>

      {/* Full-bleed Background Images */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${idx === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
        >
          <img
            src={slide.img}
            alt={`roltaLogistics - ${slide.tag} Commercial Heavy Freight Truck`}
            loading={idx === 0 ? 'eager' : 'lazy'}
            fetchPriority={idx === 0 ? 'high' : 'auto'}
            decoding={idx === 0 ? 'sync' : 'async'}
            width="1920"
            height="1080"
            className={`w-full h-full object-cover object-center ${idx === currentIndex ? 'hero-img-active' : 'scale-100'
              }`}
          />
          {/* Gradient Dark Overlay tuned for text contrast while preserving truck imagery */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b101b]/95 via-[#111827]/85 to-[#111827]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-black/40"></div>
        </div>
      ))}

      {/* Main Full-Bleed Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 flex flex-col justify-between min-h-[580px] sm:min-h-[640px] lg:min-h-[700px]">

        {/* Top Watermark Typography & Hero Content */}
        <div className="relative">

          {/* Outlined Watermark Text matching reference image */}
          <div
            className="absolute -top-10 sm:-top-16 left-0 text-stroke-watermark text-6xl sm:text-8xl lg:text-[140px] font-black uppercase tracking-widest pointer-events-none select-none z-0 whitespace-nowrap opacity-70"
            aria-hidden="true"
          >
            LOGISTICS
          </div>

          {/* Animated Hero Content Layer */}
          <div
            key={animKey}
            className="relative z-10 max-w-3xl space-y-6"
          >

            {/* Step 1: Top Sub-heading Tag Label with Horizontal Mask Reveal */}
            <div className="overflow-hidden">
              <div
                className={`inline-flex items-center space-x-2.5 px-3.5 py-1.5 bg-[#2567A8]/40 border border-[#2567A8]/60 backdrop-blur-xs text-[#F6DE50] text-xs sm:text-sm font-extrabold uppercase tracking-wider ${isExiting ? 'editorial-text-exit-generic' : 'editorial-tag-anim'
                  }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#F6DE50] animate-pulse"></span>
                <span>{currentSlide.tag}</span>
              </div>
            </div>

            {/* Step 2: Main H1 — Mask Reveal (Line-by-Line Vertical Mask Transition) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-md min-h-[4.5rem] sm:min-h-[7.25rem] lg:min-h-[9rem] flex flex-col justify-center">
              {titleLines.map((line, idx) => (
                <div key={idx} className="overflow-hidden py-0.5">
                  <span
                    className={`block transform ${isExiting
                        ? direction === 1
                          ? 'editorial-h1-exit-up'
                          : 'editorial-h1-exit-down'
                        : direction === 1
                          ? 'editorial-h1-enter-up'
                          : 'editorial-h1-enter-down'
                      }`}
                    style={{
                      animationDelay: isExiting ? '0ms' : `${90 + idx * 100}ms`,
                    }}
                  >
                    {line}
                  </span>
                </div>
              ))}
            </h1>

            {/* Step 3: Subtitle Paragraph — Left to Right Horizontal Mask Reveal */}
            <div className="min-h-[4.25rem] sm:min-h-[3.5rem] lg:min-h-[3rem] flex items-start overflow-hidden">
              <p
                className={`text-base sm:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl drop-shadow-xs ${isExiting ? 'editorial-text-exit-generic' : 'editorial-subtitle-anim'
                  }`}
              >
                {currentSlide.subtitle}
              </p>
            </div>

            {/* Step 4: Action Bar CTAs — Lateral Subtle Entrances */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 overflow-hidden">

              {/* Primary CTA Button (Enters from Left) */}
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-extrabold text-[#111827] bg-[#F6DE50] hover:bg-[#ebd23c] border border-[#e0c735] uppercase tracking-wider transition-all duration-200 shadow-lg group active:scale-98 hover:-translate-y-0.5 ${isExiting ? 'editorial-text-exit-generic' : 'editorial-cta-primary-anim'
                  }`}
              >
                <span>GET A TRANSPORT QUOTE</span>
                <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary Call Button Widget (Enters from Right) */}
              <a
                href="tel:+9177831589"
                className={`flex items-center space-x-3.5 group ${isExiting ? 'editorial-text-exit-generic' : 'editorial-cta-secondary-anim'
                  }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#111827]/90 border-2 border-[#2567A8] text-[#F6DE50] group-hover:border-[#F6DE50] group-hover:bg-[#2567A8] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-md shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider group-hover:text-gray-300">
                    Call Us Now
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-white group-hover:text-[#F6DE50] transition-colors tracking-wide">
                    9177831589
                  </span>
                </div>
              </a>

            </div>

          </div>

        </div>

        {/* Carousel Slide Indicators & Manual Controls */}
        <div className="relative z-10 pt-10 flex flex-col sm:flex-row items-start sm:items-end justify-between border-t border-white/10 mt-8 gap-4">

          {/* Step 5: Active Route Corridor Pill (Lateral Reveal) */}
          <div className="flex items-center space-x-3 text-xs font-bold text-gray-300 overflow-hidden">
            <span className="px-2.5 py-1 bg-[#2567A8] text-white uppercase text-[10px] tracking-wider">
              SERVICE ROUTE
            </span>
            <span
              key={`route-${animKey}`}
              className={`text-[#F6DE50] tracking-wide font-extrabold ${isExiting ? 'editorial-text-exit-generic' : 'editorial-route-anim'
                }`}
            >
              {currentSlide.routeBadge}
            </span>
          </div>

          {/* Slide Navigation Controls */}
          <div className="flex items-center space-x-4">
            <div className="text-xs font-mono text-gray-300 font-bold mr-2">
              <span className="text-[#F6DE50] text-sm">0{currentIndex + 1}</span>
              <span className="text-gray-500 mx-1">/</span>
              <span>0{slides.length}</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="p-2.5 bg-gray-900/80 hover:bg-[#2567A8] border border-gray-700 text-white transition-all duration-200 cursor-pointer active:scale-95"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 bg-gray-900/80 hover:bg-[#2567A8] border border-gray-700 text-white transition-all duration-200 cursor-pointer active:scale-95"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Down Chevron Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
          <div className="text-[#F6DE50] animate-chevron-bounce">
            <ChevronDown className="w-6 h-6 -mb-3" />
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>

      </div>

      {/* Operational Information Strip below Hero */}
      <div className="relative z-20 bg-[#111827] border-t border-b border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-800">

            {/* Item 1 */}
            <div className="flex items-start space-x-3.5 pt-3 sm:pt-0 sm:px-4 first:pl-0">
              <div className="p-2 bg-gray-800/90 border border-gray-700 text-[#F6DE50] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#F6DE50] uppercase tracking-wider">PAN INDIA</p>
                <p className="text-sm font-bold text-white">Nationwide Coverage</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start space-x-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="p-2 bg-gray-800/90 border border-gray-700 text-[#2567A8] shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#F6DE50] uppercase tracking-wider">FTL ONLY</p>
                <p className="text-sm font-bold text-white">Full Load Transportation</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start space-x-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="p-2 bg-gray-800/90 border border-gray-700 text-[#F6DE50] shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#F6DE50] uppercase tracking-wider">DAILY ROUTES</p>
                <p className="text-sm font-bold text-white">Hyderabad → East & Northeast</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start space-x-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="p-2 bg-gray-800/90 border border-gray-700 text-[#2567A8] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#F6DE50] uppercase tracking-wider">TRUCKS</p>
                <p className="text-sm font-bold text-white">Dedicated Truck Capacity</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
