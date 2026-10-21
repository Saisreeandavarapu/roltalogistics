import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Truck, ShieldCheck, Route } from 'lucide-react';
import Hero from '../components/Hero';
import RouteCard from '../components/RouteCard';
import RouteNetwork from '../components/RouteNetwork';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';
import trustedTruckImg from '../assets/images/hero_truck_warehouse.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  const [trustedRef, trustedVisible] = useScrollReveal({ threshold: 0.15 });
  const [whyRef, whyVisible] = useScrollReveal({ threshold: 0.15 });
  const [routesRef, routesVisible] = useScrollReveal({ threshold: 0.12 });

  const dailyRoutes = [
    {
      origin: 'HYDERABAD',
      destination: 'BHUBANESWAR',
      isDaily: true,
      highlights: [
        'Daily dedicated FTL movement',
        'Direct interstate truck transport',
        'Full vehicle capacity loading',
      ],
    },
    {
      origin: 'HYDERABAD',
      destination: 'KOLKATA',
      isDaily: true,
      highlights: [
        'Regular commercial cargo link',
        'Dedicated multi-axle freight trucks',
        'Direct business corridor route',
      ],
    },
    {
      origin: 'HYDERABAD',
      destination: 'SILIGURI',
      isDaily: true,
      highlights: [
        'Strategic North Bengal connection',
        'Full load long-haul specialization',
        'Dependable highway transit',
      ],
    },
    {
      origin: 'HYDERABAD',
      destination: 'GUWAHATI',
      isDaily: true,
      highlights: [
        'Northeast gateway FTL corridor',
        'Direct full-truck transportation',
        'Planned route movement',
      ],
    },
  ];

  const whyChooseItems = [
    {
      title: 'Full Truck Load',
      description: 'Dedicated truck transportation for complete shipments requiring exclusive vehicle capacity.',
      icon: Truck,
    },
    {
      title: 'Pan-India Reach',
      description: 'Truck transportation across major business destinations and industrial corridors throughout India.',
      icon: MapPin,
    },
    {
      title: 'Reliable Operations',
      description: 'Professional handling, structured dispatches, and planned transportation movement.',
      icon: ShieldCheck,
    },
    {
      title: 'Daily Route Network',
      description: 'Regular daily connectivity between Hyderabad and eastern / northeastern destinations.',
      icon: Route,
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trusted Transportation (Editorial Split Section with Clip-path Reveal) */}
      <section ref={trustedRef} className="py-16 sm:py-24 bg-white border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Image with Clip-path reveal */}
            <div className="lg:col-span-6 relative group/img">
              <div
                className={`border border-gray-200 p-2 bg-[#F7F9FC] shadow-sm overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  trustedVisible
                    ? '[clip-path:inset(0_0_0_0)] opacity-100'
                    : '[clip-path:inset(0_100%_0_0)] opacity-60'
                }`}
              >
                <img
                  src={trustedTruckImg}
                  alt="roltaLogistics Heavy Freight Truck"
                  className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.02]"
                />
              </div>
              <div
                className={`absolute -bottom-4 -right-4 bg-[#111827] text-white p-5 border-2 border-[#2567A8] hidden sm:block shadow-lg transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  trustedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <p className="text-xs font-bold text-[#F6DE50] uppercase tracking-wider">SPECIALIZED LOGISTICS</p>
                <p className="text-sm font-bold text-white mt-1">Full Truck Load Operations</p>
              </div>
            </div>

            {/* Right Editorial Copy with Staggered Fade Up */}
            <div
              className={`lg:col-span-6 space-y-6 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                trustedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '180ms' }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F7F9FC] border border-[#2567A8]/30 text-[#2567A8] text-xs font-bold uppercase tracking-wider">
                <span>TRUSTED TRANSPORTATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
                Built Around the Full Load
              </h2>

              <p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed">
                roltaLogistics focuses exclusively on full-load truck transportation for businesses requiring dedicated vehicle capacity and dependable movement across India.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Full Truck Loads (FTL)',
                  'Dedicated Truck Transportation',
                  'Interstate Movement',
                  'Pan-India Coverage',
                  'Business Cargo Transportation',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 text-sm font-bold text-gray-800 transition-transform duration-200 hover:translate-x-1"
                  >
                    <span className="w-5 h-5 bg-[#2567A8] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/services"
                  className="inline-flex items-center text-sm font-bold text-[#2567A8] hover:text-[#111827] transition-colors border-b-2 border-[#2567A8] pb-1 group"
                >
                  <span>Explore FTL Transportation Services</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why roltaLogistics (Asymmetric Feature Grid with Stagger) */}
      <section ref={whyRef} className="py-16 sm:py-24 bg-[#F7F9FC] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div
            className={`max-w-3xl mb-12 sm:mb-16 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-gray-200 text-[#2567A8] text-xs font-bold uppercase tracking-wider mb-3">
              <span>WHY ROLTALOGISTICS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
              Operational Focus & Transportation Control
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseItems.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white border border-gray-200 p-7 shadow-xs hover:border-[#2567A8]/60 hover:shadow-md hover:-translate-y-[3px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between group ${
                    whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${idx * 110}ms` }}
                >
                  <div>
                    <div className="w-12 h-12 bg-[#F7F9FC] border border-gray-200 text-[#2567A8] flex items-center justify-center mb-6 transition-transform duration-250 group-hover:translate-x-1">
                      <ItemIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] mb-2 group-hover:text-[#2567A8] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-8 h-1 bg-[#F6DE50] mt-6 transition-all duration-300 group-hover:w-14"></div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Route Network Section */}
      <RouteNetwork />

      {/* 4b. Detailed Service Route Cards */}
      <section ref={routesRef} className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              routesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F7F9FC] border border-[#2567A8]/30 text-[#2567A8] text-xs font-bold uppercase tracking-wider mb-3">
                <span>FTL HIGHWAY CORRIDORS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                Daily FTL Route Highlights & Capacity
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-2">
                Detailed freight specifications for primary interstate transportation links originating from Hyderabad.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Link
                to="/routes"
                className="inline-flex items-center px-5 py-2.5 text-xs font-bold text-white bg-[#2567A8] hover:bg-[#1d5389] transition-all duration-200 hover:-translate-y-0.5 active:scale-98 shadow-xs"
              >
                <span>View All Routes & Destinations</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Route Cards Grid with Stagger */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dailyRoutes.map((route, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  routesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${idx * 100 + 150}ms` }}
              >
                <RouteCard {...route} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Process Section */}
      <ProcessSection />

      {/* 6. CTA Section */}
      <CTASection />
    </div>
  );
}
