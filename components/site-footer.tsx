"use client";

import { Twitter, Discord } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-muted-foreground hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="/press" className="text-muted-foreground hover:text-primary">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="/tutorials" className="text-muted-foreground hover:text-primary">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="/help" className="text-muted-foreground hover:text-primary">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/reelsai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/reelsai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Discord className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Reels.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}