"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const templates = {
  "product": "Showcase [product name] with dynamic transitions and close-up shots highlighting key features. Include text overlays for specifications and pricing.",
  "tutorial": "Create a step-by-step tutorial for [topic] with clear instructions and visual demonstrations. Add progress indicators and timestamps.",
  "lifestyle": "Film a day-in-the-life sequence showing [activity/routine] with smooth transitions and ambient background music.",
  "promotion": "Design an engaging promotional video for [event/service] with bold text animations and energetic visual effects."
};

interface TemplateSelectorProps {
  onSelect: (template: string) => void;
}

export function TemplateSelector({ onSelect }: TemplateSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Choose a Template
      </label>
      <Select onValueChange={(value) => onSelect(templates[value as keyof typeof templates])}>
        <SelectTrigger>
          <SelectValue placeholder="Select a template" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="product">Product Showcase</SelectItem>
          <SelectItem value="tutorial">Tutorial Video</SelectItem>
          <SelectItem value="lifestyle">Lifestyle Content</SelectItem>
          <SelectItem value="promotion">Promotional Video</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}