/* ServiceAreas.tsx */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { MapView } from "@/components/Map";

const areas = [
  { city: "New York", state: "NY", zip: "10001", response: "1–2 hrs", lat: 40.7128, lng: -74.0060 },
  { city: "Los Angeles", state: "CA", zip: "90001", response: "1–2 hrs", lat: 34.0522, lng: -118.2437 },
  { city: "Chicago", state: "IL", zip: "60601", response: "1–2 hrs", lat: 41.8781, lng: -87.6298 },
  { city: "Houston", state: "TX", zip: "77001", response: "1–2 hrs", lat: 29.7604, lng: -95.3698 },
  { city: "Phoenix", state: "AZ", zip: "85001", response: "1–2 hrs", lat: 33.4484, lng: -112.0740 },
  { city: "Philadelphia", state: "PA", zip: "19101", response: "1–2 hrs", lat: 39.9526, lng: -75.1652 },
  { city: "San Antonio", state: "TX", zip: "78201", response: "2–3 hrs", lat: 29.4241, lng: -98.4936 },
  { city: "San Diego", state: "CA", zip: "92101", response: "2–3 hrs", lat: 32.7157, lng: -117.1611 },
  { city: "Dallas", state: "TX", zip: "75201", response: "1–2 hrs", lat: 32.7767, lng: -96.7970 },
  { city: "San Jose", state: "CA", zip: "95101", response: "2–3 hrs", lat: 37.3382, lng: -121.8863 },
  { city: "Austin", state: "TX", zip: "78701", response: "2–3 hrs", lat: 30.2672, lng: -97.7431 },
  { city: "Jacksonville", state: "FL", zip: "32099", response: "2–3 hrs", lat: 30.3322, lng: -81.6557 },
  { city: "Fort Worth", state: "TX", zip: "76101", response: "2–3 hrs", lat: 32.7555, lng: -97.3308 },
  { city: "Columbus", state: "OH", zip: "43085", response: "2–4 hrs", lat: 39.9612, lng: -82.9988 },
  { city: "Charlotte", state: "NC", zip: "28201", response: "2–4 hrs", lat: 35.2271, lng: -80.8431 },
  { city: "Indianapolis", state: "IN", zip: "46201", response: "2–4 hrs", lat: 39.7684, lng: -86.1581 },
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
              Service Areas<br />
              <span style={{ color: "#F59E0B" }}>Nationwide</span><br />
              Coverage
            </h1>
            <p className="mt-4 text-white/65 text-lg" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Strategically located teams ensure rapid emergency response across major US metropolitan areas.
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
                map.setCenter({ lat: 39.5, lng: -98.35 });
                map.setZoom(4);
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
                  Don't See Your City?
                </h3>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                  We're expanding rapidly. Call us — we may still be able to dispatch a team to your location, especially for emergency situations.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="tel:+18005550199" className="btn-amber justify-center">
                  <Phone className="w-4 h-4" />
                  Call (800) 555-0199
                </a>
                <Link href="/contact">
                  <span className="btn-white-outline w-full justify-center">Request Service in My Area</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
