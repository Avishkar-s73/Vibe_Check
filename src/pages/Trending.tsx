import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsItems } from "@/data/newsData";
import { motion } from "framer-motion";
import NewsCard from "@/components/NewsCard";

const Trending = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter trending news
  const trendingNews = newsItems.filter((item) => item.trending);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🔥</span>
            <h1 className="text-3xl font-bold">Trending Now</h1>
          </div>

          <p className="text-muted-foreground mb-8">
            The hottest stories that everyone's talking about right now.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingNews.map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Trending;
