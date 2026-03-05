import { Link } from "wouter";
import { Phone, ArrowRight, Shield } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "8rem", color: "#0B1F3A", lineHeight: 1, opacity: 0.08 }}>
          404
        </div>
        <div className="w-12 h-12 bg-[#F59E0B] rounded-sm flex items-center justify-center mx-auto -mt-8 mb-4 relative z-10">
          <Shield className="w-6 h-6 text-[#0B1F3A]" />
        </div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "0.75rem" }}>
          Page Not Found
        </h1>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#6B7280", marginBottom: "2rem", maxWidth: "400px", margin: "0 auto 2rem" }}>
          The page you're looking for doesn't exist. If you have a mold emergency, call us immediately.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="tel:+12232088501" className="btn-amber">
            <Phone className="w-4 h-4" />
            Call (223) 208-8501
          </a>
          <Link href="/">
            <span className="btn-navy-outline">
              Go Home <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
