/* Home.tsx
 * Design: Industrial Safety Meets Clinical Precision
 * - Deep navy (#0B1F3A) + amber (#F59E0B) + white
 * - Barlow Condensed headings + Source Sans 3 body
 * - Asymmetric hero, diagonal section cuts
 * Sections: Hero, Mold Risk Indicators, Services, Process, Testimonials, Certifications, Contact Form
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Calendar, CheckCircle, AlertTriangle, Droplets, Wind, Eye,
  Home as HomeIcon, Building2, Star, MapPin, ArrowRight, Shield,
  Thermometer, Clock, Award, Send
} from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663405856970/VMX2oirNaVBBf73TmR5SdG/hero-bg-5bagSkA6jQYg8vjVjwoa3P.webp";
const TEAM_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663405856970/VMX2oirNaVBBf73TmR5SdG/team-photo-7fLbKQFaG3XezRQmwujAsr.webp";

const moldRisks = [
  { icon: Wind, label: "Musty Smell", desc: "Persistent odors even after cleaning may indicate hidden mold colonies behind walls or under floors." },
  { icon: Eye, label: "Visible Black Spots", desc: "Dark patches on walls, ceilings, or grout lines are a clear sign of active mold growth." },
  { icon: Thermometer, label: "Allergy Symptoms", desc: "Unexplained sneezing, coughing, or respiratory issues that improve when you leave home." },
  { icon: Droplets, label: "Water Damage History", desc: "Any past flooding, leaks, or moisture intrusion creates ideal conditions for mold within 24–48 hours." },
  { icon: HomeIcon, label: "Basement Humidity", desc: "Humidity above 60% in basements or crawl spaces accelerates mold growth significantly." },
  { icon: AlertTriangle, label: "Peeling Paint / Wallpaper", desc: "Bubbling or peeling paint often signals moisture trapped behind walls — a prime mold breeding ground." },
];

const services = [
  { title: "Mold Inspection", desc: "Comprehensive assessment using moisture meters, thermal imaging, and air quality testing to locate all mold sources.", href: "/mold-inspection", icon: Eye },
  { title: "Black Mold Removal", desc: "Safe removal of toxic Stachybotrys chartarum using HEPA filtration and EPA-approved antimicrobial treatments.", href: "/services#black-mold", icon: AlertTriangle },
  { title: "Attic Mold Removal", desc: "Specialized attic remediation addressing roof leaks, inadequate ventilation, and insulation contamination.", href: "/services#attic-mold", icon: HomeIcon },
  { title: "Basement Mold Removal", desc: "Complete basement and crawl space remediation with moisture barriers and dehumidification systems.", href: "/services#basement-mold", icon: Droplets },
  { title: "Water Damage Restoration", desc: "Emergency water extraction, structural drying, and mold prevention within the critical 24–48 hour window.", href: "/services#water-damage", icon: Wind },
  { title: "Commercial Remediation", desc: "Minimal-disruption commercial mold remediation for offices, retail spaces, and multi-unit properties.", href: "/services#commercial", icon: Building2 },
];

const processSteps = [
  { num: "01", title: "Inspection & Assessment", desc: "Thorough evaluation of all affected areas using advanced moisture detection and air sampling equipment." },
  { num: "02", title: "Containment", desc: "Negative air pressure containment barriers prevent mold spores from spreading to unaffected areas." },
  { num: "03", title: "Air Filtration", desc: "Industrial HEPA air scrubbers remove airborne mold spores and particulates from the environment." },
  { num: "04", title: "Mold Removal", desc: "Physical removal of contaminated materials using EPA-approved antimicrobial treatments and HEPA vacuuming." },
  { num: "05", title: "Cleaning & Sanitization", desc: "All surfaces are cleaned, sanitized, and treated to prevent future mold growth." },
  { num: "06", title: "Drying & Dehumidification", desc: "Industrial dehumidifiers and air movers eliminate residual moisture — the root cause of mold." },
  { num: "07", title: "Restoration & Repairs", desc: "Full structural repairs and restoration to return your property to pre-mold condition." },
];

const testimonials = [
  {
    name: "Robert K.",
    location: "State College, PA",
    rating: 5,
    text: "Found mold in our basement after a water leak. ZND-ABS came out quickly, assessed the damage, and handled the remediation professionally. Great service and fair pricing.",
    source: "Google",
  },
  {
    name: "Jennifer L.",
    location: "State College, PA",
    rating: 5,
    text: "We had mold in our attic that we didn't even know about. The team was thorough, explained everything clearly, and got the job done right. Highly recommend for State College area.",
    source: "Local",
  },
  {
    name: "David M.",
    location: "State College, PA",
    rating: 5,
    text: "Professional, reliable, and honest. They didn't try to upsell us on unnecessary work. Just fixed the problem and made sure it won't come back. Will definitely call them again if needed.",
    source: "Google",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/92 via-[#0B1F3A]/75 to-[#0B1F3A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 via-transparent to-transparent" />

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 border border-[#F59E0B]/40 rounded-sm px-3 py-1.5 mb-5">
                <span className="emergency-dot" />
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#F59E0B" }}>
                  24/7 Emergency Response Available
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 1.0, textTransform: "uppercase", color: "white", letterSpacing: "0.01em" }}
            >
              Mold Removal<br />
              <span style={{ color: "#F59E0B" }}>in State College</span><br />
              PA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 text-white/80 text-lg leading-relaxed max-w-lg"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Professional mold remediation and inspection services available 24/7. Free inspection, licensed and insured. Mold develops within 24–48 hours after water damage — don't wait.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="tel:+18005550199" className="btn-amber text-base py-3 px-6">
                <Phone className="w-5 h-5" />
                Call Now — Free
              </a>
              <Link href="/contact">
                <span className="btn-white-outline text-base py-3 px-6">
                  <Calendar className="w-5 h-5" />
                  Schedule Inspection
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {["Free Inspection", "Licensed & Insured", "24/7 Emergency", "Guaranteed Work"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#F59E0B]" />
                  <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "rgba(255,255,255,0.85)" }}>
                    {badge}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Diagonal bottom cut */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* ─── MOLD RISK INDICATORS ─── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container">
          <div className="relative mb-12">
            <span className="section-number">01</span>
            <div className="inline-block bg-[#F59E0B]/10 border-l-4 border-[#F59E0B] px-4 py-1 mb-3">
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F59E0B" }}>
                Warning Signs
              </span>
            </div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", textTransform: "uppercase", color: "#0B1F3A" }}>
              Do You Have Mold<br />In Your Home?
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem" }}>
              Mold can develop within 24–48 hours after water damage. Recognize these warning signs before the problem spreads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {moldRisks.map((risk, i) => (
              <motion.div
                key={risk.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group border border-gray-100 bg-white p-6 hover:border-[#F59E0B]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 bg-[#0B1F3A] rounded-sm flex items-center justify-center mb-4 group-hover:bg-[#F59E0B] transition-colors">
                  <risk.icon className="w-5 h-5 text-white group-hover:text-[#0B1F3A] transition-colors" />
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "0.5rem" }}>
                  {risk.label}
                </h3>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.6 }}>
                  {risk.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-5 bg-red-50 border border-red-200 rounded-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
            <div>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#991B1B" }}>
                Mold Spreads Fast — Act Within 24–48 Hours
              </p>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: "#7F1D1D" }}>
                If you notice any of these signs, call us immediately for a free inspection. Early intervention prevents costly structural damage.
              </p>
            </div>
            <a href="tel:+18005550199" className="btn-amber flex-shrink-0 text-sm py-2.5">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 bg-[#F8F9FA] relative overflow-hidden">
        <div className="container">
          <div className="relative mb-12">
            <span className="section-number">02</span>
            <div className="inline-block bg-[#F59E0B]/10 border-l-4 border-[#F59E0B] px-4 py-1 mb-3">
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F59E0B" }}>
                Our Services
              </span>
            </div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", textTransform: "uppercase", color: "#0B1F3A" }}>
              Complete Mold<br />Remediation Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={service.href}>
                  <div className="group bg-white border border-gray-100 p-6 hover:border-[#0B1F3A]/30 hover:shadow-xl transition-all duration-300 h-full cursor-pointer">
                    <div className="w-11 h-11 bg-[#F59E0B] rounded-sm flex items-center justify-center mb-4">
                      <service.icon className="w-5 h-5 text-[#0B1F3A]" />
                    </div>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "0.5rem" }}>
                      {service.title}
                    </h3>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.6, marginBottom: "1rem" }}>
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-1 text-[#F59E0B] group-hover:gap-2 transition-all">
                      <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-20 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="container relative">
          <div className="relative mb-12">
            <div className="inline-block bg-[#F59E0B]/20 border-l-4 border-[#F59E0B] px-4 py-1 mb-3">
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F59E0B" }}>
                Our Process
              </span>
            </div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", textTransform: "uppercase", color: "white" }}>
              7-Step Certified<br />Remediation Process
            </h2>
            <p className="mt-3 text-white/60 max-w-xl" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Our multi-step process ensures complete mold removal and prevents future growth — certified by industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-[#F59E0B]/30 transition-all duration-300"
              >
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.5rem", color: "#F59E0B", lineHeight: 1, marginBottom: "0.5rem" }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", textTransform: "uppercase", color: "white", marginBottom: "0.5rem" }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
            {/* Final CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.56 }}
              className="bg-[#F59E0B] p-5 flex flex-col justify-between"
            >
              <div>
                <Shield className="w-8 h-8 text-[#0B1F3A] mb-3" />
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.3rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "0.5rem" }}>
                  Guaranteed Results
                </h3>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.85rem", color: "#0B1F3A", lineHeight: 1.6 }}>
                  Our work is backed by a written guarantee. If mold returns, we come back — at no cost to you.
                </p>
              </div>
              <Link href="/contact">
                <span className="mt-4 inline-flex items-center gap-1 font-bold text-[#0B1F3A] text-sm uppercase tracking-wider hover:gap-2 transition-all"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Get Started <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F59E0B]/10 border border-[#F59E0B]/30 px-4 py-1 mb-3">
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F59E0B" }}>
                Customer Reviews
              </span>
            </div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", textTransform: "uppercase", color: "#0B1F3A" }}>
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              {[1,2,3,4,5].map((s) => <Star key={s} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />)}
              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, color: "#374151", marginLeft: "0.5rem" }}>
                5.0/5 — Local Reviews
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0B1F3A" }}>{t.name}</div>
                    <div className="flex items-center gap-1 text-gray-400 text-xs mt-0.5">
                      <MapPin className="w-3 h-3" />
                      <span style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{t.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((s) => <Star key={s} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />)}
                    </div>
                  </div>
                </div>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.7, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section className="py-16 bg-[#0B1F3A]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", textTransform: "uppercase", color: "white" }}>
              Licensed & Insured
            </h2>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "rgba(255,255,255,0.55)", marginTop: "0.5rem" }}>
              Fully licensed and insured for your peace of mind
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Licensed", desc: "State of Pennsylvania Licensed Contractor" },
              { name: "Insured", desc: "Full General Liability Insurance Coverage" },
              { name: "Bonded", desc: "Bonded for Your Protection" },
            ].map((cert) => (
              <div key={cert.name} className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-sm px-6 py-5 min-w-[160px] hover:bg-white/10 transition-colors">
                <Award className="w-7 h-7 text-[#F59E0B]" />
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "white", letterSpacing: "0.05em" }}>
                  {cert.name}
                </div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", textAlign: "center", lineHeight: 1.4 }}>
                  {cert.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section className="py-20 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block bg-[#F59E0B]/20 border-l-4 border-[#F59E0B] px-4 py-1 mb-3">
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F59E0B" }}>
                  Get Help Now
                </span>
              </div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", textTransform: "uppercase", color: "white", marginBottom: "1rem" }}>
                Schedule Your<br />Free Inspection
              </h2>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "2rem" }}>
                Our specialists will assess your property, identify all mold sources, and provide a detailed remediation plan — at no cost to you.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: Phone, label: "Emergency Line", value: "(800) 555-0199" },
                  { icon: Clock, label: "Response Time", value: "Available 24/7, 365 days" },
                  { icon: Shield, label: "Guarantee", value: "Written work guarantee" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F59E0B] rounded-sm flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#0B1F3A]" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        {item.label}
                      </div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "white" }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <img src={TEAM_PHOTO} alt="ZND-ABS team" className="rounded-sm w-full max-w-sm object-cover" style={{ maxHeight: "200px" }} />
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.8rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "0.75rem" }}>
                    Request Received!
                  </h3>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#4B5563" }}>
                    Our team will contact you within 30 minutes. For emergencies, call <a href="tel:+18005550199" className="text-[#F59E0B] font-bold">(800) 555-0199</a> now.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "0.25rem" }}>
                    Free Inspection Request
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0B1F3A] transition-colors rounded-sm"
                        placeholder="John Smith"
                        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0B1F3A] transition-colors rounded-sm"
                        placeholder="(555) 000-0000"
                        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0B1F3A] transition-colors rounded-sm"
                      placeholder="john@example.com"
                      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                    />
                  </div>
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
                      Describe the Problem
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#0B1F3A] transition-colors rounded-sm resize-none"
                      placeholder="Visible mold, musty smell, recent water damage..."
                      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                    />
                  </div>
                  <button type="submit" className="btn-amber w-full justify-center py-3">
                    <Send className="w-4 h-4" />
                    Request Free Inspection
                  </button>
                  <p className="text-xs text-gray-400 text-center" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    We respond within 30 minutes. For emergencies, call (800) 555-0199.
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
