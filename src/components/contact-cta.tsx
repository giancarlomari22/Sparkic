import Link from "next/link";

export function ContactCta() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s Talk About Your Next Project
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Have an idea or a problem you&apos;d like to solve? Get in touch and
          let&apos;s see how we can help.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="rounded-md bg-blue-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
