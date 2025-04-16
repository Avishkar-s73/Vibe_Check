
import React from 'react';
import { moods, MoodType } from '@/data/newsData';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

interface MoodSelectorProps {
  selectedMood: string;
  setSelectedMood: (mood: string) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ selectedMood, setSelectedMood }) => {
  const { toast } = useToast();

  const handleMoodChange = (mood: MoodType) => {
    setSelectedMood(mood.id);
    toast({
      title: `Mood changed to "${mood.name}"`,
      description: "We've updated your news feed to match your vibe!",
      duration: 3000,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full py-6">
      <motion.h2 
        className="text-xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What's your vibe today?
      </motion.h2>
      <motion.div
        className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {moods.map((mood) => (
          <motion.div
            key={mood.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`flex-shrink-0 cursor-pointer`}
            onClick={() => handleMoodChange(mood)}
          >
            <motion.div 
              className={`px-4 py-3 rounded-xl flex flex-col items-center transition-all duration-300 ${
                selectedMood === mood.id 
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                  : 'bg-muted hover:bg-muted/80'
              }`}
              animate={selectedMood === mood.id ? {
                y: [0, -5, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "easeInOut"
                  }
                }
              } : {}}
            >
              <motion.span 
                className="text-2xl mb-1"
                animate={selectedMood === mood.id ? {
                  rotate: [0, 10, -10, 0],
                  transition: {
                    rotate: {
                      repeat: 1,
                      duration: 0.5,
                      ease: "easeInOut"
                    }
                  }
                } : {}}
              >
                {mood.icon}
              </motion.span>
              <span className="text-sm font-medium whitespace-nowrap">{mood.name}</span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MoodSelector;
