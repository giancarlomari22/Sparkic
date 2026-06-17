"use client";

import { useState } from "react";
import { toast } from "sonner";
import { jobApplicationSchema, type JobApplicationSchema } from "@/types";

type FieldErrors = Partial<Record<keyof JobApplicationSchema, string>>;

type Props = {
  showGithub: boolean;
};

export function JobApplicationForm({ showGithub }: Props) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      linkedin: formData.get("linkedin") as string,
      github: formData.get("github") as string,
    };

    const parsed = jobApplicationSchema.safeParse(data);

    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof JobApplicationSchema;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    const form = e.currentTarget;
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Job application submitted:", parsed.data);
      form.reset();
      setErrors({});
      toast.success("Application sent! We'll be in touch within a few days.");
    } finally {
      setIsLoading(false);
    }
  }

  const inputClass =
    "mt-1 w-full rounded-md border border-slate-600 bg-[#141829] px-4 py-2 text-white placeholder:text-slate-500 focus:border-[#98D9EB] focus:outline-none";
  const labelClass = "block text-sm font-medium text-slate-200";

  return (
    <section id="apply-form" className="bg-[#0b0f1e]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Ready to apply?
        </h2>
        <p className="mt-2 text-slate-400">
          Spark Adriatic is a digital product studio focused on crafting
          high-quality, human-centered digital experiences. We collaborate with
          clients across Europe, bringing ideas to life through technology and
          design.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                className={inputClass}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className={labelClass}>
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                className={inputClass}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              className={inputClass}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+385 91 234 5678"
              className={inputClass}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="linkedin" className={labelClass}>
              LinkedIn profile{" "}
              <span className="text-slate-500">(optional)</span>
            </label>
            <input
              id="linkedin"
              name="linkedin"
              type="url"
              placeholder="https://linkedin.com/in/yourname"
              className={inputClass}
            />
          </div>

          {showGithub && (
            <div>
              <label htmlFor="github" className={labelClass}>
                GitHub profile{" "}
                <span className="text-slate-500">(optional)</span>
              </label>
              <input
                id="github"
                name="github"
                type="url"
                placeholder="https://github.com/yourname"
                className={inputClass}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-[#98D9EB] py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-[#7fd4e8] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Sending..." : "Apply Now"}
          </button>
        </form>
      </div>
    </section>
  );
}
