import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { newsItems } from "@/data/newsData";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  // Get trending articles for the hero carousel
  const featuredArticles = newsItems
    .filter((item) => item.trending)
    .slice(0, 5);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredArticles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredArticles.length]);

  const handlePrev = () => {
    setActiveSlide(
      (prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length
    );
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % featuredArticles.length);
  };

  const handleExplore = () => {
    navigate("/trending");
  };

  const handleHotTakes = () => {
    navigate("/crown-or-cancel");
  };

  // Animated numbers for the readers joined statistic
  const animatedReaders = {
    numbers: ["3.2k", "3.3k", "3.4k", "3.5k", "3.6k"],
    emojis: ["🙂", "😎", "🤩", "🔥", "✨"],
  };

  return (
    <section className="relative overflow-hidden py-10 md:py-16">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-genz-purple opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-genz-pink opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
              News that{" "}
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-candy"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                passes
              </motion.span>{" "}
              the vibe check
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Stay informed without the boring stuff. Get your daily dose of
              news, trends, and hot takes - all with that Gen Z flavor.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-candy hover:opacity-90 transition-opacity"
                  onClick={handleExplore}
                >
                  Start Exploring
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                  onClick={handleHotTakes}
                >
                  Today's Hot Takes
                </Button>
              </motion.div>
            </div>

            <div className="mt-8 flex items-center">
              <motion.div
                className="flex -space-x-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background text-xs font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    {animatedReaders.emojis[i - 1]}
                  </motion.div>
                ))}
              </motion.div>
              <motion.p
                className="ml-4 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.span
                  className="font-bold text-foreground"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  {animatedReaders.numbers[4]}
                </motion.span>{" "}
                Gen Z readers joined today
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Carousel controls */}
              <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full bg-background/30 backdrop-blur-sm hover:bg-background/50"
                  onClick={handlePrev}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>

              <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full bg-background/30 backdrop-blur-sm hover:bg-background/50"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              {/* Carousel */}
              <div className="relative overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {featuredArticles.map((article, index) => (
                    <div key={article.id} className="w-full flex-shrink-0">
                      <Link to={`/article/${article.id}`}>
                        <div className="group rounded-2xl overflow-hidden hover:shadow-lg transition-shadow relative">
                          <div className="aspect-[16/9] overflow-hidden">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-6">
                            <span className="px-3 py-1 bg-genz-purple text-white rounded-full text-sm font-medium mb-3 inline-block">
                              Featured
                            </span>
                            <h2 className="text-white text-2xl font-bold mb-2">
                              {article.title}
                            </h2>
                            <p className="text-white/80 line-clamp-2 mb-2">
                              {article.summary}
                            </p>
                            <div className="flex items-center text-white/90">
                              <img
                                src={article.author.avatar}
                                alt={article.author.name}
                                className="w-8 h-8 rounded-full mr-2 border-2 border-white/20"
                              />
                              {/* Fixed the issue here - only use the author name, not id */}
                              <span>{article.author.name}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Carousel indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {featuredArticles.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeSlide ? "bg-white w-6" : "bg-white/50"
                      }`}
                      onClick={() => setActiveSlide(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-5 -right-5 bg-white rounded-lg shadow-lg p-3 flex items-center gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                }}
              >
                <div className="w-10 h-10 rounded-full bg-genz-pink flex items-center justify-center text-white">
                  🔥
                </div>
                <div>
                  <p className="text-xs font-medium text-black dark:text-blue-900">
                    Trending now
                  </p>
                  <p className="text-xs text-muted-foreground">
                    +2.5k reactions
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-3"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{
                  y: 5,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                }}
              >
                <p className="text-xs font-medium flex items-center gap-1 text-black dark:text-blue-900">
                  <span>👑</span> 87% crowned this
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
