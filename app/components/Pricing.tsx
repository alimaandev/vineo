const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for freelancers and solo founders.",
    features: [
      "5 Active Projects",
      "Unlimited Clients",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    price: "$49",
    featured: true,
    description: "Built for growing agencies.",
    features: [
      "Unlimited Projects",
      "Unlimited Clients",
      "Advanced Analytics",
      "Team Collaboration",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "$149",
    description: "For larger teams and operations.",
    features: [
      "Everything in Growth",
      "Custom Integrations",
      "Dedicated Manager",
      "Advanced Permissions",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-semibold tracking-tight">
            Pricing that scales
          </h2>

          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Start free and upgrade only when your agency grows.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative
                rounded-3xl
                border
                p-8
                ${
                  plan.featured
                    ? "border-accent-violet bg-card scale-[1.03]"
                    : "border-border bg-card"
                }
              `}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-6 rounded-full bg-accent-violet px-4 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold">
                {plan.name}
              </h3>

              <p className="mt-3 text-text-secondary">
                {plan.description}
              </p>

              <div className="mt-8">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span className="text-text-secondary ml-2">
                  /month
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-text-secondary"
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`
                  mt-10
                  w-full
                  rounded-xl
                  py-3
                  font-medium
                  ${
                    plan.featured
                      ? "bg-white text-black"
                      : "border border-border"
                  }
                `}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}