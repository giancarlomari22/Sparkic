import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ServicesList } from "@/components/services-list";
import { ProcessSection } from "@/components/process-section";

export const metadata: Metadata = {
  title: "Services | Spark Adriatic",
  description:
    "Custom software, hardware and support for the hospitality industry.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="From custom software to hardware integrations, we build solutions for every part of your hospitality business."
      />

      <ServicesList />
      <ProcessSection />
    </>
  );
}
