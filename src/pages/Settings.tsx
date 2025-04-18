import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import {
  BellRing,
  Moon,
  Sun,
  Eye,
  Volume2,
  Globe,
  BellOff,
  Shield,
  UserCog,
  Palette,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Settings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const {
    darkMode,
    toggleDarkMode,
    vibrantMode,
    toggleVibrantMode,
    reduceAnimations,
    toggleReduceAnimations,
  } = useTheme();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold mb-6">Settings</h1>

          <Tabs defaultValue="appearance" className="w-full">
            <TabsList className="mb-8 flex flex-wrap gap-2">
              <TabsTrigger
                value="appearance"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Palette className="h-4 w-4 mr-2" />
                Appearance
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <BellRing className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="account"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <UserCog className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger
                value="privacy"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Shield className="h-4 w-4 mr-2" />
                Privacy
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appearance" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-background">
                        {darkMode ? (
                          <Moon className="h-5 w-5" />
                        ) : (
                          <Sun className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">Dark Mode</h3>
                        <p className="text-sm text-muted-foreground">
                          Switch between light and dark themes
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={darkMode}
                      onCheckedChange={toggleDarkMode}
                    />
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-background">
                        <Palette className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Vibrant Mode</h3>
                        <p className="text-sm text-muted-foreground">
                          Enable extra colorful UI elements
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={vibrantMode}
                      onCheckedChange={toggleVibrantMode}
                    />
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-background">
                        <Eye className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Reduce Animations</h3>
                        <p className="text-sm text-muted-foreground">
                          Minimize motion for accessibility
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={reduceAnimations}
                      onCheckedChange={toggleReduceAnimations}
                    />
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-background">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Language</h3>
                        <p className="text-sm text-muted-foreground">
                          Choose your preferred language
                        </p>
                      </div>
                    </div>
                    <select className="bg-background border rounded-md px-2 py-1 text-sm">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <div className="space-y-4">
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-background">
                        <BellRing className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Push Notifications</h3>
                        <p className="text-sm text-muted-foreground">
                          Get notified about trending news
                        </p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-background">
                        <Volume2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Sound Effects</h3>
                        <p className="text-sm text-muted-foreground">
                          Play sounds for interactions
                        </p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-background">
                        <BellOff className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Do Not Disturb</h3>
                        <p className="text-sm text-muted-foreground">
                          Disable notifications during set hours
                        </p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="account" className="space-y-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-medium text-lg mb-4">
                  Profile Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Display Name
                    </label>
                    <input
                      type="text"
                      defaultValue="VibeCheck User"
                      className="w-full p-2 border rounded-md bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="user@vibecheck.com"
                      className="w-full p-2 border rounded-md bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Bio
                    </label>
                    <textarea
                      defaultValue="Just vibing and checking the news."
                      className="w-full p-2 border rounded-md bg-background h-20"
                    ></textarea>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6">
              <div className="space-y-4">
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Data Collection</h3>
                      <p className="text-sm text-muted-foreground">
                        Allow us to collect usage data to improve your
                        experience
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Personalized Ads</h3>
                      <p className="text-sm text-muted-foreground">
                        Show ads based on your interests
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Activity Status</h3>
                      <p className="text-sm text-muted-foreground">
                        Show when you're active on the platform
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-end">
            <Button variant="outline" className="mr-2">
              Cancel
            </Button>
            <Button
              className="bg-gradient-candy hover:opacity-90"
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Settings;
