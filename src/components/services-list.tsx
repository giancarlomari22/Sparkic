const services = [
  {
    title: "Custom Software Development",
    description:
      "Web apps, dashboards and internal tools built specifically for your business processes.",
  },
  {
    title: "Point of Sale Systems",
    description:
      "Modern POS solutions that fit the way your staff actually work, from the counter to the kitchen.",
  },
  {
    title: "Booking & Reservation Systems",
    description:
      "Online booking flows that reduce no-shows and make life easier for your front desk.",
  },
  {
    title: "Digital Menus & Kiosks",
    description:
      "Self-service screens and digital menus that speed up service and reduce errors.",
  },
  {
    title: "Hardware Integration",
    description:
      "We connect your software with the devices you already use — printers, scanners, payment terminals and more.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, monitoring and support after launch, so things keep running smoothly.",
  },
];

export function ServicesList() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
          What We Offer
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-slate-200 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
