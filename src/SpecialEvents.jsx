import React, { useState } from "react";
import SiteFooter from "./SiteFooter";
import SiteUtilityBar from "./SiteUtilityBar";
import SiteHeader from "./SiteHeader";

const COLORS = {
  navy: "#0A5DA6",
  navyDark: "#053a68",
  navyDeep: "#053a68",
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

const eventSections = [
  {
    image: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fbirthday-party.jpg&w=3840&q=75",
    imageAlt: "Cricket birthday party at 22 Yards Columbus",
    title: "Birthday parties",
    intro:
      "Make your birthday celebration a hit with a cricket-themed party at 22 Yards Columbus. Our parties are perfect for cricket enthusiasts of all ages and offer a unique blend of fun and sport.",
    features: [
      ["Tailored cricket activities", "Activities are customized to suit the age and skill level of the birthday guest of honor."],
      ["Customizable event options", "Include cricket games, personalized coaching sessions, and more."],
      ["Exclusive facility access", "Full access to our cricket lanes and fields during your event."],
      ["Catering flexibility", "Choose from our on-site catering options or use designated areas to set up your own catering."],
    ],
    dark: false,
    imageSide: "left",
  },
  {
    image: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fnets-practice.jpg&w=3840&q=75",
    imageAlt: "Team cricket event in the indoor nets",
    title: "Corporate events",
    intro:
      "Escape the office routine and engage in an exciting team-building experience with our corporate cricket events. Designed to enhance team spirit and camaraderie, our events provide a fun, active environment.",
    features: [
      ["Team-building cricket matches", "Foster teamwork with cricket matches tailored to your company's dynamics."],
      ["Access to professional facilities", "Use our cricket lanes and fields for friendly competitions."],
      ["Versatile meeting spaces", "Available for any corporate presentations or strategic discussions."],
      ["Tailored catering services", "We offer a range of catering services to complement your event."],
    ],
    dark: true,
    imageSide: "right",
  },
  {
    image: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fcelebration.jpg&w=3840&q=75",
    imageAlt: "Cricket tournament celebration",
    title: "Tournaments",
    intro:
      "Bring competitive spirit to life by hosting your cricket tournament at 22 Yards Columbus. Our facility supports various tournament formats and offers comprehensive organizational support.",
    features: [
      ["Flexible field and lane usage", "Tailor the use of our indoor fields and lanes to match your tournament format."],
      ["Comprehensive organizational support", "Including help with scheduling, umpiring, and logistics."],
      ["Player and spectator amenities", "On-site refreshments and comfortable seating areas available."],
    ],
    dark: false,
    imageSide: "left",
  },
  {
    image: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fcoaching-session.jpg&w=3840&q=75",
    imageAlt: "Cricket coaching workshop and clinic",
    title: "Workshops and clinics",
    intro:
      "Enhance your cricket skills at 22 Yards Dallas with our specialized workshops and clinics. Designed for players of all levels, these sessions provide expert coaching, focused skill development, and the use of advanced training tools in a dynamic learning environment.",
    features: [
      ["Expert coaching", "Sessions led by experienced coaches and guest professionals."],
      ["Skill-specific training", "Targeted workshops focusing on batting, bowling, and fielding."],
      ["Advanced technology", "Utilize smart lanes and video analysis for detailed feedback."],
      ["Interactive environment", "Small group sizes ensure personalized attention and better interaction."],
      ["Community building", "Connect with other cricket enthusiasts and expand your network."],
    ],
    dark: true,
    imageSide: "right",
  },
];

const faqs = [
  {
    q: "What types of events can I host at 22 Yards Columbus?",
    a: "You can host a variety of events at our facility, including birthday parties, corporate events, cricket tournaments, workshops, clinics, and private celebrations. Each event type can be customized to meet your specific needs and preferences.",
  },
  {
    q: "How do I book an event at 22 Yards Columbus?",
    a: "Fill out the register form below or call our front desk with your preferred date and event type. Our team will confirm availability and walk you through setup options.",
  },
  {
    q: "What facilities are available for events at 22 Yards Columbus?",
    a: "You'll have access to our indoor cricket lanes, open field areas, seating and gathering space, and flexible areas suited to presentations or catering.",
  },
  {
    q: "Can I bring my own food and beverages to the event?",
    a: "Yes, you're welcome to bring your own catering, or choose from our on-site catering options — whichever fits your event best.",
  },
  {
    q: "What equipment do I need to bring to training sessions?",
    a: "Personal kit like your own bat and gloves is welcome, but not required — balls, stumps, and protective netting are provided on-site.",
  },
  {
    q: "Are there any age restrictions for participating in or attending events at 22 Yards Columbus?",
    a: "Our events welcome all ages. Some activities may be tailored by age group for safety, which we'll confirm with you during booking.",
  },
  {
    q: "Do you provide event staff to assist during the event?",
    a: "Yes, our staff can be on hand to help with setup, coordination, and running activities throughout your event.",
  },
  {
    q: "What is the cancellation policy for events at 22 Yards Columbus?",
    a: "Events can be rescheduled or cancelled free of charge up to 7 days before the date. Changes inside that window may be subject to a fee.",
  },
  {
    q: "Can I schedule a tour of the facilities before booking an event?",
    a: "Absolutely — reach out and we'll set up a time for you to walk through the facility before you commit to a date.",
  },
  {
    q: "What happens in case of bad weather during an outdoor event?",
    a: "All of our lanes and core facilities are indoors and climate-controlled, so your event can proceed rain or shine.",
  },
];

const quickLinks = ["Home", "About Us", "Coaching", "Lane Rentals", "Summer Camp", "Special Events", "Gallery", "Contact Us"];
const legalLinks = ["Privacy Policy", "Terms of Use", "Disclaimer", "Waiver & Cancellations Policy"];

export default function SpecialEvents() {
  const [openFaq, setOpenFaq] = useState(0);
  const [regSubmitted, setRegSubmitted] = useState(false);

  const toggleFaq = (i) => setOpenFaq((cur) => (cur === i ? null : i));

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
        .se-hero-title { font-size: 30px !important; font-weight: 700; }
        @media (min-width: 768px) {
          .se-hero-title { font-size: 48px !important; }
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
        .faq-row-head { cursor: pointer; }
      `}</style>

      {/* ============================ HEADER ============================ */}
      <SiteHeader activePage="SPECIAL EVENTS" />

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
          className="display-font se-hero-title"
          style={{
            margin: "0 auto",
            letterSpacing: 0.5,
            maxWidth: 760,
            lineHeight: 1.15,
            color: COLORS.yellow,
            position: "relative",
          }}
        >
          SPECIAL EVENTS AT CRICS 22YARDS COLUMBUS
        </h1>
        <p style={{ marginTop: 20, fontSize: 18, fontWeight: 600, color: "#fff", position: "relative" }}>
          Experience cricket like never before at Lewisville, TX's premier indoor cricket facility.
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
          Welcome to the Special Events section of 22 Yards Columbus, where we host a vibrant array
          of cricket activities designed to unite and thrill the cricketing community. From
          intense local tournaments to engaging workshops, corporate events, and lively community
          gatherings, we offer a diverse calendar that caters to all ages and interests.
        </p>
      </div>

      {/* Alternating event sections */}
      {eventSections.map((sec) => (
        <EventSection key={sec.title} sec={sec} />
      ))}

      {/* FAQ */}
      <div style={{ padding: "72px 40px 56px", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: COLORS.muted,
            marginBottom: 10,
          }}
        >
          Got questions? We have answers
        </div>
        <h2 className="display-font" style={{ fontSize: 30, color: "#0F1B2E", margin: 0, letterSpacing: 0.3 }}>
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p
          style={{
            fontSize: 14,
            color: COLORS.muted,
            maxWidth: 680,
            margin: "18px auto 0",
            lineHeight: 1.8,
          }}
        >
          Have questions about hosting your event at 22 Yards Columbus? Our FAQ section provides
          quick answers to common queries, ensuring you have all the information you need to plan
          a successful and memorable event with us. From booking details to facilities and
          catering options, find out everything you need to know to make your special occasion
          perfect.
        </p>

        <div style={{ marginTop: 40, textAlign: "left" }}>
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div
                key={f.q}
                style={{
                  borderRadius: 8,
                  marginBottom: 10,
                  overflow: "hidden",
                  background: open ? COLORS.navy : "#F5F7FA",
                }}
              >
                <div
                  className="faq-row-head"
                  onClick={() => toggleFaq(i)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                    padding: "16px 20px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: 14.5,
                      color: open ? "#fff" : COLORS.navy,
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: open ? COLORS.yellow : COLORS.yellowDark,
                      flexShrink: 0,
                      transform: open ? "rotate(180deg)" : "none",
                      transition: "transform 0.15s ease",
                    }}
                  >
                    ⌄
                  </span>
                </div>
                {open && (
                  <div style={{ padding: "0 20px 18px", fontSize: 13.5, color: "#DCE8FA", lineHeight: 1.7 }}>
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Register now */}
      <div className="bg-[#F4F7FC] px-5 py-10 md:px-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 max-w-[1200px] mx-auto items-center">
          <div>
            <h2 className="display-font" style={{ fontSize: 32, color: COLORS.yellowDark, margin: 0 }}>
              REGISTER NOW
            </h2>
            <p style={{ fontSize: 14.5, color: COLORS.muted, lineHeight: 1.8, marginTop: 16 }}>
              Ready to take your cricket game to the next level? Whether you're looking to rent a
              lane for solo practice or enroll in one of our expert-led coaching programs, 22
              Yards Dallas is the place to be. Fill out the form below to get more information and
              start your journey to cricket excellence.
            </p>
          </div>

          <RegisterCard />
        </div>
      </div>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}

function EventSection({ sec }) {
  const bgColor = sec.dark ? "#F4F8FB" : "#fff";
  const imageFirst = sec.imageSide === "left";

  const imageBlock = (
    <div className="relative min-h-[250px] sm:min-h-[340px] rounded-2xl overflow-hidden bg-[#0A5DA6]">
      <img
        src={sec.image}
        alt={sec.imageAlt}
        loading="lazy"
        style={{ width: "100%", height: "100%", minHeight: 250, objectFit: "cover", display: "block" }}
      />
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,47,95,0.02) 35%, rgba(6,47,95,0.62) 100%)" }}
      />
    </div>
  );

  const textBlock = (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-9">
      <h2
        className="display-font"
        style={{ fontSize: 30, fontWeight: 700, color: COLORS.yellowDark, margin: 0, letterSpacing: 0.3 }}
      >
        {sec.title.toUpperCase()}
      </h2>
      <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.8, marginTop: 14, marginBottom: 20 }}>
        {sec.intro}
      </p>
      <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.navy, marginBottom: 12 }}>
        Features include:
      </div>
      <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        {sec.features.map(([label, body]) => (
          <li key={label} style={{ fontSize: 13.5, color: COLORS.text, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 700, color: COLORS.navy }}>{label}:</span>{" "}
            <span style={{ color: COLORS.muted }}>{body}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div style={{ background: bgColor }} className="px-5 py-10 md:px-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-[1160px] mx-auto items-center">
        {imageFirst ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
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

function RegisterCard() {
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
            message: `Phone: ${form.phone || 'N/A'}\nGender: ${form.gender}\nActivity: ${form.activity || 'Special Events'}\n\nNotes:\n${form.notes || 'No additional notes provided.'}`,
            title: `Special Events Registration - ${form.activity || 'Crics 22Yards Columbus'}`,
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

  return (
    <div
      className="p-5 sm:p-8 bg-white rounded-2xl border border-slate-200"
    >
      {submitted ? (
        <div style={{ padding: "20px", borderRadius: 12, background: "#ECFDF5", border: "1px solid #10B981", color: "#065F46", fontSize: 14, textAlign: "center", fontWeight: 600 }}>
          ✓ Request Submitted Successfully! Our team at Crics 22Yards Columbus will contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="First name *">
              <input required value={form.firstName} onChange={handleChange("firstName")} type="text" placeholder="First name" style={inputStyle} />
            </Field>
            <Field label="Last name *">
              <input required value={form.lastName} onChange={handleChange("lastName")} type="text" placeholder="Last name" style={inputStyle} />
            </Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Email *">
              <input required value={form.email} onChange={handleChange("email")} type="email" placeholder="you@example.com" style={inputStyle} />
            </Field>
            <Field label="Phone">
              <input value={form.phone} onChange={handleChange("phone")} type="tel" placeholder="(614) 984-1453" style={inputStyle} />
            </Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Gender">
              <select value={form.gender} onChange={handleChange("gender")} style={inputStyle}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Activity">
              <input value={form.activity} onChange={handleChange("activity")} type="text" placeholder="e.g. Birthday party" style={inputStyle} />
            </Field>
          </div>
          <Field label="Notes">
            <textarea value={form.notes} onChange={handleChange("notes")} placeholder="Tell us about your event" rows={4} style={{ ...inputStyle, resize: "vertical" }} />
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
            {loading ? "SUBMITTING..." : "REGISTER NOW"}
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
