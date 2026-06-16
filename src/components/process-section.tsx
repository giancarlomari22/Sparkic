const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, your workflows and the problem you're trying to solve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We design an interface and experience that fits how your team actually works.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build, test and refine the solution using modern, reliable technology.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy the solution and stay involved to support and improve it over time.",
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
