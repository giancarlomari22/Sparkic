const features = [
  {
    number: "01",
    title: "Restaurant-First Thinking",
    description:
      "Everything we build is designed for the speed, volume and complexity of real restaurant operations, not adapted from generic software.",
  },
  {
    number: "02",
    title: "Full Stack Delivery",
    description:
      "From mobile ordering apps and POS systems to cloud infrastructure and analytics, we own and maintain the entire technology stack.",
  },
  {
    number: "03",
    title: "Proven at Scale",
    description:
      "Our systems power daily operations for Dickey's Barbecue Pit across hundreds of locations throughout the United States.",
  },
  {
    number: "04",
    title: "Built to Last",
    description:
      "We don't hand off and disappear. We stay involved after launch to support, monitor and continuously improve what we build.",
  },
];

export function Features() {
  return (
    <section className="bg-[#0b0f1e]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white">
          What We Do
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="rounded-lg border border-slate-700 p-6"
            >
              <span className="text-2xl font-bold text-[#98D9EB]">
                {feature.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
