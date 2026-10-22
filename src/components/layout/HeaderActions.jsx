import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowUpRight, Menu } from "lucide-react";

export const VERIFIED_PHONE = {
  raw: "+919177831589",
  display: "+91 91778 31589",
  shortDisplay: "9177831589",
};

export default function HeaderActions({
  onOpenMobileMenu,
  mobileMenuOpen,
  menuButtonRef,
}) {
  return (
    <div className="flex items-center gap-3 xl:gap-4 shrink-0">
      {/* ============================================================
          DESKTOP ACTIONS: Call Us + Get a Quote
          ============================================================ */}
      <div className="hidden lg:flex items-center gap-3 xl:gap-5">
        {/* Minimal Call Us Link */}
        <a
          href={`tel:${VERIFIED_PHONE.raw}`}
          aria-label={`Call Rolta Logistics directly at ${VERIFIED_PHONE.display}`}
          className="rolta-glass-phone group flex items-center gap-2.5 text-white focus-visible:outline-2 focus-visible:outline-[#D8B66A] focus-visible:outline-offset-2"
        >
          <span className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white group-hover:bg-[#D8B66A] group-hover:text-[#081B33] group-hover:border-[#D8B66A] transition-all duration-200">
            <Phone className="w-3.5 h-3.5" />
          </span>
          <span className="flex flex-col text-left">
            <span className="text-[10px] font-semibold text-white/70 uppercase tracking-wider leading-none">
              Call Us
            </span>
            <span className="text-[13px] font-bold text-white tracking-tight group-hover:text-[#D8B66A] transition-colors">
              {VERIFIED_PHONE.display}
            </span>
          </span>
        </a>

        {/* Primary CTA: Get a Quote (Muted Gold) */}
        <Link
          to="/contact"
          className="rolta-glass-cta group focus-visible:outline-2 focus-visible:outline-[#D8B66A] focus-visible:outline-offset-2"
        >
          <span>Get a Quote</span>
          <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* ============================================================
          MOBILE & TABLET ACTIONS: Quick Call + Hamburger Trigger
          ============================================================ */}
      <div className="flex lg:hidden items-center gap-2">
        {/* Quick Call Icon Button (44x44px touch target) */}
        <a
          href={`tel:${VERIFIED_PHONE.raw}`}
          aria-label={`Call Rolta Logistics at ${VERIFIED_PHONE.display}`}
          className="min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white active:scale-95 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[#D8B66A] focus-visible:outline-offset-2"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* Hamburger Menu Toggle (44x44px touch target) */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={onOpenMobileMenu}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="rolta-mobile-drawer"
          className="min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white active:scale-95 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[#D8B66A] focus-visible:outline-offset-2"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
