import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Routes', path: '/routes' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Header Animations Styles */}
      <style>{`
        @keyframes headerLogoReveal {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes headerNavReveal {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes headerCtaReveal {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .header-logo-enter {
          animation: headerLogoReveal 500ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .header-nav-enter {
          animation: headerNavReveal 500ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 100ms;
        }
        .header-cta-enter {
          animation: headerCtaReveal 500ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 180ms;
        }
        .nav-link-indicator {
          position: relative;
        }
        .nav-link-indicator::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #2567A8;
          transition: width 260ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link-indicator:hover::after,
        .nav-link-indicator.active::after {
          width: 100%;
        }
        @media (prefers-reduced-motion: reduce) {
          .header-logo-enter,
          .header-nav-enter,
          .header-cta-enter {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Top Utility Bar */}
      <div className="bg-[#111827] text-white text-xs py-2 px-4 sm:px-8 border-b border-gray-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-gray-300">
            <span className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F6DE50]"></span>
              <span>Full Truck Load (FTL) Logistics Across India</span>
            </span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-300">Primary Daily Routes: Hyderabad → East & Northeast</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="tel:+9177831589"
              className="flex items-center space-x-1.5 text-gray-200 hover:text-[#F6DE50] transition-colors duration-200 font-medium group"
            >
              <Phone className="w-3.5 h-3.5 text-[#F6DE50] transition-transform duration-200 group-hover:scale-110" />
              <span>9177831589</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] border-b ${
          isScrolled
            ? 'py-2.5 shadow-md border-gray-200 bg-white/98 backdrop-blur-xs'
            : 'py-4 border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group shrink-0 header-logo-enter"
            aria-label="roltaLogistics Home"
          >
            <img
              src={logoImg}
              alt="roltaLogistics Logo"
              className={`transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] w-auto object-contain ${
                isScrolled ? 'h-9 sm:h-10' : 'h-11 sm:h-12'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 header-nav-enter">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-semibold transition-colors duration-200 nav-link-indicator ${
                    isActive
                      ? 'text-[#2567A8] active'
                      : 'text-gray-700 hover:text-[#2567A8]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4 header-cta-enter">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-[#111827] bg-[#F6DE50] hover:bg-[#ebd23c] transition-all duration-200 border border-[#e0c735] shadow-xs active:scale-98 hover:-translate-y-0.5 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1 text-[#111827]" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <a
              href="tel:+9177831589"
              className="p-2 text-gray-700 hover:text-[#2567A8] rounded-md transition-colors"
              aria-label="Call roltaLogistics"
            >
              <Phone className="w-5 h-5 text-[#2567A8]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-[#2567A8] focus:outline-none rounded-md transition-transform duration-200"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              <div className="transition-transform duration-200">
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 transition-opacity duration-200" />
                ) : (
                  <Menu className="w-6 h-6 transition-opacity duration-200" />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Drawer with Smooth Enter Transition */}
          <div className="relative z-10 w-full bg-white border-b border-gray-200 shadow-2xl max-h-[85vh] overflow-y-auto flex flex-col animate-[headerNavReveal_300ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-[#F7F9FC]">
              <img src={logoImg} alt="roltaLogistics Logo" className="h-9 w-auto object-contain" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none rounded-md"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="px-5 py-6 space-y-2 flex-1">
              <p className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-3 px-2">Navigation</p>
              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${idx * 60}ms` }}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-bold transition-all duration-200 border-l-4 ${
                      isActive
                        ? 'text-[#2567A8] bg-[#F7F9FC] border-[#2567A8]'
                        : 'text-gray-800 hover:bg-gray-50 border-transparent hover:translate-x-1'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-6 mt-4 border-t border-gray-100 space-y-3">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-3 text-base font-bold text-[#111827] bg-[#F6DE50] hover:bg-[#ebd23c] border border-[#e0c735] text-center shadow-sm active:scale-98 transition-all"
                >
                  Get a Transport Quote
                </Link>
                <a
                  href="tel:+9177831589"
                  className="flex items-center justify-center w-full px-5 py-3 text-base font-bold text-[#111827] bg-white border border-gray-300 hover:bg-gray-50 text-center active:scale-98 transition-all"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#2567A8]" />
                  Call +91 77831589
                </a>
              </div>
            </div>

            <div className="p-4 bg-[#111827] text-gray-300 text-xs text-center border-t border-gray-800">
              <p className="font-semibold text-white">Full Truck Load (FTL) Transportation</p>
              <p className="text-gray-400 mt-0.5">Hyderabad • Bhubaneswar • Kolkata • Siliguri • Guwahati</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
