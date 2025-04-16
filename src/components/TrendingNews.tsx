
import React from 'react';
import { getTrendingNews } from '@/data/newsData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NewsCard from './NewsCard';
import { motion } from 'framer-motion';

const TrendingNews = () => {
  const trendingNews = getTrendingNews();

  return (
    <section className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Trending Now
            </motion.span>
          </h2>
          <motion.div 
            className="relative inline-block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="absolute -top-2 -right-2 animate-pulse">
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
            </span>
            <span className="text-sm font-medium text-primary">Live Updates</span>
          </motion.div>
        </div>
      </motion.div>

      <Tabs defaultValue="for-you" className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <TabsList className="mb-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <TabsTrigger value="for-you" className="data-[state=active]:bg-primary data-[state=active]:text-white">For You</TabsTrigger>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <TabsTrigger value="global" className="data-[state=active]:bg-primary data-[state=active]:text-white">Global</TabsTrigger>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <TabsTrigger value="entertainment" className="data-[state=active]:bg-primary data-[state=active]:text-white">Entertainment</TabsTrigger>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <TabsTrigger value="tech" className="data-[state=active]:bg-primary data-[state=active]:text-white">Tech</TabsTrigger>
            </motion.div>
          </TabsList>
        </motion.div>
        
        <TabsContent value="for-you" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingNews.map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="global" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingNews.slice().reverse().map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="entertainment" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingNews.filter(a => a.category === "Entertainment").map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tech" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingNews.filter(a => a.category === "Technology").map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default TrendingNews;
