interface SocialProofBlockProps {
  testimonial: {
    quote: string;
    author: string;
    company: string;
    metric: string;
  };
}

export default function SocialProofBlock({ testimonial }: SocialProofBlockProps) {
  return (
    <div className="mb-10 p-6 rounded-2xl bg-gray-50 border border-gray-100">
      {testimonial.metric && (
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-3 py-1 mb-4">
          <span className="text-green-700 text-xs font-bold">{testimonial.metric}</span>
        </div>
      )}
      <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="text-gray-900 text-sm font-medium">{testimonial.author}</p>
          <p className="text-gray-500 text-xs">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}
