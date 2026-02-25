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
            className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/8 hover:border-white/15 transition-colors"
          >
            <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center text-lg">
              {i === 0 ? "⚙️" : i === 1 ? "🔗" : "📊"}
            </div>
            <div>
              <h3 className="font-semibold text-white text-base mb-1">
                {rec.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {rec.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
