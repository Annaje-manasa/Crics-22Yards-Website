import React, { useState } from "react";
import SiteFooter from "./SiteFooter";

const NAVY = "#0A5DA6";
const NAVY_DEEPER = "#053a68";
const YELLOW = "#E9D222";

export default function RegistrationFormPage() {
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

  return (
    <div className="w-full min-h-screen bg-[#0A5DA6]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Oswald:wght@400;500;600;700&display=swap');
        .ty-display { font-family: 'Oswald', sans-serif; }
        .ty-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Clean Branding Bar (No Top Utility Bar or Nav Links) */}
      <div className="bg-white py-4 px-8 flex items-center justify-between border-b border-gray-200">
        <a href="#" className="flex items-center gap-2.5 text-none no-underline">
          <div className="w-10 h-10 bg-[#0A5DA6] text-[#F6C915] rounded-lg flex items-center justify-center font-extrabold text-base ty-display">
            22
          </div>
          <div className="leading-tight">
            <div className="font-bold text-base text-[#0A5DA6] tracking-wide ty-display">CRICS 22 YARDS</div>
            <div className="text-[10px] tracking-[0.2em] text-[#9AAEC0] font-semibold ty-body">COLUMBUS</div>
          </div>
        </a>
      </div>

      {/* Standalone Registration Form */}
      <section className="py-16 min-h-[85vh] flex items-center">
        <div className="max-w-2xl mx-auto px-6 w-full">
          <div className="text-center mb-10">
            <div className="ty-body flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase mb-3 text-[#E9D222]">
              <span className="inline-block w-6 h-[2px] bg-[#E9D222]" />
              Get started
            </div>
            <h1 className="ty-display text-3xl md:text-4xl font-bold uppercase text-white mb-3">
              Register For The Academy
            </h1>
            <p className="ty-body text-white/75 text-sm md:text-base">
              Fill out the form below and our team will reach out with next steps to enroll in the Super Kings Academy at Crics 22Yards Columbus.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-500/20 border border-emerald-400 text-white rounded-2xl p-8 text-center ty-body">
              <h3 className="text-xl font-bold mb-2">Registration Submitted Successfully!</h3>
              <p className="text-sm opacity-90">Thank you for registering. Our team at Crics 22Yards Columbus will contact you shortly.</p>
            </div>
          ) : (
            <form className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/10" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">First Name *</label>
                  <input required value={form.firstName} onChange={handleChange("firstName")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none text-gray-800" placeholder="First Name" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">Last Name *</label>
                  <input required value={form.lastName} onChange={handleChange("lastName")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none text-gray-800" placeholder="Last Name" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">Email *</label>
                  <input type="email" required value={form.email} onChange={handleChange("email")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none text-gray-800" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">Phone</label>
                  <input type="tel" value={form.phone} onChange={handleChange("phone")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none text-gray-800" placeholder="(614) 984-1453" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">Gender</label>
                  <select value={form.gender} onChange={handleChange("gender")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none text-gray-800">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">Activity</label>
                  <input value={form.activity} onChange={handleChange("activity")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none text-gray-800" placeholder="Super Kings Academy" />
                </div>
              </div>
              <label className="ty-body block text-xs font-bold uppercase text-white/70 mb-1.5">Notes</label>
              <textarea value={form.notes} onChange={handleChange("notes")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none mb-5 text-gray-800" rows={3} placeholder="Any special notes or requests..." />
              <button type="submit" disabled={loading} className="ty-body w-full rounded-full py-3.5 text-sm font-bold uppercase tracking-wide cursor-pointer transition-transform hover:scale-[1.01]" style={{ background: YELLOW, color: NAVY_DEEPER }}>
                {loading ? "Submitting..." : "Submit Registration"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
