import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNewsById, newsItems } from "@/data/newsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TLDRSection from "@/components/TLDRSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Share2,
  ArrowLeft,
  MessageSquare,
  BookmarkPlus,
  ThumbsUp,
  ThumbsDown,
  Crown,
  Send,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import SlangTooltip from "@/components/SlangTooltip";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import NewsCard from "@/components/NewsCard";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = getNewsById(id || "");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [reaction, setReaction] = useState<"none" | "crown" | "cancel">("none");
  const [comment, setComment] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get related articles (same category)
  const relatedArticles = newsItems
    .filter((item) => item.id !== id && item.category === article?.category)
    .slice(0, 3);

  // Dummy comments
  const dummyComments = [
    {
      id: 1,
      author: {
        name: "Abhas",
        avatar:
          "https://i.pinimg.com/236x/78/20/50/782050d0c43cdd24fa19a8f5440c8bf9.jpg",
      },
      text: "This is literally so true! Can't believe more people aren't talking about this.",
      time: "2 hours ago",
      likes: 24,
    },
    {
      id: 2,
      author: {
        name: "Neha",
        avatar:
          "https://i.pinimg.com/474x/ca/6d/44/ca6d44cd4116857707c205a120c5d21e.jpg",
      },
      text: "Ngl, I was today years old when I found out about this. Mind blown! 🤯",
      time: "5 hours ago",
      likes: 18,
    },
    {
      id: 3,
      author: {
        name: "Yash",
        avatar:
          "https://i.pinimg.com/236x/a9/9c/28/a99c28832c86daed67260e5c0f2832d7.jpg",
      },
      text: "The way this article explained everything is *chef's kiss* - finally I understand what everyone's been talking about!",
      time: "Yesterday",
      likes: 36,
    },
  ];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Button onClick={() => navigate("/")}>Go back home</Button>
      </div>
    );
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);

    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: isBookmarked
        ? "The article has been removed from your saved list"
        : "You can find this article in your saved list",
      duration: 2000,
    });
  };

  const handleShare = () => {
    toast({
      title: "Share this story",
      description: "Sharing options would appear here",
      duration: 2000,
    });
  };

  const handleCrown = () => {
    if (reaction !== "crown") {
      setReaction("crown");
      toast({
        title: "Crowned! 👑",
        description: "You crowned this article",
        duration: 2000,
      });
    } else {
      setReaction("none");
    }
  };

  const handleCancel = () => {
    if (reaction !== "cancel") {
      setReaction("cancel");
      toast({
        title: "Canceled! 🙅‍♂️",
        description: "You canceled this article",
        duration: 2000,
      });
    } else {
      setReaction("none");
    }
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      toast({
        title: "Comment posted!",
        description: "Your comment has been added to the discussion",
        duration: 2000,
      });
      setComment("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <article className="container max-w-4xl py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              variant="ghost"
              className="mb-6"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            <div className="mb-4 flex flex-wrap gap-2">
              <Badge className="bg-primary">{article.category}</Badge>
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <SlangTooltip article={article}>{article.title}</SlangTooltip>
            </h1>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{article.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(article.publishDate).toLocaleDateString()} •{" "}
                    {article.readTime} min read
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  className={`p-2 rounded-full ${
                    isBookmarked ? "bg-primary text-white" : "bg-muted"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleBookmark}
                >
                  <BookmarkPlus className="h-5 w-5" />
                </motion.button>
                <motion.button
                  className="p-2 rounded-full bg-muted"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-[16/9] overflow-hidden rounded-xl mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <TLDRSection article={article} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Tabs defaultValue="article" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger
                  value="article"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Article
                </TabsTrigger>
                <TabsTrigger
                  value="comments"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Comments
                </TabsTrigger>
                <TabsTrigger
                  value="related"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Related
                </TabsTrigger>
              </TabsList>

              <TabsContent value="article" className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl font-medium text-muted-foreground mb-6">
                    <SlangTooltip article={article}>
                      {article.summary}
                    </SlangTooltip>
                  </p>

                  {article.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      <SlangTooltip article={article}>{paragraph}</SlangTooltip>
                    </p>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <motion.button
                        className={`rounded-full flex items-center gap-1 px-4 py-2 ${
                          reaction === "crown"
                            ? "bg-primary text-white"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleCrown}
                      >
                        <Crown className="h-4 w-4 mr-1" />
                        Crown
                      </motion.button>
                      <motion.button
                        className={`rounded-full flex items-center gap-1 px-4 py-2 ${
                          reaction === "cancel"
                            ? "bg-destructive text-white"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleCancel}
                      >
                        <ThumbsDown className="h-4 w-4 mr-1" />
                        Cancel
                      </motion.button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="comments">
                <div className="space-y-6">
                  <form onSubmit={handleSubmitComment} className="mb-8">
                    <div className="flex gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/profile-pic.png" alt="You" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 flex gap-2">
                        <input
                          type="text"
                          placeholder="Add your comment..."
                          className="flex-1 p-2 rounded-lg border focus:ring-2 focus:ring-primary focus:outline-none"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        />
                        <Button
                          type="submit"
                          disabled={!comment.trim()}
                          className="bg-primary hover:bg-primary/90"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </form>

                  <div className="space-y-4">
                    {dummyComments.map((comment) => (
                      <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="p-4">
                          <div className="flex gap-3">
                            <Avatar className="h-9 w-9">
                              <AvatarImage
                                src={comment.author.avatar}
                                alt={comment.author.name}
                              />
                              <AvatarFallback>
                                {comment.author.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium">
                                  {comment.author.name}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {comment.time}
                                </span>
                              </div>
                              <p className="text-sm mb-2">{comment.text}</p>
                              <div className="flex items-center gap-3">
                                <button className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
                                  <ThumbsUp className="h-3 w-3" />
                                  <span>{comment.likes}</span>
                                </button>
                                <button className="text-xs text-muted-foreground hover:text-primary">
                                  Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="related">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((article, index) => (
                    <NewsCard
                      key={article.id}
                      article={article}
                      index={index}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
