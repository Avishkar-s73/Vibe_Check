
import React, { useState } from 'react';
import { newsItems } from '@/data/newsData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { X, Crown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CrownOrCancel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [exiting, setExiting] = useState(false);
  const { toast } = useToast();
  
  const currentArticle = newsItems[currentIndex % newsItems.length];

  const handleSwipe = (choice: 'cancel' | 'crown') => {
    if (exiting) return;
    
    setExiting(true);
    setDirection(choice === 'cancel' ? 'left' : 'right');
    
    toast({
      title: choice === 'cancel' ? 'Canceled! 🙅‍♂️' : 'Crowned! 👑',
      description: `You ${choice === 'cancel' ? 'canceled' : 'crowned'} "${currentArticle.title}"`,
      duration: 3000,
    });
    
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setDirection(null);
      setExiting(false);
    }, 500);
  };

  const variants = {
    enter: (direction: 'left' | 'right' | null) => {
      return {
        x: direction === 'left' ? 300 : direction === 'right' ? -300 : 0,
        opacity: 0,
        scale: 0.8
      };
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    },
    exit: (direction: 'left' | 'right' | null) => {
      return {
        x: direction === 'left' ? -300 : direction === 'right' ? 300 : 0,
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.4
        }
      };
    }
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Crown or Cancel?</h2>
      <div className="flex flex-col items-center justify-center relative h-[400px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full max-w-lg"
          >
            <Card className="overflow-hidden border-2 shadow-lg">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={currentArticle.image}
                  alt={currentArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{currentArticle.title}</h3>
                <p className="text-muted-foreground mb-4">{currentArticle.summary}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={currentArticle.author.avatar}
                      alt={currentArticle.author.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm">{currentArticle.author.name}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentArticle.category}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute -bottom-20 flex items-center gap-4">
          <Button 
            variant="destructive" 
            size="lg" 
            className="rounded-full h-16 w-16 animate-bounce"
            onClick={() => handleSwipe('cancel')}
          >
            <X className="h-8 w-8" />
          </Button>
          
          <div className="bg-muted rounded-full px-4 py-2 font-medium text-sm">
            Swipe to judge
            <ArrowRight className="inline ml-1 h-4 w-4" />
          </div>
          
          <Button 
            variant="default" 
            size="lg" 
            className="rounded-full h-16 w-16 bg-amber-500 hover:bg-amber-600 animate-bounce"
            onClick={() => handleSwipe('crown')}
          >
            <Crown className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CrownOrCancel;
