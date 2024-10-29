"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Progress } from "@/components/ui/progress";
import { PromptHistory } from "@/components/prompt-history";
import { TemplateSelector } from "@/components/template-selector";
import { PromptSuggestions } from "@/components/prompt-suggestions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Wand2, Upload, Music, Video } from "lucide-react";

export function VideoCreator() {
  const [prompt, setPrompt] = useState("");
  const [duration, setDuration] = useState([30]);
  const [aspectRatio, setAspectRatio] = useState("9:16");
  const [progress, setProgress] = useState(0);
  const [history, setHistory] = useState<string[]>([]);

  const handleGenerate = () => {
    if (prompt.trim()) {
      setHistory((prev) => [prompt, ...prev]);
    }
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <Card className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Video Settings</h2>
          
          <TemplateSelector onSelect={(template) => setPrompt(template)} />

          <div>
            <label className="text-sm font-medium mb-2 block">
              Describe your video
            </label>
            <Textarea
              placeholder="Enter your video prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="h-32"
            />
            <PromptSuggestions onSelect={(suggestion) => setPrompt(suggestion)} />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Duration: {duration}s
            </label>
            <Slider
              value={duration}
              onValueChange={setDuration}
              max={60}
              min={15}
              step={1}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Aspect Ratio
            </label>
            <Select value={aspectRatio} onValueChange={setAspectRatio}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9:16">9:16 (Stories, Reels)</SelectItem>
                <SelectItem value="16:9">16:9 (Landscape)</SelectItem>
                <SelectItem value="1:1">1:1 (Square)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-4">
            <Button variant="outline" className="w-full">
              <Upload className="mr-2 h-4 w-4" />
              Upload Media
            </Button>
            <Button variant="outline" className="w-full">
              <Music className="mr-2 h-4 w-4" />
              Add Music
            </Button>
          </div>

          <Button 
            className="w-full" 
            size="lg"
            onClick={handleGenerate}
          >
            <Wand2 className="mr-2 h-4 w-4" />
            Generate Video
          </Button>

          {progress > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Generating video...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
          )}
        </Card>

        {history.length > 0 && (
          <PromptHistory history={history} onSelect={(prompt) => setPrompt(prompt)} />
        )}
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="rounded-lg overflow-hidden bg-muted">
          <AspectRatio
            ratio={aspectRatio === "9:16" ? 9/16 : aspectRatio === "16:9" ? 16/9 : 1}
            className="bg-muted"
          >
            <div className="w-full h-full flex items-center justify-center">
              <Video className="h-12 w-12 text-muted-foreground" />
            </div>
          </AspectRatio>
        </div>
      </Card>
    </div>
  );
}