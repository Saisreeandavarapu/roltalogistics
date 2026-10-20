import React from 'react';
import { Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ title, description, benefits, icon: Icon = Truck }) {
  return (
    <div className="bg-white border border-gray-200 p-8 shadow-xs hover:shadow-md hover:border-[#2567A8]/50 hover:-translate-y-[3px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 bg-[#F7F9FC] border border-gray-200 text-[#2567A8] transition-transform duration-250 group-hover:translate-x-1">
            <Icon className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-[#2567A8] bg-[#F7F9FC] px-3 py-1 border border-gray-200 uppercase tracking-wider">
            FTL TRUCK ONLY
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#2567A8] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
          {description}
        </p>

        <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Key Service Benefits</p>
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start text-xs font-medium text-gray-800">
              <CheckCircle2 className="w-4 h-4 text-[#2567A8] mr-2.5 shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/contact"
        className="inline-flex items-center justify-between w-full pt-4 border-t border-gray-100 text-xs font-bold text-[#2567A8] hover:text-[#111827] transition-colors duration-200"
      >
        <span>Book Full Truck Capacity</span>
        <ArrowRight className="w-4 h-4 text-[#2567A8] group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  );
}
