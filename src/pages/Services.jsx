import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Route, Shield, MapPin, Calendar, ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react';
import CTASection from '../components/CTASection';
import servicesHeroImg from '../assets/images/hero_truck_highway.png';
import loadingImg from '../assets/images/hero_truck_loading.png';
import longHaulImg from '../assets/images/hero_truck_longhaul.png';
import sunsetImg from '../assets/images/hero_truck_sunset.png';
import warehouseImg from '../assets/images/hero_truck_warehouse.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SERVICES = [
  {
    id: 'dedicated',
    number: '01',
    title: 'Dedicated\nTruck Capacity',
    shortTitle: 'Dedicated',
    description:
      'Complete vehicle assignment exclusively for your commercial consignment. Ensures zero mixed cargo and complete control over vehicle space from loading dock to destination.',
    icon: Truck,
    image: servicesHeroImg,
    tag: 'FTL EXCLUSIVE',
    benefits: [
      'Entire truck allocated to single customer shipment',
      'Eliminates cargo mixing & transshipment risks',
      'Direct loading and immediate vehicle dispatch',
      'Ideal for high-volume commercial goods',
    ],
  },
  {
    id: 'longdistance',
    number: '02',
    title: 'Long-Distance\nTransportation',
    shortTitle: 'Long-Haul',
    description:
      'High-mileage highway freight transportation connecting major manufacturing hubs and regional distribution centers. Planned long-haul transit with experienced drivers.',
    icon: Route,
    image: longHaulImg,
    tag: 'HIGHWAY FREIGHT',
    benefits: [
      'Planned long-haul highway transit routes',
      'Direct interstate corridor movement',
      'Experienced long-distance truck drivers',
      'Continuous movement across states',
    ],
  },
  {
    id: 'interstate',
    number: '03',
    title: 'Interstate\nMovement',
    shortTitle: 'Interstate',
    description:
      'Compliant interstate freight transportation with proper permit documentation and efficient state border navigation across all major commercial corridors.',
    icon: Shield,
    image: sunsetImg,
    tag: 'ALL-INDIA PERMIT',
    benefits: [
      'All-India permit compliant trucks',
      'Direct state-to-state freight movement',
      'Cross-border commercial clearance experience',
      'Seamless interstate route connectivity',
    ],
  },
  {
    id: 'business',
    number: '04',
    title: 'Business Cargo\nMovement',
    shortTitle: 'Business',
    description:
      'Tailored transportation solutions for manufacturers, industrial suppliers, distributors, and corporate consignors. Flexible truck assignment based on load volume.',
    icon: MapPin,
    image: warehouseImg,
    tag: 'B2B LOGISTICS',
    benefits: [
      'Designed for industrial and commercial consignments',
      'Direct plant-to-warehouse or warehouse-to-dealer transit',
      'Flexible truck assignment based on load volume',
      'Reliable schedule management',
    ],
  },
  {
    id: 'routebased',
    number: '05',
    title: 'Route-Based\nTransportation',
    shortTitle: 'Corridor',
    description:
      'Specialized daily transportation on high-volume corridors—especially Hyderabad to Eastern and Northeastern cities—with structured daily dispatches.',
    icon: Calendar,
    image: loadingImg,
    tag: 'DAILY DISPATCH',
    benefits: [
      'Regular daily truck dispatches from Hyderabad',
      'Strong connectivity to Kolkata, Bhubaneswar, Siliguri & Guwahati',
      'Structured transit corridor scheduling',
      'Dependable daily load capacity',
    ],
  },
];

function DesktopPanel({ service, isActive, onActivate }) {
  const Icon = service.icon;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      aria-label={`View ${service.shortTitle} service details`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onActivate()}
      style={{
        flex: isActive ? '5 0 0%' : '1 0 0%',
        transition: 'flex 700ms cubic-bezier(0.76, 0, 0.24, 1)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        minWidth: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: isActive ? 'scale(1)' : 'scale(1.08)',
          transition: 'transform 800ms cubic-bezier(0.76, 0, 0.24, 1), filter 600ms ease',
          filter: isActive ? 'brightness(0.45)' : 'brightness(0.3) saturate(0.5)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isActive
            ? 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)'
            : 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 100%)',
          transition: 'background 600ms ease',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: isActive ? '100%' : '0%',
          height: '3px',
          background: '#2567A8',
          transition: 'width 600ms cubic-bezier(0.76, 0, 0.24, 1) 100ms',
        }}
      />
      <div
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '2rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-90deg)',
            whiteSpace: 'nowrap',
            opacity: isActive ? 0 : 1,
            transition: 'opacity 300ms ease',
            pointerEvents: 'none',
          }}
        >
          <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            {service.shortTitle}
          </span>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            left: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            opacity: isActive ? 1 : 0.5,
            transition: 'opacity 400ms ease',
          }}
        >
          <span style={{ color: '#F6DE50', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.12em' }}>
            {service.number}
          </span>
          <div style={{ width: isActive ? '32px' : '0px', height: '1px', background: '#F6DE50', transition: 'width 500ms cubic-bezier(0.76,0,0.24,1) 150ms' }} />
          <span
            style={{
              color: '#F6DE50',
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
              transition: 'opacity 350ms ease 200ms, transform 350ms ease 200ms',
            }}
          >
            {service.tag}
          </span>
        </div>

        <div
          style={{
            marginBottom: '1rem',
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 400ms ease 200ms, transform 400ms cubic-bezier(0.22,1,0.36,1) 200ms',
          }}
        >
          <div style={{ display: 'inline-flex', padding: '0.625rem', border: '1px solid rgba(246,222,80,0.4)', background: 'rgba(246,222,80,0.1)' }}>
            <Icon style={{ width: '1.25rem', height: '1.25rem', color: '#F6DE50' }} />
          </div>
        </div>

        <h3
          style={{
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            marginBottom: '0.75rem',
            whiteSpace: 'pre-line',
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 400ms ease 150ms, transform 400ms cubic-bezier(0.22,1,0.36,1) 150ms',
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: '0.8rem',
            lineHeight: 1.7,
            marginBottom: '1.25rem',
            maxWidth: '340px',
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 400ms ease 250ms, transform 400ms cubic-bezier(0.22,1,0.36,1) 250ms',
          }}
        >
          {service.description}
        </p>

        <div
          style={{
            marginBottom: '1.5rem',
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 400ms ease 320ms, transform 400ms cubic-bezier(0.22,1,0.36,1) 320ms',
          }}
        >
          {service.benefits.map((b, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <CheckCircle2 style={{ width: '0.875rem', height: '0.875rem', color: '#F6DE50', flexShrink: 0, marginTop: '2px' }} />
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.72rem', fontWeight: 500, lineHeight: 1.5 }}>{b}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 400ms ease 400ms, transform 400ms cubic-bezier(0.22,1,0.36,1) 400ms',
          }}
        >
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '0.6rem 1.25rem',
              background: '#F6DE50',
              color: '#111827',
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid #e0c735',
            }}

          >
            Book Capacity
            <ArrowUpRight style={{ width: '0.75rem', height: '0.75rem' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileAccordionItem({ service, isActive, onToggle }) {
  const Icon = service.icon;
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isActive ? bodyRef.current.scrollHeight : 0);
    }
  }, [isActive]);

  return (
    <div style={{ borderBottom: '1px solid #e5e7eb', background: isActive ? '#fff' : '#F7F9FC', transition: 'background 300ms ease' }}>
      <button
        onClick={onToggle}
        aria-expanded={isActive}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '1rem 1.25rem', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ color: isActive ? '#2567A8' : '#9ca3af', fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.1em', minWidth: '1.5rem', transition: 'color 250ms ease' }}>
          {service.number}
        </span>
        <div style={{ padding: '0.5rem', background: isActive ? '#2567A8' : '#fff', border: `1px solid ${isActive ? '#2567A8' : '#e5e7eb'}`, flexShrink: 0, transition: 'background 250ms ease, border-color 250ms ease' }}>
          <Icon style={{ width: '1rem', height: '1rem', color: isActive ? '#F6DE50' : '#2567A8' }} />
        </div>
        <span style={{ flex: 1, color: isActive ? '#111827' : '#374151', fontSize: '0.875rem', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.01em', transition: 'color 250ms ease' }}>
          {service.shortTitle} — {service.tag}
        </span>
        <ChevronDown style={{ width: '1rem', height: '1rem', color: isActive ? '#2567A8' : '#9ca3af', flexShrink: 0, transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 350ms cubic-bezier(0.76,0,0.24,1), color 250ms ease' }} />
      </button>

      <div style={{ overflow: 'hidden', height: `${height}px`, transition: 'height 450ms cubic-bezier(0.76,0,0.24,1)' }}>
        <div ref={bodyRef} style={{ padding: '0 1.25rem 1.25rem 1.25rem' }}>
          <div style={{ marginBottom: '1rem', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            <img
              src={service.image}
              alt={service.shortTitle}
              style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <p style={{ color: '#4b5563', fontSize: '0.8rem', lineHeight: 1.7, marginBottom: '0.875rem' }}>{service.description}</p>
          <div style={{ marginBottom: '1rem' }}>
            {service.benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <CheckCircle2 style={{ width: '0.875rem', height: '0.875rem', color: '#2567A8', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#374151', fontSize: '0.75rem', lineHeight: 1.5 }}>{b}</span>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.6rem 1.25rem', background: '#F6DE50', color: '#111827', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid #e0c735' }}
          >
            Book Capacity
            <ArrowUpRight style={{ width: '0.75rem', height: '0.75rem' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [activePanel, setActivePanel] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(null);

  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.15 });
  const [panelsRef, panelsVisible] = useScrollReveal({ threshold: 0.08 });
  const [advantageRef, advantageVisible] = useScrollReveal({ threshold: 0.12 });

  return (
    <div className="space-y-0">
      <style>{`
        .svc-desktop { display: flex !important; }
        .svc-mobile { display: none !important; }
        @media (max-width: 767px) {
          .svc-desktop { display: none !important; }
          .svc-mobile { display: block !important; }
        }
      `}</style>

      {/* Hero Header */}
      <section ref={heroRef} className="bg-white border-b border-gray-200 py-12 sm:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className={`lg:col-span-7 space-y-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F7F9FC] border border-[#2567A8]/30 text-[#2567A8] text-xs font-bold uppercase tracking-wider">
                <span>OUR LOGISTICS SPECIALIZATION</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                Full Truck Load Transportation
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Dedicated truck capacity for businesses moving large consignments across India. We focus exclusively on full-load truck logistics to ensure direct, efficient freight transit.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold text-[#111827]">
                <span className="px-3 py-1.5 bg-[#F7F9FC] border border-gray-200">Full Truck Load (FTL) Only</span>
                <span className="px-3 py-1.5 bg-[#F7F9FC] border border-gray-200">Interstate Truck Movement</span>
                <span className="px-3 py-1.5 bg-[#F7F9FC] border border-gray-200">Pan-India Freight Logistics</span>
              </div>
            </div>
            <div className="lg:col-span-5 group/img">
              <div className={`border border-gray-200 p-2 bg-[#F7F9FC] overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${heroVisible ? '[clip-path:inset(0_0_0_0)] opacity-100' : '[clip-path:inset(0_100%_0_0)] opacity-60'}`}>
                <img src={servicesHeroImg} alt="Full Truck Load Freight" className="w-full h-[280px] sm:h-[320px] object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.02]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Panels */}
      <section ref={panelsRef} style={{ background: '#111827', borderBottom: '1px solid #1f2937', overflow: 'hidden' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '3.5rem 1.5rem 2rem',
            opacity: panelsVisible ? 1 : 0,
            transform: panelsVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 600ms ease, transform 600ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.25rem 0.75rem', border: '1px solid rgba(37,103,168,0.5)', color: '#2567A8', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.875rem', background: 'rgba(37,103,168,0.07)' }}>
            SERVICE OFFERINGS
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0 }}>
              Comprehensive FTL Solutions
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', maxWidth: '320px', lineHeight: 1.6, margin: 0 }}>
              Every service tier is engineered around full vehicle capacity and direct road transit across India.
            </p>
          </div>
        </div>

        {/* Desktop panels */}
        <div
          className="svc-desktop"
          style={{
            height: '520px',
            opacity: panelsVisible ? 1 : 0,
            transform: panelsVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 700ms ease 200ms, transform 700ms cubic-bezier(0.22,1,0.36,1) 200ms',
          }}
        >
          {SERVICES.map((service, idx) => (
            <DesktopPanel
              key={service.id}
              service={service}
              isActive={activePanel === idx}
              onActivate={() => setActivePanel(idx)}
              index={idx}
            />
          ))}
        </div>

        {/* Dot nav desktop */}
        <div className="svc-desktop" style={{ justifyContent: 'center', gap: '0.5rem', padding: '1.25rem 0', background: '#0f172a' }}>
          {SERVICES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActivePanel(idx)}
              aria-label={`View service ${idx + 1}`}
              style={{
                width: activePanel === idx ? '24px' : '6px',
                height: '6px',
                background: activePanel === idx ? '#F6DE50' : 'rgba(255,255,255,0.25)',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 400ms cubic-bezier(0.76,0,0.24,1), background 300ms ease',
              }}
            />
          ))}
        </div>

        {/* Mobile accordion */}
        <div className="svc-mobile" style={{ opacity: panelsVisible ? 1 : 0, transition: 'opacity 700ms ease 200ms' }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {SERVICES.map((service, idx) => (
              <MobileAccordionItem
                key={service.id}
                service={service}
                isActive={mobileOpen === idx}
                onToggle={() => setMobileOpen(mobileOpen === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Operational Highlights Split */}
      <section ref={advantageRef} className="py-16 sm:py-24 bg-white border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 group/img">
              <div className={`border border-gray-200 p-2 bg-[#F7F9FC] overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${advantageVisible ? '[clip-path:inset(0_0_0_0)] opacity-100' : '[clip-path:inset(0_100%_0_0)] opacity-60'}`}>
                <img src={loadingImg} alt="Freight Loading Operations" className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.02]" />
              </div>
            </div>
            <div className={`lg:col-span-6 space-y-6 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${advantageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F7F9FC] border border-gray-200 text-[#2567A8] text-xs font-bold uppercase tracking-wider">
                <span>WHY FULL TRUCK LOAD?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                The Direct Transportation Advantage
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Full Truck Load (FTL) transportation provides businesses with total control over vehicle schedule, direct routes without hub stops, and dedicated space for maximum cargo security.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F7F9FC] border border-gray-200 hover:border-[#2567A8]/40 hover:-translate-y-0.5 transition-all duration-200">
                  <h4 className="font-bold text-[#111827] text-sm mb-1">Direct Transit</h4>
                  <p className="text-xs text-gray-600">Truck moves straight from loading dock to destination site.</p>
                </div>
                <div className="p-4 bg-[#F7F9FC] border border-gray-200 hover:border-[#2567A8]/40 hover:-translate-y-0.5 transition-all duration-200">
                  <h4 className="font-bold text-[#111827] text-sm mb-1">Dedicated Capacity</h4>
                  <p className="text-xs text-gray-600">Entire truck bed reserved exclusively for your consignment.</p>
                </div>
                <div className="p-4 bg-[#F7F9FC] border border-gray-200 hover:border-[#2567A8]/40 hover:-translate-y-0.5 transition-all duration-200">
                  <h4 className="font-bold text-[#111827] text-sm mb-1">Pan-India Freight</h4>
                  <p className="text-xs text-gray-600">Seamless interstate transit across all major business hubs.</p>
                </div>
                <div className="p-4 bg-[#F7F9FC] border border-gray-200 hover:border-[#2567A8]/40 hover:-translate-y-0.5 transition-all duration-200">
                  <h4 className="font-bold text-[#111827] text-sm mb-1">Route Specialization</h4>
                  <p className="text-xs text-gray-600">Daily dispatches on Hyderabad ↔ East & Northeast corridors.</p>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/contact" className="inline-flex items-center px-6 py-3.5 bg-[#F6DE50] hover:bg-[#ebd23c] text-[#111827] font-bold text-sm border border-[#e0c735] transition-all duration-200 hover:-translate-y-0.5 active:scale-98 shadow-xs group">
                  <span>Book a Full Truck Shipment</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
