import type { Recommendation } from "@/lib/profile-content";

interface RecommendationListProps {
  recommendations: Recommendation[];
}

export default function RecommendationList({
  recommendations,
}: RecommendationListProps) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold text-brand-accent uppercase tracking-widest mb-6">
        Your Recommended Automation Stack
      </h2>
      <div className="flex flex-col gap-4">
        {recommendations.map((rec, i) => (
          <div
            key={i}
            className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors"
          >
            <div className="shrink-0 w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center text-sm font-bold text-white">
              {i + 1}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-base mb-1">
                {rec.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {rec.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
