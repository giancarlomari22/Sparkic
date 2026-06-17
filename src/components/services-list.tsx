const services = [
  {
    title: "Mobile Ordering Apps",
    description:
      "Guest-facing mobile applications for browsing menus, placing orders and tracking delivery, built for speed and reliability at scale.",
  },
  {
    title: "E-Commerce & Online Ordering",
    description:
      "End-to-end online ordering infrastructure for pickup and delivery, integrated directly with your POS and kitchen systems.",
  },
  {
    title: "Loyalty Programs & Rewards",
    description:
      "Custom reward systems and digital coupon workflows that drive repeat visits and keep guests coming back.",
  },
  {
    title: "Point of Sale Systems",
    description:
      "Custom POS software built around how your staff actually work, handling in-store transactions across single and multi-location operations.",
  },
  {
    title: "Kitchen Display Systems",
    description:
      "Order routing software that sends tickets directly to kitchen monitors, reducing errors and keeping the line moving during peak service.",
  },
  {
    title: "Data Analytics & Dashboards",
    description:
      "Real-time dashboards that track sales, labor metrics, peak hours and inventory so managers always have the full picture.",
  },
];

export function ServicesList() {
  return (
    <section className="bg-[#0b0f1e]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white">
          What We Offer
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-slate-700 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
