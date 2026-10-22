import React, { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { X, Phone, ArrowUpRight, Truck, MapPin, ShieldCheck } from "lucide-react";
import logoWhiteImg from "../../assets/logo/logo-white.png";
import { NAVIGATION_ITEMS } from "./DesktopNavigation";
import { VERIFIED_PHONE } from "./HeaderActions";

export default function MobileNavigation({
  isOpen,
  onClose,
  triggerButtonRef,
}) {
  const drawerRef = useRef(null);

  /* ============================================================
     ACCESSIBILITY: KEYBOARD TRAP & ESCAPE LISTENER
     ============================================================ */
  useEffect(() => {
    if (!isOpen) return;

    // Lock background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focusable elements inside drawer
    const getFocusables = () => {
      if (!drawerRef.current) return [];
      return Array.from(
        drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
    };

    // Auto-focus first focusable element
    const focusables = getFocusables();
    if (focusables.length > 0) {
      focusables[0].focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const elements = getFocusables();
        if (elements.length === 0) return;

        const first = elements[0];
        const last = elements[elements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);

      // Restore focus to triggering menu button
      if (triggerButtonRef?.current) {
        triggerButtonRef.current.focus();
      }
    };
  }, [isOpen, onClose, triggerButtonRef]);

  if (!isOpen) return null;

  return (
    <div
      id="rolta-mobile-drawer"
      className="fixed inset-0 z-[100] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Dark backdrop */}
      <div
        className="rolta-glass-backdrop-fade absolute inset-0 bg-[#040e1c]/75 backdrop-blur-xs cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sliding Drawer Container */}
      <aside
        ref={drawerRef}
        className="rolta-glass-drawer-slide absolute top-0 right-0 bottom-0 w-[min(88vw,380px)] bg-[#081B33] text-white flex flex-col justify-between shadow-2xl overflow-y-auto border-l border-white/10"
      >
        {/* Top Header inside Drawer */}
        <div>
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#06162a]">
            <Link
              to="/"
              onClick={onClose}
              className="flex items-center"
              aria-label="Rolta Logistics Home"
            >
              <img
                src={logoWhiteImg}
                alt="Rolta Logistics"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-[#D8B66A] focus-visible:outline-offset-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-5 py-6">
            <p className="text-[11px] font-bold text-[#D8B66A] uppercase tracking-widest px-3 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B66A]"></span>
              Navigation Menu
            </p>

            <nav aria-label="Mobile Menu" className="flex flex-col space-y-1.5">
              {NAVIGATION_ITEMS.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `group flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 border-l-[3.5px] ${
                      isActive
                        ? "bg-[#D8B66A]/15 text-[#D8B66A] border-[#D8B66A]"
                        : "text-slate-200 border-transparent hover:bg-white/5 hover:text-white"
                    } focus-visible:outline-2 focus-visible:outline-[#D8B66A] focus-visible:outline-offset-2`
                  }
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[11px] font-mono font-bold text-white/40 group-hover:text-[#D8B66A] transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item.name}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-[#D8B66A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </NavLink>
              ))}
            </nav>

            {/* Quick Action Buttons inside Drawer */}
            <div className="mt-7 pt-6 border-t border-white/10 space-y-3">
              {/* Primary CTA: Get a Quote (Muted Gold) */}
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-[10px] bg-[#D8B66A] text-[#081B33] font-bold text-[15px] shadow-md hover:bg-[#E0C27B] active:scale-[0.99] transition-all"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* Direct Call Button */}
              <a
                href={`tel:${VERIFIED_PHONE.raw}`}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-[10px] bg-white/5 border border-white/10 text-white font-semibold text-[14px] hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D8B66A]" />
                <span>Call {VERIFIED_PHONE.display}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Verified Enterprise Logistics Footer Section in Drawer */}
        <div className="px-6 py-5 bg-[#051325] border-t border-white/10 text-xs text-slate-300 space-y-3">
          <div className="flex items-center gap-2 text-[#D8B66A] font-bold uppercase tracking-wider text-[11px]">
            <Truck className="w-4 h-4" />
            <span>Pan-India Full Truck Load (FTL)</span>
          </div>

          <div className="flex items-start gap-2 text-slate-400 text-[11.5px] leading-relaxed">
            <MapPin className="w-3.5 h-3.5 text-[#D8B66A] shrink-0 mt-0.5" />
            <span>
              HQ: Hyderabad, Telangana
              <br />
              Corridors: Bhubaneswar • Kolkata • Siliguri • Guwahati
            </span>
          </div>

          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Enterprise Logistics
            </span>
            <span className="font-semibold text-slate-400">Est. Pan-India</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
