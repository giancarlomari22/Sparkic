const values = [
  {
    title: "Built for Hospitality",
    description:
      "We don't build generic software. Everything we create is designed around the real workflows of restaurants and hospitality businesses, because we've spent years learning how they actually operate.",
  },
  {
    title: "Full Stack Ownership",
    description:
      "From the guest-facing app to the cloud backend, we own and maintain every layer of the technology stack. One team, full accountability.",
  },
  {
    title: "Always On",
    description:
      "Restaurants don't stop at 5pm. We build reliable systems that handle the pressure of peak service and stay available when our clients need us most.",
  },
];

export function ValuesSection() {
  return (
    <section className="bg-[#0b0f1e]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white">
          Our Values
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-lg border border-slate-700 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
