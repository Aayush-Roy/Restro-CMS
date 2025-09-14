
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Testimonials({ locale = "en" }) {
  const [testimonials, setTestimonials] = useState([]);

  // 🔹 Hardcoded testimonials with Hindi + English
  const hardcodedTestimonials = {
    en: [
      {
        id: "static-1",
        name: "John Doe",
        review:
          "WorkManage completely changed how I manage my tasks. Highly recommend!",
        rating: 5,
        company: "ABC Pvt Ltd",
        image: "/images/default-user.jpg",
      },
      {
        id: "static-2",
        name: "Jane Smith",
        review: "The UI is clean and easy to use. Makes my workflow smooth.",
        rating: 4,
        company: "XYZ Solutions",
        image: "/images/default-user.jpg",
      },
    ],
    hi: [
      {
        id: "static-1-hi",
        name: "जॉन डो",
        review:
          "WorkManage ने पूरी तरह से बदल दिया कि मैं अपने काम कैसे मैनेज करता हूं। बेहद अनुशंसित!",
        rating: 5,
        company: "ABC प्रा. लि.",
        image: "/images/default-user.jpg",
      },
      {
        id: "static-2-hi",
        name: "जेन स्मिथ",
        review:
          "UI साफ और उपयोग में आसान है। मेरा वर्कफ़्लो स्मूद बना देता है।",
        rating: 4,
        company: "XYZ सॉल्यूशंस",
        image: "/images/default-user.jpg",
      },
    ],
  };

  const titles = {
    en: "✨ What Our Customers Say",
    hi: "✨ हमारे ग्राहक क्या कहते हैं",
  };

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/api/testimonials`
        );
        const data = await res.json();
        const cmsTestimonials = data.docs || [];

        // ✅ Merge CMS + Hardcoded based on selected locale ...hardcodedTestimonials[locale]
        setTestimonials([, ...cmsTestimonials]);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setTestimonials(hardcodedTestimonials[locale],...hardcodedTestimonials[locale]);
      }
    }
    fetchTestimonials();
  }, [locale]);

  if (!testimonials.length) {
    return <p className="text-center text-gray-500">No testimonials found.</p>;
  }

  return (
    <section className="py-14 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        {titles[locale] || titles.en}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 bg-white shadow-lg rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {t.image && (
              <img
                src={
                  t.image?.url
                    ? `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}${t.image.url}`
                    : t.image
                }
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-indigo-100 mx-auto"
              />
            )}
            <h3 className="text-lg font-semibold text-center">{t.name}</h3>
            <p className="text-gray-600 text-center italic text-sm mt-2">
              "{t.review}"
            </p>
            <p className="text-yellow-500 text-center mt-3 font-medium">
              {"⭐".repeat(t.rating)} <span className="text-gray-400">({t.rating}/5)</span>
            </p>
            {t.company && (
              <p className="text-xs text-gray-400 text-center mt-1">
                {t.company}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
