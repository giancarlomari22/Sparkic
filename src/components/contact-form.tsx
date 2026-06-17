"use client";

import { useState } from "react";
import { toast } from "sonner";
import { contactSchema, type ContactSchema } from "@/types";

type FieldErrors = Partial<Record<keyof ContactSchema, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactSchema;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    e.currentTarget.reset();
    setErrors({});
    toast.success("Message sent! We'll get back to you within 48 hours.");
  }

  return (
    <section className="bg-[#0b0f1e]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white">
          Send Us a Message
        </h2>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-200"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="mt-1 w-full rounded-md border border-slate-600 bg-[#141829] px-4 py-2 text-white placeholder:text-slate-500 focus:border-[#98D9EB] focus:outline-none"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              className="mt-1 w-full rounded-md border border-slate-600 bg-[#141829] px-4 py-2 text-white placeholder:text-slate-500 focus:border-[#98D9EB] focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your project..."
              className="mt-1 w-full rounded-md border border-slate-600 bg-[#141829] px-4 py-2 text-white placeholder:text-slate-500 focus:border-[#98D9EB] focus:outline-none"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[#98D9EB] py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-[#7fd4e8]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
