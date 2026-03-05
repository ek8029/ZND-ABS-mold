/* MoldRemovalProcess.tsx */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Inspection & Assessment", desc: "Our certified technicians conduct a thorough evaluation of all affected areas using moisture meters, thermal imaging, and air sampling. We identify the full extent of contamination and the moisture source causing growth.", duration: "1–2 Hours" },
  { num: "02", title: "Containment of Affected Area", desc: "We establish negative air pressure containment barriers using heavy-duty polyethylene sheeting to prevent mold spores from spreading to unaffected areas during remediation.", duration: "2–4 Hours" },
  { num: "03", title: "Air Filtration", desc: "Industrial HEPA air scrubbers (rated at 99.97% efficiency) are deployed to continuously filter airborne mold spores and particulates from the contained work area.", duration: "Continuous" },
  { num: "04", title: "Mold Removal", desc: "Contaminated materials are physically removed and disposed of following EPA guidelines. Remaining surfaces are treated with EPA-approved antimicrobial solutions and HEPA vacuumed.", duration: "4–24 Hours" },
  { num: "05", title: "Cleaning & Sanitization", desc: "All surfaces within the affected area are thoroughly cleaned, sanitized, and treated with antimicrobial agents to eliminate residual mold spores and prevent future growth.", duration: "2–4 Hours" },
  { num: "06", title: "Drying & Dehumidification", desc: "Industrial dehumidifiers and air movers are deployed to eliminate residual moisture — the root cause of mold. We monitor moisture levels until they reach safe thresholds.", duration: "24–72 Hours" },
  { num: "07", title: "Restoration & Repairs", desc: "We restore your property to pre-mold condition — replacing drywall, insulation, flooring, and other structural elements. Final air quality testing confirms successful remediation.", duration: "1–5 Days" },
];

export default function MoldRemovalProcess() {
  return (
    <div>
      <section className="bg-[#0B1F3A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="container relative">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#F59E0B]/20 border-l-4 border-[#F59E0B] px-4 py-1 mb-4">
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F59E0B" }}>
                Our Process
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", textTransform: "uppercase", color: "white", lineHeight: 1.0 }}>
              7-Step Certified<br />
              <span style={{ color: "#F59E0B" }}>Remediation</span><br />
              Process
            </h1>
            <p className="mt-4 text-white/65 text-lg" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Our IICRC-certified process ensures complete mold elimination and prevents future growth — backed by a written guarantee.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-100 hidden md:block" />
            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-6 md:gap-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-[#0B1F3A] rounded-sm flex items-center justify-center relative z-10">
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.4rem", color: "#F59E0B" }}>{step.num}</span>
                  </div>
                  <div className="flex-1 pb-8 border-b border-gray-100 last:border-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", textTransform: "uppercase", color: "#0B1F3A" }}>
                        {step.title}
                      </h2>
                      <span className="bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#92400E] text-xs font-semibold px-2.5 py-1 rounded-sm"
                        style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        {step.duration}
                      </span>
                    </div>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#4B5563", lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-[#0B1F3A] text-white p-8 rounded-sm">
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.8rem", textTransform: "uppercase", color: "#F59E0B", marginBottom: "0.75rem" }}>
              Written Mold-Free Guarantee
            </h3>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Every remediation project is backed by our written guarantee. If mold returns in the treated area within 12 months, we return and re-treat at no cost to you. We also provide full documentation for insurance claims.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+12232088501" className="btn-amber">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link href="/contact">
                <span className="btn-white-outline">Get Free Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
