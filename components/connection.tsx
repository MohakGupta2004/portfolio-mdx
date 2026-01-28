"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ConnectWithMe = () => {
  const [selectedRoles, setSelectedRoles] = useState<string>();
  const [inquiryType, setInquiryType] = useState<string>();
  return (
    <section id="connect-with-me" className="my-12 px-4">
      <div className="w-full h-80 shadow-inner dark:shadow-white/10 border rounded-2xl text-center flex flex-col gap-6 justify-center items-center">
        <h1 className="text-gray-500 dark:text-gray-400 font-grotesk font-bold">
          Scrolled so far?
        </h1>
        <Dialog>
          {" "}
          <DialogTrigger asChild>
            <Button className="bg-card border-2 text-black shadow-inner shadow-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white">
              Book a free call
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle className="font-grotesk text-lg">
                Tell me about yourself
              </DialogTitle>
              <DialogDescription>
                Please select your input to continue.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1" className="text-sm font-grotesk">
                  Are you a?
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="">
                    <Label
                      htmlFor="name-1"
                      className="text-sm font-grotesk border px-3 py-2 rounded-md cursor-pointer"
                    >
                      {selectedRoles ? selectedRoles : "Select your role"}
                    </Label>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card w-full">
                    <DropdownMenuItem
                      onClick={() => setSelectedRoles("Founder")}
                    >
                      Founder
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() =>
                        setSelectedRoles("HR/Company Representative")
                      }
                    >
                      HR/Company Representative
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() =>
                        setSelectedRoles("Other(not related to job)")
                      }
                    >
                      Other(not related to job)
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="grid gap-3">
                <DropdownMenu>
                  <Label htmlFor="name-1" className="text-sm font-grotesk">
                    What is your inquiry about?
                  </Label>
                  <DropdownMenuTrigger asChild>
                    <Label
                      htmlFor="name-1"
                      className="text-sm font-grotesk border px-3 py-2 rounded-md cursor-pointer"
                    >
                      {inquiryType ? inquiryType : "Select an option"}
                    </Label>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card w-full">
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
                      onClick={() =>
                        setInquiryType("Want one and one mentoring session")
                      }
                    >
                      Want one and one mentoring session
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="w-full"
                onClick={() =>
                  window.open("https://cal.com/MohakGupta2004", "_blank")
                }
              >
                Continue
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ConnectWithMe;
