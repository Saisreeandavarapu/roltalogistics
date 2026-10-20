import React, { useState } from 'react';
import { ClipboardList, FileText, Truck, PackageCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  const processSteps = [
    {
      number: '01',
      title: 'Share Shipment Details',
      description: 'Tell us your pickup, delivery and shipment requirements.',
      icon: ClipboardList,
    },
    {
      number: '02',
      title: 'Get Transport Quote',
      description: 'Receive a clear transportation quote based on your requirements.',
      icon: FileText,
    },
    {
      number: '03',
      title: 'Truck Assigned',
      description: 'A suitable truck is assigned for your full-load movement.',
      icon: Truck,
    },
    {
      number: '04',
      title: 'Shipment Delivered',
      description: 'Your shipment reaches its destination through planned truck transportation.',
      icon: PackageCheck,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white border-t border-b border-gray-200 overflow-hidden relative select-none"
    >
      <style>{`
        /* Progressive Route Line Draw */
        @keyframes drawRouteLine {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .process-route-drawn {
          stroke-dasharray: 1000;
          animation: drawRouteLine 1600ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .process-route-drawn {
            animation: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Eyebrow Label with Decorative Blue Accent Lines */}
          <div className="inline-flex items-center space-x-3 text-xs font-extrabold uppercase tracking-widest text-[#2567A8]">
            <span className="w-8 h-[2px] bg-[#2567A8] inline-block"></span>
            <span>WORKING PROCESS</span>
            <span className="w-8 h-[2px] bg-[#2567A8] inline-block"></span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            How We Move Your Load
          </h2>

          {/* Short Supporting Paragraph */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            A simple, reliable process from shipment details to final delivery.
          </p>
        </div>

        {/* Process Nodes Container */}
        <div className="relative">
          
          {/* Desktop SVG Progressive Route Path */}
          <div className="hidden lg:block absolute top-[135px] left-[10%] right-[10%] h-[120px] pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M 50 60 C 200 15, 300 105, 500 60 C 700 15, 800 105, 950 60"
                stroke="#2567A8"
                strokeWidth="2.5"
                strokeLinecap="round"
                className={isVisible ? 'process-route-drawn' : 'opacity-0'}
              />
            </svg>
          </div>

          {/* Desktop Horizontal Layout (LG Screen Widths) */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 xl:gap-8 relative z-10">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center cursor-pointer group transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-[0.94] translate-y-6'
                  }`}
                  style={{ transitionDelay: `${idx * 130}ms` }}
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActiveStep(idx);
                  }}
                  aria-label={`Step ${step.number}: ${step.title}`}
                >
                  {/* Outer Ring Wrapper (Shows Dotted Blue Outline on Active/Hover) */}
                  <div
                    className={`p-2.5 rounded-full transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? 'border-2 border-dashed border-[#2567A8] scale-[1.02]'
                        : 'border-2 border-transparent scale-100 group-hover:border-[#2567A8]/50'
                    }`}
                  >
                    {/* Main Process Circle */}
                    <div
                      className={`w-[240px] h-[240px] xl:w-[260px] xl:h-[260px] rounded-full p-6 flex flex-col items-center justify-center relative transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-xs ${
                        isActive
                          ? 'bg-[#111827] text-white shadow-xl'
                          : 'bg-[#F7F9FC] text-[#111827] hover:bg-[#111827] hover:text-white border border-gray-200/80'
                      }`}
                    >
                      {/* Process Icon */}
                      <div className="mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                        <StepIcon
                          className={`w-10 h-10 transition-colors duration-350 ${
                            isActive ? 'text-[#F6DE50]' : 'text-[#2567A8] group-hover:text-[#F6DE50]'
                          }`}
                        />
                      </div>

                      {/* Process Title */}
                      <h3
                        className={`text-base font-extrabold mb-2 leading-snug px-3 transition-colors duration-350 ${
                          isActive ? 'text-white' : 'text-[#111827] group-hover:text-white'
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* Process Description */}
                      <p
                        className={`text-xs leading-relaxed font-normal px-2 transition-colors duration-350 ${
                          isActive ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-300'
                        }`}
                      >
                        {step.description}
                      </p>

                      {/* Number Badge at Bottom of Circle */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                        <div className="w-11 h-11 rounded-full bg-[#2567A8] text-white text-sm font-extrabold flex items-center justify-center border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-250">
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tablet 2x2 Grid Layout (MD to LG) */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-12 relative z-10 max-w-2xl mx-auto">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center cursor-pointer group transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-[0.94] translate-y-6'
                  }`}
                  style={{ transitionDelay: `${idx * 110}ms` }}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Step ${step.number}: ${step.title}`}
                >
                  <div
                    className={`p-2.5 rounded-full transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? 'border-2 border-dashed border-[#2567A8] scale-[1.02]'
                        : 'border-2 border-transparent scale-100 group-hover:border-[#2567A8]/50'
                    }`}
                  >
                    <div
                      className={`w-[230px] h-[230px] sm:w-[250px] sm:h-[250px] rounded-full p-6 flex flex-col items-center justify-center relative transition-all duration-350 shadow-xs ${
                        isActive
                          ? 'bg-[#111827] text-white shadow-xl'
                          : 'bg-[#F7F9FC] text-[#111827] border border-gray-200/80 hover:bg-[#111827] hover:text-white'
                      }`}
                    >
                      <StepIcon
                        className={`w-10 h-10 mb-3 transition-colors duration-300 ${
                          isActive ? 'text-[#F6DE50]' : 'text-[#2567A8] group-hover:text-[#F6DE50]'
                        }`}
                      />
                      <h3
                        className={`text-base font-extrabold mb-2 leading-snug px-3 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-[#111827] group-hover:text-white'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed font-normal px-2 transition-colors duration-300 ${
                          isActive ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-300'
                        }`}
                      >
                        {step.description}
                      </p>

                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                        <div className="w-11 h-11 rounded-full bg-[#2567A8] text-white text-sm font-extrabold flex items-center justify-center border-2 border-white shadow-md group-hover:scale-105 transition-transform">
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Process Timeline (< MD Widths) */}
          <div className="md:hidden relative z-10 max-w-sm mx-auto space-y-12">
            
            {/* Vertical Dotted Route Line Running Down Center */}
            <div className="absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-0.5 border-r-2 border-dashed border-[#2567A8]/50 z-0 pointer-events-none"></div>

            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center cursor-pointer relative z-10 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                  onClick={() => setActiveStep(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Step ${step.number}: ${step.title}`}
                >
                  <div
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'border-2 border-dashed border-[#2567A8] scale-[1.01]'
                        : 'border-2 border-transparent scale-100'
                    }`}
                  >
                    <div
                      className={`w-[210px] h-[210px] sm:w-[230px] sm:h-[230px] rounded-full p-5 flex flex-col items-center justify-center relative transition-all duration-300 shadow-xs ${
                        isActive
                          ? 'bg-[#111827] text-white shadow-xl'
                          : 'bg-[#F7F9FC] text-[#111827] border border-gray-200/80'
                      }`}
                    >
                      <StepIcon
                        className={`w-9 h-9 mb-2.5 transition-colors duration-300 ${
                          isActive ? 'text-[#F6DE50]' : 'text-[#2567A8]'
                        }`}
                      />
                      <h3
                        className={`text-sm font-extrabold mb-1.5 leading-tight px-2 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-[#111827]'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-[11px] leading-relaxed font-normal px-2 transition-colors duration-300 ${
                          isActive ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {step.description}
                      </p>

                      <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 z-20">
                        <div className="w-10 h-10 rounded-full bg-[#2567A8] text-white text-xs font-extrabold flex items-center justify-center border-2 border-white shadow-md">
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
