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
            based on the Adriatic coast. We focus on bringing innovation to
            the hospitality industry through technology — from custom
            dashboards and booking tools to point-of-sale systems and
            everything in between.
          </p>
        </div>

        <div className="aspect-video w-full rounded-lg bg-slate-200" />
      </div>
    </section>
  );
}
