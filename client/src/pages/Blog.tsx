/* Blog.tsx */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "10 Warning Signs You Have Mold in Your Home",
    excerpt: "Mold can hide in places you'd never expect. Learn the key warning signs — from musty odors to unexplained health symptoms — that indicate a mold problem before it becomes a major issue.",
    category: "Health & Safety",
    readTime: "5 min read",
    date: "Feb 28, 2026",
    slug: "warning-signs-mold",
  },
  {
    title: "Black Mold: Health Risks, Symptoms, and What to Do",
    excerpt: "Stachybotrys chartarum (black mold) produces mycotoxins that can cause serious health problems. Understand the risks, recognize the symptoms, and learn the proper steps for safe removal.",
    category: "Black Mold",
    readTime: "7 min read",
    date: "Feb 20, 2026",
    slug: "black-mold-health-risks",
  },
  {
    title: "How Much Does Mold Remediation Cost in 2026?",
    excerpt: "Mold remediation costs vary widely based on the extent of contamination, location, and type of mold. Here's a comprehensive breakdown of what you can expect to pay — and how to maximize your insurance coverage.",
    category: "Cost Guide",
    readTime: "8 min read",
    date: "Feb 15, 2026",
    slug: "mold-remediation-cost",
  },
  {
    title: "How Mold Spreads After Flooding: A Timeline",
    excerpt: "Mold can begin growing within 24–48 hours of water damage. Understanding this timeline is critical for preventing a minor water incident from becoming a major mold infestation.",
    category: "Water Damage",
    readTime: "6 min read",
    date: "Feb 8, 2026",
    slug: "mold-after-flooding",
  },
  {
    title: "Mold Prevention: 15 Steps to Keep Your Home Mold-Free",
    excerpt: "Prevention is far cheaper than remediation. These 15 practical steps — from controlling humidity to proper ventilation — will significantly reduce your risk of mold growth.",
    category: "Prevention",
    readTime: "6 min read",
    date: "Jan 30, 2026",
    slug: "mold-prevention-tips",
  },
  {
    title: "Attic Mold: Causes, Prevention, and Removal",
    excerpt: "Attic mold is one of the most common — and most overlooked — mold problems in American homes. Learn what causes it, how to spot it, and what proper remediation involves.",
    category: "Attic Mold",
    readTime: "7 min read",
    date: "Jan 22, 2026",
    slug: "attic-mold-guide",
  },
  {
    title: "DIY vs. Professional Mold Removal: When to Call the Experts",
    excerpt: "Small surface mold can sometimes be handled yourself, but most mold problems require professional intervention. Learn the key factors that determine when to DIY and when to call a certified specialist.",
    category: "DIY vs. Pro",
    readTime: "5 min read",
    date: "Jan 15, 2026",
    slug: "diy-vs-professional-mold",
  },
  {
    title: "Does Homeowner's Insurance Cover Mold Remediation?",
    excerpt: "Insurance coverage for mold is complicated. This guide explains what's typically covered, what's excluded, and how to document a mold claim to maximize your payout.",
    category: "Insurance",
    readTime: "8 min read",
    date: "Jan 8, 2026",
    slug: "insurance-mold-coverage",
  },
];

const categories = ["All", "Health & Safety", "Black Mold", "Cost Guide", "Water Damage", "Prevention", "Attic Mold", "Insurance"];

export default function Blog() {
  return (
    <div>
      <section className="bg-[#0B1F3A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="container relative">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#F59E0B]/20 border-l-4 border-[#F59E0B] px-4 py-1 mb-4">
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F59E0B" }}>
                Resources & Education
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", textTransform: "uppercase", color: "white", lineHeight: 1.0 }}>
              Mold Resources<br />
              <span style={{ color: "#F59E0B" }}>& Expert</span><br />
              Guides
            </h1>
            <p className="mt-4 text-white/65 text-lg" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Educational content to help you understand mold risks, prevention, and remediation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 text-sm font-semibold transition-colors rounded-sm ${
                  cat === "All"
                    ? "bg-[#0B1F3A] text-white"
                    : "bg-[#F8F9FA] text-gray-600 hover:bg-[#F59E0B]/10 hover:text-[#0B1F3A]"
                }`}
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-white border border-gray-100 hover:border-[#F59E0B]/40 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5c] h-36 flex items-end p-4">
                  <span className="inline-block bg-[#F59E0B] text-[#0B1F3A] text-xs font-bold px-2.5 py-1 uppercase tracking-wider"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", textTransform: "uppercase", color: "#0B1F3A", lineHeight: 1.2, marginBottom: "0.75rem" }}>
                    {post.title}
                  </h2>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.875rem", color: "#4B5563", lineHeight: 1.65, flex: 1 }}>
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-[#F59E0B] group-hover:gap-2 transition-all">
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      Read Article
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
