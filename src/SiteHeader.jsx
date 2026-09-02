import React, { useState } from "react";
import SiteUtilityBar from "./SiteUtilityBar";
import skaLogo from "./assets/SKA FINAL LOGO TO USE.png";

const navLinks = [
  "HOME",
  "ABOUT US",
  "COACHING",
  "LANE RENTALS",
  "SPECIAL EVENTS",
  "SUMMER CAMP",
  "CONTACT US",
  "REGISTRATION",
];

export default function SiteHeader({ activePage = "", showNavLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSummerCamp = activePage.toUpperCase() === "SUMMER CAMP";
  const shouldShowNavLinks = showNavLinks !== undefined ? showNavLinks : !isSummerCamp;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Oswald:wght@400;500;600;700&display=swap');
        .cu-navlink {
          position: relative;
          white-space: nowrap;
          font-family: 'Inter', sans-serif !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          letter-spacing: 0.4px !important;
        }
        .cu-navlink.active::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 2px;
          background: #F6C915;
        }
        .cu-btn-yellow {
          transition: background 0.15s ease, transform 0.1s ease;
          font-family: 'Inter', sans-serif !important;
        }
        .cu-btn-yellow:hover { background: #E0B60F !important; }
        .cu-btn-yellow:active { transform: scale(0.98); }
      `}</style>

      {/* Top utility bar - 100% constant across all pages */}
      <SiteUtilityBar />

      {/* Main navigation header */}
      <div className="w-full flex items-center justify-between px-3 sm:px-6 lg:px-10 border-b border-gray-200 bg-white box-border flex-nowrap" style={{ paddingTop: '4px', paddingBottom: '5px' }}>
        {/* Logo */}
        <a href="#" className="flex items-center flex-shrink-0 text-none no-underline">
          <img src={skaLogo} alt="CRICS 22 YARDS COLUMBUS" className="h-10 sm:h-12 lg:h-[56px] w-auto object-contain max-h-[58px]" />
        </a>

        {shouldShowNavLinks && (
          <>
            {/* Desktop Nav Links & Book Now Button */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-6 flex-wrap">
              {navLinks.map((link) => {
                const href = link === "HOME" ? "#" : link === "ABOUT US" ? "#about" : link === "COACHING" ? "#coaching" : link === "LANE RENTALS" ? "#lane-rentals" : link === "SPECIAL EVENTS" ? "#special-events" : link === "SUMMER CAMP" ? "#summer-camp" : link === "CONTACT US" ? "#contact" : link === "REGISTRATION" ? "#registration" : "#";
                const isActive = activePage.toUpperCase() === link;
                return (
                  <a
                    key={link}
                    href={href}
                    className={`cu-navlink ${isActive ? "active" : ""}`}
                    style={{
                      color: "#0A5DA6",
                      textDecoration: "none",
                    }}
                  >
                    {link}
                  </a>
                );
              })}

              <a
                href="#book"
                className="cu-btn-yellow"
                style={{
                  background: "#F6C915",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#053a68",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  whiteSpace: "nowrap",
                }}
              >
                BOOK NOW ▾
              </a>
            </div>

            {/* Mobile Header Actions (Menu bar in middle, Book Now on right like Image 2) */}
            <div className="flex lg:hidden items-center justify-between flex-1 ml-2">
              {/* Menu bar in middle */}
              <button
                className="p-1 text-[#0A5DA6] font-bold cursor-pointer text-2xl mx-auto"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? "✕" : "☰"}
              </button>

              {/* Book Now on rightside */}
              <a
                href="#book"
                className="cu-btn-yellow flex-shrink-0"
                style={{
                  background: "#F6C915",
                  border: "none",
                  borderRadius: 8,
                  padding: "6px 12px",
                  fontWeight: 700,
                  fontSize: 11,
                  color: "#053a68",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 3,
                  whiteSpace: "nowrap",
                }}
              >
                BOOK NOW ▾
              </a>
            </div>
          </>
        )}
      </div>

      {/* Mobile Menu (Centered links like Image 2) */}
      {shouldShowNavLinks && menuOpen && (
        <div className="lg:hidden border-t border-gray-100 py-4 flex flex-col items-center bg-white">
          {navLinks.map((link) => {
            const href = link === "HOME" ? "#" : link === "ABOUT US" ? "#about" : link === "COACHING" ? "#coaching" : link === "LANE RENTALS" ? "#lane-rentals" : link === "SPECIAL EVENTS" ? "#special-events" : link === "SUMMER CAMP" ? "#summer-camp" : link === "CONTACT US" ? "#contact" : link === "REGISTRATION" ? "#registration" : "#";
            return (
              <a
                key={link}
                href={href}
                className="w-48 text-center text-xs font-bold uppercase text-[#0A5DA6] no-underline py-2.5 border-b border-gray-100 last:border-b-0 tracking-wider hover:text-[#053a68] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
