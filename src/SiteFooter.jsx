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
      target="_blank"
      rel="noreferrer"
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
    <footer style={{ background: "#053A68", color: "#CBD9EF", padding: "48px 40px 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1.3fr", gap: 32, maxWidth: 1200, margin: "0 auto", paddingBottom: 40 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 36, height: 36, background: "#0A5DA6", color: "#F6C915", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14 }}>22</div>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>CRICS 22 YARDS</div>
              <div style={{ fontSize: 9, letterSpacing: 2, color: "#F6C915" }}>COLUMBUS</div>
            </div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#AEC3E6", maxWidth: 280 }}>
            Professional indoor cricket training, lane rentals, and high-performance coaching built for players at every stage.
          </p>
          <div style={{ fontSize: 14, lineHeight: 2, marginTop: 12, color: "#AEC3E6" }}>
            <a href={mapUrl} target="_blank" rel="noreferrer" style={{ color: "#AEC3E6", textDecoration: "none", display: "block" }}>
              📍 9525 OH-161, Plain City, OH 43064
            </a>
            <div>📞 (713) 498 2155</div>
            <a href="mailto:contact@crics22yards.com" style={{ color: "#AEC3E6", textDecoration: "none", display: "block" }}>
              ✉️ contact@crics22yards.com
            </a>
            <div>🕐 7:00 AM – 11:00 PM daily</div>
          </div>
        </div>

        <FooterCol title="EXPLORE" links={exploreLinks} />
        <FooterCol title="MORE" links={moreLinks} />

        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#F6C915", marginBottom: 14 }}>NEWSLETTER</div>
          <p style={{ fontSize: 14, color: "#AEC3E6", marginBottom: 14 }}>Sign up for updates, events, and academy news.</p>
          <div style={{ display: "flex" }}>
            <input placeholder="Enter your email" style={{ flex: 1, padding: "10px 12px", borderRadius: "8px 0 0 8px", border: "none", fontSize: 13 }} />
            <button style={{ background: "#F6C915", border: "none", borderRadius: "0 8px 8px 0", padding: "0 16px", fontWeight: 700, fontSize: 12, color: "#053A68", cursor: "pointer" }}>SIGN UP</button>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <SocialIcon href={facebookUrl}>f</SocialIcon>
            <SocialIcon href={instagramUrl}>◎</SocialIcon>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", padding: "18px 0", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, maxWidth: 1200, margin: "0 auto", fontSize: 12, color: "#9DB4DA" }}>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <a href="#" style={footerLinkStyle}>Privacy Policy</a>
          <a href="#" style={footerLinkStyle}>Terms &amp; Conditions</a>
          <a href="#" style={footerLinkStyle}>Disclaimer</a>
          <a href="#" style={footerLinkStyle}>Waiver &amp; Cancellations</a>
        </div>
        <div style={{ textAlign: "right" }}>
          <div>© 2026 22 Yards Dallas. All rights reserved.</div>
          <div>Designed and managed by Margam360</div>
        </div>
      </div>
    </footer>
  );
}
