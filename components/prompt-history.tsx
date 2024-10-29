"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History } from "lucide-react";

interface PromptHistoryProps {
  history: string[];
  onSelect: (prompt: string) => void;
}

export function PromptHistory({ history, onSelect }: PromptHistoryProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <History className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Your Previous Prompts</h3>
      </div>
      <div className="space-y-2">
        {history.map((prompt, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-start text-left h-auto whitespace-normal"
            onClick={() => onSelect(prompt)}
          >
            {prompt}
          </Button>
        ))}
      </div>
    </Card>
  );
}