
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { newsItems } from '@/data/newsData';
import { motion } from 'framer-motion';
import NewsCard from '@/components/NewsCard';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  // Filter news by category
  const categoryNews = newsItems.filter(
    item => item.category.toLowerCase() === category?.toLowerCase()
  );
  
  // Category emojis
  const categoryEmojis = {
    entertainment: '🎭',
    technology: '💻',
    fashion: '👗',
    environment: '🌍',
    sports: '⚽',
    politics: '🏛️',
    health: '🏥'
  };
  
  // Format category name for display
  const displayCategory = category 
    ? category.charAt(0).toUpperCase() + category.slice(1) 
    : '';
  
  const emoji = categoryEmojis[category?.toLowerCase() || ''] || '📰';
  
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
            <span className="text-3xl">{emoji}</span>
            <h1 className="text-3xl font-bold">{displayCategory}</h1>
          </div>
          
          <p className="text-muted-foreground mb-8">
            The latest and greatest {displayCategory} news that passes the vibe check.
          </p>
          
          {categoryNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryNews.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-2">No news found</h2>
              <p className="text-muted-foreground">
                We couldn't find any news in this category. Check back later!
              </p>
            </div>
          )}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
