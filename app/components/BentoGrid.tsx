const items = [
  {
    title: "Client Management",
    desc: "Everything about your clients in one place."
  },
  {
    title: "Project Tracking",
    desc: "Know exactly what is moving."
  },
  {
    title: "Invoices",
    desc: "Send and track payments."
  },
  {
    title: "Analytics",
    desc: "Understand business growth."
  }
];

export default function BentoGrid() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-5">

          {items.map((item) => (
            <div
              key={item.title}
              className="
              bg-card
              border
              border-border
              rounded-3xl
              p-8
              hover:-translate-y-1
              transition-all
              "
            >
              <h3 className="text-xl font-medium">
                {item.title}
              </h3>

              <p className="mt-4 text-text-secondary">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}