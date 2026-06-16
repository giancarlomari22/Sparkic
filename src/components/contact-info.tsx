const steps = [
  { step: "1", text: "Send us a message with your project details." },
  { step: "2", text: "We'll get back to you within 48 hours." },
  { step: "3", text: "We set up a call to discuss how we can help." },
];

export function ContactInfo() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Get in Touch
            </h2>
            <p className="mt-4 text-slate-600">
              Whether you have a specific project in mind or just want to
              explore what&apos;s possible, we&apos;d love to hear from you.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              What happens next?
            </h3>
            <ol className="mt-4 space-y-4">
              {steps.map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <p className="pt-1 text-slate-600">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
