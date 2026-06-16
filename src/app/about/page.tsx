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
        description="We're a team of developers, designers and problem-solvers based on the Adriatic coast, building technology for the hospitality industry."
      />

      <section className="bg-[#0b0f1e]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center text-slate-400">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Our Mission
          </h2>
          <p className="mt-4">
            Spark Adriatic was founded with a simple idea: hospitality
            businesses deserve software and hardware that actually fits the way
            they work. Instead of forcing teams to adapt to generic tools, we
            design custom solutions around real workflows, from booking systems
            and dashboards to point-of-sale and beyond.
          </p>
          <p className="mt-4">
            Our team combines creativity, technology and strategy to take
            projects from a first conversation all the way to a finished
            product, and we stay involved long after launch.
          </p>
        </div>
      </section>

      <ValuesSection />
    </>
  );
}
