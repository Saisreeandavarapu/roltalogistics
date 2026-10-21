
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  ArrowUpRight,
  Truck,
  MapPin,
  Clock3,
} from "lucide-react";

import logoImg from "../assets/logo/logo-transparent.png";
/* ==============================
   ROLTA LOGISTICS BRAND CONFIG
================================ */

const BRAND = {
  navy: "#091E4B",
  navyDark: "#061633",
  yellow: "#FFDF38",
  phone: "9177831589",
};

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Routes", path: "/routes" },
  { name: "Contact", path: "/contact" },
];

/* ==============================
   HEADER COMPONENT
================================ */

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const wasOpenRef = useRef(false);

  /* ==============================
     SCROLL DETECTION
  ================================ */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ==============================
     CLOSE MENU ON ROUTE CHANGE
  ================================ */

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  /* ==============================
     MOBILE MENU ACCESSIBILITY
  ================================ */

  useEffect(() => {
    if (!mobileMenuOpen) {
      if (wasOpenRef.current) {
        menuButtonRef.current?.focus();
        wasOpenRef.current = false;
      }
      return;
    }

    wasOpenRef.current = true;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusableElements = () =>
      Array.from(
        drawerRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) || []
      );

    getFocusableElements()[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const elements = getFocusableElements();

      if (!elements.length) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [mobileMenuOpen]);

  /* ==============================
     CLOSE DRAWER ON DESKTOP
  ================================ */

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handleResize = (event) => {
      if (event.matches) {
        setMobileMenuOpen(false);
      }
    };

    media.addEventListener("change", handleResize);

    return () => {
      media.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      {/* ==============================
          PREMIUM HEADER CSS
      ================================ */}

      <style>{`
        :root {
          --rolta-navy: ${BRAND.navy};
          --rolta-navy-dark: ${BRAND.navyDark};
          --rolta-yellow: ${BRAND.yellow};
        }

        .rolta-header {
          font-family: "Inter", system-ui, sans-serif;
        }

        /* Navigation links */

        .rolta-nav-link {
          position: relative;
          transition:
            color 250ms ease,
            background-color 250ms ease;
        }

        .rolta-nav-link::after {
          content: "";
          position: absolute;
          bottom: 5px;
          left: 50%;
          width: 0;
          height: 3px;
          background: var(--rolta-navy);
          border-radius: 999px;
          transform: translateX(-50%);
          transition: width 300ms ease;
        }

        .rolta-nav-link:hover::after,
        .rolta-nav-link.active::after {
          width: 65%;
        }

        /* Premium CTA shine */

        .rolta-quote-btn {
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }

        .rolta-quote-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            110deg,
            transparent 15%,
            rgba(255, 255, 255, 0.17) 50%,
            transparent 85%
          );
          transform: translateX(-120%);
          transition: transform 650ms ease;
        }

        .rolta-quote-btn:hover::before {
          transform: translateX(120%);
        }

        /* Mobile drawer */

        @keyframes roltaDrawerEnter {
          from {
            opacity: 0;
            transform: translateX(100%);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes roltaBackdropEnter {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .rolta-mobile-drawer {
          animation: roltaDrawerEnter 320ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .rolta-mobile-backdrop {
          animation: roltaBackdropEnter 250ms ease both;
        }

        @media (prefers-reduced-motion: reduce) {
          .rolta-mobile-drawer,
          .rolta-mobile-backdrop {
            animation: none !important;
          }

          .rolta-nav-link,
          .rolta-nav-link::after,
          .rolta-quote-btn::before {
            transition: none !important;
          }
        }
      `}</style>

      {/* ==============================
          STICKY HEADER WRAPPER
      ================================ */}

      <div className="rolta-header sticky top-0 z-50">

        {/* ==============================
            TOP UTILITY BAR
        ================================ */}

        <div className="hidden sm:block bg-[#091E4B] text-white">

          <div className="
            max-w-[1440px]
            mx-auto
            px-5 lg:px-12
            h-10
            flex items-center justify-between
            gap-5
          ">

            {/* Left side */}

            <div className="
              flex items-center gap-5
              text-[11px]
              font-medium
              tracking-wide
            ">

              <span className="inline-flex items-center gap-2">

                <Truck
                  size={15}
                  className="text-[#FFDF38]"
                />

                Full Truck Load Logistics Across India

              </span>

              <span className="
                hidden xl:inline-flex
                items-center gap-2
                text-white/75
              ">

                <MapPin
                  size={14}
                  className="text-[#FFDF38]"
                />

                Hyderabad → East & Northeast India

              </span>

            </div>

            {/* Right side */}

            <a
              href={`tel:+91${BRAND.phone}`}
              className="
                inline-flex items-center gap-2
                text-xs font-semibold
                hover:text-[#FFDF38]
                transition-colors duration-200
                whitespace-nowrap
              "
            >

              <Phone
                size={14}
                className="text-[#FFDF38]"
              />

              +91 {BRAND.phone}

            </a>

          </div>
        </div>

        {/* ==============================
            PREMIUM YELLOW HEADER
        ================================ */}

        <header
          className={`
            relative
            bg-[#FFDF38]
            border-b-[4px]
            border-[#091E4B]
            transition-shadow duration-300
            ${isScrolled
              ? "shadow-[0_10px_35px_rgba(9,30,75,0.18)]"
              : "shadow-[0_4px_18px_rgba(9,30,75,0.08)]"
            }
          `}
        >

          <div
            className={`
              max-w-[1440px]
              mx-auto
              px-4 sm:px-6 lg:px-12
              flex items-center justify-between
              gap-5
              transition-[height] duration-300
              ${isScrolled
                ? "h-[68px] lg:h-[78px]"
                : "h-[78px] lg:h-[96px]"
              }
            `}
          >

            {/* ==============================
                LOGO
            ================================ */}

            <Link
              to="/"
              aria-label="Rolta Logistics Home"
              className="
                flex items-center
                shrink-0
                group
              "
            >

              <img
                src={logoImg}
                alt="Rolta Logistics Logo"
                className={`
                  w-auto
                  max-w-[175px]
                  sm:max-w-[205px]
                  object-contain
                  transition-all duration-300
                  group-hover:scale-[1.03]
                  ${isScrolled
                    ? "h-10 lg:h-12"
                    : "h-12 lg:h-14"
                  }
                `}
              />

            </Link>

            {/* ==============================
                DESKTOP NAVIGATION
            ================================ */}

            <nav
              aria-label="Main navigation"
              className="
                hidden lg:flex
                items-center
                gap-1 xl:gap-3
              "
            >

              {NAV_LINKS.map((link) => (

                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `
                      rolta-nav-link
                      px-3 xl:px-4
                      py-3
                      text-[13px] xl:text-sm
                      font-bold
                      tracking-[0.01em]
                      rounded-md
                      ${isActive
                      ? "active text-[#091E4B] bg-white/30"
                      : "text-[#091E4B] hover:bg-white/20"
                    }
                    `
                  }
                >

                  {link.name}

                </NavLink>

              ))}

            </nav>

            {/* ==============================
                DESKTOP ACTIONS
            ================================ */}

            <div className="
              hidden lg:flex
              items-center gap-5
            ">

              {/* Contact information */}

              <div className="
                hidden 2xl:flex
                flex-col items-end
              ">

                <span className="
                  flex items-center gap-1.5
                  text-[10px]
                  uppercase
                  tracking-[0.13em]
                  text-[#091E4B]/70
                  font-bold
                ">

                  <Clock3 size={12} />

                  Transport Enquiries

                </span>

                <a
                  href={`tel:+91${BRAND.phone}`}
                  className="
                    text-[13px]
                    font-extrabold
                    text-[#091E4B]
                    hover:underline
                  "
                >

                  +91 {BRAND.phone}

                </a>

              </div>

              {/* Quote button */}

              <Link
                to="/contact"
                className="
                  rolta-quote-btn
                  group
                  inline-flex
                  items-center justify-center
                  gap-3
                  bg-[#091E4B]
                  hover:bg-[#061633]
                  text-white
                  px-6 py-3.5
                  rounded-lg
                  text-sm font-bold
                  shadow-[0_6px_18px_rgba(9,30,75,0.25)]
                  hover:shadow-[0_10px_25px_rgba(9,30,75,0.35)]
                  hover:-translate-y-0.5
                  transition-all duration-300
                  whitespace-nowrap
                "
              >

                Get a Quote

                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />

              </Link>

            </div>

            {/* ==============================
                MOBILE ACTIONS
            ================================ */}

            <div className="
              lg:hidden
              flex items-center gap-2
            ">

              {/* Call button */}

              <a
                href={`tel:+91${BRAND.phone}`}
                aria-label="Call Rolta Logistics"
                className="
                  h-10 w-10
                  flex items-center justify-center
                  rounded-xl
                  border border-[#091E4B]/20
                  bg-white/40
                  text-[#091E4B]
                  hover:bg-white/70
                  transition-colors
                "
              >

                <Phone size={19} />

              </a>

              {/* Menu button */}

              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="rolta-mobile-navigation"
                className="
                  h-11 w-11
                  flex items-center justify-center
                  bg-[#091E4B]
                  text-white
                  rounded-xl
                  hover:bg-[#061633]
                  transition-colors
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#091E4B]
                "
              >

                <Menu size={23} />

              </button>

            </div>

          </div>

        </header>

      </div>

      {/* ==============================
          MOBILE NAVIGATION OVERLAY
      ================================ */}

      {mobileMenuOpen && (

        <div
          id="rolta-mobile-navigation"
          className="
            fixed inset-0
            z-[100]
            lg:hidden
          "
        >

          {/* Background overlay */}

          <button
            type="button"
            tabIndex={-1}
            aria-label="Close navigation overlay"
            onClick={() => setMobileMenuOpen(false)}
            className="
              rolta-mobile-backdrop
              absolute inset-0
              w-full h-full
              bg-[#061633]/75
              backdrop-blur-[3px]
              cursor-default
            "
          />

          {/* ==============================
              MOBILE DRAWER
          ================================ */}

          <aside
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="
              rolta-mobile-drawer
              absolute
              right-0 top-0 bottom-0
              w-[min(88vw,390px)]
              bg-white
              flex flex-col
              shadow-2xl
              overflow-y-auto
            "
          >

            {/* Drawer Header */}

            <div className="
              bg-[#FFDF38]
              border-b-[4px]
              border-[#091E4B]
              px-5 py-5
              flex items-center justify-between
              gap-3
            ">

              <img
                src={logoImg}
                alt="Rolta Logistics Logo"
                className="
                  h-11 w-auto
                  max-w-[200px]
                  object-contain
                "
              />

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
                className="
                  h-10 w-10
                  rounded-xl
                  bg-[#091E4B]
                  text-white
                  flex items-center justify-center
                  hover:bg-[#061633]
                  transition-colors
                "
              >

                <X size={21} />

              </button>

            </div>

            {/* ==============================
                MOBILE MENU LINKS
            ================================ */}

            <div className="flex-1 px-5 py-7">

              <p className="
                text-[11px]
                font-extrabold
                tracking-[0.2em]
                uppercase
                text-gray-400
                mb-5 px-3
              ">

                Discover Rolta Logistics

              </p>

              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-2"
              >

                {NAV_LINKS.map((link, index) => (

                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                        group
                        flex items-center justify-between
                        px-4 py-4
                        rounded-xl
                        text-[15px]
                        font-semibold
                        border-l-[4px]
                        transition-all duration-200
                        ${isActive
                        ? "bg-[#FFF6C8] text-[#091E4B] border-[#091E4B]"
                        : "text-gray-700 border-transparent hover:bg-[#FFF9DF] hover:text-[#091E4B]"
                      }
                      `
                    }
                  >

                    <span className="
                      flex items-center gap-3
                    ">

                      <span className="
                        text-[11px]
                        font-bold
                        text-[#091E4B]/45
                      ">

                        {String(index + 1).padStart(2, "0")}

                      </span>

                      {link.name}

                    </span>

                    <ArrowUpRight
                      size={17}
                      className="
                        opacity-50
                        group-hover:opacity-100
                        transition-opacity
                      "
                    />

                  </NavLink>

                ))}

              </nav>

              {/* ==============================
                  MOBILE CTA BUTTONS
              ================================ */}

              <div className="
                mt-9 pt-7
                border-t border-gray-100
                space-y-3
              ">

                {/* Quote */}

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    flex items-center justify-center
                    gap-3
                    w-full
                    py-4 px-5
                    bg-[#091E4B]
                    hover:bg-[#061633]
                    text-white
                    font-bold
                    rounded-xl
                    shadow-md
                    transition-all duration-300
                  "
                >

                  Request a Transport Quote

                  <ArrowRight size={18} />

                </Link>

                {/* Phone */}

                <a
                  href={`tel:+91${BRAND.phone}`}
                  className="
                    flex items-center justify-center
                    gap-3
                    w-full
                    py-4 px-5
                    bg-[#FFDF38]
                    hover:bg-[#F4D12B]
                    text-[#091E4B]
                    font-bold
                    rounded-xl
                    transition-colors
                  "
                >

                  <Phone size={17} />

                  Call +91 {BRAND.phone}

                </a>

              </div>

            </div>

            {/* ==============================
                MOBILE DRAWER FOOTER
            ================================ */}

            <div className="
              bg-[#091E4B]
              px-6 py-6
              text-center
            ">

              <div className="
                flex items-center justify-center
                gap-2 mb-2
              ">

                <Truck
                  size={18}
                  className="text-[#FFDF38]"
                />

                <span className="
                  text-white
                  text-xs
                  font-extrabold
                  tracking-[0.14em]
                ">

                  ON TIME DELIVERY

                </span>

              </div>

              <p className="
                text-blue-100/80
                text-[11px]
                leading-relaxed
              ">

                Hyderabad • Bhubaneswar • Kolkata

                <br />

                Siliguri • Guwahati

              </p>

            </div>

          </aside>

        </div>

      )}

    </>
  );
}
