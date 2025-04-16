
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MoodSelector from '@/components/MoodSelector';
import TrendingNews from '@/components/TrendingNews';
import CrownOrCancel from '@/components/CrownOrCancel';
import NewsCard from '@/components/NewsCard';
import { getNewsByMood } from '@/data/newsData';
import { motion } from 'framer-motion';

const Index = () => {
  const [selectedMood, setSelectedMood] = useState('just-woke-up');
  const moodBasedNews = getNewsByMood(selectedMood);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <div className="container">
          <MoodSelector selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
          
          <motion.section 
            className="py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Your {selectedMood.replace(/-/g, ' ')} Feed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {moodBasedNews.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </motion.section>
          
          <TrendingNews />
          
          <CrownOrCancel />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
