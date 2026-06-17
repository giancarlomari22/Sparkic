import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="bg-[#0b0f1e]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            About Us
          </h2>
          <p className="mt-4 text-slate-400">
            Spark Adriatic is a software development company specializing in
            technology for the restaurant and hospitality industry. We serve
            as the primary tech partner for Dickey&apos;s Barbecue Pit, building
            and maintaining the full stack of systems that keep their
            locations running every day.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block font-semibold text-[#98D9EB] hover:text-[#b8e5f3]"
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
