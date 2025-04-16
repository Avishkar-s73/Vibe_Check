
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import Bookmarks from "./pages/Bookmarks";
import Trending from "./pages/Trending";
import CrownOrCancel from "./pages/CrownOrCancel";
import CategoryPage from "./pages/CategoryPage";
import Profile from "./pages/Profile";
import Categories from "./pages/Categories";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/article/:id" element={<ArticlePage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/crown-or-cancel" element={<CrownOrCancel />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/profile/:id?" element={<Profile />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
