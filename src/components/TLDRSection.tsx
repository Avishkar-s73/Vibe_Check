
import React from 'react';
import { NewsItem } from '@/data/newsData';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { motion, AnimatePresence } from 'framer-motion';

interface TLDRSectionProps {
  article: NewsItem;
}

const TLDRSection: React.FC<TLDRSectionProps> = ({ article }) => {
  const [isTLDR, setIsTLDR] = React.useState(false);
  
  const toggleTLDR = () => {
    setIsTLDR(!isTLDR);
  };

  return (
    <div className="my-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold">TL;DR Mode</h3>
          <span className="text-xs text-muted-foreground">(Too Long; Didn't Read)</span>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="tldr-mode" checked={isTLDR} onCheckedChange={toggleTLDR} />
          <Label htmlFor="tldr-mode" className="cursor-pointer">
            {isTLDR ? 'On' : 'Off'}
          </Label>
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        {isTLDR ? (
          <motion.div
            key="tldr"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden bg-muted">
              <CardContent className="p-6">
                <div className="flex gap-2 flex-wrap mb-4">
                  {article.tldr.emojis.map((emoji, index) => (
                    <motion.span 
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-3xl"
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
                
                <ul className="space-y-2">
                  {article.tldr.bulletPoints.map((point, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-primary text-xl">•</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {article.tldr.memeText && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-4 p-3 bg-background rounded-lg italic font-medium"
                  >
                    "{article.tldr.memeText}"
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div 
            key="full-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-muted-foreground text-sm"
          >
            Switch to TL;DR mode to see a simplified version of this article!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TLDRSection;
