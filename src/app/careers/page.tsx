import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { JobListings } from "@/components/job-listings";

export const metadata: Metadata = {
  title: "Careers | Spark Adriatic",
  description:
    "Join the Spark Adriatic team and help shape the future of hospitality technology.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Careers"
        description="Join our team and help build the future of hospitality technology."
      />
      <JobListings />
    </>
  );
}
