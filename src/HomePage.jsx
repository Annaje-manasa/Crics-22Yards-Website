import React, { useState } from "react";
import {
  Phone, MapPin, Clock, Mail, Calendar, ArrowRight, CheckCircle2, Check,
  Target, Activity, Brain, Users, Award, Grid3x3, Gauge, Gamepad2,
  Dumbbell, Armchair, ShoppingBag, Facebook, Instagram, Menu, X, Star,
} from "lucide-react";
import SiteFooter from "./SiteFooter";
import SiteUtilityBar from "./SiteUtilityBar";
import SiteHeader from "./SiteHeader";
import adVideo from "./assets/Ad Video 1-compressed.mp4";
import crics1Img from "./assets/crics 1.jpeg";

/* ------------------------------------------------------------------ */
/*  Design tokens — sampled from the reference site                    */
/* ------------------------------------------------------------------ */
const NAVY = "#0A5DA6";
const NAVY_DEEPER = "#053a68";
const YELLOW = "#E9D222";
const YELLOW_SOFT = "#EEDB6E";
const SKY_LIGHT = "#EEF5FB";

/* Real photography hosted on the reference site — same images, hotlinked */
const IMG = {
  heroBowler: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fhero-bowler.jpg&w=3840&q=75",
  youngPlayer: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fyoung-player.jpg&w=3840&q=75",
  juniorTraining: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fjunior-training.jpg&w=3840&q=75",
  battingAction: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fbatting-action.jpg&w=3840&q=75",
  indoorLanes: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Findoor-lanes.jpg&w=3840&q=75",
  bowlingDrill: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fbowling-drill.jpg&w=3840&q=75",
  powerShot: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fpower-shot.jpg&w=3840&q=75",
  fitnessGym: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Ffitness-gym.jpg&w=3840&q=75",
  relaxationArea: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Frelaxation-area.jpg&w=3840&q=75",
  cricketEquipment: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fcricket-equipment.jpg&w=3840&q=75",
  laneEmpty: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Flane-empty.jpg&w=3840&q=75",
  seniorNets: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fsenior-nets.jpg&w=3840&q=75",
  birthdayParty: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fbirthday-party.jpg&w=3840&q=75",
  netsPractice: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fnets-practice.jpg&w=3840&q=75",
  celebration: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fcelebration.jpg&w=3840&q=75",
  mezzanineLounge: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fmezzanine-lounge.jpg&w=3840&q=75",
  coachingSession: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fcoaching-session.jpg&w=3840&q=75",
};

/* ------------------------------------------------------------------ */
/*  Fonts — condensed bold display + clean body sans, matching source  */
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
/*  Small reusable bits                                               */
/* ------------------------------------------------------------------ */
function Eyebrow({ children, dark }) {
  return (
    <div
      className="ty-body flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3"
      style={{ color: dark ? YELLOW : NAVY }}
    >
      <span className="inline-block w-6 h-[2px]" style={{ background: YELLOW }} />
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, sub, dark, center = true }) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto mb-12 flex flex-col items-center" : "mb-12"}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className="ty-display text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight mb-4"
        style={{ color: dark ? "#fff" : NAVY }}
      >
        {title}
      </h2>
      {sub && (
        <p className="ty-body text-base" style={{ color: dark ? "rgba(255,255,255,0.75)" : "#5B7A94" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function Photo({ src, alt, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
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

function Pill({ children }) {
  return (
    <span
      className="ty-body inline-block text-xs font-semibold px-3 py-1.5 rounded-full border"
      style={{ borderColor: "#D7E4EE", color: NAVY, background: "#fff" }}
    >
      {children}
    </span>
  );
}

function YellowButton({ children, icon: Icon, className = "", href = "#" }) {
  return (
    <a
      href={href}
      className={`ty-body inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide uppercase transition-transform hover:-translate-y-0.5 ${className}`}
      style={{ background: YELLOW, color: NAVY_DEEPER }}
    >
      {Icon && <Icon size={16} />}
      {children}
    </a>
  );
}

function OutlineButton({ children, icon: Icon, dark, className = "", href = "#" }) {
  return (
    <a
      href={href}
      className={`ty-body inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide uppercase border-2 transition-colors ${className}`}
      style={{ borderColor: dark ? "rgba(255,255,255,0.6)" : NAVY, color: dark ? "#fff" : NAVY }}
    >
      {Icon && <Icon size={16} />}
      {children}
    </a>
  );
}

function GroupCoachingCards() {
  const [activeGroup, setActiveGroup] = useState("U13");

  const groups = [
    { group: "U11", level: "Basic", text: "No previous cricket experience required." },
    { group: "U13", level: "Intermediate", text: "For players with basic cricket experience." },
    { group: "U15", level: "Advanced", text: "For skilled and developing competitive cricketers." },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-10">
      {groups.map((g) => {
        const isHighlighted = activeGroup === g.group;
        return (
          <div
            key={g.group}
            onMouseEnter={() => setActiveGroup(g.group)}
            className={`rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${isHighlighted
              ? "bg-[#0A5DA6] border-[#0A5DA6] shadow-xl scale-[1.02]"
              : "bg-white border-[#E4ECF3] shadow-sm"
              }`}
          >
            <div
              className={`ty-display text-3xl font-bold mb-3 transition-colors duration-300 ${isHighlighted ? "text-white" : "text-[#0A5DA6]"
                }`}
            >
              {g.group}
            </div>
            <span
              className={`ty-body inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 transition-colors duration-300 ${isHighlighted ? "bg-[#F6C915] text-[#053a68]" : "bg-[#E6F0F9] text-[#0A5DA6]"
                }`}
            >
              {g.level}
            </span>
            <p
              className={`ty-body text-sm transition-colors duration-300 ${isHighlighted ? "text-white/85" : "text-[#6B8399]"
                }`}
            >
              {g.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [regForm, setRegForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    ageGroup: "Select a group",
    program: "Select a program",
    notes: "",
  });
  const [regLoading, setRegLoading] = useState(false);
  const [regSubmitted, setRegSubmitted] = useState(false);

  const handleRegChange = (field) => (e) => setRegForm((f) => ({ ...f, [field]: e.target.value }));

  const handleRegSubmit = async (e) => {
    e.preventDefault();
    setRegLoading(true);
    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_uexjiwj",
          template_id: "template_stanys9",
          user_id: "Y4cfzv51x7E5ofvrs",
          template_params: {
            name: `${regForm.firstName} ${regForm.lastName}`,
            email: regForm.email,
            to_email: regForm.email,
            reply_to: regForm.email,
            phone: regForm.phone,
            message: `Phone: ${regForm.phone || 'N/A'}\nAge Group: ${regForm.ageGroup}\nProgram: ${regForm.program}\n\nNotes:\n${regForm.notes || 'No additional notes provided.'}`,
            title: `Academy Registration - ${regForm.program || 'Home Page'}`,
          },
        }),
      });
      setRegSubmitted(true);
      setRegForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        ageGroup: "Select a group",
        program: "Select a program",
        notes: "",
      });
      setTimeout(() => setRegSubmitted(false), 5000);
    } catch (err) {
      setRegSubmitted(true);
      setTimeout(() => setRegSubmitted(false), 5000);
    } finally {
      setRegLoading(false);
    }
  };

  const navLinks = ["Home", "About Us", "Coaching", "Lane Rentals", "Special Events", "Summer Camp", "Contact Us", "Registration"];

  const fuelSteps = [
    { letter: "F", title: "Fun", text: "Make every session enjoyable. Players who love turning up are the players who keep improving." },
    { letter: "U", title: "Understand the game", text: "Build cricket intelligence and awareness — reading conditions, situations, and opponents." },
    { letter: "E", title: "Evolve", text: "Develop skills through consistent, deliberate training with measurable progress." },
    { letter: "L", title: "Learn", text: "Turn practice into confidence, and confidence into match-day performance." },
  ];

  const whyCricket = [
    { icon: Target, title: "Discipline & patience", text: "Cricket teaches young players the value of preparation, consistency, and patience." },
    { icon: Activity, title: "Physical development", text: "Build coordination, fitness, speed, balance, and athletic ability through every session." },
    { icon: Brain, title: "Mental resilience", text: "Learn how to respond to mistakes, handle pressure, and come back stronger." },
    { icon: Users, title: "Teamwork & sportsmanship", text: "Learn to compete, communicate, respect opponents, and support teammates." },
    { icon: Award, title: "Character & confidence", text: "Every session creates opportunities for young players to take responsibility and grow." },
  ];

  const facilities = [
    { num: "01", icon: Grid3x3, title: "Advanced cricket lanes", text: "Professional-grade indoor cricket lanes with Gabba nets, built for serious training in every format.", img: IMG.indoorLanes },
    { num: "02", icon: Gauge, title: "High-tech bowling machines", text: "Train against controlled and challenging deliveries — pace, swing, spin, and length on demand.", img: IMG.bowlingDrill },
    { num: "03", icon: Gamepad2, title: "Pro-level batting simulators", text: "Improve timing, reaction, and technique against match-realistic deliveries.", img: IMG.powerShot },
    { num: "04", icon: Dumbbell, title: "Fitness gym", text: "Build the physical foundation for better performance — strength, speed, and endurance.", img: IMG.fitnessGym },
    { num: "05", icon: Armchair, title: "Relaxation areas", text: "Comfortable spaces for players and families to rest, watch, and recover between sessions.", img: IMG.relaxationArea },
    { num: "06", icon: ShoppingBag, title: "ProShop", text: "Get the equipment you need to play your best — bats, pads, gloves, shoes, and team gear.", img: IMG.cricketEquipment },
  ];

  const coaches = [
    { role: "Head coach" },
    { role: "Batting coach" },
    { role: "Bowling coach" },
    { role: "Fitness coach" },
  ];

  const testimonials = [
    { quote: "PLACEHOLDER — real parent review, supplied by the client.", name: "Parent name", role: "Parent" },
    { quote: "PLACEHOLDER — real parent review, supplied by the client.", name: "Parent name", role: "Parent" },
    { quote: "PLACEHOLDER — real player review, supplied by the client.", name: "Player name", role: "Player" },
  ];

  const events = [
    { title: "Birthday parties", text: "Create unforgettable cricket-themed celebrations your kids will talk about for months.", img: IMG.birthdayParty },
    { title: "Corporate events", text: "Team-building experiences for companies and organizations of any size.", img: IMG.netsPractice },
    { title: "Sporting events", text: "Host tournaments, leagues, and competitive events on professional lanes.", img: IMG.celebration },
  ];

  const gallery = [
    { src: IMG.seniorNets, alt: "Batting session in the nets" },
    { src: IMG.battingAction, alt: "Junior player cutting through the off side" },
    { src: IMG.indoorLanes, alt: "Indoor lanes, wide view" },
    { src: IMG.coachingSession, alt: "Coach directing a training drill" },
    { src: IMG.bowlingDrill, alt: "Bowling drill in progress" },
    { src: IMG.heroBowler, alt: "Bowler in delivery stride" },
  ];

  return (
    <div className="w-full min-h-screen bg-white ty-body" style={{ fontFamily: "'Inter', sans-serif" }}>
      <FontImport />

      {/* ============================ HEADER ============================ */}
      <SiteHeader activePage="HOME" />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-black min-h-[80vh] flex items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 pointer-events-none"
        >
          <source src={adVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-0 bg-black/45 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10 w-full text-center">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <span className="ty-body inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-6"
              style={{ borderColor: "rgba(233,210,34,0.5)", color: YELLOW }}>
              Super Kings Academy × 22 Yards Dallas
            </span>
            <h1 className="ty-body text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-center max-w-5xl mx-auto">
              Indoor Cricket Nets, Coaching & Summer<br className="hidden sm:inline" /> Camps in Columbus, OH
            </h1>
            <p className="ty-body text-white/90 text-base md:text-lg mb-8 max-w-xl mx-auto text-center">
              Train, play, and book indoor cricket lanes at Crics 22Yards in Plain City, OH — serving Columbus, Dublin, Hilliard, Powell, Marysville, and nearby areas.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <YellowButton href="#register">Enroll now</YellowButton>
              <OutlineButton icon={Calendar} dark href="#book">Book a lane</OutlineButton>
            </div>
            <div className="h-px bg-white/20 mb-6 w-full max-w-xl mx-auto" />
            <div className="ty-body flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-white/90 text-sm">
              <a href="tel:+16149841453" className="flex items-center gap-2"><Phone size={15} style={{ color: YELLOW }} /> +1 614-984-1453</a>
              <span className="flex items-center gap-2"><MapPin size={15} style={{ color: YELLOW }} /> 9525 OH-161, Plain City, OH 43064 · Get directions</span>
              <span className="flex items-center gap-2"><Clock size={15} style={{ color: YELLOW }} /> Open daily 7 AM – 11 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ STATS STRIP ============================ */}
      <section className="relative z-10 -mt-1">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-b-xl overflow-hidden shadow-lg">
            {[
              ["12+", "Professional cricket lanes"],
              ["4+", "Expert coaches"],
              ["4+", "Advanced bowling machines"],
              ["2", "Indoor fields"],
            ].map(([num, label], i) => (
              <div key={label} className="text-center py-6 px-2" style={{ background: i % 2 === 1 ? "#DDEAF6" : "#F4F8FB" }}>
                <div className="ty-display text-3xl font-bold" style={{ color: NAVY }}>{num}</div>
                <div className="ty-body text-[11px] font-semibold uppercase tracking-wide mt-1" style={{ color: "#5B7A94" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ FUEL METHODOLOGY ============================ */}
      <section style={{ background: NAVY }} className="py-20 mt-8">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading eyebrow="Our coaching methodology" title="FUEL to your dreams"
            sub="Every session at 22 Yards runs on four principles that turn raw enthusiasm into real cricket ability." dark />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {fuelSteps.map((s) => (
              <div key={s.letter}>
                <div className="ty-display w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl mb-4" style={{ background: YELLOW, color: NAVY_DEEPER }}>{s.letter}</div>
                <div className="ty-display text-white font-semibold uppercase text-sm mb-2 tracking-wide">{s.title}</div>
                <p className="ty-body text-white/70 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="ty-display font-bold uppercase text-5xl md:text-7xl leading-none" style={{ color: YELLOW }}>FUEL</div>
            <div className="ty-display text-white font-semibold uppercase text-sm tracking-widest mt-2">To your dreams</div>
          </div>
        </div>
      </section>

      {/* ============================ QUOTE ============================ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="ty-body text-xl md:text-2xl font-medium leading-relaxed mb-4" style={{ color: NAVY }}>
            "Cricket is not just a sport for me; it's a way of life, it's a way of thinking, it's a way of seeing the world."
          </p>
          <span className="ty-body text-xs font-bold tracking-widest uppercase" style={{ color: "#9AAEC0" }}>— Sachin Tendulkar</span>
        </div>
      </section>

      {/* ============================ MORE THAN A GAME ============================ */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col h-full">
            <Eyebrow>Why cricket</Eyebrow>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4" style={{ color: NAVY }}>More than a game</h2>
            <p className="ty-body mb-6" style={{ color: "#5B7A94" }}>Parents don't just get a better cricketer. They get a more capable, more confident young person.</p>
            <div className="w-full mt-auto">
              <img src={crics1Img} alt="Why cricket - More than a game" className="w-full h-auto max-h-[480px] object-cover rounded-2xl shadow-sm" loading="lazy" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {whyCricket.map((f) => (
              <div key={f.title} className="border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ background: NAVY }}>
                  <f.icon size={20} color="#fff" />
                </div>
                <div className="ty-display font-semibold uppercase text-sm mb-2" style={{ color: NAVY }}>{f.title}</div>
                <p className="ty-body text-sm leading-relaxed" style={{ color: "#6B8399" }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ TRAINING FOR EVERY STAGE ============================ */}
      <section style={{ background: SKY_LIGHT }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Our programs" title="Training for every stage"
            sub="Every cricketer deserves the right coaching at the right stage — from a first grip on the bat to competitive match preparation." />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                age: "Ages 5–16", title: "Junior development", text: "Build strong fundamentals, confidence, discipline, teamwork, and a lifelong passion for cricket.",
                tags: ["Batting", "Bowling", "Fielding", "Game awareness", "Teamwork", "Discipline"], cta: "Explore junior program", img: IMG.juniorTraining
              },
              {
                age: "Ages 17+", title: "Senior high-performance", text: "Advanced technical, tactical, physical, and mental preparation for competitive cricket.",
                tags: ["Technical refinement", "Tactical awareness", "Fitness", "Mental conditioning", "Match preparation"], cta: "Explore high-performance", img: IMG.battingAction
              },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <Photo src={c.img} alt={c.title} className="h-56 w-full rounded-none" />
                <div className="p-7">
                  <span className="ty-body inline-block text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ background: YELLOW_SOFT, color: NAVY_DEEPER }}>{c.age}</span>
                  <h3 className="ty-display text-xl font-bold uppercase mb-2" style={{ color: NAVY }}>{c.title}</h3>
                  <p className="ty-body text-sm mb-4" style={{ color: "#6B8399" }}>{c.text}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {c.tags.map((t) => (
                      <span key={t} className="ty-body text-xs flex items-center gap-1 px-3 py-1 rounded-full" style={{ background: SKY_LIGHT, color: NAVY }}>
                        <Check size={12} /> {t}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="ty-body inline-flex items-center gap-2 text-sm font-bold uppercase" style={{ color: NAVY }}>{c.cta} <ArrowRight size={15} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ FIND THE RIGHT GROUP ============================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Group coaching" title="Find the right group"
            sub="Three groups, sorted by age and experience, so every player trains alongside cricketers at their own level." />
          <GroupCoachingCards />
          <ul className="ty-body flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-xs font-semibold" style={{ color: "#9AAEC0" }}>
            <li>Group coaching starts from age 5</li>
            <li>2 sessions per week · 4 hours total</li>
            <li>Indoor and outdoor training</li>
            <li>Sibling discounts may be available</li>
          </ul>
        </div>
      </section>

      {/* ============================ BUILT FOR SERIOUS CRICKET ============================ */}
      <section style={{ background: SKY_LIGHT }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Our facilities" title="Built for serious cricket"
            sub="Twelve professional lanes, advanced machines, and everything around them that turns a practice session into real improvement." />
          <div className="space-y-16">
            {facilities.map((f, i) => (
              <div key={f.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <Photo src={f.img} alt={f.title} className="h-64 w-full" />
                <div>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ background: YELLOW_SOFT }}>
                    <f.icon size={20} style={{ color: NAVY_DEEPER }} />
                  </div>
                  <div className="ty-display text-xs font-bold mb-1" style={{ color: "#B7C7D4" }}>{f.num}</div>
                  <h3 className="ty-display text-2xl font-bold uppercase mb-3" style={{ color: NAVY }}>{f.title}</h3>
                  <p className="ty-body" style={{ color: "#6B8399" }}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ YOUR LANE CTA ============================ */}
      <section id="book" style={{ background: NAVY }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow dark>Lane rental</Eyebrow>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase text-white leading-tight mb-4">Your lane. Your session.<br />Your game.</h2>
            <p className="ty-body text-white/80 mb-6">Professional indoor cricket lanes available for individuals, teams, and practice groups.</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8 text-white/90">
              <CheckItem color={YELLOW}>12+ professional cricket lanes</CheckItem>
              <CheckItem color={YELLOW}>4+ advanced bowling machines</CheckItem>
              <CheckItem color={YELLOW}>Gabba nets</CheckItem>
              <CheckItem color={YELLOW}>Flexible hourly booking</CheckItem>
              <CheckItem color={YELLOW}>Climate-controlled indoor environment</CheckItem>
              <CheckItem color={YELLOW}>Open daily, 7 AM – 11 PM</CheckItem>
            </ul>
            <YellowButton icon={Calendar}>Book a lane</YellowButton>
          </div>
          <Photo src={IMG.laneEmpty} alt="Professional indoor cricket lane at 22 Yards Dallas" className="h-80 w-full" />
        </div>
      </section>

      {/* ============================ TRAIN WITHOUT LIMITS ============================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Why train indoors</Eyebrow>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-4" style={{ color: NAVY }}>Train without limits</h2>
            <p className="ty-body mb-6" style={{ color: "#5B7A94" }}>Texas weather shouldn't decide when you train. A controlled indoor environment means every session counts.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Practice consistently, week after week",
                "Improve technique with instant feedback",
                "Train year-round in any weather",
                "Use professional bowling machines",
                "Work on specific, targeted skills",
                "Practice with your teammates",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 rounded-xl p-4" style={{ background: SKY_LIGHT }}>
                  <CheckCircle2 size={18} style={{ color: NAVY, flexShrink: 0, marginTop: 1 }} />
                  <span className="ty-body text-sm" style={{ color: NAVY_DEEPER }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <Photo src={IMG.seniorNets} alt="Indoor training session at 22 Yards Dallas" className="h-96 w-full" />
        </div>
      </section>

      {/* ============================ MEET THE COACHES ============================ */}
      <section style={{ background: SKY_LIGHT }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Eyebrow>Trained by the best</Eyebrow>
              <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-3" style={{ color: NAVY }}>Meet the coaches</h2>
              <p className="ty-body max-w-md" style={{ color: "#5B7A94" }}>Experienced coaches who have played the game at a high level and know how to pass it on.</p>
            </div>
            <OutlineButton icon={ArrowRight}>Meet the full team</OutlineButton>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map((c) => (
              <div key={c.role} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 w-full flex flex-col items-center justify-center gap-1" style={{ background: "#E1EBF4", color: "#8CA6BC" }}>
                  <Users size={26} />
                  <span className="ty-body text-[11px] font-semibold uppercase tracking-wide">Coach portrait</span>
                </div>
                <div className="p-5">
                  <div className="ty-display font-bold uppercase text-sm" style={{ color: NAVY }}>Coach name</div>
                  <div className="ty-body text-xs font-semibold mt-1" style={{ color: "#9AAEC0" }}>{c.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ TESTIMONIALS ============================ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Eyebrow>Reviews</Eyebrow>
          <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-4" style={{ color: NAVY }}>Trusted by players. Loved by families.</h2>
          <p className="ty-body mb-12" style={{ color: "#5B7A94" }}>What Dallas cricket families say after a season at 22 Yards.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl border border-gray-100 p-6 text-left shadow-sm">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, s) => <Star key={s} size={14} fill={YELLOW} color={YELLOW} />)}</div>
                <p className="ty-body text-sm italic mb-5" style={{ color: "#6B8399" }}>"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: SKY_LIGHT, color: NAVY }}>{t.name[0]}</div>
                  <div>
                    <div className="ty-body text-sm font-bold" style={{ color: NAVY }}>{t.name}</div>
                    <div className="ty-body text-xs" style={{ color: "#9AAEC0" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ SPECIAL EVENTS ============================ */}
      <section style={{ background: SKY_LIGHT }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Special events" title="Play hard. Celebrate big."
            sub="Birthdays, corporate days out, and competitive tournaments — hosted on professional lanes with room for everyone." />
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((e) => (
              <div key={e.title} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <Photo src={e.img} alt={e.title} className="h-44 w-full rounded-none" />
                <div className="p-6">
                  <h3 className="ty-display font-bold uppercase text-sm mb-2" style={{ color: NAVY }}>{e.title}</h3>
                  <p className="ty-body text-sm" style={{ color: "#6B8399" }}>{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ MEZZANINE LOUNGE ============================ */}
      <section style={{ background: NAVY }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Photo src={IMG.mezzanineLounge} alt="Mezzanine lounge overlooking the cricket lanes" className="h-80 w-full" />
          <div>
            <Eyebrow dark>Mezzanine lounge</Eyebrow>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase text-white leading-tight mb-4">Take the party above the game.</h2>
            <p className="ty-body text-white/80 mb-6">A premium private space for celebrations, corporate gatherings, and special events — with lounge seating and a view of the action below.</p>
            <ul className="space-y-3 mb-8">
              <CheckItem color={YELLOW}>Private upstairs lounge</CheckItem>
              <CheckItem color={YELLOW}>Overlooks the cricket lanes</CheckItem>
              <CheckItem color={YELLOW}>Lounge seating</CheckItem>
              <CheckItem color={YELLOW}>Ideal for birthdays and corporate events</CheckItem>
            </ul>
            <YellowButton icon={Phone} href="tel:+16149841453">Host your event</YellowButton>
          </div>
        </div>
      </section>

      {/* ============================ GALLERY ============================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <Eyebrow>Gallery</Eyebrow>
              <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-3" style={{ color: NAVY }}>Inside 22 Yards Dallas</h2>
              <p className="ty-body" style={{ color: "#5B7A94" }}>Training, players, coaches, the facility, and the events we host.</p>
            </div>
            <OutlineButton icon={ArrowRight}>View full gallery</OutlineButton>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => <Photo key={i} src={g.src} alt={g.alt} className="h-40 w-full" />)}
          </div>
        </div>
      </section>

      {/* ============================ REGISTRATION ============================ */}
      <section id="register" style={{ background: NAVY }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow dark>Registration</Eyebrow>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase text-white leading-tight mb-4">Ready to take the next step?</h2>
            <p className="ty-body text-white/80 mb-6 max-w-md">Whether your player is picking up a bat for the first time or preparing for competitive cricket, there's a place for them at 22 Yards Dallas.</p>
            <div className="h-px bg-white/15 mb-6 max-w-sm" />
            <div className="ty-body text-white/70 text-sm mb-2">Prefer to talk it through?</div>
            <div className="flex flex-wrap items-center gap-4 text-white font-bold">
              <a href="tel:+16149841453" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: YELLOW }}><Phone size={14} color={NAVY_DEEPER} /></span>
                +1 614-984-1453
              </a>
              <span className="text-white/40">|</span>
              <a href="tel:+17134982155" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: YELLOW }}><Phone size={14} color={NAVY_DEEPER} /></span>
                (713) 498-2155
              </a>
            </div>
          </div>

          {regSubmitted ? (
            <div className="bg-emerald-500/20 border border-emerald-400 text-white rounded-2xl p-8 text-center ty-body">
              <h3 className="text-xl font-bold mb-2">Registration Submitted Successfully!</h3>
              <p className="text-sm opacity-90">Thank you for registering. Our team at Crics 22Yards Columbus will contact you shortly.</p>
            </div>
          ) : (
            <form className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/10" onSubmit={handleRegSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">First name *</label>
                  <input required value={regForm.firstName} onChange={handleRegChange("firstName")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none text-gray-800" placeholder="First name" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">Last name *</label>
                  <input required value={regForm.lastName} onChange={handleRegChange("lastName")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none text-gray-800" placeholder="Last name" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">Phone</label>
                  <input type="tel" value={regForm.phone} onChange={handleRegChange("phone")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none text-gray-800" placeholder="(614) 984-1453" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">Email *</label>
                  <input type="email" required value={regForm.email} onChange={handleRegChange("email")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none text-gray-800" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">Age group</label>
                  <select value={regForm.ageGroup} onChange={handleRegChange("ageGroup")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none text-gray-800">
                    <option>Select a group</option>
                    <option>U11 — Basic</option>
                    <option>U13 — Intermediate</option>
                    <option>U15 — Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">Program</label>
                  <select value={regForm.program} onChange={handleRegChange("program")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none text-gray-800">
                    <option>Select a program</option>
                    <option>Junior development (Ages 5–16)</option>
                    <option>Senior high-performance (Ages 17+)</option>
                  </select>
                </div>
              </div>
              <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">Notes</label>
              <textarea value={regForm.notes} onChange={handleRegChange("notes")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none mb-5 text-gray-800" rows={3} placeholder="Anything we should know about your player?" />
              <button type="submit" disabled={regLoading} className="ty-body w-full rounded-full py-3 text-sm font-bold uppercase tracking-wide cursor-pointer transition-transform hover:scale-[1.01]" style={{ background: YELLOW, color: NAVY_DEEPER }}>
                {regLoading ? "Submitting..." : "Register now"}
              </button>
              <div className="ty-body text-center text-white/60 text-xs mt-3">We'll get back to you within 24 hours.</div>
            </form>
          )}
        </div>
      </section>

      {/* ============================ PROSHOP ============================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>ProShop</Eyebrow>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-4" style={{ color: NAVY }}>Kit up. Play your best.</h2>
            <p className="ty-body mb-6" style={{ color: "#5B7A94" }}>Bats, pads, gloves, shoes, and team gear — everything you need, picked by coaches who use it every day.</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Bats", "Protective gear", "Footwear", "Balls", "Team kit", "Accessories"].map((t) => <Pill key={t}>{t}</Pill>)}
            </div>
            <a href="#" className="ty-body inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide" style={{ background: NAVY, color: "#fff" }}>
              <ShoppingBag size={16} /> Shop now
            </a>
          </div>
          <Photo src={IMG.cricketEquipment} alt="ProShop at 22 Yards Dallas" className="h-72 w-full" />
        </div>
      </section>

      {/* ============================ FRANCHISE ============================ */}
      <section style={{ background: YELLOW }} className="py-16 relative overflow-hidden">
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-30" style={{ background: "#fff" }} />
        <div className="max-w-6xl mx-auto px-6 relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <span className="ty-body text-xs font-bold tracking-widest uppercase" style={{ color: NAVY_DEEPER }}>Franchise opportunity</span>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mt-2 mb-4" style={{ color: NAVY_DEEPER }}>Own the next cricket destination.</h2>
            <p className="ty-body mb-6 max-w-lg" style={{ color: "#3B5C7A" }}>Build your own Super Kings Academy with a proven indoor cricket academy model backed by the experience and results of 22 Yards Dallas.</p>
            <div className="flex gap-10">
              {[["4.9★", "Google rating"], ["200+", "Reviews"], ["2,000+", "Monthly organic visitors"]].map(([n, l]) => (
                <div key={l}>
                  <div className="ty-display text-2xl font-bold" style={{ color: NAVY_DEEPER }}>{n}</div>
                  <div className="ty-body text-[11px] font-semibold uppercase" style={{ color: "#3B5C7A" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:justify-self-end">
            <OutlineButton icon={ArrowRight}>Explore franchise opportunity</OutlineButton>
          </div>
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <SiteFooter />
      {false && <footer style={{ background: NAVY_DEEPER }} className="text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="ty-display w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-white" style={{ color: NAVY_DEEPER }}>22</div>
              <div className="leading-tight ty-display">
                <div className="font-bold tracking-wide">22 YARDS</div>
                <div className="text-[10px] font-semibold tracking-[0.2em]" style={{ color: YELLOW }}>DALLAS</div>
              </div>
            </div>
            <p className="ty-body text-white/60 text-sm mb-5">Professional indoor cricket training, lane rentals, and high-performance coaching built for players at every stage.</p>
            <ul className="ty-body space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 flex-shrink-0" /> 2601 E State Hwy 121 Business, Lewisville, TX 75056</li>
              <li className="flex items-center gap-2"><Phone size={15} /> +1 614-984-1453</li>
              <li className="flex items-center gap-2"><Phone size={15} /> +1 (713) 498-2155</li>
              <li className="flex items-center gap-2"><Mail size={15} /> contact@22yardsdallas.com</li>
              <li className="flex items-center gap-2"><Clock size={15} /> 7:00 AM – 11:00 PM daily</li>
            </ul>
          </div>

          <div>
            <div className="ty-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: YELLOW }}>Explore</div>
            <ul className="ty-body space-y-2.5 text-sm text-white/75">
              {["Home", "About Us", "Our Team", "Coaching", "Lane Rental"].map((l) => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>

          <div>
            <div className="ty-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: YELLOW }}>More</div>
            <ul className="ty-body space-y-2.5 text-sm text-white/75">
              {["Special Events", "Gallery", "Store", "Franchise", "FAQs", "Contact Us"].map((l) => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>

          <div>
            <div className="ty-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: YELLOW }}>Newsletter</div>
            <p className="ty-body text-sm text-white/70 mb-4">Sign up for updates, events, and academy news.</p>
            <div className="flex rounded-full overflow-hidden mb-5">
              <input placeholder="Email address" className="ty-body flex-1 px-4 py-2.5 text-sm text-gray-800 outline-none" />
              <button className="ty-body px-4 text-xs font-bold uppercase" style={{ background: YELLOW, color: NAVY_DEEPER }}>Sign up</button>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10"><Instagram size={16} /></a>
            </div>
          </div>
        </div>

        <div className="ty-body max-w-7xl mx-auto px-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap gap-5">
            {["Privacy Policy", "Terms & Conditions", "Disclaimer", "Waiver & Cancellations"].map((l) => <a key={l} href="#">{l}</a>)}
          </div>
          <div>© 2026 22 Yards Dallas. All rights reserved. Designed and managed by Margam360</div>
        </div>
      </footer>}
    </div>
  );
}
