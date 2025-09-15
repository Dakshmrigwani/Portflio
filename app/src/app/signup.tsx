"use client";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function Signup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const BottomGradient = () => {
    return (
      <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
      </>
    );
  };

  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex w-full flex-col space-y-2", className)}>
        {children}
      </div>
    );
  };

  // Aceternity-style Textarea component
  const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
  >(({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  });
  Textarea.displayName = "Textarea";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xyzdadjg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset the form by clearing all input values
        e.currentTarget.reset();

        // Show success message for 3 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error:", error);

      // Show error message for 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div  id="form" className="mx-auto text-center pt-20 text-2xl font-bold tracking-tight md:text-4xl flex items-center flex-col justify-center gap-4">
        The best way to Collaborate is to
        <PointerHighlight>
          <span>Fill this Form Up</span>
        </PointerHighlight>
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="mx-auto max-w-lg mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          ✅ Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mx-auto max-w-lg mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          ❌ Failed to send message. Please try again.
        </div>
      )}

      <form
        className="my-8 mx-10 max-w-lg relative z-10 mb-10 pb-12"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="Tyler"
              type="text"
              required
              disabled={isSubmitting}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Durden"
              type="text"
              required
              disabled={isSubmitting}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            required
            disabled={isSubmitting}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your project or collaboration idea..."
            rows={4}
            required
            disabled={isSubmitting}
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"} &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </>
  );
}
