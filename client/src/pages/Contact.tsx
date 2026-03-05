/* Contact.tsx */
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, CheckCircle, Send, Shield } from "lucide-react";

const TEAM_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663405856970/VMX2oirNaVBBf73TmR5SdG/team-photo-7fLbKQFaG3XezRQmwujAsr.webp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", address: "", service: "", urgency: "standard", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-[#0B1F3A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="container relative">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#F59E0B]/20 border-l-4 border-[#F59E0B] px-4 py-1 mb-4">
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F59E0B" }}>
                Get Help Now
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", textTransform: "uppercase", color: "white", lineHeight: 1.0 }}>
              Contact Us for<br />
              <span style={{ color: "#F59E0B" }}>Free</span><br />
              Inspection
            </h1>
            <p className="mt-4 text-white/65 text-lg" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              We respond within 30 minutes. For emergencies, call us directly at (800) 724-3847.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.8rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "1.5rem" }}>
                Contact Information
              </h2>
              <div className="flex flex-col gap-5 mb-8">
                {[
                  { icon: Phone, label: "Emergency Line", value: "(800) 724-3847", href: "tel:+12232088501" },
                  { icon: Mail, label: "Email", value: "info@moldguardpro.com", href: "mailto:info@moldguardpro.com" },
                  { icon: Clock, label: "Hours", value: "24/7 — 365 Days a Year", href: null },
                  { icon: MapPin, label: "Coverage", value: "Nationwide Service", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#F59E0B] rounded-sm flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#0B1F3A]" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.75rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#0B1F3A" }} className="hover:text-[#F59E0B] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#0B1F3A" }}>
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#0B1F3A] text-white p-5 rounded-sm mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-[#F59E0B]" />
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", textTransform: "uppercase", color: "#F59E0B" }}>
                    Our Promise
                  </h3>
                </div>
                {["Free inspection — no obligation", "Response within 30 minutes", "Written estimate before work begins", "Insurance claim assistance", "Written mold-free guarantee"].map((item) => (
                  <div key={item} className="flex items-center gap-2 py-1.5 border-b border-white/10 last:border-0">
                    <CheckCircle className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                    <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <img src={TEAM_PHOTO} alt="Our team" className="w-full rounded-sm object-cover" style={{ maxHeight: "180px" }} />
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 border border-green-200 bg-green-50 rounded-sm"
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-5" />
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "0.75rem" }}>
                    Request Received!
                  </h2>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#4B5563", fontSize: "1rem", maxWidth: "400px", margin: "0 auto 1.5rem" }}>
                    Our team will contact you within 30 minutes. For immediate emergencies, call us directly.
                  </p>
                  <a href="tel:+12232088501" className="btn-amber text-base py-3 px-8 inline-flex">
                    <Phone className="w-5 h-5" />
                    Call (800) 724-3847
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="border border-gray-100 p-8 shadow-sm">
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.8rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "1.5rem" }}>
                    Request Free Inspection
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {[
                      { label: "Full Name *", key: "name", type: "text", placeholder: "John Smith", required: true },
                      { label: "Phone Number *", key: "phone", type: "tel", placeholder: "(555) 000-0000", required: true },
                      { label: "Email Address", key: "email", type: "email", placeholder: "john@example.com", required: false },
                      { label: "Property Address", key: "address", type: "text", placeholder: "123 Main St, City, State", required: false },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                          {field.label}
                        </label>
                        <input
                          required={field.required}
                          type={field.type}
                          value={(formData as any)[field.key]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0B1F3A] transition-colors rounded-sm"
                          placeholder={field.placeholder}
                          style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0B1F3A] transition-colors rounded-sm bg-white"
                        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        <option value="">Select a service...</option>
                        <option value="inspection">Mold Inspection</option>
                        <option value="removal">Mold Removal</option>
                        <option value="black-mold">Black Mold Removal</option>
                        <option value="attic">Attic Mold Removal</option>
                        <option value="basement">Basement Mold Removal</option>
                        <option value="water-damage">Water Damage Restoration</option>
                        <option value="commercial">Commercial Remediation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        Urgency Level
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0B1F3A] transition-colors rounded-sm bg-white"
                        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        <option value="emergency">Emergency — Need help today</option>
                        <option value="urgent">Urgent — Within 24–48 hours</option>
                        <option value="standard">Standard — Within a week</option>
                        <option value="quote">Just getting a quote</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      Describe the Problem
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0B1F3A] transition-colors rounded-sm resize-none"
                      placeholder="Describe what you're seeing — visible mold, musty smell, recent water damage, health symptoms, etc."
                      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                    />
                  </div>

                  <button type="submit" className="btn-amber w-full justify-center py-3.5 text-base">
                    <Send className="w-5 h-5" />
                    Submit Free Inspection Request
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    We respond within 30 minutes. For emergencies, call (800) 724-3847 directly.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
