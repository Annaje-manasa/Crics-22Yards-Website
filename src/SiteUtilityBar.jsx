import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function SiteUtilityBar() {
  const mapUrl = "https://www.google.com/maps/place/9525+OH-161,+Plain+City,+OH+43064,+USA/@40.1039382,-83.2207801,17z/data=!3m1!4b1!4m6!3m5!1s0x88389531a698b12b:0x8a55252cf1556c4!8m2!3d40.1039382!4d-83.2207801!16s%2Fg%2F11sb39l3wv?entry=tts&g_ep=EgoyMDI2MDQxMi4wIPu8ASoASAFQAw%3D%3D&skid=1c5e4a3a-e2b5-4272-8b8a-7341824c1ab6";
  const facebookUrl = "https://www.facebook.com/people/Crics-22Yards-Columbus/61577612886478/";
  const instagramUrl = "https://www.instagram.com/crics22yardscolumbus?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D";

  return (
    <div
      className="block text-white border-b border-white/10"
      style={{
        background: "#0A5DA6",
        color: "#ffffff",
        fontSize: "11px",
        fontFamily: "'Inter', sans-serif",
        lineHeight: "1.5",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .subar-link {
          color: #ffffff !important;
          text-decoration: none !important;
          transition: color 0.15s ease !important;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          white-space: nowrap;
        }
        .subar-link-bold {
          color: #ffffff !important;
          text-decoration: none !important;
          transition: color 0.15s ease !important;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          white-space: nowrap;
        }
        .subar-link:hover, .subar-link-bold:hover {
          color: #F6C915 !important;
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 opacity-95">
          <a href={mapUrl} className="subar-link">
            <MapPin size={12} /> 9525 OH-161, Plain City, OH 43064
          </a>
          <a href="mailto:contact@crics22yards.com" className="subar-link">
            <Mail size={12} /> contact@crics22yards.com
          </a>
          <a href={facebookUrl} className="subar-link">
            <Facebook size={12} /> Facebook
          </a>
          <a href={instagramUrl} className="subar-link">
            <Instagram size={12} /> Instagram
          </a>
        </div>
        <div className="flex items-center gap-3 font-semibold">
          <a href="tel:+16149841453" className="subar-link-bold">
            <Phone size={12} /> +1 614-984-1453
          </a>
          <span style={{ fontSize: "11px", opacity: 0.7 }}>|</span>
          <a href="tel:+17134982155" className="subar-link-bold">
            (713) 498-2155
          </a>
        </div>
      </div>
    </div>
  );
}
