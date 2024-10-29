"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Video, LogIn } from "lucide-react";
import { LoginDialog } from "@/components/login-dialog";
import { useState } from "react";

export function Navigation() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Video className="h-6 w-6" />
          <span className="font-bold text-xl">Reels.ai</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Dashboard
          </Button>
          <Button variant="ghost" size="sm">
            Templates
          </Button>
          <Button variant="ghost" size="sm">
            Help
          </Button>
          <ModeToggle />
          <Button 
            variant="default" 
            size="sm" 
            onClick={() => setShowLogin(true)}
          >
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Button>
        </div>
      </div>
      <LoginDialog open={showLogin} onOpenChange={setShowLogin} />
    </nav>
  );
}