const steps = [
  {
    number: "01",
    title: "Answer 6 quick questions",
    description:
      "Tell us about your business, your revenue, and where you feel the most friction. Takes under 2 minutes.",
  },
  {
    number: "02",
    title: "We identify your biggest gap",
    description:
      "Our diagnostic maps your answers to the exact type of automation that will move the needle most for your business.",
  },
  {
    number: "03",
    title: "Get your personalized roadmap",
    description:
      "See your profile, your 3 highest-impact automations, and book a free strategy call to build it.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-5 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto">
            No generic advice. No one-size-fits-all. A diagnostic built around
            your specific situation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden sm:block absolute top-5 left-full h-px bg-gradient-to-r from-brand-accent/30 to-transparent z-0"
                  style={{ width: "calc(100% - 2rem)" }}
                />
              )}
              <div className="relative z-10 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center text-xs font-bold text-white">
                    {step.number}
                  </div>
                  <span className="text-xs font-bold text-brand-accent tracking-widest uppercase">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
