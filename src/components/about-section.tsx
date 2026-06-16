import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            About Us
          </h2>
          <p className="mt-4 text-slate-600">
            We&apos;re a team of developers, designers and problem-solvers
            based on the Adriatic coast, focused on bringing innovation to
            the hospitality industry through technology.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block font-semibold text-blue-500 hover:text-blue-600"
          >
            Learn more about us →
          </Link>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src="/team_photo.webp"
            alt="The Spark Adriatic team"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
