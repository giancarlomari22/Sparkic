import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getJobBySlug, jobs } from "@/lib/jobs";
import { JobDetail } from "@/components/job-detail";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: `${job.title} | Spark Adriatic`,
    description: job.shortDescription,
  };
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();
  return <JobDetail job={job} />;
}
