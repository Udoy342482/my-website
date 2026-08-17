"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSubjects } from "@/lib/portfolio-data";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(80, "That name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email")
    .email("Enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a bit more — at least 10 characters")
    .max(2000, "That message is a little long"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit() {
    // No backend is wired up yet — simulate the round trip so the
    // form's validation and success states are demonstrable end to end.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
    reset();
  }

  return (
    <div className="flex flex-1 flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="font-mono text-2xl font-bold text-foreground">
          SEND A MESSAGE
        </p>
        <p className="text-[15px] text-foreground-secondary">
          Fill out the form below and I will get back to you within 24 hours.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex w-full flex-col gap-5"
      >
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="name" className="font-mono text-[13px] font-bold text-foreground">
              YOUR NAME
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              autoComplete="name"
              className="h-auto rounded-xl border-border px-4 py-3 text-[15px]"
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="email" className="font-mono text-[13px] font-bold text-foreground">
              EMAIL ADDRESS
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              autoComplete="email"
              className="h-auto rounded-xl border-border px-4 py-3 text-[15px]"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="subject" className="font-mono text-[13px] font-bold text-foreground">
            SUBJECT
          </Label>
          <Controller
            name="subject"
            control={control}
            render={({ field }) => (
              <Select
                items={contactSubjects}
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger
                  id="subject"
                  className="h-auto w-full rounded-xl border-border px-4 py-3 text-[15px]"
                  aria-invalid={!!errors.subject}
                >
                  <SelectValue placeholder="Select a subject..." />
                </SelectTrigger>
                <SelectContent>
                  {contactSubjects.map((subject) => (
                    <SelectItem key={subject.value} value={subject.value}>
                      {subject.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.subject && (
            <p className="text-xs text-destructive">{errors.subject.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message" className="font-mono text-[13px] font-bold text-foreground">
            MESSAGE
          </Label>
          <Textarea
            id="message"
            placeholder="Describe your project, timeline, and how I can help..."
            className="h-[160px] rounded-xl border-border px-4 py-3 text-[15px]"
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs text-destructive">{errors.message.message}</p>
          )}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3.5 font-mono text-sm font-bold text-background transition-opacity disabled:opacity-60"
          >
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            <ArrowRight className="size-4" />
          </button>

          {status === "success" && (
            <p className="flex items-center gap-1.5 text-sm text-foreground-secondary">
              <CheckCircle2 className="size-4 text-brand" />
              Message sent — thanks for reaching out.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
