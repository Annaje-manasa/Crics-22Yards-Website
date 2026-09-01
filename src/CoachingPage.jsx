import React, { useState } from "react";
import {
  Phone, MapPin, Mail, Calendar, ArrowRight, CheckCircle2, ChevronDown,
  Users, Layers, Facebook, Instagram, Menu, X, Activity, Gauge, Target,
  ClipboardList, Dumbbell, Award, Crosshair,
} from "lucide-react";
import SiteFooter from "./SiteFooter";
import SiteUtilityBar from "./SiteUtilityBar";
import SiteHeader from "./SiteHeader";
import coachingHeroImg from "./assets/crics3.jpeg";
import crics1Img from "./assets/crics 1.jpeg";

const NAVY = "#0A5DA6";
const NAVY_DEEPER = "#053a68";
const YELLOW = "#E9D222";
const YELLOW_SOFT = "#EEDB6E";
const SKY_LIGHT = "#EEF5FB";
const GOLD = "#C9A400";

function FontImport() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');
      .ty-display { font-family: 'Oswald', sans-serif; }
      .ty-body { font-family: 'Inter', sans-serif; }
    `}</style>
  );
}

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

function YellowButton({ children, icon: Icon, className = "", href = "#" }) {
  return (
    <a href={href} className={`ty-body inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide uppercase transition-transform hover:-translate-y-0.5 ${className}`} style={{ background: YELLOW, color: NAVY_DEEPER }}>
      {Icon && <Icon size={16} />}
      {children}
    </a>
  );
}

export default function CoachingPage() {
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
            message: `Phone: ${form.phone || 'N/A'}\nGender: ${form.gender}\nActivity: ${form.activity || 'Coaching'}\n\nNotes:\n${form.notes || 'No additional notes provided.'}`,
            title: `Coaching Page Registration - ${form.activity || 'Crics 22Yards Columbus'}`,
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

  const programs = [
    { icon: ClipboardList, title: "Quarterly Cricket Skill Assessments", text: "Receive detailed performance evaluations, video analysis, and personalized development reports reviewed by our coaching team to help track progress and identify improvement areas." },
    { icon: Dumbbell, title: "Customized Fitness & Conditioning Plans", text: "Improve strength, endurance, agility, mobility, and overall athletic performance through structured fitness programs designed specifically for cricket players." },
    { icon: Target, title: "Advanced Cricket Coaching", text: "Develop technical excellence in batting, bowling, fielding, match awareness, and game strategy through professional coaching and structured player development programs." },
    { icon: Activity, title: "Specialized Batting Development", text: "Improve batting technique, shot selection, power hitting, range hitting, footwork, and match performance using side-arm specialists, bowling machines, and advanced drills." },
    { icon: Gauge, title: "Bowling Performance Program", text: "Enhance bowling mechanics, pace, control, consistency, fitness, and execution through customized coaching and targeted skill development sessions." },
    { icon: Crosshair, title: "Professional Fielding Training", text: "Build agility, reaction time, catching ability, throwing accuracy, and match-ready fielding skills through dedicated indoor and outdoor training sessions." },
  ];

  const whyChoose = [
    { title: "Advanced Indoor Cricket Training Technology", text: "Train using modern cricket technology, performance tracking tools, bowling machines, and structured coaching methods designed to accelerate player development and improve match performance.", tone: "navy" },
    { title: "Experienced & Certified Cricket Coaches", text: "Learn from qualified coaches with extensive playing and coaching experience. Our coaching team focuses on technical development, game awareness, confidence building, and long-term player growth.", tone: "sky" },
    { title: "Flexible Coaching Schedules", text: "Choose from multiple coaching sessions and training schedules designed to fit school, work, and family commitments while maintaining consistent player development.", tone: "green" },
  ];

  const faqs = [
    { q: "What types of cricket coaching programs are available at Crics 22Yards Columbus?", a: "At Crics 22Yards Columbus, we offer professional cricket coaching programs for kids, youth players, beginners, intermediate cricketers, and advanced athletes. Our programs focus on batting, bowling, fielding, fitness, game awareness, and long-term player development." },
    { q: "How long does each coaching program last?", a: "Program length varies by track and age group, with sessions typically running weekly across a structured multi-week block. Get in touch with our team for the current schedule and session lengths." },
    { q: "What qualifications do your coaches have?", a: "Our coaches are experienced, certified cricketers with backgrounds in domestic and franchise cricket leagues, bringing professional playing and coaching expertise to every session." },
    { q: "Do you offer trial sessions for new students?", a: "Yes — new players are welcome to book a trial session before committing to a full coaching program. Contact us to schedule yours." },
    { q: "What equipment do I need to bring to cricket training sessions?", a: "Players should bring their own bat, gloves, and appropriate footwear where possible. Basic protective gear is available through our ProShop if you need it." },
    { q: "Can parents watch their children during coaching sessions?", a: "Absolutely — parents are welcome to watch from designated viewing areas throughout every coaching session." },
    { q: "How are players assessed and moved to higher levels?", a: "Players are assessed through our quarterly skill evaluations, which combine performance tracking, video analysis, and coach feedback to guide progression between levels." },
    { q: "Are there opportunities for competitive cricket?", a: "Yes — advanced players in our programs have opportunities to progress toward competitive cricket, including match preparation and tournament-focused training." },
    { q: "What makes Crics 22Yards Columbus different from other cricket academies?", a: "Our combination of modern indoor training technology, certified experienced coaches, structured assessments, and flexible scheduling sets us apart as a comprehensive cricket development destination in Central Ohio." },
    { q: "Is financial aid or scholarship available for talented players?", a: "We're committed to supporting talented players — reach out to our team directly to discuss financial aid or scholarship options that may be available." },
  ];

  return (
    <div className="w-full min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <FontImport />

      {/* ============================ HEADER ============================ */}
      <SiteHeader activePage="COACHING" />

      <section id="coaching" style={{ background: NAVY }} className="relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20" style={{ background: "#3E8FD0" }} />
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative text-left">
          <div>
            <Eyebrow dark>Coaching</Eyebrow>
            <h1 className="ty-display text-3xl md:text-5xl font-bold uppercase text-white leading-[1.1] mb-6">
              Cricket Coaching &amp; Training Programs in Columbus, OH
            </h1>
            <p className="ty-body text-white/85 text-base md:text-lg mb-4">
              Professional cricket coaching for kids, youth players, beginners, and advanced cricketers in Plain City, Ohio.
            </p>
            <p className="ty-body text-white/70 text-sm">
              Crics 22Yards Columbus offers structured cricket coaching programs designed to improve batting, bowling, fielding, fitness, match awareness, and overall player development. Our indoor cricket academy serves players from Columbus, Plain City, Dublin, Hilliard, Powell, Marysville, and nearby Ohio communities.
            </p>
          </div>
          <div className="flex justify-center items-center w-full">
            <img src={coachingHeroImg} alt="Cricket Coaching & Training Programs - Crics 22Yards Columbus" className="w-full h-auto rounded-2xl shadow-xl object-contain" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow>Professional Cricket Coaching Programs</Eyebrow>
            <h2 className="ty-display text-2xl md:text-3xl font-bold mb-6" style={{ color: NAVY }}>
              High-Performance Cricket Training in Columbus, Ohio
            </h2>
            <div className="space-y-6 mb-8">
              {programs.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: SKY_LIGHT }}>
                    <p.icon size={18} style={{ color: NAVY }} />
                  </div>
                  <div>
                    <div className="ty-display font-semibold text-sm mb-1" style={{ color: NAVY }}>{p.title}</div>
                    <p className="ty-body text-sm" style={{ color: "#6B8399" }}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <YellowButton href="#register">Schedule a Tour</YellowButton>
          </div>

          <div className="flex flex-col gap-0 rounded-2xl overflow-hidden shadow-lg h-fit self-start">
            <img src={crics1Img} alt="Coach and junior player" className="w-full h-auto object-cover" loading="lazy" />
            <div className="p-6 md:p-8 text-center" style={{ background: NAVY }}>
              <p className="ty-display text-white text-xl md:text-2xl font-bold uppercase leading-snug mb-3">
                Train Smarter. Play Harder. Achieve More.
              </p>
              <p className="ty-body text-white/80 text-sm">
                Join one of the leading cricket coaching programs in Columbus, Ohio and take your game to the next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: NAVY }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase text-white mb-4">Why Choose Our Cricket Coaching Programs?</h2>
            <p className="ty-body text-white/75">
              Crics 22Yards Columbus provides one of the most comprehensive cricket coaching experiences in Ohio. Our programs are designed for kids, youth players, beginners, intermediate cricketers, and advanced athletes looking to improve batting, bowling, fielding, fitness, and overall match performance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyChoose.map((c) => (
              <div key={c.title} className="rounded-2xl overflow-hidden">
                <Photo icon={Award} className="h-40 w-full rounded-none" tone={c.tone} />
                <div className="p-6" style={{ background: "#0B4C87" }}>
                  <div className="ty-display font-bold uppercase text-sm mb-2" style={{ color: YELLOW }}>{c.title}</div>
                  <p className="ty-body text-xs leading-relaxed text-white/75">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: SKY_LIGHT }} className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-3" style={{ color: NAVY }}>Cricket Coaching FAQs</h2>
            <div className="ty-display text-lg md:text-xl font-semibold mb-4" style={{ color: "#374B5C" }}>Frequently Asked Questions About Our Cricket Coaching Programs</div>
            <p className="ty-body" style={{ color: "#5B7A94" }}>
              Learn more about cricket coaching, player development programs, training schedules, coaching qualifications, cricket lessons, and youth cricket opportunities at Crics 22Yards Columbus. Below are answers to some of the most common questions parents and players ask before joining our academy.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
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
