import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Truck, MapPin, Phone, ArrowRight, Menu, X, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo/logo-transparent.png';

/**
 * BRAND PALETTE (Reference Design 2 - Dual Tone with CTA & Icon):
 * - Deep Navy:      #091E4B (Main navigation background & text on yellow)
 * - Dark Navy:      #061633 (Top utility bar & mobile drawer surface)
 * - Premium Yellow: #FFDF38 (Logo angled container, primary CTA, active accents)
 * - White:          #FFFFFF (Navigation text, crisp contrast)
 * - Muted Text:     #CBD5E1 (Subtitles & secondary labels)
 */

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Routes', path: '/routes' },
  { name: 'Contact', path: '/contact' },
];

const PHONE_NUMBER = '+91 9177831589';
const PHONE_TEL = 'tel:+919177831589';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);

  /* ============================================================
     1. PASSIVE SCROLL LISTENER (Triggers shrink & shadow at 50px)
     ============================================================ */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ============================================================
     2. ROUTE CHANGE & RESIZE CLEANUP
     ============================================================ */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const handleMediaChange = (e) => {
      if (e.matches) {
        setMobileMenuOpen(false);
      }
    };
    media.addEventListener('change', handleMediaChange);
    return () => media.removeEventListener('change', handleMediaChange);
  }, []);

  /* ============================================================
     3. ACCESSIBILITY: BODY SCROLL LOCK & ESCAPE KEY TRAP
     ============================================================ */
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus first interactive element inside drawer
    const focusableElements = drawerRef.current
      ? Array.from(
        drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      )
      : [];

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      } else if (e.key === 'Tab' && focusableElements.length > 0) {
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full font-sans transition-all duration-300">
        {/* ============================================================
            TOP UTILITY BAR — DEEP / DARK NAVY (#061633)
            Height: 38-42px. Left: Truck + FTL, Center: Corridors, Right: Phone
            ============================================================ */}
        <div
          className={`w-full bg-[#061633] text-white border-b border-white/10 transition-all duration-300 ${
            isScrolled
              ? 'h-0 opacity-0 overflow-hidden border-transparent'
              : 'h-10 opacity-100'
          }`}
        >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between text-xs">
          {/* Left: Truck icon + FTL Transportation */}
          <div className="flex items-center gap-2 text-white/90 shrink-0">
            <Truck className="w-3.5 h-3.5 text-[#FFDF38] shrink-0" />
            <span className="font-semibold tracking-wide uppercase text-[11.5px]">
              FTL Transportation
            </span>
          </div>

          {/* Center: Location Pin + Pan-India Corridors */}
          <div className="hidden md:flex items-center gap-2 text-slate-300 text-[12px] truncate px-4">
            <MapPin className="w-3.5 h-3.5 text-[#FFDF38] shrink-0" />
            <span className="font-medium truncate">
              Hyderabad → Bhubaneswar • Kolkata • Siliguri • Guwahati
            </span>
          </div>

          {/* Right: Phone Icon + Direct Contact */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={PHONE_TEL}
              aria-label={`Call Rolta Logistics directly at ${PHONE_NUMBER}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#FFDF38] transition-colors font-semibold text-[12px] focus-visible:outline-2 focus-visible:outline-[#FFDF38] focus-visible:outline-offset-2 rounded"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFDF38]" />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================
          MAIN NAVIGATION BAR — DUAL TONE LAYOUT
          - Left: Premium Yellow (#FFDF38) with Rolta Logo & Diagonal Slant
          - Right / Center: Deep Navy (#091E4B) with Nav Links & CTA
          ============================================================ */}
      <div
        className={`relative w-full bg-[#091E4B] transition-all duration-300 ${isScrolled
            ? 'h-[72px] sm:h-[74px] shadow-xl shadow-black/30'
            : 'h-[86px] sm:h-[90px] shadow-md shadow-black/15'
          }`}
      >
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between relative">
          {/* ------------------------------------------------------------
              LEFT 25-28%: PREMIUM YELLOW LOGO CONTAINER WITH DIAGONAL CUT
              Clean diagonal cut: polygon(0 0, 100% 0, calc(100% - 36px) 100%, 0 100%)
              The absolute pseudo-block extends yellow infinitely to the screen left.
              ------------------------------------------------------------ */}
          <div className="relative bg-[#FFDF38] h-full flex items-center px-4 sm:px-6 lg:px-8 xl:px-10 shrink-0 [clip-path:polygon(0_0,100%_0,calc(100%-36px)_100%,0_100%)] pr-12 sm:pr-14 lg:pr-16 z-10 transition-all duration-300">
            {/* Infinitely extends yellow to viewport left on any screen width */}
            <div
              className="absolute top-0 bottom-0 right-full w-screen bg-[#FFDF38]"
              aria-hidden="true"
            />

            <Link
              to="/"
              aria-label="Rolta Logistics Home"
              className="inline-flex items-center group focus-visible:outline-2 focus-visible:outline-[#091E4B] focus-visible:outline-offset-2 rounded"
            >
              <img
                src={logoImg}
                alt="Rolta Logistics — On Time Delivery"
                className={`w-auto object-contain transition-all duration-300 group-hover:opacity-95 ${isScrolled
                    ? 'h-9 sm:h-10 lg:h-[42px]'
                    : 'h-11 sm:h-12 lg:h-[50px]'
                  }`}
                style={{ aspectRatio: '450 / 166' }}
              />
            </Link>
          </div>

          {/* ------------------------------------------------------------
              CENTER: DESKTOP NAVIGATION LINKS (White with Premium Yellow Active)
              ------------------------------------------------------------ */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8 mx-4 xl:mx-8"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `group relative py-2 text-[14.5px] xl:text-[15px] font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#FFDF38] focus-visible:outline-offset-4 rounded-sm ${isActive ? 'text-[#FFDF38]' : 'text-white hover:text-[#FFDF38]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    {/* Elegant animated underline */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FFDF38] rounded-full transition-all duration-200 ${isActive
                          ? 'opacity-100 scale-x-100'
                          : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                        }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* ------------------------------------------------------------
              RIGHT: DESKTOP PREMIUM CTA SECTION
              - Circular Yellow-Outlined Phone Icon
              - "Call Now" + Phone Number
              - Thin Vertical Separator
              - Premium Yellow "Get a Quote" Button with Arrow Animation
              ------------------------------------------------------------ */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0 pr-4 sm:pr-6 lg:px-8">
            {/* Phone CTA */}
            <a
              href={PHONE_TEL}
              aria-label={`Call Rolta Logistics at ${PHONE_NUMBER}`}
              className="group flex items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-[#FFDF38] focus-visible:outline-offset-2 rounded-lg"
            >
              <span className="w-10 h-10 rounded-full border-2 border-[#FFDF38] flex items-center justify-center text-[#FFDF38] group-hover:bg-[#FFDF38] group-hover:text-[#091E4B] transition-all duration-200 shrink-0">
                <Phone className="w-4 h-4" />
              </span>
              <span className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#CBD5E1] uppercase tracking-wider leading-none">
                  Call Now
                </span>
                <span className="text-[14px] font-bold text-white tracking-tight group-hover:text-[#FFDF38] transition-colors whitespace-nowrap mt-1">
                  {PHONE_NUMBER}
                </span>
              </span>
            </a>

            {/* Separator */}
            <div className="h-8 w-px bg-white/15" aria-hidden="true" />

            {/* Premium Yellow Quote Button */}
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 rounded-[11px] bg-[#FFDF38] hover:bg-[#FFE65A] active:scale-[0.98] text-[#091E4B] font-bold text-[14px] tracking-wide shadow-md shadow-black/20 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#FFDF38] focus-visible:outline-offset-2 whitespace-nowrap"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ------------------------------------------------------------
              MOBILE & TABLET ACTIONS (Below 1024px)
              ------------------------------------------------------------ */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3 pr-4 sm:pr-6">
            {/* Quick Call Icon Button */}
            <a
              href={PHONE_TEL}
              aria-label={`Call Rolta Logistics at ${PHONE_NUMBER}`}
              className="w-10 h-10 rounded-full border-2 border-[#FFDF38] flex items-center justify-center text-[#FFDF38] hover:bg-[#FFDF38] hover:text-[#091E4B] active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-[#FFDF38]"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Tablet-only compact Quote Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FFDF38] text-[#091E4B] font-bold text-xs hover:bg-[#FFE65A] active:scale-95 transition-all shadow-xs"
            >
              <span>Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Drawer Trigger */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 text-white flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-[#FFDF38]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
          MOBILE NAVIGATION SLIDING DRAWER (Below 1024px)
          - Slide-in Deep Navy drawer (#061633)
          - White links with Premium Yellow active indicator
          - Full-width Premium Yellow Quote Button
          ============================================================ */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-[100] lg:hidden"
        >
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-[#040e1c]/80 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <aside
            ref={drawerRef}
            className="fixed top-0 right-0 bottom-0 w-[min(88vw,380px)] bg-[#061633] text-white flex flex-col justify-between shadow-2xl z-[101] overflow-y-auto border-l border-white/10 animate-[drawerSlideIn_280ms_cubic-bezier(0.16,1,0.3,1)_both]"
          >
            <div>
              {/* Drawer Brand Header with Premium Yellow Top Band */}
              <div className="flex items-center justify-between px-6 py-5 bg-[#FFDF38] text-[#091E4B] shadow-sm">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Rolta Logistics Home"
                  className="flex items-center"
                >
                  <img
                    src={logoImg}
                    alt="Rolta Logistics"
                    className="h-9 w-auto object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-9 h-9 rounded-lg bg-[#091E4B]/10 hover:bg-[#091E4B]/20 text-[#091E4B] flex items-center justify-center active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-[#091E4B]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="px-5 py-6">
                <p className="text-[11px] font-bold text-[#FFDF38] uppercase tracking-widest px-3 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFDF38]" />
                  <span>Navigation Menu</span>
                </p>

                <nav aria-label="Mobile Menu Links" className="flex flex-col space-y-1.5">
                  {NAV_ITEMS.map((item, idx) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.path === '/'}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 border-l-[3.5px] ${isActive
                          ? 'bg-[#FFDF38]/15 text-[#FFDF38] border-[#FFDF38]'
                          : 'text-slate-200 border-transparent hover:bg-white/5 hover:text-white'
                        } focus-visible:outline-2 focus-visible:outline-[#FFDF38]`
                      }
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[11px] font-mono font-bold text-white/40 group-hover:text-[#FFDF38] transition-colors">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span>{item.name}</span>
                      </span>
                      <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-[#FFDF38] group-hover:translate-x-0.5 transition-all" />
                    </NavLink>
                  ))}
                </nav>

                {/* Primary Action Buttons inside drawer */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#FFDF38] hover:bg-[#FFE65A] text-[#091E4B] font-bold text-[15px] shadow-md shadow-black/20 active:scale-[0.99] transition-all"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={PHONE_TEL}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-[14px] hover:bg-white/10 active:scale-[0.99] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#FFDF38]" />
                    <span>Call {PHONE_NUMBER}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Drawer Bottom Info Footer */}
            <div className="px-6 py-5 bg-[#040e1c] border-t border-white/10 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-[#FFDF38] font-bold uppercase tracking-wider text-[11px]">
                <Truck className="w-3.5 h-3.5" />
                <span>Pan-India Full Truck Load (FTL)</span>
              </div>
              <p className="text-slate-400 text-[11.5px] leading-relaxed">
                Hyderabad ↔ Bhubaneswar • Kolkata • Siliguri • Guwahati
              </p>
            </div>
          </aside>
        </div>
      )}

      {/* Drawer slide-in animation keyframe */}
      <style>{`
        @keyframes drawerSlideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          #mobile-nav-drawer aside {
            animation: none !important;
          }
        }
      `}</style>
    </header>

    {/* Non-home pages spacer to preserve layout flow beneath fixed header */}
    {!isHome && (
      <div
        className="w-full h-[126px] sm:h-[130px] shrink-0 pointer-events-none"
        aria-hidden="true"
      />
    )}
  </>
  );
}

export { Header };
