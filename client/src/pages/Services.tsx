/* Services.tsx — All service offerings */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, CheckCircle, ArrowRight, Eye, AlertTriangle, Home as HomeIcon, Droplets, Wind, Building2 } from "lucide-react";

const INSPECTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663405856970/VMX2oirNaVBBf73TmR5SdG/inspection-service-UtvKcWULjRd6DZdSd2bV9F.webp";

const services = [
  {
    id: "inspection",
    icon: Eye,
    title: "Mold Inspection & Testing",
    subtitle: "Comprehensive assessment to locate all mold sources",
    desc: "Our certified inspectors use advanced moisture meters, thermal imaging cameras, and air quality sampling to identify every mold colony — including hidden growth behind walls and under floors. We provide a detailed written report with findings and recommended remediation steps.",
    features: ["Thermal imaging inspection", "Air quality sampling", "Moisture mapping", "Lab analysis", "Written inspection report", "Insurance documentation"],
    href: "/mold-inspection",
  },
  {
    id: "black-mold",
    icon: AlertTriangle,
    title: "Black Mold Removal",
    subtitle: "Safe elimination of toxic Stachybotrys chartarum",
    desc: "Black mold (Stachybotrys chartarum) produces mycotoxins that pose serious health risks. Our specialized removal protocol uses full containment, HEPA filtration, and EPA-approved antimicrobial treatments to safely eliminate black mold and prevent recurrence.",
    features: ["Full containment barriers", "HEPA air filtration", "Antimicrobial treatment", "Contaminated material disposal", "Air quality verification", "Post-remediation testing"],
    href: "/services",
  },
  {
    id: "attic-mold",
    icon: HomeIcon,
    title: "Attic Mold Removal",
    subtitle: "Specialized remediation for roof and attic spaces",
    desc: "Attic mold typically results from inadequate ventilation, roof leaks, or bathroom exhaust fans venting into the attic. We address both the mold contamination and the underlying moisture source to prevent future growth.",
    features: ["Roof leak identification", "Ventilation assessment", "Insulation removal & replacement", "Wood treatment", "Vapor barrier installation", "Ventilation improvements"],
    href: "/services",
  },
  {
    id: "basement-mold",
    icon: Droplets,
    title: "Basement & Crawl Space Mold",
    subtitle: "Complete moisture control and mold elimination",
    desc: "Basements and crawl spaces are prime environments for mold growth due to high humidity and limited airflow. Our comprehensive approach includes mold removal, moisture barrier installation, and dehumidification systems.",
    features: ["Crawl space encapsulation", "Moisture barrier installation", "Sump pump assessment", "Dehumidifier installation", "Foundation crack sealing", "Drainage improvements"],
    href: "/services",
  },
  {
    id: "water-damage",
    icon: Wind,
    title: "Water Damage Restoration",
    subtitle: "Emergency response within the critical 24–48 hour window",
    desc: "Water damage creates ideal conditions for mold growth within 24–48 hours. Our emergency response team provides immediate water extraction, structural drying, and mold prevention treatment to stop mold before it starts.",
    features: ["Emergency water extraction", "Industrial drying equipment", "Structural moisture monitoring", "Mold prevention treatment", "Content restoration", "Insurance claim assistance"],
    href: "/services",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Mold Remediation",
    subtitle: "Minimal-disruption remediation for businesses",
    desc: "Commercial mold problems require specialized expertise and minimal business disruption. Our commercial team works around your schedule, provides comprehensive documentation for insurance, and ensures OSHA compliance throughout the process.",
    features: ["After-hours scheduling", "OSHA compliance documentation", "Insurance coordination", "Air quality certification", "Employee safety protocols", "Ongoing monitoring plans"],
    href: "/services",
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1F3A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="container relative">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#F59E0B]/20 border-l-4 border-[#F59E0B] px-4 py-1 mb-4">
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F59E0B" }}>
                Our Services
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", textTransform: "uppercase", color: "white", lineHeight: 1.0 }}>
              Complete Mold<br />
              <span style={{ color: "#F59E0B" }}>Remediation</span><br />
              Services
            </h1>
            <p className="mt-4 text-white/65 text-lg" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              From initial inspection to full restoration — certified specialists handling every aspect of mold removal and prevention.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="tel:+12232088501" className="btn-amber">
                <Phone className="w-4 h-4" />
                Call (223) 208-8501
              </a>
              <Link href="/contact">
                <span className="btn-white-outline">Free Inspection</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col gap-16">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 bg-[#F59E0B] rounded-sm flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-[#0B1F3A]" />
                  </div>
                  <div className="inline-block bg-[#F59E0B]/10 border-l-4 border-[#F59E0B] px-3 py-0.5 mb-2">
                    <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "#92400E" }}>{service.subtitle}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2.2rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "0.75rem" }}>
                    {service.title}
                  </h2>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#4B5563", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    {service.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                        <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.875rem", color: "#374151" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+12232088501" className="btn-amber text-sm py-2.5">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <Link href="/contact">
                      <span className="btn-navy-outline text-sm py-2.5">Get Free Quote</span>
                    </Link>
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} bg-[#F8F9FA] border border-gray-100 p-8 rounded-sm`}>
                  <img
                    src={INSPECTION_IMG}
                    alt={service.title}
                    className="w-full rounded-sm object-cover"
                    style={{ maxHeight: "280px" }}
                  />
                  <div className="mt-4 p-4 bg-[#0B1F3A] text-white rounded-sm">
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.04em", marginBottom: "0.25rem" }}>
                      FREE INSPECTION INCLUDED
                    </p>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)" }}>
                      Every service begins with a comprehensive free inspection and detailed written estimate.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F59E0B]">
        <div className="container text-center">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.5rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "0.75rem" }}>
            Ready to Eliminate Mold for Good?
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#0B1F3A", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            Call now for a free inspection or schedule online. We respond within 30 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+12232088501" className="inline-flex items-center gap-2 bg-[#0B1F3A] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#0d2545] transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              <Phone className="w-4 h-4" />
              Call (223) 208-8501
            </a>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 bg-white text-[#0B1F3A] px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-gray-50 transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Schedule Inspection <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
