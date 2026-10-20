import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import RouteCard from '../components/RouteCard';
import RouteNetwork from '../components/RouteNetwork';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Routes() {
  const [hubRef, hubVisible] = useScrollReveal({ threshold: 0.15 });
  const [dailyRef, dailyVisible] = useScrollReveal({ threshold: 0.12 });
  const [panIndiaRef, panIndiaVisible] = useScrollReveal({ threshold: 0.15 });

  const primaryDailyRoutes = [
    {
      origin: 'HYDERABAD',
      destination: 'BHUBANESWAR',
      isDaily: true,
      highlights: [
        'Dedicated daily FTL truck dispatches',
        'Direct connection between Telangana & Odisha hubs',
        'Full load multi-axle freight capacity',
      ],
    },
    {
      origin: 'HYDERABAD',
      destination: 'KOLKATA',
      isDaily: true,
      highlights: [
        'High-density commercial transportation corridor',
        'Direct interstate industrial cargo movement',
        'Un-transshipped full truck loads',
      ],
    },
    {
      origin: 'HYDERABAD',
      destination: 'SILIGURI',
      isDaily: true,
      highlights: [
        'North Bengal strategic gateway connection',
        'Long-haul full truck load specialization',
        'Planned route movement & tracking',
      ],
    },
    {
      origin: 'HYDERABAD',
      destination: 'GUWAHATI',
      isDaily: true,
      highlights: [
        'Northeast commercial supply chain link',
        'Direct dedicated truck transportation',
        'Interstate long-distance movement',
      ],
    },
  ];

  const panIndiaRegions = [
    {
      region: 'North & Western Corridors',
      cities: 'Delhi NCR, Mumbai, Pune, Ahmedabad, Jaipur',
      description: 'Full truck load freight movement connecting industrial clusters.',
    },
    {
      region: 'Southern Commercial Hubs',
      cities: 'Bengaluru, Chennai, Vijayawada, Vizag',
      description: 'Dedicated vehicle transportation across major southern commercial centers.',
    },
    {
      region: 'Central & Eastern Nodes',
      cities: 'Nagpur, Raipur, Ranchi, Patna',
      description: 'Reliable full-truck freight connectivity across central manufacturing belts.',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Routes Hero */}
      <section className="bg-white border-b border-gray-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 animate-[sectionFadeUp_600ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F7F9FC] border border-[#2567A8]/30 text-[#2567A8] text-xs font-bold uppercase tracking-wider">
              <span>TRANSPORTATION NETWORK</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
              Connecting Businesses Across India
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              roltaLogistics provides dedicated Full Truck Load (FTL) transportation nationwide, with primary daily connectivity between Hyderabad and key Eastern & Northeastern destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Continuous Route Network */}
      <RouteNetwork />

      {/* Origin Hub Spotlight: HYDERABAD */}
      <section ref={hubRef} className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div
            className={`bg-white border border-gray-200 p-8 sm:p-10 shadow-xs mb-12 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              hubVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-gray-200 mb-6 gap-4">
              <div>
                <span className="text-xs font-extrabold text-[#2567A8] uppercase tracking-widest block mb-1">
                  PRIMARY ORIGIN HUB
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                  HYDERABAD OPERATIONAL HUB
                </h2>
              </div>
              <div className="px-4 py-2 bg-[#F6DE50] text-[#111827] text-xs font-bold uppercase tracking-wider border border-[#e0c735]">
                DAILY DISPATCHES ACTIVE
              </div>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
              Our central hub in Hyderabad handles daily full-truck load movement to major eastern and northeastern commercial gateways, ensuring dependable schedules for industrial consignors.
            </p>

            {/* Visual Route Diagram with progressive cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { city: 'BHUBANESWAR', state: 'Odisha', role: 'Eastern Commercial Corridor' },
                { city: 'KOLKATA', state: 'West Bengal', role: 'Major Industrial Metro' },
                { city: 'SILIGURI', state: 'North Bengal', role: 'Northeast Transit Gateway' },
                { city: 'GUWAHATI', state: 'Assam', role: 'Northeast Commercial Center' },
              ].map((dest, idx) => (
                <div
                  key={idx}
                  className={`bg-[#F7F9FC] border border-gray-200 p-5 flex flex-col justify-between hover:border-[#2567A8] hover:-translate-y-0.5 transition-all duration-300 group ${
                    hubVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${idx * 100 + 150}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 mb-2">
                      <span>DESTINATION {idx + 1}</span>
                      <span className="text-[#2567A8]">DAILY FTL</span>
                    </div>
                    <h3 className="text-lg font-extrabold text-[#111827] group-hover:text-[#2567A8] transition-colors">{dest.city}</h3>
                    <p className="text-xs text-[#2567A8] font-bold mt-0.5">{dest.state}</p>
                    <p className="text-xs text-gray-500 mt-2">{dest.role}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-gray-800">
                    <span>HYD → {dest.city}</span>
                    <ArrowRight className="w-4 h-4 text-[#2567A8] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Daily Route Cards */}
          <div ref={dailyRef} className="space-y-6">
            <div
              className={`flex items-center space-x-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                dailyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-3 h-3 bg-[#F6DE50] border border-[#111827]"></span>
              <h3 className="text-xl font-bold text-[#111827]">Primary Daily Service Routes</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {primaryDailyRoutes.map((route, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    dailyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${idx * 110}ms` }}
                >
                  <RouteCard {...route} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Pan India Coverage Section */}
      <section ref={panIndiaRef} className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div
            className={`max-w-3xl mb-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              panIndiaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F7F9FC] border border-gray-200 text-[#2567A8] text-xs font-bold uppercase tracking-wider mb-3">
              <span>NATIONWIDE COVERAGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
              Pan-India Truck Transportation
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
              Beyond our highlighted daily routes, roltaLogistics provides Full Truck Load (FTL) transportation services throughout India. Whether moving cargo north, west, central, or south, we arrange dedicated truck capacity based on customer requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {panIndiaRegions.map((reg, idx) => (
              <div
                key={idx}
                className={`bg-[#F7F9FC] border border-gray-200 p-7 flex flex-col justify-between hover:border-[#2567A8]/50 hover:shadow-md hover:-translate-y-[3px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group ${
                  panIndiaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${idx * 110}ms` }}
              >
                <div>
                  <div className="w-10 h-10 bg-white border border-gray-200 text-[#2567A8] flex items-center justify-center mb-5 font-extrabold transition-transform duration-200 group-hover:translate-x-1">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2 group-hover:text-[#2567A8] transition-colors">{reg.region}</h3>
                  <p className="text-xs font-bold text-[#2567A8] mb-3">{reg.cities}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{reg.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 flex items-center text-xs font-bold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#2567A8] mr-2" />
                  <span>Full Truck Load Capacity</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
