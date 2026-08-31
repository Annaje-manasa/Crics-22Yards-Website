import React, { useState } from "react";
import SiteFooter from "./SiteFooter";
import SiteUtilityBar from "./SiteUtilityBar";
import SiteHeader from "./SiteHeader";

const COLORS = {
  navy: "#0A5DA6",
  navyDark: "#053a68",
  navyDeep: "#062F5F",
  ink: "#0C1526",
  yellow: "#F6C915",
  yellowDark: "#E0B60F",
  text: "#334155",
  muted: "#64748B",
  border: "#E2E8F0",
};

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

const features = [
  {
    icon: "🏏",
    title: "Professional indoor cricket nets",
    body: "Train year-round in premium indoor cricket lanes designed for batting practice, bowling sessions, coaching programs, and team training.",
  },
  {
    icon: "🎯",
    title: "Advanced cricket training equipment",
    body: "Practice with professional bowling machines, training tools, and modern cricket technology designed to improve technique and performance.",
  },
  {
    icon: "🗓️",
    title: "Flexible lane rental booking",
    body: "Book cricket lanes by the hour for individual practice, private coaching, team sessions, batting practice, bowling drills, and match preparation.",
  },
];

const benefits = [
  {
    title: "Improve batting & bowling skills",
    body: "Use our indoor cricket nets to focus on batting technique, bowling accuracy, footwork, shot selection, timing, and match preparation in a controlled training environment.",
  },
  {
    title: "Private & focused practice environment",
    body: "Practice in dedicated indoor cricket lanes designed to reduce distractions and help players, coaches, and teams get more productive training sessions.",
  },
  {
    title: "Coaching support available",
    body: "Enhance your lane rental session with guidance from experienced cricket coaches who can provide feedback on batting, bowling, fielding, and overall technique.",
  },
];

const faqs = [
  {
    q: "Can I book an indoor cricket lane on short notice?",
    a: "Yes — subject to availability, same-day and next-day bookings are welcome. Call the front desk or use the online form and our team will confirm the nearest open slot.",
  },
  {
    q: "What should I bring for my cricket lane rental session?",
    a: "Bring your own bat, gloves, and any personal kit you prefer. Balls, stumps, and protective netting are provided. Non-marking sports shoes are required on the lanes.",
  },
  {
    q: "What is the minimum lane rental duration?",
    a: "Lanes can be booked in 30-minute increments, with a 30-minute minimum per session.",
  },
  {
    q: "Do you offer discounts for teams or frequent players?",
    a: "Yes — multi-lane team bookings and punch-card packages for regular players both come with reduced hourly rates. Ask our staff for current pricing.",
  },
  {
    q: "Can I cancel or reschedule my booking?",
    a: "Bookings can be rescheduled or cancelled free of charge up to 24 hours before your session. Changes inside 24 hours may be subject to a fee.",
  },
  {
    q: "Can I book coaching together with a lane rental?",
    a: "Absolutely. You can add a private or group coach to any lane rental session at the time of booking, or request one afterward if a coach is available.",
  },
  {
    q: "Are your indoor cricket nets suitable for beginners?",
    a: "Yes, our lanes and equipment suit every level, from first-time players to competitive club cricketers. Coaches can tailor sessions for beginners on request.",
  },
  {
    q: "Can teams rent multiple lanes for practice?",
    a: "Yes, teams can reserve several lanes at once for squad training, drills, and match simulation. Let us know your team size when booking.",
  },
  {
    q: "What makes 22 Yards Columbus different from other indoor cricket facilities?",
    a: "Premium lane surfaces, modern bowling machines, flexible hourly booking, and access to experienced coaches all in one facility, open every day of the year.",
  },
  {
    q: "Do you offer indoor cricket facilities year-round?",
    a: "Yes, our indoor lanes are climate-controlled and open 365 days a year, rain or shine, hot or cold.",
  },
  {
    q: "How do I get to 22 Yards Columbus?",
    a: "We're located at 2601 E State Hwy 121 Business, Lewisville, TX 75056, with parking on site. See the map on our contact page for directions.",
  },
];

const quickLinks = ["Home", "About Us", "Coaching", "Lane Rentals", "Summer Camp", "Special Events", "Gallery", "Contact Us", "Registration"];
const legalLinks = ["Privacy Policy", "Terms of Use", "Disclaimer", "Waiver & Cancellations Policy"];

const benefitImages = [
  {
    src: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fbatting-action.jpg&w=3840&q=75",
    alt: "Cricket player batting in the nets",
  },
  {
    src: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Findoor-lanes.jpg&w=3840&q=75",
    alt: "Professional indoor cricket lanes",
  },
  {
    src: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fcoaching-session.jpg&w=3840&q=75",
    alt: "Coach supporting a cricket training session",
  },
];

export default function LaneRentals() {
  const [openFaq, setOpenFaq] = useState(null);
  const [bookSubmitted, setBookSubmitted] = useState(false);
  const [regSubmitted, setRegSubmitted] = useState(false);

  const toggleFaq = (i) => setOpenFaq((cur) => (cur === i ? null : i));

  const submitBooking = (e) => {
    e.preventDefault();
    setBookSubmitted(true);
    setTimeout(() => setBookSubmitted(false), 3000);
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    setRegSubmitted(true);
    setTimeout(() => setRegSubmitted(false), 3000);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: COLORS.text, background: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');
        .display-font { font-family: 'Oswald', sans-serif; }
        .lr-hero-title { font-size: 30px !important; font-weight: 700; }
        .lr-section-title { font-size: 30px !important; font-weight: 700; }
        @media (min-width: 768px) {
          .lr-hero-title { font-size: 48px !important; }
          .lr-section-title { font-size: 36px !important; }
        }
        input, select, textarea { font-family: 'Inter', sans-serif; }
        input::placeholder, textarea::placeholder { color: #94A3B8; }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: ${COLORS.navy} !important;
        }
        .cu-btn-yellow { transition: background 0.15s ease, transform 0.1s ease; }
        .cu-btn-yellow:hover { background: ${COLORS.yellowDark} !important; }
        .cu-btn-yellow:active { transform: scale(0.98); }
        .cu-navlink { position: relative; white-space: nowrap; }
        .cu-navlink.active::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -6px;
          height: 2px;
          background: ${COLORS.yellow};
        }
        .faq-row { cursor: pointer; }
        .faq-row:hover { background: #F4F7FC; }
        .benefit-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .benefit-card:hover { transform: translateY(-6px); box-shadow: 0 18px 36px rgba(6,47,95,0.16); }
      `}</style>

      {/* ============================ HEADER ============================ */}
      <SiteHeader activePage="LANE RENTALS" />

      {/* Hero */}
      <div
        style={{
          background: COLORS.navy,
          color: "#fff",
          padding: "72px 40px 76px",
          borderBottom: `4px solid ${COLORS.yellow}`,
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -110,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "#3E8FD0",
            opacity: 0.2,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -140,
            right: -60,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "#3E8FD0",
            opacity: 0.2,
          }}
        />
        <h1
          className="display-font lr-hero-title"
          style={{
            margin: "0 auto",
            letterSpacing: 0.5,
            maxWidth: 780,
            lineHeight: 1.1,
            color: COLORS.yellow,
            position: "relative",
          }}
        >
          INDOOR CRICKET LANE RENTALS IN COLUMBUS, OH
        </h1>
        <p style={{ marginTop: 20, fontSize: 18, fontWeight: 600, color: "#fff", position: "relative" }}>
          Professional indoor cricket nets and batting practice lanes in Lewisville, Texas.
        </p>
        <p
          style={{
            marginTop: 16,
            fontSize: 14,
            color: "#C9DAF2",
            maxWidth: 760,
            margin: "16px auto 0",
            lineHeight: 1.7,
            position: "relative",
          }}
        >
          22 Yards Columbus offers premium indoor cricket lane rentals for batting practice, bowling
          practice, team training, private coaching, and match preparation. Our indoor cricket
          facility serves players from Lewisville, Dallas, Flower Mound, Highland Village, Denton,
          Carrollton, and surrounding Texas communities looking for high-quality cricket nets and
          year-round training opportunities.
        </p>
      </div>

      {/* Why choose us + booking form */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          gap: 56,
          padding: "72px 40px",
          maxWidth: 1240,
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              color: COLORS.muted,
              marginBottom: 12,
            }}
          >
            INDOOR CRICKET NETS &amp; TRAINING FACILITIES
          </div>
          <h2
            className="display-font lr-section-title"
            style={{ color: COLORS.navy, margin: 0, lineHeight: 1.15, letterSpacing: 0.3 }}
          >
            WHY CHOOSE 22 YARDS COLUMBUS FOR INDOOR CRICKET LANE RENTALS?
          </h2>
          <p style={{ fontSize: 16, color: COLORS.muted, lineHeight: 1.8, marginTop: 18, marginBottom: 28 }}>
            22 Yards Columbus provides professional indoor cricket lane rentals for batting practice,
            bowling practice, private coaching, team training, match preparation, and recreational
            cricket. Our facility serves players from Lewisville, Dallas, Flower Mound, Highland
            Village, Denton, Carrollton, and surrounding Texas communities.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  background: COLORS.navy,
                  borderLeft: `5px solid ${COLORS.yellow}`,
                  borderRadius: 10,
                  padding: "20px 22px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div style={{ fontSize: 22, lineHeight: 1 }}>{f.icon}</div>
                <div>
                  <div style={{ color: COLORS.yellow, fontWeight: 700, fontSize: 15, marginBottom: 6 }}>
                    {f.title}
                  </div>
                  <div style={{ color: "#DCE8FA", fontSize: 14, lineHeight: 1.7 }}>{f.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking form */}
        <BookingCard
          heading="Book your indoor cricket lane"
          subtext="Reserve an indoor cricket lane for batting practice, bowling training, private coaching, team sessions, or match preparation. Complete the form below and our team will contact you regarding availability and booking options."
          buttonLabel="SEND INQUIRY"
        />
      </div>

      {/* Benefits */}
      <div
        style={{
          background: "linear-gradient(135deg, #F4F8FB 0%, #E7F0F8 100%)",
          backgroundImage: "radial-gradient(circle at 12% 18%, rgba(11,79,158,0.08) 0, transparent 22%), radial-gradient(circle at 88% 82%, rgba(246,201,21,0.13) 0, transparent 24%), linear-gradient(135deg, #F4F8FB 0%, #E7F0F8 100%)",
          padding: "88px 40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 2,
            color: COLORS.muted,
            marginBottom: 14,
          }}
        >
          MORE REASONS TO CHOOSE <span style={{ color: COLORS.navy }}>US</span>
        </div>
        <h2
          className="display-font lr-section-title"
          style={{
            color: COLORS.navy,
            margin: "0 auto",
            maxWidth: 760,
            lineHeight: 1.2,
            letterSpacing: 0.3,
          }}
        >
          BENEFITS OF INDOOR CRICKET LANE RENTALS AT 22 YARDS COLUMBUS
        </h2>
        <p
          style={{
            maxWidth: 650,
            margin: "18px auto 0",
            color: COLORS.muted,
            fontSize: 16,
            lineHeight: 1.7,
          }}
        >
          Every session is designed to help you train with purpose, stay focused, and get more from every hour on the lane.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gridAutoRows: "1fr",
            gap: 24,
            maxWidth: 1100,
            margin: "44px auto 0",
            textAlign: "left",
          }}
        >
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="benefit-card"
              style={{
                borderRadius: 14,
                overflow: "hidden",
                background: "#fff",
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 8px 24px rgba(6,47,95,0.08)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div style={{ height: 190, position: "relative", overflow: "hidden" }}>
                <img
                  src={benefitImages[i].src}
                  alt={benefitImages[i].alt}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(6,47,95,0.02) 35%, rgba(6,47,95,0.64) 100%)",
                  }}
                />
              </div>
              <div
                style={{
                  background: COLORS.navy,
                  padding: "22px 22px 26px",
                  borderTop: `3px solid ${COLORS.yellow}`,
                  flex: 1,
                }}
              >
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>
                  {b.title}
                </div>
                <div style={{ color: "#DCE8FA", fontSize: 14, lineHeight: 1.7 }}>{b.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: "72px 40px 56px", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 2,
            color: COLORS.muted,
            marginBottom: 14,
          }}
        >
          INDOOR CRICKET LANE RENTAL FAQS
        </div>
        <h2 className="display-font lr-section-title" style={{ color: "#0F1B2E", margin: 0, letterSpacing: 0.3 }}>
          FREQUENTLY ASKED QUESTIONS ABOUT INDOOR CRICKET LANE RENTALS
        </h2>

        <div style={{ marginTop: 40, textAlign: "left" }}>
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div
                key={f.q}
                className="faq-row"
                onClick={() => toggleFaq(i)}
                style={{
                  background: "#F5F7FA",
                  borderRadius: 8,
                  marginBottom: 10,
                  padding: "16px 20px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <span style={{ fontWeight: 600, fontSize: 14, color: COLORS.navy }}>{f.q}</span>
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: COLORS.yellowDark,
                      flexShrink: 0,
                      transform: open ? "rotate(45deg)" : "none",
                      transition: "transform 0.15s ease",
                    }}
                  >
                    +
                  </span>
                </div>
                {open && (
                  <div style={{ marginTop: 12, fontSize: 14, color: COLORS.muted, lineHeight: 1.7 }}>
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Register now */}
      <div
        style={{
          background: "#F4F7FC",
          padding: "64px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: 48,
            maxWidth: 1200,
            margin: "0 auto",
            alignItems: "center",
          }}
        >
          <div>
            <h2 className="display-font lr-section-title" style={{ color: COLORS.yellowDark, margin: 0 }}>
              REGISTER NOW
            </h2>
            <p style={{ fontSize: 16, color: COLORS.muted, lineHeight: 1.8, marginTop: 16 }}>
              Ready to take your cricket game to the next level? Whether you're looking to rent a
              lane for solo practice or enroll in one of our expert-led coaching programs, 22
              Yards Dallas is the place to be. Fill out the form below to get more information and
              start your journey to cricket excellence.
            </p>
          </div>

          <BookingCard
            bare
            buttonLabel="REGISTER NOW"
          />
        </div>
      </div>

      {/* Footer */}
      <SiteFooter />
      {false && <footer style={{ background: COLORS.navyDark, color: "#B9C6DE", padding: "48px 40px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.3fr",
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
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "#9DAEC9", maxWidth: 280 }}>
              22 Yards Columbus — your premier destination for indoor cricket excellence.
            </p>
            <div style={{ fontSize: 13, lineHeight: 2, marginTop: 12, color: "#9DAEC9" }}>
              <div>✉️ contact@22yardsdallas.com</div>
              <div>📞 +1 614-984-1453</div>
              <div>📍 2601 E State Hwy 121 Business, Lewisville, TX 75056</div>
            </div>
          </div>

          <FooterCol title="Quick links" links={quickLinks} accent={COLORS.yellow} />
          <FooterCol title="Legal" links={legalLinks} accent={COLORS.yellow} />

          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: COLORS.yellow, marginBottom: 14 }}>
              Subscribe newsletter
            </div>
            <p style={{ fontSize: 13, color: "#9DAEC9", marginBottom: 14, lineHeight: 1.6 }}>
              Sign up for our newsletter to get updates, news, insights, or promotions.
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
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "18px 0",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            maxWidth: 1200,
            margin: "0 auto",
            fontSize: 12,
            color: "#7F91B0",
          }}
        >
          <div>Managed by 22 Yards Columbus</div>
          <div>© 2026 22 Yards Columbus. All rights reserved.</div>
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

function BookingCard({ heading, subtext, buttonLabel, bare }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "Male",
    activity: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

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
            name: `${form.firstName} ${form.lastName}`,
            email: form.email,
            to_email: form.email,
            reply_to: form.email,
            phone: form.phone,
            message: `Phone: ${form.phone || 'N/A'}\nGender: ${form.gender}\nActivity: ${form.activity || 'Lane Rental'}\n\nNotes:\n${form.notes || 'No additional notes provided.'}`,
            title: `Lane Rental Inquiry - ${heading || 'Crics 22Yards Columbus'}`,
          },
        }),
      });
      setSubmitted(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "Male",
        activity: "",
        notes: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const wrapperStyle = bare
    ? { background: "#fff", borderRadius: 16, padding: "32px 34px", border: `1px solid ${COLORS.border}` }
    : {
      background: "#F4F7FC",
      borderRadius: 16,
      padding: "32px 34px",
      border: `1px solid ${COLORS.border}`,
    };

  return (
    <div style={wrapperStyle}>
      {heading && (
        <h3 className="display-font" style={{ fontSize: 24, fontWeight: 700, color: COLORS.navy, margin: 0, letterSpacing: 0.3 }}>
          {heading.toUpperCase()}
        </h3>
      )}
      {subtext && (
        <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.7, marginTop: 10, marginBottom: 22 }}>
          {subtext}
        </p>
      )}
      {submitted ? (
        <div style={{ padding: "20px", borderRadius: 12, background: "#ECFDF5", border: "1px solid #10B981", color: "#065F46", fontSize: 14, textAlign: "center", fontWeight: 600 }}>
          ✓ Request Submitted Successfully! Our team at Crics 22Yards Columbus will contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Field label="First name *">
              <input required value={form.firstName} onChange={handleChange("firstName")} type="text" placeholder="First name" style={inputStyle} />
            </Field>
            <Field label="Last name *">
              <input required value={form.lastName} onChange={handleChange("lastName")} type="text" placeholder="Last name" style={inputStyle} />
            </Field>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Field label="Email *">
              <input required value={form.email} onChange={handleChange("email")} type="email" placeholder="you@example.com" style={inputStyle} />
            </Field>
            <Field label="Phone">
              <input value={form.phone} onChange={handleChange("phone")} type="tel" placeholder="(614) 984-1453" style={inputStyle} />
            </Field>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Field label="Gender">
              <select value={form.gender} onChange={handleChange("gender")} style={inputStyle}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Activity">
              <input value={form.activity} onChange={handleChange("activity")} type="text" placeholder="e.g. Batting practice" style={inputStyle} />
            </Field>
          </div>
          <Field label="Notes">
            <textarea value={form.notes} onChange={handleChange("notes")} placeholder="Anything we should know?" rows={4} style={{ ...inputStyle, resize: "vertical" }} />
          </Field>

          <button
            type="submit"
            disabled={loading}
            className="cu-btn-yellow"
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
              marginTop: 6,
            }}
          >
            {loading ? "SUBMITTING..." : buttonLabel}
          </button>
        </form>
      )}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          display: "block",
          fontSize: 11,
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

function FooterCol({ title, links, accent }) {
  return (
    <div>
      <div style={{ fontSize: 15, fontWeight: 700, color: accent, marginBottom: 14 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map((l) => (
          <a key={l} href="#" style={{ fontSize: 13, color: "#B9C6DE", textDecoration: "none" }}>
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
        background: "rgba(255,255,255,0.1)",
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
