import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { newsItems, NewsItem } from "@/data/newsData";
import NewsCard from "@/components/NewsCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  SortDesc,
  SortAsc,
  X,
  ArrowLeft,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<NewsItem[]>([]);
  const [filteredResults, setFilteredResults] = useState<NewsItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("relevance");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  useEffect(() => {
    if (query && query.trim() !== "") {
      setRecentSearches((prev) => {
        const filteredSearches = prev.filter((s) => s !== query);

        return [query, ...filteredSearches].slice(0, 5);
      });
    }
  }, [query]);

  useEffect(() => {
    if (!query || query.trim() === "") {
      setSearchResults([]);
      setFilteredResults([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    const results = newsItems.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.content.toLowerCase().includes(lowerCaseQuery) ||
        item.category.toLowerCase().includes(lowerCaseQuery) ||
        item.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery)) ||
        item.author.name.toLowerCase().includes(lowerCaseQuery)
    );

    setSearchResults(results);
  }, [query]);

  useEffect(() => {
    let filtered = [...searchResults];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    switch (sortBy) {
      case "newest":
        filtered.sort(
          (a, b) =>
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
        );
        break;
      case "oldest":
        filtered.sort(
          (a, b) =>
            new Date(a.publishDate).getTime() -
            new Date(b.publishDate).getTime()
        );
        break;
      case "popularity":
        filtered.sort((a, b) => {
          const aReactions =
            a.reactions.fire +
            a.reactions.mindblown +
            a.reactions.sad +
            a.reactions.cap;
          const bReactions =
            b.reactions.fire +
            b.reactions.mindblown +
            b.reactions.sad +
            b.reactions.cap;
          return bReactions - aReactions;
        });
        break;

      default:
        break;
    }

    setFilteredResults(filtered);
  }, [searchResults, selectedCategory, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const input = (e.target as HTMLFormElement).elements.namedItem(
      "searchInput"
    ) as HTMLInputElement;
    const newQuery = input.value.trim();

    if (newQuery) {
      setSearchParams({ q: newQuery });
    }
  };

  const handleClearSearch = () => {
    setSearchParams({});
  };

  const handleRecentSearchClick = (searchQuery: string) => {
    setSearchParams({ q: searchQuery });
  };

  const handleRemoveRecentSearch = (
    searchQuery: string,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    setRecentSearches((prev) => prev.filter((s) => s !== searchQuery));
  };

  const categories = [
    "all",
    ...Array.from(
      new Set(newsItems.map((item) => item.category.toLowerCase()))
    ),
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 container py-6 px-4 md:py-10">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-3xl font-bold mb-6">
            {query ? `Search Results for "${query}"` : "Search VibeCheck News"}
          </h1>

          <form onSubmit={handleSearch} className="relative mb-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                name="searchInput"
                className="pl-10 pr-10 py-6 text-base genz-input w-full"
                placeholder="Search for news, topics, or authors..."
                defaultValue={query}
              />
              {query && (
                <Button
                  type="button"
                  variant="ghost"
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                  onClick={handleClearSearch}
                >
                  <X className="h-5 w-5" />
                </Button>
              )}
            </div>
            <Button
              type="submit"
              className="absolute right-0 top-0 bg-gradient-candy rounded-l-none h-full"
            >
              Search
            </Button>
          </form>

          {!query && recentSearches.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <h2 className="text-lg font-medium">Recent Searches</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((searchQuery, index) => (
                  <Badge
                    key={index}
                    className="px-3 py-1.5 cursor-pointer hover:bg-primary hover:text-white flex items-center gap-1"
                    onClick={() => handleRecentSearchClick(searchQuery)}
                  >
                    {searchQuery}
                    <X
                      className="h-3 w-3 ml-1 cursor-pointer hover:text-destructive"
                      onClick={(e) => handleRemoveRecentSearch(searchQuery, e)}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {query && (
          <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="text-muted-foreground">
                Found {filteredResults.length}{" "}
                {filteredResults.length === 1 ? "result" : "results"}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Category:</span>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger className="min-w-[150px] h-9">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category, index) => (
                        <SelectItem key={index} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  {sortBy === "newest" || sortBy === "oldest" ? (
                    <SortDesc className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <SortAsc className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="text-sm">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="min-w-[150px] h-9">
                      <SelectValue placeholder="Relevance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="popularity">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Separator className="mb-6" />

            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NewsCard article={article} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any articles matching "{query}"
                </p>
                <p className="text-sm text-muted-foreground mb-4">Try:</p>
                <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                  <li>• Checking your spelling</li>
                  <li>• Using more general keywords</li>
                  <li>• Removing filters</li>
                  <li>• Searching for a different topic</li>
                </ul>
                <Button onClick={handleClearSearch} variant="outline">
                  Clear Search
                </Button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;
