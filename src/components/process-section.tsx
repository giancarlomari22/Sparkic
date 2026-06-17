const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We talk to your operations team and map the full flow, from the moment a guest orders to the moment food leaves the kitchen. No assumptions.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We design around real workflows, not ideal ones. Every screen and interaction is built for the speed and pressure of an actual shift.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build and test in conditions that reflect real restaurant environments, high volume, parallel orders and the unexpected.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy and stay on. Restaurants run around the clock and so do we, with monitoring and support whenever something needs attention.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[#0b0f1e]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white">
          How We Work
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-2xl font-bold text-[#98D9EB]">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
