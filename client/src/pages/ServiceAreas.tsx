/* ServiceAreas.tsx */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { MapView } from "@/components/Map";

const areas = [
  { city: "State College", state: "PA", zip: "16801", response: "Same Day", lat: 40.7934, lng: -77.8600 },
  { city: "Bellefonte", state: "PA", zip: "16823", response: "30–45 min", lat: 40.9128, lng: -77.7681 },
  { city: "Philipsburg", state: "PA", zip: "16866", response: "45–60 min", lat: 40.8742, lng: -78.1203 },
  { city: "Port Matilda", state: "PA", zip: "16870", response: "30–45 min", lat: 40.8517, lng: -77.7947 },
  { city: "Boalsburg", state: "PA", zip: "16827", response: "20–30 min", lat: 40.8161, lng: -77.6708 },
];

export default function ServiceAreas() {
  return (
    <div>
      <section className="bg-[#0B1F3A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="container relative">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#F59E0B]/20 border-l-4 border-[#F59E0B] px-4 py-1 mb-4">
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F59E0B" }}>
                Where We Serve
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", textTransform: "uppercase", color: "white", lineHeight: 1.0 }}>
              Serving<br />
              <span style={{ color: "#F59E0B" }}>State College</span><br />
              & Surrounding Areas
            </h1>
            <p className="mt-4 text-white/65 text-lg" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Fast response times throughout Centre County, Pennsylvania. Same-day service available for emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="h-80 rounded-sm overflow-hidden border border-gray-100 shadow-md">
            <MapView
              onMapReady={(map) => {
                areas.forEach((area) => {
                  new google.maps.Marker({
                    position: { lat: area.lat, lng: area.lng },
                    map,
                    title: `${area.city}, ${area.state}`,
                    icon: {
                      path: google.maps.SymbolPath.CIRCLE,
                      scale: 8,
                      fillColor: "#F59E0B",
                      fillOpacity: 1,
                      strokeColor: "#0B1F3A",
                      strokeWeight: 2,
                    },
                  });
                });
                map.setCenter({ lat: 40.7934, lng: -77.8600 });
                map.setZoom(11);
              }}
            />
          </div>
        </div>
      </section>

      {/* Areas grid */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", textTransform: "uppercase", color: "#0B1F3A", marginBottom: "2rem" }}>
            All Service Locations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, i) => (
              <motion.div
                key={`${area.city}-${area.state}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-white border border-gray-100 p-4 hover:border-[#F59E0B]/40 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0B1F3A" }}>
                      {area.city}, {area.state}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8rem", color: "#6B7280" }}>
                        Response: {area.response}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 bg-[#0B1F3A] text-white p-8 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.8rem", textTransform: "uppercase", color: "#F59E0B", marginBottom: "0.5rem" }}>
                  Need Service Outside These Areas?
                </h3>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                  We primarily serve State College and Centre County. For emergencies outside our typical service area, call us — we may be able to help.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="tel:+12232088501" className="btn-amber justify-center">
                  <Phone className="w-4 h-4" />
                  Call (223) 208-8501
                </a>
                <Link href="/contact">
                  <span className="btn-white-outline w-full justify-center">Request Inspection</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
