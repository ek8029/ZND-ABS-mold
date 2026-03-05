/* FloatingCTA.tsx
 * Design: Industrial Safety Meets Clinical Precision
 * - Sticky mobile click-to-call button (bottom of screen)
 * - Floating emergency widget (desktop, bottom-right)
 */
import { useState } from "react";
import { Phone, X, MessageSquare, Calendar } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0B1F3A] border-t border-white/10 shadow-2xl">
        <div className="grid grid-cols-2">
          <a
            href="tel:+12232088501"
            className="flex items-center justify-center gap-2 py-4 bg-[#F59E0B] text-[#0B1F3A] font-bold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.04em", textTransform: "uppercase" }}
          >
            <Phone className="w-5 h-5" />
            Call Now — Free
          </a>
          <Link href="/contact">
            <div
              className="flex items-center justify-center gap-2 py-4 text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.04em", textTransform: "uppercase" }}
            >
              <Calendar className="w-5 h-5" />
              Free Inspection
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop floating emergency widget */}
      <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 10 }}
              transition={{ duration: 0.2 }}
              className="mb-3 bg-white border border-gray-100 shadow-2xl rounded-sm w-64 overflow-hidden"
            >
              <div className="bg-[#0B1F3A] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="emergency-dot" />
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F59E0B" }}>
                    24/7 Emergency Response
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2.5">
                <a
                  href="tel:+12232088501"
                  className="flex items-center gap-2.5 bg-[#F59E0B] text-[#0B1F3A] px-4 py-2.5 font-bold hover:bg-amber-500 transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.04em", textTransform: "uppercase" }}
                >
                  <Phone className="w-4 h-4" />
                  (223) 208-8501
                </a>
                <Link href="/contact">
                  <div
                    className="flex items-center gap-2.5 border border-[#0B1F3A] text-[#0B1F3A] px-4 py-2.5 font-bold hover:bg-[#0B1F3A] hover:text-white transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.04em", textTransform: "uppercase" }}
                  >
                    <Calendar className="w-4 h-4" />
                    Free Inspection
                  </div>
                </Link>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.75rem", color: "#6B7280", textAlign: "center" }}>
                  Response within 30 minutes
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className="w-14 h-14 bg-[#F59E0B] rounded-full shadow-2xl flex items-center justify-center hover:bg-amber-500 transition-colors relative"
          aria-label="Emergency contact"
        >
          {expanded ? (
            <X className="w-6 h-6 text-[#0B1F3A]" />
          ) : (
            <>
              <Phone className="w-6 h-6 text-[#0B1F3A]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping absolute" />
                <span className="w-2 h-2 bg-white rounded-full" />
              </span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
