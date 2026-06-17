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
        description="From mobile ordering apps and POS systems to data analytics and cloud infrastructure, we build the technology that powers modern restaurant operations."
      />

      <ServicesList />
      <ProcessSection />
    </>
  );
}
