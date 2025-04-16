
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { newsItems } from '@/data/newsData';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Crown, ThumbsDown, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CrownOrCancel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [votes, setVotes] = useState({});
  const { toast } = useToast();
  
  // Select a subset of news for crown or cancel
  const crownOrCancelItems = newsItems.slice(0, 10);
  
  const handleSwipe = (direction) => {
    // If we've reached the end, loop back to the beginning
    if (currentIndex === crownOrCancelItems.length - 1 && direction === 1) {
      setCurrentIndex(0);
    } else if (currentIndex === 0 && direction === -1) {
      setCurrentIndex(crownOrCancelItems.length - 1);
    } else {
      setCurrentIndex(prevIndex => prevIndex + direction);
    }
    setDirection(direction);
  };
  
  const handleVote = (id, isCrowned) => {
    const action = isCrowned ? 'crowned' : 'cancelled';
    setVotes({ ...votes, [id]: isCrowned ? 'crown' : 'cancel' });
    
    toast({
      title: isCrowned ? "Crowned! 👑" : "Cancelled! 🙅‍♂️",
      description: `You've ${action} this story.`,
      duration: 2000,
    });
    
    // Move to the next item after a short delay
    setTimeout(() => handleSwipe(1), 500);
  };
  
  const currentItem = crownOrCancelItems[currentIndex];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">👑</span>
            <h1 className="text-3xl font-bold">Crown or Cancel</h1>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Swipe right to crown the news you love, swipe left to cancel what you don't. Let's see what the vibe check says!
          </p>
          
          <div className="relative h-[500px] mb-8">
            <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-background shadow-md"
                onClick={() => handleSwipe(-1)}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-background shadow-md"
                onClick={() => handleSwipe(1)}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentItem.id}
                initial={{ 
                  opacity: 0, 
                  x: direction > 0 ? 200 : -200 
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0 
                }}
                exit={{ 
                  opacity: 0,
                  x: direction > 0 ? -200 : 200
                }}
                transition={{ duration: 0.3 }}
                className="h-full w-full"
              >
                <Card className="h-full overflow-hidden relative">
                  <div className="absolute inset-0">
                    <img 
                      src={currentItem.image} 
                      alt={currentItem.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">{currentItem.title}</h2>
                    <p className="mb-4 line-clamp-2">{currentItem.summary}</p>
                    <div className="flex items-center gap-2">
                      <img 
                        src={currentItem.author.avatar} 
                        alt={currentItem.author.name} 
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <span>{currentItem.author.name}</span>
                    </div>
                    
                    <div className="flex justify-center gap-4 mt-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-destructive text-white px-6 py-3 rounded-full flex items-center gap-2"
                        onClick={() => handleVote(currentItem.id, false)}
                      >
                        <ThumbsDown className="h-5 w-5" />
                        Cancel
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2"
                        onClick={() => handleVote(currentItem.id, true)}
                      >
                        <Crown className="h-5 w-5" />
                        Crown
                      </motion.button>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link to={`/article/${currentItem.id}`} className="text-white underline">
                        Read full article
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2">
            {crownOrCancelItems.map((item, index) => (
              <div 
                key={item.id}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-6 bg-primary' 
                    : votes[item.id] === 'crown'
                      ? 'bg-primary/50'
                      : votes[item.id] === 'cancel'
                        ? 'bg-destructive/50'
                        : 'bg-muted'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CrownOrCancel;
