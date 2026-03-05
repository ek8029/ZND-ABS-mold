/* About.tsx */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, Award, Shield, Users, CheckCircle } from "lucide-react";

const TEAM_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663405856970/VMX2oirNaVBBf73TmR5SdG/team-photo-7fLbKQFaG3XezRQmwujAsr.webp";

const certifications = [
  { name: "IICRC", full: "Institute of Inspection Cleaning and Restoration Certification", desc: "The gold standard in restoration industry certification, ensuring our technicians meet the highest professional standards." },
  { name: "OSHA", full: "Occupational Safety and Health Administration", desc: "All technicians are OSHA-certified, ensuring safe work practices that protect both our team and your family." },
  { name: "IAQA", full: "Indoor Air Quality Association", desc: "Member of the leading organization for indoor air quality professionals, keeping us current with best practices." },
  { name: "EPA", full: "Environmental Protection Agency", desc: "EPA Lead-Safe Certified Firm — critical for older homes where lead paint may be present alongside mold." },
  { name: "NORMI", full: "National Organization of Remediators and Mold Inspectors", desc: "Specialized mold remediation certification demonstrating expertise in mold identification and removal protocols." },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "We provide honest assessments and transparent pricing. No upselling, no unnecessary work." },
  { icon: Award, title: "Excellence", desc: "Every job is completed to the highest IICRC standards with post-remediation air quality verification." },
  { icon: Users, title: "Family Safety", desc: "We treat every home as if our own family lives there — thorough, safe, and complete." },
  { icon: CheckCircle, title: "Accountability", desc: "Written guarantees on all work. If mold returns, we come back at no charge." },
];

export default function About() {
  return (
    <div>
      <section className="bg-[#0B1F3A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="container relative">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#F59E0B]/20 border-l-4 border-[#F59E0B] px-4 py-1 mb-4">
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F59E0B" }}>
                About Us
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", textTransform: "uppercase", color: "white", lineHeight: 1.0 }}>
              15+ Years of<br />
              <span style={{ color: "#F59E0B" }}>Protecting</span><br />
              Families
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2.2rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "1rem" }}>
              About ZND-ABS
            </h2>
            <div className="flex flex-col gap-4 text-gray-600" style={{ fontFamily: "'Source Sans 3', sans-serif", lineHeight: 1.75 }}>
              <p>
                ZND-ABS Mold Removal & Remediation is a licensed and insured mold remediation specialist serving State College and Centre County, Pennsylvania. We're committed to helping homeowners and businesses identify and eliminate mold problems quickly and safely.
              </p>
              <p>
                Every mold situation is different. Whether you've discovered visible mold, noticed a musty smell, or suspect hidden growth after water damage, we provide honest assessments and straightforward remediation solutions without unnecessary upselling.
              </p>
              <p>
                We use industry-standard equipment and proven remediation protocols to ensure complete mold removal and prevention. Our goal is simple: get your property back to safe, healthy condition and make sure the problem doesn't return.
              </p>
            </div>
            </div>
            <div>
              <img src={TEAM_PHOTO} alt="MoldGuard Pro team" className="w-full rounded-sm object-cover shadow-lg" />
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[{ num: "24/7", label: "Emergency Response" }, { num: "Licensed", label: "& Insured" }].map((stat) => (
                  <div key={stat.label} className="bg-[#0B1F3A] text-white p-4 text-center rounded-sm">
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#F59E0B" }}>{stat.num}</div>
                    <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F9FA]">
        <div className="container">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "2rem", textAlign: "center" }}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#F59E0B] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-[#0B1F3A]" />
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "0.5rem" }}>{v.title}</h3>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.875rem", color: "#4B5563", lineHeight: 1.6 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "2rem" }}>
            Our Certifications
          </h2>
          <div className="flex flex-col gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 p-5 border border-gray-100 hover:border-[#F59E0B]/30 transition-colors"
              >
                <div className="w-16 h-16 bg-[#0B1F3A] rounded-sm flex items-center justify-center flex-shrink-0">
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.1rem", color: "#F59E0B", letterSpacing: "0.05em" }}>{cert.name}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", textTransform: "uppercase", color: "#0B1F3A" }}>{cert.full}</h3>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.6, marginTop: "0.25rem" }}>{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
