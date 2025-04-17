import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NewsItem } from "@/data/newsData";

interface SlangTooltipProps {
  article: NewsItem;
  children: ReactNode;
}

const SlangTooltip: React.FC<SlangTooltipProps> = ({ article, children }) => {
  // If no slang terms, just return the children
  if (!article.slangTerms || article.slangTerms.length === 0) {
    return <>{children}</>;
  }

  // Find all slang terms in the children text
  let content = children as string;
  if (typeof content !== "string") {
    return <>{children}</>;
  }

  // For each slang term, wrap it in a tooltip
  const render = () => {
    let result = content;

    article.slangTerms?.forEach(({ term, definition }) => {
      // Case insensitive search
      const regex = new RegExp(`\\b${term}\\b`, "gi");

      // Check if the term exists in the content
      if (regex.test(content)) {
        // Reset regex
        regex.lastIndex = 0;

        // Replace with tooltip
        const replacement = (match: string) => {
          return `<span class="slang-term" data-term="${term}" data-definition="${definition}">${match}</span>`;
        };

        result = result.replace(regex, replacement);
      }
    });

    // If no replacements were made, return the original
    if (result === content) {
      return children;
    }

    // Parse the resulting HTML
    return (
      <span
        dangerouslySetInnerHTML={{ __html: result }}
        onClick={handleTooltipClick}
      />
    );
  };

  const handleTooltipClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains("slang-term")) {
      const term = target.getAttribute("data-term");
      const definition = target.getAttribute("data-definition");

      if (term && definition) {
        // Show tooltip (in a real app, you'd use a more sophisticated tooltip)
        alert(`${term}: ${definition}`);
      }
    }
  };

  return render();
};

export default SlangTooltip;
