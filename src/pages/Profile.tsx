import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { newsItems } from "@/data/newsData";
import { motion } from "framer-motion";
import { Crown, MessageSquare, Users } from "lucide-react";
import NewsCard from "@/components/NewsCard";

const Profile = () => {
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isCurrentUser = !id;

  const userData = {
    name: isCurrentUser ? "Avishkar Durgade" : "Stranger Profile",
    username: isCurrentUser ? "vibechecker" : "stranger",
    avatar: isCurrentUser
      ? "/profile-pic.png"
      : "https://freepngimg.com/thumb/doraemon/35165-2-doraemon-hd-thumb.png",
    bio: "Gen Z news enthusiast. Always looking for stories that pass the vibe check.",
    joinedDate: "April 2025",
    followers: 1248,
    following: 365,
    interests: ["Technology", "Entertainment", "Fashion"],
  };

  const userArticles = newsItems.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </motion.div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
                <p className="text-muted-foreground mb-3">
                  @{userData.username}
                </p>
                <p className="mb-4">{userData.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {userData.interests.map((interest) => (
                    <Badge key={interest} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>
                      <strong>{userData.followers}</strong> followers
                    </span>
                  </div>
                  <div>
                    <span>
                      <strong>{userData.following}</strong> following
                    </span>
                  </div>
                  <div>
                    <span>Joined {userData.joinedDate}</span>
                  </div>
                </div>

                {!isCurrentUser && (
                  <div className="mt-4 flex gap-2">
                    <Button className="bg-primary">Follow</Button>
                    <Button variant="outline">Message</Button>
                  </div>
                )}
              </div>
            </div>

            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger
                  value="activity"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Activity
                </TabsTrigger>
                <TabsTrigger
                  value="crowned"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <Crown className="h-4 w-4 mr-2" />
                  Crowned
                </TabsTrigger>
                <TabsTrigger
                  value="comments"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Comments
                </TabsTrigger>
              </TabsList>

              <TabsContent value="activity">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userArticles.map((article, index) => (
                    <NewsCard
                      key={article.id}
                      article={article}
                      index={index}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="crowned">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userArticles.slice(0, 3).map((article, index) => (
                    <NewsCard
                      key={article.id}
                      article={article}
                      index={index}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="comments">
                <div className="space-y-4">
                  {userArticles.slice(0, 4).map((article) => (
                    <div
                      key={article.id}
                      className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">
                          On article: <strong>{article.title}</strong>
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(article.publishDate).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm mb-2">
                        "This article is straight facts! No cap, it's the most
                        based take I've seen all week."
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>24 likes</span>
                        <span>•</span>
                        <span>3 replies</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
