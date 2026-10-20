import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RouteCard({ origin, destination, isDaily, highlights }) {
  return (
    <div className="bg-white border border-gray-200 p-6 shadow-xs hover:shadow-md hover:border-[#2567A8]/50 hover:-translate-y-[3px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] relative group flex flex-col justify-between">
      <div>
        {/* Route Badge */}
        {isDaily && (
          <div className="absolute top-0 right-0 bg-[#F6DE50] text-[#111827] text-[10px] font-bold uppercase tracking-wider px-3 py-1 border-b border-l border-[#e0c735]">
            PRIMARY DAILY ROUTE
          </div>
        )}

        {/* Visual Route Header */}
        <div className="flex items-center justify-between gap-1 sm:gap-2 mb-5 pt-2">
          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#2567A8] ring-4 ring-[#2567A8]/10 shrink-0"></span>
            <div>
              <p className="text-[9px] sm:text-[10px] font-bold uppercase text-gray-400 tracking-wider">ORIGIN</p>
              <h3 className="text-sm sm:text-lg font-extrabold text-[#111827] leading-tight">{origin}</h3>
            </div>
          </div>

          <div className="flex-1 px-1 sm:px-4 flex flex-col items-center justify-center text-center">
            <span className="text-[8px] sm:text-[10px] font-mono font-bold text-[#2567A8] uppercase tracking-wider mb-0.5">FTL TRUCK SERVICE</span>
            <div className="w-full flex items-center">
              <div className="h-[2px] bg-[#2567A8] flex-1"></div>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2567A8] mx-0.5 shrink-0 transition-transform duration-250 group-hover:translate-x-1" />
            </div>
          </div>

          <div className="flex items-center space-x-1.5 sm:space-x-2 text-right shrink-0">
            <div>
              <p className="text-[9px] sm:text-[10px] font-bold uppercase text-gray-400 tracking-wider">DESTINATION</p>
              <h3 className="text-sm sm:text-lg font-extrabold text-[#111827] leading-tight">{destination}</h3>
            </div>
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#F6DE50] ring-4 ring-[#F6DE50]/20 border border-[#e0c735] shrink-0"></span>
          </div>
        </div>

        {/* Route Info Details */}
        <div className="bg-[#F7F9FC] border border-gray-100 p-3.5 mb-4 text-xs grid grid-cols-2 gap-2 text-gray-700">
          <div>
            <span className="text-gray-400 block text-[10px] uppercase font-bold">Service Type</span>
            <span className="font-bold text-[#111827]">Full Truck Load (FTL)</span>
          </div>
          <div>
            <span className="text-gray-400 block text-[10px] uppercase font-bold">Vehicle Type</span>
            <span className="font-bold text-[#111827]">Dedicated Freight Trucks</span>
          </div>
        </div>

        {/* Route Features */}
        {highlights && (
          <ul className="space-y-1.5 text-xs text-gray-600 mb-5">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2567A8] mr-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link
        to="/contact"
        className="inline-flex items-center justify-between w-full pt-3 border-t border-gray-100 text-xs font-bold text-[#2567A8] group-hover:text-[#111827] transition-colors duration-200"
      >
        <span>Request Rate for {origin} → {destination}</span>
        <ArrowRight className="w-4 h-4 text-[#2567A8] group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  );
}
