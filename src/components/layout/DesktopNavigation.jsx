import React from "react";
import { NavLink } from "react-router-dom";

export const NAVIGATION_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Routes", path: "/routes" },
  { name: "Contact Us", path: "/contact" },
];

export default function DesktopNavigation() {
  return (
    <nav
      aria-label="Primary Navigation"
      className="hidden lg:flex items-center justify-center gap-1.5 xl:gap-3"
    >
      {NAVIGATION_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            `rolta-glass-nav-item ${
              isActive ? "active" : ""
            } focus-visible:outline-2 focus-visible:outline-[#D8B66A] focus-visible:outline-offset-2`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
