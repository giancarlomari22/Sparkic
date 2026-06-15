const values = [
  {
    title: "Innovation First",
    description:
      "We stay on top of new technology so our clients don't have to, and apply it where it actually helps.",
  },
  {
    title: "Built Around You",
    description:
      "No off-the-shelf templates. Every project starts with understanding how your business actually works.",
  },
  {
    title: "Long-Term Partners",
    description:
      "We don't disappear after launch. We stick around to support, maintain and improve what we build.",
  },
];

export function ValuesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
          Our Values
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-lg border border-slate-200 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
