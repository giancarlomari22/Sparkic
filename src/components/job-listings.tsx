import Link from "next/link";
import { jobs } from "@/lib/jobs";

export function JobListings() {
  return (
    <section className="bg-[#0b0f1e]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Open Positions
        </h2>
        <p className="mt-2 text-slate-400">
          We&apos;re always looking for talented people to join our team.
        </p>

        <div className="mt-10 space-y-4">
          {jobs.map((job) => (
            <div
              key={job.slug}
              className="rounded-lg border border-slate-700 p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {job.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap gap-3 text-sm text-slate-400">
                    <span>{job.type}</span>
                    <span>·</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <Link
                  href={`/careers/${job.slug}`}
                  className="rounded-md bg-[#98D9EB] px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-[#7fd4e8]"
                >
                  Apply
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-400">
                {job.shortDescription}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-slate-700 p-8 text-center">
          <h3 className="text-xl font-semibold text-white">
            Don&apos;t see your role?
          </h3>
          <p className="mt-2 text-slate-400">
            We&apos;re always open to hearing from talented people. Send us a
            message and tell us what you can bring to the team.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-[#98D9EB] px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-[#7fd4e8]"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
