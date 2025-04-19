import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  Bookmark,
  Home as HomeIcon,
  Trash2,
  Sun,
  Moon,
  CrownIcon,
  TrendingUp,
  Grid,
  X,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { newsItems } from "@/data/newsData";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [quickSearchResults, setQuickSearchResults] = useState<
    typeof newsItems
  >([]);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      content: "Your post is trending in Technology",
      time: "2 minutes ago",
      icon: "🔥",
    },
    {
      id: 2,
      content: "Crown or Cancel results are in!",
      time: "1 hour ago",
      icon: "👑",
    },
    {
      id: 3,
      content: "New comment on your saved article",
      time: "5 hours ago",
      icon: "💬",
    },
  ]);

  const isMobile = useIsMobile();
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    setIsSearchOpen(false);
    setSearchValue("");
    setQuickSearchResults([]);
  }, [location.pathname]);

  useEffect(() => {
    if (searchValue.trim().length >= 2) {
      const lowerCaseQuery = searchValue.toLowerCase();
      const results = newsItems
        .filter(
          (item) =>
            item.title.toLowerCase().includes(lowerCaseQuery) ||
            item.category.toLowerCase().includes(lowerCaseQuery)
        )
        .slice(0, 3);

      setQuickSearchResults(results);
    } else {
      setQuickSearchResults([]);
    }
  }, [searchValue]);

  const handleQuickLogin = () => {
    login();
    toast({
      title: "Logged in!",
      description: "Welcome back to VibeCheck News",
      duration: 3000,
    });
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out!",
      description: "See you soon!",
      duration: 3000,
    });
  };

  const handleDeleteNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
    toast({
      title: "Notification deleted",
      description: "The notification has been removed",
      duration: 2000,
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setIsSearchOpen(false);
    }
  };

  const handleQuickResultClick = (id: string) => {
    navigate(`/article/${id}`);
    setIsSearchOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-16 items-center px-0 sm:px-8">
          <div className="flex items-center gap-2 flex-shrink-0 mr-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[280px] sm:w-[350px] bg-background"
              >
                <div className="py-4">
                  <Link to="/" className="flex items-center gap-2 mb-6">
                    <div className="relative w-8 h-8">
                      <div className="absolute inset-0 bg-gradient-candy rounded-full animate-pulse"></div>
                      <div className="absolute inset-0.5 bg-background rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold">V</span>
                      </div>
                    </div>
                    <span className="text-xl font-heading font-extrabold tracking-tight">
                      VIBE<span className="text-primary">CHECK</span>
                    </span>
                  </Link>
                </div>

                <nav className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                      MAIN NAVIGATION
                    </h4>
                    <div className="space-y-1">
                      <Link
                        to="/"
                        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors ${
                          isActive("/") ? "bg-muted" : ""
                        }`}
                      >
                        <HomeIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Home</span>
                      </Link>
                      <Link
                        to="/trending"
                        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors ${
                          isActive("/trending") ? "bg-muted" : ""
                        }`}
                      >
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <span className="font-medium">Trending</span>
                      </Link>
                      <Link
                        to="/crown-or-cancel"
                        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors ${
                          isActive("/crown-or-cancel") ? "bg-muted" : ""
                        }`}
                      >
                        <CrownIcon className="h-5 w-5 text-primary" />
                        <span className="font-medium">Crown or Cancel</span>
                      </Link>
                      <Link
                        to="/categories"
                        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors ${
                          isActive("/categories") ? "bg-muted" : ""
                        }`}
                      >
                        <Grid className="h-5 w-5 text-primary" />
                        <span className="font-medium">Categories</span>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                      CATEGORIES
                    </h4>
                    <div className="space-y-1">
                      <Link
                        to="/category/entertainment"
                        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors ${
                          isActive("/category/entertainment") ? "bg-muted" : ""
                        }`}
                      >
                        <span className="h-5 w-5 flex items-center justify-center text-primary">
                          🎭
                        </span>
                        <span className="font-medium">Entertainment</span>
                      </Link>
                      <Link
                        to="/category/technology"
                        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors ${
                          isActive("/category/technology") ? "bg-muted" : ""
                        }`}
                      >
                        <span className="h-5 w-5 flex items-center justify-center text-primary">
                          💻
                        </span>
                        <span className="font-medium">Technology</span>
                      </Link>
                      <Link
                        to="/category/fashion"
                        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors ${
                          isActive("/category/fashion") ? "bg-muted" : ""
                        }`}
                      >
                        <span className="h-5 w-5 flex items-center justify-center text-primary">
                          👗
                        </span>
                        <span className="font-medium">Fashion</span>
                      </Link>
                      <Link
                        to="/category/environment"
                        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors ${
                          isActive("/category/environment") ? "bg-muted" : ""
                        }`}
                      >
                        <span className="h-5 w-5 flex items-center justify-center text-primary">
                          🌍
                        </span>
                        <span className="font-medium">Environment</span>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                      YOUR STUFF
                    </h4>
                    <div className="space-y-1">
                      <Link
                        to="/bookmarks"
                        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors ${
                          isActive("/bookmarks") ? "bg-muted" : ""
                        }`}
                      >
                        <Bookmark className="h-5 w-5 text-primary" />
                        <span className="font-medium">Saved News</span>
                      </Link>
                      <Link
                        to="/settings"
                        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors ${
                          isActive("/settings") ? "bg-muted" : ""
                        }`}
                      >
                        <Settings className="h-5 w-5 text-primary" />
                        <span className="font-medium">Settings</span>
                      </Link>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            <Link to="/" className="flex items-center gap-2">
              <motion.div
                className="relative w-8 h-8"
                whileHover={{
                  rotate: [0, -10, 10, -10, 10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <div className="absolute inset-0 bg-gradient-candy rounded-full animate-pulse"></div>
                <div className="absolute inset-0.5 bg-background rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">V</span>
                </div>
              </motion.div>
              <span className="text-xl font-heading font-extrabold tracking-tight">
                VIBE<span className="text-primary">CHECK</span>
              </span>
            </Link>
          </div>

          <div className="flex-1 mx-2 hidden md:block">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  className="genz-input w-full py-2 pl-10 pr-4 text-sm focus:ring-primary focus:border-primary"
                  placeholder="Search VibeCheck News..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                {searchValue && (
                  <Button
                    type="button"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                    onClick={() => setSearchValue("")}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>

              {quickSearchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-background rounded-md shadow-lg border z-50 max-h-[300px] overflow-auto">
                  <div className="p-2">
                    {quickSearchResults.map((result) => (
                      <div
                        key={result.id}
                        className="p-2 hover:bg-muted rounded-md cursor-pointer"
                        onClick={() => handleQuickResultClick(result.id)}
                      >
                        <p className="font-medium text-sm truncate">
                          {result.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {result.category}
                        </p>
                      </div>
                    ))}
                    <div
                      className="p-2 mt-1 bg-primary/10 hover:bg-primary/20 rounded-md cursor-pointer text-center"
                      onClick={() =>
                        navigate(
                          `/search?q=${encodeURIComponent(searchValue.trim())}`
                        )
                      }
                    >
                      <p className="text-sm font-medium">See all results</p>
                    </div>
                  </div>
                </div>
              )}

              {searchValue.trim().length >= 2 &&
                quickSearchResults.length === 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-background rounded-md shadow-lg border z-50">
                    <div className="p-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        No results found for "{searchValue}"
                      </p>
                    </div>
                  </div>
                )}
            </form>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {notifications.length > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-background"
              >
                <div className="py-4">
                  <h2 className="text-xl font-bold mb-4">Notifications</h2>
                  <div className="space-y-4">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors relative group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                              {notification.icon}
                            </div>
                            <div>
                              <p className="font-medium text-sm">
                                {notification.content}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {notification.time}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() =>
                                handleDeleteNotification(notification.id)
                              }
                            >
                              <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8">
                        <Bell className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">
                          No notifications yet
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {!isLoggedIn ? (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs hidden md:flex"
                  onClick={handleQuickLogin}
                >
                  Login
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="rounded-full text-xs hidden md:flex bg-gradient-candy hover:opacity-90 transition-opacity"
                  onClick={handleQuickLogin}
                >
                  Sign Up
                </Button>
              </div>
            ) : null}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer"
                >
                  <Avatar className="h-9 w-9 hover:ring-2 hover:ring-primary transition-all">
                    <AvatarImage
                      src={isLoggedIn ? "/profile-pic.png" : ""}
                      alt="User"
                    />
                    {isLoggedIn ? (
                      <AvatarFallback>VC</AvatarFallback>
                    ) : (
                      <AvatarFallback className="bg-muted">
                        <User className="h-4 w-4 text-muted-foreground" />
                      </AvatarFallback>
                    )}
                  </Avatar>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-popover">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {isLoggedIn ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/profile"
                        className="cursor-pointer flex items-center"
                      >
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/bookmarks"
                        className="cursor-pointer flex items-center"
                      >
                        <Bookmark className="mr-2 h-4 w-4" />
                        <span>Saved News</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/settings"
                        className="cursor-pointer flex items-center"
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer flex items-center text-destructive"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem onClick={handleQuickLogin}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Login</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleQuickLogin}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Sign Up</span>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {isMobile && isSearchOpen && (
          <div className="absolute inset-x-0 top-full z-50 bg-background border-b p-4">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  className="genz-input w-full py-2 pl-10 pr-4 text-sm focus:ring-primary focus:border-primary"
                  placeholder="Search VibeCheck News..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  autoFocus
                />
                {searchValue && (
                  <Button
                    type="button"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                    onClick={() => setSearchValue("")}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>

              {quickSearchResults.length > 0 && (
                <div className="mt-2 bg-background rounded-md z-50 max-h-[300px] overflow-auto">
                  <div className="p-2">
                    {quickSearchResults.map((result) => (
                      <div
                        key={result.id}
                        className="p-2 hover:bg-muted rounded-md cursor-pointer"
                        onClick={() => handleQuickResultClick(result.id)}
                      >
                        <p className="font-medium text-sm truncate">
                          {result.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {result.category}
                        </p>
                      </div>
                    ))}
                    <div
                      className="p-2 mt-1 bg-primary/10 hover:bg-primary/20 rounded-md cursor-pointer text-center"
                      onClick={() =>
                        navigate(
                          `/search?q=${encodeURIComponent(searchValue.trim())}`
                        )
                      }
                    >
                      <p className="text-sm font-medium">See all results</p>
                    </div>
                  </div>
                </div>
              )}

              {searchValue.trim().length >= 2 &&
                quickSearchResults.length === 0 && (
                  <div className="mt-2 bg-background rounded-md z-50">
                    <div className="p-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        No results found for "{searchValue}"
                      </p>
                    </div>
                  </div>
                )}
            </form>
          </div>
        )}
      </header>

      <div className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b py-1 sticky top-16 z-40">
        <div className="container">
          <nav className="flex items-center justify-between md:justify-start space-x-1 sm:space-x-2 w-full overflow-x-auto py-2">
            {[
              { icon: HomeIcon, text: "Home", path: "/" },
              { icon: TrendingUp, text: "Trending", path: "/trending" },
              {
                icon: CrownIcon,
                text: "Crown or Cancel",
                path: "/crown-or-cancel",
              },
              { icon: Grid, text: "Categories", path: "/categories" },
              { icon: Bookmark, text: "Saved", path: "/bookmarks" },
            ].map(({ icon: Icon, text, path }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <Icon className="h-4 w-4 md:mr-2" />
                {!isMobile && <span>{text}</span>}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
