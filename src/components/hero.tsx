import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-[#070b14] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Innovative custom solutions for the{" "}
          <span className="text-[#98D9EB]">Hospitality Industry</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          We design and build tailored software and hardware solutions that
          help hospitality businesses run smoother, faster and smarter.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="rounded-md bg-[#98D9EB] px-6 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-[#7fd4e8]"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
