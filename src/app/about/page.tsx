import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ValuesSection } from "@/components/values-section";

export const metadata: Metadata = {
  title: "About Us | Spark Adriatic",
  description: "Learn more about Spark Adriatic and the team behind it.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="We build the technology that keeps modern restaurants running — from the app guests order on to the dashboards managers rely on every day."
      />

      <section className="bg-[#0b0f1e]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center text-slate-400">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Who We Are
          </h2>
          <p className="mt-4">
            Spark Adriatic is a software development and technology company
            specializing in digital tools for the restaurant and hospitality
            industry. We serve as the primary technology partner for Dickey&apos;s
            Barbecue Pit, one of the largest barbecue chains in the United
            States, building and maintaining the systems that power their
            day-to-day operations across hundreds of locations.
          </p>
          <p className="mt-4">
            From mobile ordering apps and loyalty programs to kitchen display
            systems and cloud infrastructure, we own the full technology stack
            — designing, building and supporting everything in-house so our
            clients can focus on what they do best.
          </p>
        </div>
      </section>

      <ValuesSection />
    </>
  );
}
