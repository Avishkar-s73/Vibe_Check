import React, { useState } from "react";
import { NewsItem } from "@/data/newsData";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Clock,
  MessageSquare,
  Share2,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  Crown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SlangTooltip from "./SlangTooltip";
import { useToast } from "@/components/ui/use-toast";

interface NewsCardProps {
  article: NewsItem;
  index?: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [reaction, setReaction] = useState<"none" | "crown" | "cancel">("none");
  const { toast } = useToast();

  const getRandomRotation = () => {
    const rotations = [-1, -0.5, 0, 0.5, 1];
    return rotations[Math.floor(Math.random() * rotations.length)];
  };

  const rotation = getRandomRotation();

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);

    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: isBookmarked
        ? "The article has been removed from your saved list"
        : "You can find this article in your saved list",
      duration: 2000,
    });
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    toast({
      title: "Share this story",
      description: "Sharing options would appear here",
      duration: 2000,
    });
  };

  const handleCrown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newReaction = reaction === "crown" ? "none" : "crown";
    setReaction(newReaction);

    if (newReaction === "crown") {
      toast({
        title: "Crowned! 👑",
        description: "You crowned this article",
        duration: 2000,
      });
    }
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newReaction = reaction === "cancel" ? "none" : "cancel";
    setReaction(newReaction);

    if (newReaction === "cancel") {
      toast({
        title: "Canceled! 🙅‍♂️",
        description: "You canceled this article",
        duration: 2000,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, rotate: 0 }}
      className="h-full"
      style={{ rotate: `${rotation}deg` }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full flex flex-col bg-card hover:shadow-lg transition-all border-2 group">
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {article.trending && (
            <div className="absolute top-3 left-3">
              <Badge
                variant="default"
                className="bg-genz-orange animate-pulse px-3"
              >
                Trending 🔥
              </Badge>
            </div>
          )}

          {/* Crown or Cancel overlay */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.button
                className={`p-3 rounded-full ${
                  reaction === "crown" ? "bg-primary" : "bg-white/20"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCrown}
              >
                <Crown
                  className={`h-6 w-6 ${
                    reaction === "crown" ? "text-white" : "text-white"
                  }`}
                />
              </motion.button>

              <motion.button
                className={`p-3 rounded-full ${
                  reaction === "cancel" ? "bg-destructive" : "bg-white/20"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCancel}
              >
                <ThumbsDown
                  className={`h-6 w-6 ${
                    reaction === "cancel" ? "text-white" : "text-white"
                  }`}
                />
              </motion.button>
            </motion.div>
          )}

          <div className="absolute top-3 right-3">
            <motion.button
              className={`p-2 rounded-full ${
                isBookmarked
                  ? "bg-primary text-white"
                  : "bg-white/20 text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleBookmark}
            >
              <Bookmark className="h-4 w-4" />
            </motion.button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <CardContent className="flex-grow flex flex-col p-4">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="bg-muted text-xs px-2 py-0">
              {article.category}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {article.readTime} min read
            </div>
          </div>

          <Link to={`/article/${article.id}`}>
            <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
              <SlangTooltip article={article}>{article.title}</SlangTooltip>
            </h3>
          </Link>

          <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
            <SlangTooltip article={article}>{article.summary}</SlangTooltip>
          </p>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-xs font-medium">{article.author.name}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 border-t flex justify-between items-center">
          <div className="flex -space-x-1">
            {Object.entries(article.reactions).map(([type, count], idx) => (
              <TooltipProvider key={type}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center bg-muted rounded-full px-2 py-1 text-xs cursor-pointer hover:bg-primary hover:text-white transition-colors">
                      {type === "fire" && "🔥"}
                      {type === "mindblown" && "🤯"}
                      {type === "sad" && "😢"}
                      {type === "cap" && "🧢"}
                      <span className="ml-1">{count}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {count} people reacted with {type}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={`/article/${article.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Comment on this article</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={handleShare}
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share this article</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default NewsCard;
