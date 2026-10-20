import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col space-y-3 items-end pointer-events-none select-none">

      {/* WhatsApp Action Button */}
      <a
        href="https://wa.me/9177831589?text=Hello%20roltaLogistics%2C%20I%20would%20like%20to%20inquire%20about%20a%20Full%20Truck%20Load%20(FTL)%20shipment."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with roltaLogistics"
        className="pointer-events-auto flex items-center bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 group border border-emerald-600 active:scale-95"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-xs font-bold mr-0 group-hover:mr-2">
          WhatsApp Logistics
        </span>
        <MessageSquare className="w-5 h-5 fill-current" />
      </a>

      {/* Direct Call Action Button */}
      <a
        href="tel:+9177831589"
        aria-label="Call roltaLogistics"
        className="pointer-events-auto flex items-center bg-[#111827] hover:bg-[#2567A8] text-white px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 group border border-gray-700 active:scale-95"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-xs font-bold mr-0 group-hover:mr-2">
          Call 9177831589
        </span>
        <Phone className="w-5 h-5 text-[#F6DE50]" />
      </a>

    </div>
  );
}
