"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Instagram, Video } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { SiTiktok } from "react-icons/si";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Login to Reels.ai</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-3 pt-4">
          <Button variant="outline" className="w-full">
            <Mail className="mr-2 h-4 w-4" />
            Continue with Email
          </Button>
          <Button variant="outline" className="w-full">
            <FcGoogle className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full">
            <Instagram className="mr-2 h-4 w-4" />
            Continue with Instagram
          </Button>
          <Button variant="outline" className="w-full">
            <SiTiktok className="mr-2 h-4 w-4" />
            Continue with TikTok
          </Button>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          By continuing, you agree to our{" "}
          <a href="/terms" className="underline hover:text-primary">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline hover:text-primary">
            Privacy Policy
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
}