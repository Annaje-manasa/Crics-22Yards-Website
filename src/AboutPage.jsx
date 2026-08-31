import React, { useState } from "react";
import {
  Phone, MapPin, Mail, Calendar, ArrowRight, CheckCircle2, ChevronDown,
  Users, Target, Shield, Layers, Award, Facebook, Instagram, Menu, X,
  Quote, GraduationCap,
} from "lucide-react";
import SiteFooter from "./SiteFooter";
import SiteUtilityBar from "./SiteUtilityBar";
import SiteHeader from "./SiteHeader";
import heroImg from "./assets/crics 2.jpeg";
import crics4Img from "./assets/crics4.jpeg";

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

function Photo({ icon: Icon, label, className = "", tone = "navy", src, alt }) {
  if (src) {
    return (
      <div className={`relative flex flex-col items-center justify-center rounded-2xl overflow-hidden ${className}`}>
        <img src={src} alt={alt || label || "Photo"} className="w-full h-full object-cover rounded-2xl" loading="lazy" />
      </div>
    );
  }
  const tones = {
    navy: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEPER} 100%)`,
    sky: `linear-gradient(135deg, #CFE3F3 0%, #A9CBE8 100%)`,
    green: `linear-gradient(135deg, #DDE7C9 0%, #8FAE63 100%)`,
  };
  const fg = tone === "sky" ? NAVY : "#fff";
  return (
    <div className={`relative flex flex-col items-center justify-center gap-2 rounded-2xl overflow-hidden ${className}`} style={{ background: tones[tone], color: fg, minHeight: 160 }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
      {Icon && <Icon size={30} strokeWidth={1.5} className="opacity-90 relative" />}
      {label && <span className="text-xs font-semibold tracking-wide uppercase opacity-90 relative text-center px-4 ty-body">{label}</span>}
    </div>
  );
}

function CheckItem({ children, color = "#3FB27F" }) {
  return (
    <li className="ty-body flex items-start gap-2 text-sm">
      <CheckCircle2 size={18} style={{ color, flexShrink: 0, marginTop: 1 }} />
      <span>{children}</span>
    </li>
  );
}

function YellowButton({ children, icon: Icon, className = "", href = "#" }) {
  return (
    <a href={href} className={`ty-body inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide uppercase transition-transform hover:-translate-y-0.5 ${className}`} style={{ background: YELLOW, color: NAVY_DEEPER }}>
      {Icon && <Icon size={16} />}
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
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
            message: `Phone: ${form.phone || 'N/A'}\nGender: ${form.gender}\nActivity: ${form.activity || 'General Inquiry'}\n\nNotes:\n${form.notes || 'No additional notes provided.'}`,
            title: `About Us Registration - ${form.activity || 'Crics 22Yards Columbus'}`,
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

  const navLinks = ["Home", "About Us", "Coaching", "Lane Rentals", "Special Events", "Summer Camp", "Contact Us", "Registration"];

  const whyJoin = [
    { title: "Training for All Skill Levels", text: "Programs for beginners, youth players, intermediate cricketers, and advanced athletes." },
    { title: "Supportive Cricket Community", text: "A positive environment where players build confidence, discipline, teamwork, and love for cricket." },
    { title: "Advanced Indoor Training Facility", text: "Indoor cricket nets, bowling machines, coaching tools, and year-round practice opportunities." },
    { title: "Complete Skill Development", text: "Coaching covers batting, bowling, fielding, fitness, game awareness, match preparation, and mental strength." },
  ];

  const faqs = [
    { q: "What is Crics 22Yards Columbus?", a: "Crics 22Yards Columbus is a premier indoor cricket academy and training facility located at 9525 OH-161, Plain City, OH 43064. We offer cricket coaching, indoor cricket nets, lane rentals, summer camps, youth development programs, and cricket events for players across Columbus and Central Ohio." },
    { q: "What cricket programs do you offer?", a: "We offer programs for beginners, youth players, intermediate cricketers, and advanced athletes, covering batting, bowling, fielding, fitness, and match preparation." },
    { q: "What facilities are available at Crics 22Yards Columbus?", a: "Our facility includes indoor cricket nets, bowling machines, coaching tools, and lanes available for year-round practice, regardless of Ohio weather." },
    { q: "Do you offer cricket coaching for kids?", a: "Yes — our youth development programs are designed for players of all ages and skill levels, with coaching structured to build fundamentals and confidence." },
    { q: "Can I rent indoor cricket lanes?", a: "Yes, indoor cricket lanes are available to rent for individual practice, team sessions, and groups. Get in touch to check availability." },
    { q: "Do you host cricket events and parties?", a: "Yes — Crics 22Yards Columbus hosts cricket-themed events and parties on-site. Contact us for details on booking your event." },
    { q: "Where is Crics 22Yards Columbus located?", a: "We're located at 9525 OH-161, Plain City, OH 43064, serving Columbus, Plain City, Dublin, Hilliard, Powell, Marysville, and the surrounding Central Ohio communities." },
  ];

  return (
    <div className="w-full min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <FontImport />

      {/* ============================ HEADER ============================ */}
      <SiteHeader activePage="ABOUT US" />

      <section style={{ background: NAVY }} className="relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20" style={{ background: "#3E8FD0" }} />
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="ty-body inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-6" style={{ borderColor: "rgba(233,210,34,0.5)", color: YELLOW }}>
              About Crics 22Yards Columbus
            </span>
            <h1 className="ty-display text-3xl md:text-5xl font-bold uppercase text-white leading-[1.1] mb-6">
              About Crics 22Yards Columbus<br />
              <span className="relative inline-block">
                Indoor Cricket Academy
                <span className="absolute left-0 -bottom-2 w-full h-1.5" style={{ background: YELLOW }} />
              </span>
            </h1>
            <p className="ty-body text-white/80 text-base md:text-lg mb-6 max-w-md">
              Columbus Ohio's destination for cricket training &amp; development.
            </p>
            <div className="ty-body flex items-center gap-2 text-white/70 text-sm">
              <span>Home</span> <span className="opacity-50">—</span> <span className="text-white font-semibold">About Us</span>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <img src={heroImg} alt="Super Kings Academy Columbus - Building Champions" className="w-full h-auto rounded-2xl shadow-xl object-contain" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-1">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 rounded-b-xl overflow-hidden shadow-lg">
            {[
              ["Established", "2026"],
              ["Location", "Plain City, OH"],
              ["Serving", "Central Ohio"],
            ].map(([label, val], i) => (
              <div key={label} className="text-center py-6 px-2" style={{ background: i === 1 ? "#DDEAF6" : "#F4F8FB" }}>
                <div className="ty-display text-2xl font-bold" style={{ color: NAVY }}>{val}</div>
                <div className="ty-body text-[11px] font-semibold uppercase tracking-wide mt-1" style={{ color: "#5B7A94" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center mb-10">
            <div className="ty-body max-w-xl text-center border border-gray-200 rounded-xl p-6 relative">
              <Quote size={22} style={{ color: YELLOW }} className="mx-auto mb-2" />
              <p className="italic text-sm md:text-base" style={{ color: NAVY }}>
                "Cricket is not just a sport for me; it's a way of life, it's a way of thinking, it's a way of seeing the world"
              </p>
              <div className="ty-body text-xs font-bold uppercase tracking-wide mt-3" style={{ color: "#9AAEC0" }}>Sachin Tendulkar</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="ty-display text-2xl md:text-3xl font-bold uppercase mb-2" style={{ color: NAVY }}>About Crics 22Yards Columbus</h2>
              <div className="ty-display text-lg font-semibold mb-4" style={{ color: "#5B7A94" }}>Who We Are</div>
              <p className="ty-body mb-6" style={{ color: "#5B7A94" }}>
                Located in Plain City, Ohio, Crics 22Yards Columbus is a premier indoor cricket academy dedicated to developing cricketers of all ages and skill levels. Established in 2026 by passionate cricket enthusiasts, our mission is to provide professional cricket coaching, indoor training facilities, lane rentals, youth development programs, and year-round cricket opportunities for the growing cricket community in Central Ohio.
              </p>
              <span className="inline-block w-12 h-1" style={{ background: NAVY }} />
            </div>
            <div>
              <h3 className="ty-display text-xl md:text-2xl font-bold mb-4" style={{ color: NAVY }}>Columbus Ohio's Destination for Cricket Training &amp; Development</h3>
              <p className="ty-body mb-4" style={{ color: "#5B7A94" }}>
                At Crics 22Yards Columbus, we provide a professional indoor cricket environment where players can improve batting, bowling, fielding, fitness, and overall game awareness. Our facility is designed to support beginners, youth players, competitive cricketers, and cricket enthusiasts looking to develop their skills year-round.
              </p>
              <p className="ty-body" style={{ color: "#5B7A94" }}>
                Serving players from Columbus, Plain City, Dublin, Hilliard, Powell, Marysville, and surrounding Ohio communities, our academy combines experienced coaching, modern cricket technology, structured development programs, indoor cricket nets, and a strong cricket community to help every player reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: NAVY }} className="py-20 relative overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-10" style={{ background: "#fff" }} />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase text-white leading-tight mb-4">
              Developing the Next<br />Generation of Cricketers
            </h2>
            <p className="ty-body text-white/80">
              At Crics 22Yards Columbus, we are committed to growing the game of cricket across Ohio and the United States by providing professional cricket coaching, advanced indoor training facilities, youth development programs, and year-round opportunities for players of all ages. Our vision and mission reflect our dedication to building confident athletes, strong communities, and future cricket leaders.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-7">
              <div className="ty-display text-lg font-bold uppercase mb-3" style={{ color: GOLD }}>Our Vision</div>
              <p className="ty-body text-sm" style={{ color: "#5B7A94" }}>
                Our vision is to become one of the leading cricket academies in the United States and a recognized center for cricket excellence in Ohio. We strive to create an environment where players can develop their skills, compete at higher levels, and build a lifelong passion for cricket through innovation, inclusivity, and continuous improvement.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7">
              <div className="ty-display text-lg font-bold uppercase mb-3" style={{ color: GOLD }}>Our Mission</div>
              <p className="ty-body text-sm" style={{ color: "#5B7A94" }}>
                Our mission is to provide high-quality cricket coaching, indoor cricket training facilities, lane rentals, youth development programs, summer camps, and player support services. Through structured coaching, modern training technology, and experienced mentors, we help players improve their batting, bowling, fielding, fitness, confidence, and overall cricket performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: SKY_LIGHT }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div className="w-full">
            <img src={crics4Img} alt="Coach guiding a young player" className="w-full h-auto rounded-2xl" loading="lazy" />
          </div>
          <div>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-2" style={{ color: NAVY }}>Why Join Crics 22Yards Columbus?</h2>
            <div className="ty-display text-lg font-semibold mb-4" style={{ color: "#5B7A94" }}>Cricket Coaching, Indoor Nets &amp; Player Development</div>
            <p className="ty-body mb-6" style={{ color: "#5B7A94" }}>
              Crics 22Yards Columbus helps players of all ages improve through professional cricket coaching, indoor cricket nets, structured training programs, fitness development, and a supportive cricket community in Plain City, Ohio.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {whyJoin.map((c) => (
                <div key={c.title} className="rounded-xl p-5 border-l-4" style={{ background: NAVY, borderColor: YELLOW }}>
                  <div className="ty-display font-semibold uppercase text-sm mb-2" style={{ color: YELLOW }}>{c.title}</div>
                  <p className="ty-body text-xs leading-relaxed text-white/70">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Trained by the best</Eyebrow>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-2" style={{ color: NAVY }}>Meet Our Coaches at Crics 22Yards Columbus</h2>
            <div className="ty-display text-lg font-semibold mb-6" style={{ color: GOLD }}>Experience Excellence in Coaching</div>

            <div className="mb-6">
              <div className="ty-display font-bold uppercase text-sm mb-1" style={{ color: NAVY }}>About Phani Teja Simhadri</div>
              <p className="ty-body text-sm" style={{ color: "#5B7A94" }}>
                At Crics 22Yards Columbus, we are proud to have Phani Teja Simhadri as our esteemed coach. With a rich background in cricket, Phani brings a wealth of experience and expertise to our team.
              </p>
            </div>

            <div>
              <div className="ty-display font-bold uppercase text-sm mb-2" style={{ color: NAVY }}>Professional Summary</div>
              <ul className="space-y-2">
                <CheckItem color={NAVY}>Professional cricketer specializing as a left-arm fast-medium bowler</CheckItem>
                <CheckItem color={NAVY}>Currently active in USA domestic and franchise cricket leagues</CheckItem>
                <CheckItem color={NAVY}>Known for disciplined bowling, consistency, and match impact</CheckItem>
                <CheckItem color={NAVY}>Passionate about contributing to team success and growing in competitive cricket</CheckItem>
                <CheckItem color={NAVY}>Active participant in Minor League Cricket (USA)</CheckItem>
                <CheckItem color={NAVY}>Experience in high-intensity T20 competitions</CheckItem>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden border-4 max-w-sm w-full" style={{ borderColor: "#D7E4EE" }}>
              <Photo icon={GraduationCap} label="Coach Phani Teja Simhadri" className="h-[420px] w-full rounded-none" tone="navy" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: SKY_LIGHT }} className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-3" style={{ color: NAVY }}>Crics 22Yards Columbus FAQs</h2>
            <div className="ty-display text-lg md:text-xl font-semibold mb-4" style={{ color: "#374B5C" }}>Frequently Asked Questions About Our Indoor Cricket Facility</div>
            <p className="ty-body" style={{ color: "#5B7A94" }}>
              Learn more about our cricket coaching programs, indoor cricket lane rentals, youth training, summer camps, events, facilities, and location in Plain City near Columbus, Ohio.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                    style={{ background: open ? NAVY : "#F4F8FB" }}
                  >
                    <span className="ty-body text-sm md:text-base font-bold" style={{ color: open ? YELLOW : "#1E3A54" }}>{f.q}</span>
                    <ChevronDown size={18} className="transition-transform flex-shrink-0" style={{ color: open ? YELLOW : "#9AAEC0", transform: open ? "rotate(180deg)" : "none" }} />
                  </button>
                  {open && (
                    <div className="px-6 py-5 bg-white">
                      <p className="ty-body text-sm" style={{ color: "#5B7A94" }}>{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="register" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Get started</Eyebrow>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-4" style={{ color: GOLD }}>Register Now</h2>
            <p className="ty-body mb-2" style={{ color: "#5B7A94" }}>
              Ready to take your cricket game to the next level? Whether you're looking to rent a lane for solo practice or enroll in one of our expert-led coaching programs, Crics 22Yards Columbus is the place to be. Fill out the form below to get more information and start your journey to cricket excellence!
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-400 text-emerald-800 rounded-2xl p-8 text-center ty-body shadow-sm">
              <h3 className="text-xl font-bold mb-2">Registration Submitted Successfully!</h3>
              <p className="text-sm opacity-90">Thank you for registering. Our team at Crics 22Yards Columbus will contact you shortly.</p>
            </div>
          ) : (
            <form className="rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>First Name *</label>
                  <input required value={form.firstName} onChange={handleChange("firstName")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 text-gray-800" placeholder="First Name" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>Last Name *</label>
                  <input required value={form.lastName} onChange={handleChange("lastName")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 text-gray-800" placeholder="Last Name" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>Email *</label>
                  <input type="email" required value={form.email} onChange={handleChange("email")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 text-gray-800" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>Phone</label>
                  <input type="tel" value={form.phone} onChange={handleChange("phone")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 text-gray-800" placeholder="(614) 984-1453" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>Gender</label>
                  <select value={form.gender} onChange={handleChange("gender")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 text-gray-800">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>Activity</label>
                  <input value={form.activity} onChange={handleChange("activity")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 text-gray-800" placeholder="Coaching, lane rental, camp..." />
                </div>
              </div>
              <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>Notes</label>
              <textarea value={form.notes} onChange={handleChange("notes")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 mb-5 text-gray-800" rows={4} placeholder="Any special notes or requests..." />
              <button type="submit" disabled={loading} className="ty-body w-full rounded-lg py-3 text-sm font-bold uppercase tracking-wide cursor-pointer transition-transform hover:scale-[1.01]" style={{ background: NAVY, color: "#fff" }}>
                {loading ? "Submitting..." : "Register Now"}
              </button>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
      {false && <footer style={{ background: NAVY_DEEPER }} className="text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="ty-display w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-white" style={{ color: NAVY_DEEPER }}>22</div>
              <div className="leading-tight ty-display">
                <div className="font-bold tracking-wide text-sm">CRICS 22 YARDS</div>
                <div className="text-[10px] font-semibold tracking-[0.2em]" style={{ color: YELLOW }}>COLUMBUS</div>
              </div>
            </div>
            <p className="ty-body text-white/60 text-sm mb-5">22Yards Columbus – Your premier destination for indoor cricket excellence.</p>
            <ul className="ty-body space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><Mail size={15} /> contact@crics22yards.com</li>
              <li className="flex items-center gap-2"><Phone size={15} /> (713) 498-2155</li>
              <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 flex-shrink-0" /> 9525 OH-161, Plain City, OH 43064</li>
            </ul>
          </div>

          <div>
            <div className="ty-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: YELLOW }}>Quick Links</div>
            <ul className="ty-body space-y-2.5 text-sm text-white/75">
              {["Home", "About Us", "Coaching", "Lane Rentals", "Summer Camp", "Special Events", "Gallery", "Contact Us"].map((l) => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>

          <div>
            <div className="ty-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: YELLOW }}>Legal</div>
            <ul className="ty-body space-y-2.5 text-sm text-white/75">
              {["Privacy Policy", "Terms of Use", "Disclaimer", "Waiver & Cancellations Policy"].map((l) => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>

          <div>
            <div className="ty-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: YELLOW }}>Subscribe Newsletter</div>
            <p className="ty-body text-sm text-white/70 mb-4">Signup our newsletter to get update information, news, insight or promotions.</p>
            <div className="flex rounded-full overflow-hidden mb-5">
              <input placeholder="Enter your email" className="ty-body flex-1 px-4 py-2.5 text-sm text-gray-800 outline-none" />
              <button className="ty-body px-4 text-xs font-bold uppercase" style={{ background: YELLOW, color: NAVY_DEEPER }}>Sign Up</button>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10"><Instagram size={16} /></a>
            </div>
          </div>
        </div>

        <div className="ty-body max-w-7xl mx-auto px-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
          <div>Managed by Next Wave Engage LLC</div>
          <div>Copyright © 2026. All rights reserved</div>
        </div>
      </footer>}
    </div>
  );
}
