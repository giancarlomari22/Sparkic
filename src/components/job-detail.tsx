import Link from "next/link";
import type { Job } from "@/lib/jobs";
import { JobApplicationForm } from "@/components/job-application-form";

function SparkIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/spark_icon.svg"
      alt=""
      width={16}
      height={16}
      className="mt-0.5 shrink-0"
    />
  );
}

type SectionProps = {
  title: string;
  items: string[];
};

function BulletSection({ title, items }: SectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      <ul className="mt-6 space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <SparkIcon />
            <span className="text-slate-400">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type Props = {
  job: Job;
};

export function JobDetail({ job }: Props) {
  return (
    <>
      <section className="bg-[#070b14] text-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Link
            href="/careers"
            className="text-sm text-slate-400 hover:text-[#98D9EB] transition-colors"
          >
            ← Back to Careers
          </Link>

          <h1 className="mt-6 text-4xl font-bold tracking-tight">
            {job.title}
          </h1>

          <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-400">
            <span>{job.type}</span>
            <span>·</span>
            <span>{job.location}</span>
          </div>

          <p className="mt-6 max-w-2xl text-slate-400">{job.intro}</p>

          <a
            href="#apply-form"
            className="mt-8 inline-block rounded-md bg-[#98D9EB] px-6 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-[#7fd4e8]"
          >
            Apply Now
          </a>
        </div>
      </section>

      <section className="bg-[#0b0f1e]">
        <div className="mx-auto max-w-4xl space-y-16 px-6 py-20">
          <BulletSection title="About the Role" items={job.aboutRole} />
          <BulletSection title="What We're Looking For" items={job.requirements} />
          <BulletSection title="What We Offer" items={job.offer} />
        </div>
      </section>

      <JobApplicationForm showGithub={job.showGithub} />
    </>
  );
}
