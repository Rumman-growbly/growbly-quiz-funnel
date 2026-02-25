const stats = [
  { value: "18 hrs", label: "Average hours saved per week per client" },
  { value: "3.2×", label: "Average capacity increase without new hires" },
  { value: "3 weeks", label: "Average time from call to live system" },
];

const testimonials = [
  {
    quote:
      "I thought I needed to hire 2 more people to handle the growth. Turns out I needed a system. Growbly built it in 3 weeks and we haven't looked back.",
    author: "Marcus T.",
    role: "Operations Director, B2B Services",
    metric: "18 hrs/week recovered",
  },
];

export default function SocialProof() {
  return (
    <section className="px-5 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-brand-light/20 border border-brand-light"
            >
              <p className="text-3xl sm:text-4xl font-bold text-brand-accent mb-2">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-7 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100"
          >
            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, j) => (
                <svg
                  key={j}
                  className="w-4 h-4 text-brand-accent fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5 italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-accent flex items-center justify-center text-sm font-bold text-white">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-medium">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
              <div className="hidden sm:block bg-brand-light/50 border border-brand-light rounded-full px-3 py-1">
                <span className="text-brand-accent text-xs font-semibold">
                  {t.metric}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
