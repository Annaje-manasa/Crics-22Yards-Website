import React, { useState } from "react";
import SiteFooter from "./SiteFooter";
import SiteUtilityBar from "./SiteUtilityBar";
import SiteHeader from "./SiteHeader";

const COLORS = {
  navy: "#0A5DA6",
  navyDark: "#053a68",
  yellow: "#F6C915",
  yellowDark: "#E0B60F",
  text: "#334155",
  muted: "#64748B",
  border: "#E2E8F0",
};

const navLinks = ["HOME", "ABOUT US", "COACHING", "LANE RENTALS", "SPECIAL EVENTS", "SUMMER CAMP", "CONTACT US", "REGISTRATION"];

const exploreLinks = ["Home", "About Us", "Our Team", "Coaching", "Lane Rental"];
const moreLinks = ["Special Events", "Gallery", "Store", "Franchise", "FAQs", "Contact Us"];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_uexjiwj",
          template_id: "template_stanys9",
          user_id: "Y4cfzv51x7E5ofvrs",
          template_params: {
            name: form.name,
            email: form.email,
            to_email: form.email,
            reply_to: form.email,
            phone: form.phone,
            message: `Phone: ${form.phone || 'N/A'}\nTopic: ${form.topic || 'General Enquiry'}\n\nMessage:\n${form.message || 'No additional message provided.'}`,
            title: `Contact Us Enquiry - ${form.topic || 'General Enquiry'}`,
          },
        }),
      });
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", topic: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: COLORS.text, background: "#fff" }}>
      <style>{`
        .display-font { font-family: 'Oswald', sans-serif; }
        .cu-hero-title { font-size: 30px !important; }
        @media (min-width: 768px) {
          .cu-hero-title { font-size: 48px !important; }
        }
        input, select, textarea {
          font-family: 'Inter', sans-serif;
        }
        input::placeholder, textarea::placeholder { color: #94A3B8; }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: ${COLORS.navy} !important;
        }
        .cu-btn-yellow {
          transition: background 0.15s ease, transform 0.1s ease;
        }
        .cu-btn-yellow:hover { background: ${COLORS.yellowDark} !important; }
        .cu-btn-yellow:active { transform: scale(0.98); }
        .cu-btn-blue:hover { background: ${COLORS.navyDark} !important; }
        .cu-btn-blue:active { transform: scale(0.98); }
      `}</style>

      {/* ============================ HEADER ============================ */}
      <SiteHeader activePage="CONTACT US" />

      {/* Hero */}
      <div
        style={{
          background: COLORS.navy,
          color: "#fff",
          padding: "72px 40px 80px",
          borderBottom: `4px solid ${COLORS.yellow}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -90,
            right: -60,
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "#3E8FD0",
            opacity: 0.2,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 3,
            color: COLORS.yellow,
            marginBottom: 20,
            position: "relative",
          }}
        >
          <span style={{ width: 22, height: 2, background: COLORS.yellow, display: "inline-block" }} />
          CONTACT
        </div>
        <h1
          className="display-font cu-hero-title"
          style={{
            margin: 0,
            fontWeight: 700,
            letterSpacing: 0.5,
            maxWidth: 700,
            lineHeight: 1,
            position: "relative",
          }}
        >
          GET IN TOUCH WITH US.
        </h1>
        <p
          style={{
            marginTop: 22,
            fontSize: 16,
            color: "#DCE8FA",
            maxWidth: 600,
            position: "relative",
          }}
        >
          Call, email, or drop in — we're open every day from 7 AM to 11 PM.
        </p>
      </div>

      {/* Contact info + form */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(260px,360px)_1fr] gap-8 md:gap-14 px-5 py-10 md:px-10 md:py-16 max-w-[1200px] mx-auto">
        {/* Info column */}
        <div>
          <InfoItem icon="📍" label="ADDRESS">
            9525 OH-161, Plain City, OH 43064
          </InfoItem>

          <InfoItem icon="📞" label="PHONE">
            (713) 498 2155
          </InfoItem>

          <InfoItem icon="✉️" label="EMAIL">
            contact@crics22yards.com
          </InfoItem>

          <InfoItem icon="🕐" label="HOURS">
            7:00 AM – 11:00 PM daily
          </InfoItem>

          <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="tel:+17134982155"
              className="cu-btn-yellow whitespace-nowrap"
              style={{
                background: COLORS.yellow,
                border: "none",
                borderRadius: 999,
                padding: "10px 16px",
                fontWeight: 700,
                fontSize: 13,
                color: COLORS.navyDark,
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              📞 CALL NOW
            </a>
            <a
              href="https://www.google.com/maps/place/9525+OH-161,+Plain+City,+OH+43064,+USA/@40.1039382,-83.2207801,17z/data=!3m1!4b1!4m6!3m5!1s0x88389531a698b12b:0x8a55252cf1556c4!8m2!3d40.1039382!4d-83.2207801!16s%2Fg%2F11sb39l3wv"
              className="whitespace-nowrap"
              style={{
                background: "#fff",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 999,
                padding: "10px 16px",
                fontWeight: 700,
                fontSize: 13,
                color: COLORS.navy,
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              📍 GET DIRECTIONS
            </a>
          </div>
        </div>

        {/* Form column */}
        <div className="border border-slate-200 rounded-2xl p-5 sm:p-9 shadow-sm">
          <h2 className="display-font" style={{ color: COLORS.navy, fontSize: 30, margin: 0, letterSpacing: 0.3 }}>
            SEND US A MESSAGE
          </h2>
          <p style={{ color: "#8C9BB5", fontSize: 14, marginTop: 6, marginBottom: 26 }}>
            We reply to every enquiry within 24 hours.
          </p>

          {submitted ? (
            <div style={{ padding: "20px", borderRadius: 12, background: "#ECFDF5", border: "1px solid #10B981", color: "#065F46", fontSize: 14, textAlign: "center", fontWeight: 600 }}>
              ✓ Message Sent Successfully! We reply to every enquiry within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="FULL NAME *">
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange("name")}
                    style={inputStyle}
                  />
                </Field>
                <Field label="PHONE">
                  <input
                    type="tel"
                    placeholder="(614) 984-1453"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    style={inputStyle}
                  />
                </Field>
              </div>

              <Field label="EMAIL *">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  style={inputStyle}
                />
              </Field>

              <Field label="WHAT IS THIS ABOUT?">
                <select value={form.topic} onChange={handleChange("topic")} style={inputStyle}>
                  <option value="">Select a topic</option>
                  <option value="lane">Lane rental</option>
                  <option value="coaching">Coaching</option>
                  <option value="franchise">Franchise enquiry</option>
                  <option value="events">Special events</option>
                  <option value="other">Other</option>
                </select>
              </Field>

              <Field label="MESSAGE">
                <textarea
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={handleChange("message")}
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="cu-btn-blue"
                style={{
                  width: "100%",
                  background: COLORS.navy,
                  border: "none",
                  borderRadius: 10,
                  padding: "14px 0",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: 0.5,
                  color: "#fff",
                  cursor: "pointer",
                  marginTop: 8,
                }}
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Map */}
      <div style={{ padding: "0 40px 56px", maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            height: 340,
            borderRadius: 14,
            background: "#E7EEF6",
            border: `1px solid ${COLORS.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: COLORS.muted,
            fontSize: 14,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              background: "#fff",
              borderRadius: 10,
              padding: "12px 16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              maxWidth: 220,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 13, color: COLORS.text }}>
              9525 OH-161
            </div>
            <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 4 }}>
              9525 OH-161, Plain City, OH 43064, USA
            </div>
          </div>
          <iframe
            title="22 Yards Dallas location map"
            src="https://www.google.com/maps?q=9525+OH-161,+Plain+City,+OH+43064&output=embed"
            style={{ width: "100%", height: "100%", border: 0, display: "block" }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Footer */}
      <SiteFooter />
      {false && <footer style={{ background: COLORS.navyDark, color: "#CBD9EF", padding: "48px 40px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1.3fr",
            gap: 32,
            maxWidth: 1200,
            margin: "0 auto",
            paddingBottom: 40,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "#fff",
                  color: COLORS.navy,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                22
              </div>
              <div style={{ lineHeight: 1.1 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>22 YARDS</div>
                <div style={{ fontSize: 9, letterSpacing: 2, color: COLORS.yellow }}>DALLAS</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#AEC3E6", maxWidth: 280 }}>
              Professional indoor cricket training, lane rentals, and high-performance coaching
              built for players at every stage.
            </p>
            <div style={{ fontSize: 14, lineHeight: 2, marginTop: 12, color: "#AEC3E6" }}>
              <div>📍 2601 E State Hwy 121 Business, Lewisville, TX 75056</div>
              <div>📞 +1 614-984-1453</div>
              <div>📞 +1 (713) 498-2155</div>
              <div>✉️ contact@22yardsdallas.com</div>
              <div>🕐 7:00 AM – 11:00 PM daily</div>
            </div>
          </div>

          <FooterCol title="EXPLORE" links={exploreLinks} yellow={COLORS.yellow} />
          <FooterCol title="MORE" links={moreLinks} yellow={COLORS.yellow} />

          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1.5,
                color: COLORS.yellow,
                marginBottom: 14,
              }}
            >
              NEWSLETTER
            </div>
            <p style={{ fontSize: 14, color: "#AEC3E6", marginBottom: 14 }}>
              Sign up for updates, events, and academy news.
            </p>
            <div style={{ display: "flex" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  borderRadius: "8px 0 0 8px",
                  border: "none",
                  fontSize: 13,
                }}
              />
              <button
                className="cu-btn-yellow"
                style={{
                  background: COLORS.yellow,
                  border: "none",
                  borderRadius: "0 8px 8px 0",
                  padding: "0 16px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: COLORS.navyDark,
                  cursor: "pointer",
                }}
              >
                SIGN UP
              </button>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              <SocialIcon>f</SocialIcon>
              <SocialIcon>◎</SocialIcon>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            padding: "18px 0",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            maxWidth: 1200,
            margin: "0 auto",
            fontSize: 12,
            color: "#9DB4DA",
          }}
        >
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <a href="#" style={footerLinkStyle}>Privacy Policy</a>
            <a href="#" style={footerLinkStyle}>Terms & Conditions</a>
            <a href="#" style={footerLinkStyle}>Disclaimer</a>
            <a href="#" style={footerLinkStyle}>Waiver & Cancellations</a>
          </div>
          <div style={{ textAlign: "right" }}>
            <div>© 2026 22 Yards Dallas. All rights reserved.</div>
            <div>Designed and managed by Margam360</div>
          </div>
        </div>
      </footer>}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: 8,
  border: `1px solid ${COLORS.border}`,
  fontSize: 14,
  color: COLORS.text,
  background: "#fff",
  boxSizing: "border-box",
};

const footerLinkStyle = { color: "#9DB4DA", textDecoration: "none" };

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label
        style={{
          display: "block",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 0.8,
          color: "#8C9BB5",
          marginBottom: 7,
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function InfoItem({ icon, label, children }) {
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 26 }}>
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          background: COLORS.navy,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 17,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
            color: "#9CA9BD",
            marginBottom: 5,
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.navy, lineHeight: 1.5 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function FooterCol({ title, links, yellow }) {
  return (
    <div>
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 1.5,
          color: yellow,
          marginBottom: 14,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map((l) => (
          <a key={l} href="#" style={{ fontSize: 13, color: "#CBD9EF", textDecoration: "none" }}>
            {l}
          </a>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div
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
      }}
    >
      {children}
    </div>
  );
}
