const categories = [
  {
    title: "Software & Apps",
    items: [
      "Guest-facing mobile ordering applications",
      "E-commerce platforms for pickup and delivery",
      "Loyalty programs and digital coupon workflows",
    ],
  },
  {
    title: "Operations Tech",
    items: [
      "Custom point-of-sale (POS) systems",
      "Kitchen Display Systems (KDS) for order routing",
      "Inventory tracking and food cost management",
    ],
  },
  {
    title: "Analytics & Cloud",
    items: [
      "Dashboards for sales, labor and peak-hour data",
      "Supply chain and supplier ordering systems",
      "Cloud infrastructure for multi-location sync",
    ],
  },
];

export function WhatWeBuild() {
  return (
    <section className="bg-[#070b14]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white">
          What We Build
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
          From the app a guest uses to order lunch to the dashboard a manager
          checks at closing time, we build the full stack of technology that
          keeps a modern restaurant running.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-slate-700 p-6"
            >
              <h3 className="text-lg font-semibold text-[#98D9EB]">
                {category.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#98D9EB]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
