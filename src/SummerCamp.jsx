import { useState } from "react";
import SiteHeader from "./SiteHeader";

const COLORS = {
  navy: "#0A5DA6",
  navyDark: "#053A68",
  cyan: "#0D9AB7",
  green: "#0A5DA6",
  background: "#EEF8FD",
  border: "#CFE8F4",
  text: "#0D4267",
  muted: "#5B7890",
};

export default function SummerCamp() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
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
            name: form.fullName,
            email: form.email,
            to_email: form.email,
            reply_to: form.email,
            phone: form.phone,
            message: `Phone: ${form.phone || 'N/A'}\nPlan: Summer Camp 2026 Weekly ($200.00)\n\nNotes:\n${form.message || 'No additional message provided.'}`,
            title: "Summer Camp 2026 Weekly ($200.00)",
          },
        }),
      });
      setSubmitted(true);
      setForm({ fullName: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: COLORS.background, color: COLORS.text, fontFamily: "Inter, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Oswald:wght@400;500;600;700&display=swap');
        .sc-display { font-family: 'Oswald', sans-serif; }
        .sc-nav-link { position: relative; white-space: nowrap; }
        .sc-nav-link.active::after { content: ''; position: absolute; left: 0; right: 0; bottom: -7px; height: 2px; background: #E9D222; }
        .sc-input:focus { outline: none; border-color: ${COLORS.cyan}; box-shadow: 0 0 0 3px rgba(13,154,183,0.12); }
      `}</style>

      {/* ============================ HEADER ============================ */}
      <SiteHeader activePage="SUMMER CAMP" />

      <main style={{ maxWidth: 560, margin: "0 auto", padding: "34px 20px 28px" }}>
        <section style={{ background: "#fff", border: `1px solid ${COLORS.border}`, borderLeft: `4px solid ${COLORS.cyan}`, borderRadius: 15, padding: "28px 26px 34px", boxShadow: "0 5px 18px rgba(13,66,103,0.05)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
            <h1 className="sc-display" style={{ margin: 0, color: COLORS.text, fontSize: 25, lineHeight: 1.2, fontWeight: 700 }}>Summer Camp 2026 Weekly</h1>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <strong style={{ display: "block", color: COLORS.green, fontSize: 27, lineHeight: 1 }}>$200.00</strong>
              <small style={{ color: COLORS.navy, fontSize: 11 }}>per 1 month</small>
            </div>
          </div>
          <div style={{ marginTop: 26, width: 245, border: `1px solid ${COLORS.border}`, borderRadius: 6, padding: "12px 10px", background: "#F5FBFE" }}>
            <strong style={{ display: "block", color: COLORS.cyan, fontSize: 13 }}>1 month</strong>
            <small style={{ color: COLORS.cyan, fontSize: 11 }}>Duration</small>
          </div>
        </section>

        <section id="summer-camp-form" style={{ marginTop: 16, background: "#fff", border: `1px solid ${COLORS.border}`, borderRadius: 15, padding: "25px 22px 22px", boxShadow: "0 5px 18px rgba(13,66,103,0.04)" }}>
          <h2 className="sc-display" style={{ margin: "0 0 20px", color: COLORS.text, fontSize: 17, fontWeight: 700 }}>Enquire About This Plan</h2>
          {submitted ? (
            <div style={{ padding: "18px", borderRadius: 8, background: "#ECFDF5", border: "1px solid #10B981", color: "#065F46", fontSize: 13, textAlign: "center", fontWeight: 600 }}>
              ✓ Enquiry submitted successfully! Our team at Crics 22Yards Columbus will contact you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <Field label="Full Name *">
                <input required value={form.fullName} onChange={handleChange("fullName")} className="sc-input" style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: `1px solid ${COLORS.border}`, fontSize: 13, boxSizing: "border-box" }} placeholder="Your full name" />
              </Field>
              <Field label="Email *">
                <input required type="email" value={form.email} onChange={handleChange("email")} className="sc-input" style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: `1px solid ${COLORS.border}`, fontSize: 13, boxSizing: "border-box" }} placeholder="your@email.com" />
              </Field>
              <Field label="Phone">
                <input type="tel" value={form.phone} onChange={handleChange("phone")} className="sc-input" style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: `1px solid ${COLORS.border}`, fontSize: 13, boxSizing: "border-box" }} placeholder="+1 555 000 0000" />
              </Field>
              <Field label="Message (optional)">
                <textarea value={form.message} onChange={handleChange("message")} className="sc-input" style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: `1px solid ${COLORS.border}`, fontSize: 13, boxSizing: "border-box" }} placeholder="Any questions or special requirements?" rows={4} />
              </Field>
              <button type="submit" disabled={loading} style={{ width: "100%", border: 0, borderRadius: 7, padding: "12px 16px", background: COLORS.green, color: "#fff", fontWeight: 800, fontSize: 13, cursor: "pointer" }}>
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </section>
      </main>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 20px 28px", textAlign: "center", color: "#57A8D2", fontSize: 9 }}>Powered by GURUKRUPA SPORTS LLC &amp; LIKES TECH LLC</div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: "block", marginBottom: 14, color: COLORS.navy, fontSize: 11, fontWeight: 700 }}>
      {label}
      <span style={{ display: "block", marginTop: 6 }}>{children}</span>
    </label>
  );
}
