"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AnimationWrapper from "./animation/animation-wrapper";
import { AnimationH1 } from "./animation/animation-h1";
import { Calendar, ChevronDown, Sparkles } from "lucide-react";

const ConnectWithMe = () => {
  const [selectedRoles, setSelectedRoles] = useState<string>();
  const [inquiryType, setInquiryType] = useState<string>();

  return (
    <section className="mt-16">
      <AnimationWrapper>
        <div className="relative border border-primary/30 rounded-xl bg-primary/5 p-8 sm:p-12 text-center overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

          <div className="relative z-10">


            <AnimationH1>Let's work together</AnimationH1>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground glow-accent">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a free call
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-sm bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="font-grotesk text-lg">
                    Tell me about yourself
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Please select your input to continue.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label className="text-sm text-muted-foreground">
                      Are you a?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="justify-between w-full border-border/50 hover:border-primary"
                        >
                          {selectedRoles || "Select your role"}
                          <ChevronDown className="w-4 h-4 ml-2" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full bg-card">
                        <DropdownMenuItem onClick={() => setSelectedRoles("Founder")}>
                          Founder
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setSelectedRoles("HR/Company Representative")}
                        >
                          HR/Company Representative
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setSelectedRoles("Other (not related to job)")}
                        >
                          Other (not related to job)
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-sm text-muted-foreground">
                      What is your inquiry about?
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="justify-between w-full border-border/50 hover:border-primary"
                        >
                          {inquiryType || "Select an option"}
                          <ChevronDown className="w-4 h-4 ml-2" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full bg-card">
                        <DropdownMenuItem
                          onClick={() => setInquiryType("Want to hire for a job")}
                        >
                          Want to hire for a job
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setInquiryType("Have some freelance work")}
                        >
                          Have some freelance work
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setInquiryType("Want 1:1 mentoring session")}
                        >
                          Want 1:1 mentoring session
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() =>
                      window.open("https://cal.com/MohakGupta2004", "_blank")
                    }
                  >
                    Continue to Calendar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default ConnectWithMe;
