/* MoldInspection.tsx */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, CheckCircle, Eye, Thermometer, Wind, Droplets, ArrowRight } from "lucide-react";

const INSPECTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663405856970/VMX2oirNaVBBf73TmR5SdG/inspection-service-UtvKcWULjRd6DZdSd2bV9F.webp";

const signs = [
  { icon: Wind, title: "Musty Odors", desc: "Persistent musty or earthy smells, especially in basements, bathrooms, or after rain." },
  { icon: Eye, title: "Visible Discoloration", desc: "Black, green, or white spots on walls, ceilings, grout, or around windows." },
  { icon: Droplets, title: "Water Damage History", desc: "Past flooding, pipe leaks, or roof damage — mold develops within 24–48 hours." },
  { icon: Thermometer, title: "Health Symptoms", desc: "Unexplained respiratory issues, allergies, or headaches that improve when away from home." },
];

const testingMethods = [
  { title: "Air Sampling", desc: "Spore trap cassettes capture airborne mold spores for lab analysis. Identifies mold types and concentration levels." },
  { title: "Surface Sampling", desc: "Tape lifts and swab samples from visible mold colonies identify species and contamination extent." },
  { title: "Moisture Mapping", desc: "Digital moisture meters and thermal imaging cameras locate hidden moisture sources behind walls and under floors." },
  { title: "Bulk Sampling", desc: "Physical material samples (drywall, insulation) sent to certified labs for comprehensive analysis." },
  { title: "ERMI Testing", desc: "Environmental Relative Moldiness Index — a DNA-based test for comprehensive mold species identification." },
  { title: "HVAC Inspection", desc: "Inspection of air ducts and HVAC systems where mold can spread throughout the entire building." },
];

export default function MoldInspection() {
  return (
    <div>
      <section className="bg-[#0B1F3A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="container relative">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#F59E0B]/20 border-l-4 border-[#F59E0B] px-4 py-1 mb-4">
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F59E0B" }}>
                Mold Inspection
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", textTransform: "uppercase", color: "white", lineHeight: 1.0 }}>
              Professional<br />
              <span style={{ color: "#F59E0B" }}>Mold Inspection</span><br />
              & Testing
            </h1>
            <p className="mt-4 text-white/65 text-lg" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Comprehensive assessment using advanced technology to locate every mold source — including hidden growth you can't see.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="tel:+18005550199" className="btn-amber">
                <Phone className="w-4 h-4" />
                Schedule Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2.2rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "1rem" }}>
                Signs You Need a Mold Inspection
              </h2>
              <div className="flex flex-col gap-4">
                {signs.map((sign) => (
                  <div key={sign.title} className="flex gap-4 p-4 border border-gray-100 hover:border-[#F59E0B]/30 transition-colors">
                    <div className="w-10 h-10 bg-[#F59E0B] rounded-sm flex items-center justify-center flex-shrink-0">
                      <sign.icon className="w-5 h-5 text-[#0B1F3A]" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", textTransform: "uppercase", color: "#0B1F3A" }}>{sign.title}</h3>
                      <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.6 }}>{sign.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={INSPECTION_IMG} alt="Mold inspection" className="w-full rounded-sm object-cover mb-6" style={{ maxHeight: "320px" }} />
              <div className="bg-[#0B1F3A] text-white p-6 rounded-sm">
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.4rem", textTransform: "uppercase", color: "#F59E0B", marginBottom: "0.75rem" }}>
                  Free Inspection Includes:
                </h3>
                {["Visual inspection of all accessible areas", "Moisture reading in suspect areas", "Identification of mold types present", "Written findings report", "Remediation recommendations", "Insurance documentation support"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 py-1.5 border-b border-white/10 last:border-0">
                    <CheckCircle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                    <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2.2rem", textTransform: "uppercase", color: "#0B1F3A" }}>
              Testing Methods We Use
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testingMethods.map((method, i) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-100 p-5 hover:shadow-md transition-shadow"
              >
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "0.5rem" }}>
                  {method.title}
                </h3>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.6 }}>
                  {method.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="tel:+18005550199" className="btn-amber text-base py-3 px-8">
              <Phone className="w-5 h-5" />
              Schedule Your Free Inspection
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
