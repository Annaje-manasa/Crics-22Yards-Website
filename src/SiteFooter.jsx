import { useState } from "react";
import skaLogo from "./assets/SKA FINAL LOGO TO USE.png";

const exploreLinks = [
  "Home",
  "About Us",
  "Coaching",
  "Lane Rental",
  "Special Events",
  "Summer Camp",
  "Contact Us",
  "Registration",
];
const moreLinks = ["Special Events", "Gallery", "Store", "Franchise", "FAQs", "Contact Us"];

const linkHrefs = {
  "Home": "#",
  "About Us": "#about",
  "Coaching": "#coaching",
  "Lane Rental": "#lane-rentals",
  "Lane Rentals": "#lane-rentals",
  "Special Events": "#special-events",
  "Summer Camp": "#summer-camp",
  "Contact Us": "#contact",
  "Registration": "#registration",
  "Gallery": "#",
  "Store": "#",
  "Franchise": "#",
  "FAQs": "#",
};

const footerLinkStyle = { color: "#9DB4DA", textDecoration: "none" };

const mapUrl = "https://www.google.com/maps/place/9525+OH-161,+Plain+City,+OH+43064,+USA/@40.1039382,-83.2207801,17z/data=!3m1!4b1!4m6!3m5!1s0x88389531a698b12b:0x8a55252cf1556c4!8m2!3d40.1039382!4d-83.2207801!16s%2Fg%2F11sb39l3wv?entry=tts&g_ep=EgoyMDI2MDQxMi4wIPu8ASoASAFQAw%3D%3D&skid=1c5e4a3a-e2b5-4272-8b8a-7341824c1ab6";
const facebookUrl = "https://www.facebook.com/people/Crics-22Yards-Columbus/61577612886478/";
const instagramUrl = "https://www.instagram.com/crics22yardscolumbus?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#F6C915", marginBottom: 14 }}>NEWSLETTER</div>
      <p style={{ fontSize: 13, color: "#AEC3E6", marginBottom: 14 }}>Sign up for updates, events, and academy news.</p>
      {subscribed ? (
        <div style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(16,185,129,0.2)", border: "1px solid #10B981", color: "#6EE7B7", fontSize: 12, fontWeight: 600 }}>
          ✓ Thank you for subscribing to 22 Yards Columbus updates!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex w-full max-w-[320px]">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="flex-1 min-w-0 px-2.5 py-2 rounded-l-lg border-none text-xs text-gray-800 bg-white outline-none"
          />
          <button type="submit" className="bg-[#F6C915] border-none rounded-r-lg px-3 font-bold text-xs text-[#053A68] cursor-pointer whitespace-nowrap hover:bg-[#E0B60F] transition-colors">
            SIGN UP
          </button>
        </form>
      )}
    </div>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#F6C915", marginBottom: 14 }}>
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map((link) => (
          <a key={link} href={linkHrefs[link] || "#"} style={{ fontSize: 13, color: "#CBD9EF", textDecoration: "none" }}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        color: "#fff",
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-[#053A68] text-[#CBD9EF] px-5 sm:px-10 pt-10 sm:pt-12 pb-0 w-full overflow-hidden">
      <div className="grid grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] gap-x-6 gap-y-8 max-w-[1200px] mx-auto pb-10">
        <div className="col-span-1">
          <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
            <div className="bg-white p-1 px-2 rounded-lg inline-flex items-center justify-center">
              <img src={skaLogo} alt="CRICS 22 YARDS COLUMBUS" className="h-10 sm:h-12 lg:h-[56px] w-auto object-contain" />
            </div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: "#AEC3E6", maxWidth: 280 }}>
            Professional indoor cricket training, lane rentals, and high-performance coaching built for players at every stage.
          </p>
          <div style={{ fontSize: 13, lineHeight: 1.9, marginTop: 12, color: "#AEC3E6" }}>
            <a href={mapUrl} style={{ color: "#AEC3E6", textDecoration: "none", display: "block" }}>
              📍 9525 OH-161, Plain City, OH 43064
            </a>
            <div>📞 (713) 498 2155</div>
            <a href="mailto:contact@crics22yards.com" style={{ color: "#AEC3E6", textDecoration: "none", display: "block" }}>
              ✉️ contact@crics22yards.com
            </a>
            <div>🕐 7:00 AM – 11:00 PM daily</div>
          </div>
        </div>

        <div className="col-span-1">
          <FooterCol title="EXPLORE" links={exploreLinks} />
        </div>

        <div className="col-span-1">
          <FooterCol title="MORE" links={moreLinks} />
        </div>

        <div className="col-span-1">
          <NewsletterForm />
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <SocialIcon href={facebookUrl}>f</SocialIcon>
            <SocialIcon href={instagramUrl}>◎</SocialIcon>
          </div>
        </div>
      </div>

      <div className="border-t border-white/12 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-[1200px] mx-auto text-xs text-[#9DB4DA]">
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-5">
          <a href="#" style={footerLinkStyle}>Privacy Policy</a>
          <a href="#" style={footerLinkStyle}>Terms &amp; Conditions</a>
          <a href="#" style={footerLinkStyle}>Disclaimer</a>
          <a href="#" style={footerLinkStyle}>Waiver &amp; Cancellations</a>
        </div>
        <div className="text-center sm:text-right">
          <div>© 2026 22 Yards Dallas. All rights reserved.</div>
          <div>Designed and managed by Margam360</div>
        </div>
      </div>
    </footer>
  );
}
