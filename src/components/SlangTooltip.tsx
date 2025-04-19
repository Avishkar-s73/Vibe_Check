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
  if (!article.slangTerms || article.slangTerms.length === 0) {
    return <>{children}</>;
  }

  let content = children as string;
  if (typeof content !== "string") {
    return <>{children}</>;
  }

  const render = () => {
    let result = content;

    article.slangTerms?.forEach(({ term, definition }) => {
      const regex = new RegExp(`\\b${term}\\b`, "gi");

      if (regex.test(content)) {
        regex.lastIndex = 0;

        const replacement = (match: string) => {
          return `<span class="slang-term" data-term="${term}" data-definition="${definition}">${match}</span>`;
        };

        result = result.replace(regex, replacement);
      }
    });

    if (result === content) {
      return children;
    }

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
        alert(`${term}: ${definition}`);
      }
    }
  };

  return render();
};

export default SlangTooltip;
