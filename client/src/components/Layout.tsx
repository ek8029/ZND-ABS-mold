/* Layout.tsx
 * Design: Industrial Safety Meets Clinical Precision
 * - Sticky header with emergency phone number always visible
 * - Deep navy header that transitions on scroll
 * - Amber emergency CTA bar at top
 * - Footer with service areas, certifications, quick links
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Shield, ChevronDown } from "lucide-react";
import FloatingCTA from "./FloatingCTA";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "/services", children: [
    { label: "Mold Inspection", href: "/mold-inspection" },
    { label: "Mold Removal Process", href: "/mold-removal-process" },
    { label: "Black Mold Removal", href: "/services#black-mold" },
    { label: "Attic Mold Removal", href: "/services#attic-mold" },
    { label: "Basement Mold Removal", href: "/services#basement-mold" },
    { label: "Water Damage Restoration", href: "/services#water-damage" },
    { label: "Commercial Remediation", href: "/services#commercial" },
  ]},
  { label: "Process", href: "/mold-removal-process" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Emergency top bar */}
      <div className="bg-[#F59E0B] text-[#0B1F3A] py-2 px-4 text-center z-50 relative">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="emergency-dot" />
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            24/7 Emergency Mold Removal
          </span>
          <a
            href="tel:+18005550199"
            className="font-bold underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem" }}
          >
            (800) 555-0199
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1F3A] shadow-2xl"
            : "bg-[#0B1F3A]/95 backdrop-blur-sm"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2.5 group">
                <div className="w-9 h-9 bg-[#F59E0B] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#0B1F3A]" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.35rem", letterSpacing: "0.02em", color: "white", lineHeight: 1.1 }}>
                    ZND-ABS
                  </div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1 }}>
                    Mold Removal & Remediation
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-white/80 hover:text-white transition-colors"
                      style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white border border-gray-100 shadow-xl rounded-sm min-w-[220px] py-1">
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href}>
                            <div className="px-4 py-2.5 text-[#0B1F3A] hover:bg-[#F59E0B]/10 hover:text-[#0B1F3A] transition-colors"
                              style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 500, fontSize: "0.9rem" }}>
                              {child.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`px-3 py-2 transition-colors ${
                        location === link.href
                          ? "text-[#F59E0B]"
                          : "text-white/80 hover:text-white"
                      }`}
                      style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+18005550199" className="flex items-center gap-2 text-white hover:text-[#F59E0B] transition-colors">
                <Phone className="w-4 h-4" />
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.03em" }}>
                  (800) 555-0199
                </span>
              </a>
              <Link href="/contact">
                <span className="btn-amber text-sm py-2 px-4">Free Inspection</span>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-[#0B1F3A] border-t border-white/10 overflow-hidden"
            >
              <div className="container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div className="py-3 px-2 text-white/80 hover:text-white border-b border-white/5 transition-colors"
                      style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: "1rem" }}>
                      {link.label}
                    </div>
                  </Link>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <a href="tel:+18005550199" className="btn-amber justify-center">
                    <Phone className="w-4 h-4" />
                    Call (800) 555-0199
                  </a>
                  <Link href="/contact">
                    <span className="btn-white-outline w-full justify-center">Free Inspection</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>

      <FloatingCTA />

      {/* Footer */}
      <footer className="bg-[#0B1F3A] text-white">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-[#F59E0B] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#0B1F3A]" />
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.25rem", letterSpacing: "0.02em" }}>
                  ZND-ABS
                </div>
              </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Professional mold removal and remediation services for State College, PA. Licensed, insured, and committed to your family's safety.
            </p>
              <div className="flex flex-col gap-2">
                <a href="tel:+18005550199" className="flex items-center gap-2 text-[#F59E0B] hover:text-amber-300 transition-colors font-semibold">
                  <Phone className="w-4 h-4" />
                  (800) 555-0199
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F59E0B", marginBottom: "1rem" }}>
                Services
              </h4>
              <ul className="flex flex-col gap-2">
                {["Mold Inspection", "Mold Testing", "Black Mold Removal", "Attic Mold Removal", "Basement Mold Removal", "Water Damage Restoration", "Commercial Remediation"].map((s) => (
                  <li key={s}>
                    <Link href="/services">
                      <span className="text-white/60 hover:text-white text-sm transition-colors">{s}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F59E0B", marginBottom: "1rem" }}>
                Service Areas
              </h4>
              <ul className="flex flex-col gap-2">
                {["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ", "Philadelphia, PA", "San Antonio, TX"].map((area) => (
                  <li key={area}>
                    <Link href="/service-areas">
                      <span className="text-white/60 hover:text-white text-sm transition-colors">{area}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications + Contact */}
            <div>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F59E0B", marginBottom: "1rem" }}>
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {["IICRC", "OSHA", "IAQA", "EPA"].map((cert) => (
                  <span key={cert} className="px-3 py-1 bg-white/10 border border-white/20 text-white/80 text-xs font-bold tracking-widest rounded-sm">
                    {cert}
                  </span>
                ))}
              </div>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F59E0B", marginBottom: "0.75rem" }}>
                Company
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                  { label: "Free Inspection", href: "/contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>
                      <span className="text-white/60 hover:text-white text-sm transition-colors">{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} ZND-ABS Mold Removal & Remediation. All rights reserved. Licensed & Insured.
            </p>
            <div className="flex gap-6">
              <Link href="/contact"><span className="text-white/40 hover:text-white/70 text-sm transition-colors">Privacy Policy</span></Link>
              <Link href="/contact"><span className="text-white/40 hover:text-white/70 text-sm transition-colors">Terms of Service</span></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
