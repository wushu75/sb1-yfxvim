"use client";

import { VideoCreator } from "@/components/video-creator";
import { PricingSection } from "@/components/pricing-section";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Create Engaging Videos with AI
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your text into stunning social media videos. Perfect for YouTube Shorts,
            Instagram Reels, and TikTok.
          </p>
        </header>

        <Tabs defaultValue="create" className="space-y-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="create">Create Video</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-4">
            <VideoCreator />
          </TabsContent>

          <TabsContent value="pricing">
            <PricingSection />
          </TabsContent>
        </Tabs>
      </div>

      <SiteFooter />
    </main>
  );
}