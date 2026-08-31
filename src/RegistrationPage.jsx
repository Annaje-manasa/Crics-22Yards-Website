import React, { useState } from "react";
import {
  Phone, MapPin, Mail, Calendar, CheckCircle2, Users, Facebook, Instagram,
  Menu, X, QrCode, Globe, Trophy, Sparkles,
} from "lucide-react";
import SiteUtilityBar from "./SiteUtilityBar";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import cricsPosterImg from "./assets/crics.jpg";

/* ------------------------------------------------------------------ */
/*  Design tokens — same system as the 22 Yards Dallas site            */
/* ------------------------------------------------------------------ */
const NAVY = "#0A5DA6";
const NAVY_DEEPER = "#053a68";
const YELLOW = "#E9D222";
const YELLOW_SOFT = "#EEDB6E";
const SKY_LIGHT = "#EEF5FB";
const GOLD = "#C9A400";

/* ------------------------------------------------------------------ */
/*  Fonts                                                              */
/* ------------------------------------------------------------------ */
function FontImport() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');
      .ty-display { font-family: 'Oswald', sans-serif; }
      .ty-body { font-family: 'Inter', sans-serif; }
    `}</style>
  );
}

/* ------------------------------------------------------------------ */
/*  Reusable bits                                                      */
/* ------------------------------------------------------------------ */
function Eyebrow({ children, dark }) {
  return (
    <div className="ty-body flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3" style={{ color: dark ? YELLOW : NAVY }}>
      <span className="inline-block w-6 h-[2px]" style={{ background: YELLOW }} />
      {children}
    </div>
  );
}

function YellowButton({ children, icon: Icon, className = "", href = "#", target }) {
  return (
    <a href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined} className={`ty-body inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide uppercase transition-transform hover:-translate-y-0.5 ${className}`} style={{ background: YELLOW, color: NAVY_DEEPER }}>
      {Icon && <Icon size={16} />}
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function RegistrationPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "Male",
    activity: "Super Kings Academy",
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
            message: `Phone: ${form.phone || 'N/A'}\nGender: ${form.gender}\nActivity: ${form.activity}\n\nNotes:\n${form.notes || 'No additional notes provided.'}`,
            title: `Academy Registration - ${form.activity}`,
          },
        }),
      });
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", gender: "Male", activity: "Super Kings Academy", notes: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const navLinks = ["Home", "About Us", "Coaching", "Lane Rentals", "Special Events", "Summer Camp", "Contact Us", "Registration"];

  return (
    <div className="w-full min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <FontImport />

      {/* ============================ HEADER ============================ */}
      <SiteHeader activePage="REGISTRATION" />

      {/* ============================ HERO ============================ */}



      {/* ============================ PROMO POSTER ============================ */}
      <section className="py-10 bg-white">
        <div className="max-w-2xl mx-auto px-6 flex justify-center">
          <img src={cricsPosterImg} alt="Super Kings Academy Columbus Promo Poster" className="w-full h-auto rounded-2xl shadow-xl object-contain" loading="lazy" />
        </div>
      </section>

      {/* ============================ JOIN OUR ACADEMY ============================ */}
      <section className="pb-16 pt-6 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="ty-display text-3xl md:text-4xl font-bold mb-8" style={{ color: "#1E293B" }}>Join Our Academy</h2>
          <div className="ty-body space-y-5 text-base" style={{ color: "#5B7A94" }}>
            <p>
              Every great cricketer's journey begins with a dream&mdash;a dream to hold the bat with confidence, to run in with fire, to wear discipline like a badge of honor.
            </p>
            <p>
              🏏 Super Kings Academy is now in Columbus! Where passion meets purpose, talent meets training, and young dreams are shaped into tomorrow's champions.
            </p>
            <p>
              Whether you're just picking up a bat for the first time or you're an aspiring athlete looking to refine your skills, our academy provides world-class coaching, state-of-the-art facilities, and a nurturing environment where excellence is cultivated every single day. Our experienced coaches are committed to unlocking your potential and helping you become the cricketer you're meant to be.
            </p>
            <p>
              This is more than just cricket training&mdash;it's about building character, developing resilience, and becoming part of a community that celebrates achievement and embraces the beautiful game.
            </p>
          </div>
          <div className="mt-10">
            <YellowButton href="#registration-form" className="px-10 py-4 text-base">Register Now</YellowButton>
          </div>
        </div>
      </section>



      {/* ============================ FOOTER ============================ */}
      <SiteFooter />
    </div>
  );
}
