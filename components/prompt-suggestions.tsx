"use client";

import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

const suggestions = [
  "Create a dynamic product showcase with smooth transitions and text overlays",
  "Design an engaging tutorial with step-by-step instructions and visual aids",
  "Generate a lifestyle montage with trendy music and quick cuts",
  "Produce a promotional video with energetic effects and bold typography"
];

interface PromptSuggestionsProps {
  onSelect: (suggestion: string) => void;
}

export function PromptSuggestions({ onSelect }: PromptSuggestionsProps) {
  return (
    <div className="mt-2">
      <div className="flex items-center gap-1 mb-2">
        <Lightbulb className="h-4 w-4" />
        <span className="text-sm text-muted-foreground">Suggestions:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => onSelect(suggestion)}
            className="text-xs"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
}