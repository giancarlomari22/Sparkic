const features = [
  {
    number: "01",
    title: "Custom-Built Solutions",
    description:
      "Every solution is designed and built around your business, not a one-size-fits-all template.",
  },
  {
    number: "02",
    title: "End-to-End Service",
    description:
      "From concept to launch, we handle design, development and deployment — all in one place.",
  },
  {
    number: "03",
    title: "Proven Results",
    description:
      "Trusted by hospitality brands across Europe to deliver software and hardware that works.",
  },
  {
    number: "04",
    title: "Innovative Approach",
    description:
      "We combine creativity, technology and strategy to solve real problems in the hospitality industry.",
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
              <span className="text-2xl font-bold text-teal-400">
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
