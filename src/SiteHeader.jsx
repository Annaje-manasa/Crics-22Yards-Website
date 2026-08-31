import React, { useState } from "react";
import SiteUtilityBar from "./SiteUtilityBar";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 40px",
          borderBottom: "1px solid #E2E8F0",
          flexWrap: "wrap",
          gap: 16,
          background: "#fff",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div
            style={{
              width: 40,
              height: 40,
              background: "#0A5DA6",
              color: "#F6C915",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 16,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            22
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 700, fontSize: 17, color: "#0A5DA6", letterSpacing: 0.5, fontFamily: "'Inter', sans-serif" }}>
              CRICS 22 YARDS
            </div>
            <div style={{ fontSize: 10, letterSpacing: 2, color: "#9AAEC0", fontFamily: "'Inter', sans-serif" }}>COLUMBUS</div>
          </div>
        </a>

        {shouldShowNavLinks && (
          <>
            {/* Desktop Nav Links */}
            <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }} className="hidden lg:flex">
              {navLinks.map((link) => {
                const href = link === "HOME" ? "#" : link === "ABOUT US" ? "#about" : link === "COACHING" ? "#coaching" : link === "LANE RENTALS" ? "#lane-rentals" : link === "SPECIAL EVENTS" ? "#special-events" : link === "SUMMER CAMP" ? "#summer-camp" : link === "CONTACT US" ? "#contact" : link === "REGISTRATION" ? "#registration" : "#";
                const isActive = activePage.toUpperCase() === link;
                return (
                  <a
                    key={link}
                    href={href}
                    target={link === "SUMMER CAMP" ? "_blank" : undefined}
                    rel={link === "SUMMER CAMP" ? "noreferrer" : undefined}
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
            </div>

            {/* Book Now Action Button */}
            <div className="hidden lg:block">
              <a
                href="#book"
                className="cu-btn-yellow"
                style={{
                  background: "#F6C915",
                  border: "none",
                  borderRadius: 999,
                  padding: "10px 22px",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#053a68",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                📅 BOOK NOW
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-[#0A5DA6] font-bold cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {shouldShowNavLinks && menuOpen && (
        <div className="lg:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-3 bg-white">
          {navLinks.map((link) => {
            const href = link === "HOME" ? "#" : link === "ABOUT US" ? "#about" : link === "COACHING" ? "#coaching" : link === "LANE RENTALS" ? "#lane-rentals" : link === "SPECIAL EVENTS" ? "#special-events" : link === "SUMMER CAMP" ? "#summer-camp" : link === "CONTACT US" ? "#contact" : link === "REGISTRATION" ? "#registration" : "#";
            return (
              <a
                key={link}
                href={href}
                target={link === "SUMMER CAMP" ? "_blank" : undefined}
                rel={link === "SUMMER CAMP" ? "noreferrer" : undefined}
                className="text-sm font-bold uppercase text-[#0A5DA6] no-underline py-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link}
              </a>
            );
          })}
          <a
            href="#book"
            className="cu-btn-yellow mt-2 w-full text-center"
            style={{
              background: "#F6C915",
              border: "none",
              borderRadius: 999,
              padding: "10px 22px",
              fontWeight: 700,
              fontSize: 13,
              color: "#053a68",
              cursor: "pointer",
              textDecoration: "none",
              display: "block",
            }}
          >
            📅 BOOK NOW
          </a>
        </div>
      )}
    </header>
  );
}
