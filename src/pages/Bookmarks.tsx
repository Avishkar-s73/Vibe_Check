
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { newsItems } from '@/data/newsData';
import NewsCard from '@/components/NewsCard';
import { motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';

const Bookmarks = () => {
  // In a real app, bookmarked news would come from user data
  // For demo purposes, we're just showing random articles
  const [bookmarkedNews] = useState(() => {
    return newsItems.slice(0, 6);
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Bookmark className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Saved News</h1>
          </div>
          
          {bookmarkedNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarkedNews.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Bookmark className="h-12 w-12 mx-auto text-muted mb-4" />
              <h2 className="text-xl font-medium mb-2">No saved news yet</h2>
              <p className="text-muted-foreground">
                When you bookmark articles, they'll appear here for easy access
              </p>
            </div>
          )}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bookmarks;
