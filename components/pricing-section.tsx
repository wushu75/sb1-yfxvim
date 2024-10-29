"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out our platform",
    features: [
      "5 videos per month",
      "720p video quality",
      "Basic templates",
      "15-30 second videos",
      "Standard support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for content creators",
    features: [
      "50 videos per month",
      "1080p video quality",
      "Premium templates",
      "Up to 60 second videos",
      "Priority support",
      "Custom fonts",
      "Remove watermark",
    ],
  },
  {
    name: "Business",
    price: "$99",
    description: "For teams and businesses",
    features: [
      "Unlimited videos",
      "4K video quality",
      "Custom templates",
      "Team collaboration",
      "24/7 support",
      "API access",
      "Custom branding",
      "Analytics dashboard",
    ],
  },
];

export function PricingSection() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <Card key={plan.name} className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold">{plan.price}</span>
              {plan.price !== "Free" && (
                <span className="text-muted-foreground">/month</span>
              )}
            </div>
            <p className="text-muted-foreground mt-2">{plan.description}</p>
          </div>

          <ul className="space-y-3 mb-6">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button className="w-full" variant={plan.name === "Pro" ? "default" : "outline"}>
            Get Started
          </Button>
        </Card>
      ))}
    </div>
  );
}