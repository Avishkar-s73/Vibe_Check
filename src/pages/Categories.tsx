import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    {
      name: "Entertainment",
      emoji: "🎭",
      slug: "entertainment",
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "Technology",
      emoji: "💻",
      slug: "technology",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Fashion",
      emoji: "👗",
      slug: "fashion",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Environment",
      emoji: "🌍",
      slug: "environment",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Sports",
      emoji: "⚽",
      slug: "sports",
      color: "from-orange-500 to-amber-600",
    },
    {
      name: "Politics",
      emoji: "🏛️",
      slug: "politics",
      color: "from-red-500 to-orange-600",
    },
    {
      name: "Health",
      emoji: "🏥",
      slug: "health",
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "Education",
      emoji: "📚",
      slug: "education",
      color: "from-yellow-500 to-amber-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold mb-6">Browse Categories</h1>

          <p className="text-muted-foreground mb-8">
            Find the latest news in your favorite categories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link to={`/category/${category.slug}`}>
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div
                      className={`h-24 bg-gradient-to-r ${category.color} flex items-center justify-center`}
                    >
                      <span className="text-5xl">{category.emoji}</span>
                    </div>
                    <CardContent className="p-4">
                      <h2 className="text-xl font-bold">{category.name}</h2>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
