import type { ProfileContent } from "@/lib/profile-content";

// Light-theme badge colors per profile slug
const BADGE_STYLES: Record<string, { bg: string; dot: string; text: string }> = {
  "scaling-operator":   { bg: "bg-blue-50",   dot: "bg-blue-400",   text: "text-blue-700" },
  "revenue-ceiling":    { bg: "bg-green-50",  dot: "bg-green-400",  text: "text-green-700" },
  "firefighter":        { bg: "bg-orange-50", dot: "bg-orange-400", text: "text-orange-700" },
  "bottleneck-builder": { bg: "bg-purple-50", dot: "bg-purple-400", text: "text-purple-700" },
  "not-yet":            { bg: "bg-gray-100",  dot: "bg-gray-400",   text: "text-gray-600" },
};

interface ProfileBadgeProps {
  content: ProfileContent;
}

export default function ProfileBadge({ content }: ProfileBadgeProps) {
  const style = BADGE_STYLES[content.slug] ?? BADGE_STYLES["not-yet"];

  return (
    <div className="text-center mb-10">
      {/* Profile pill */}
      <div className={`inline-flex items-center gap-2 ${style.bg} rounded-full px-5 py-2 mb-6`}>
        <span className={`w-2 h-2 rounded-full ${style.dot}`} />
        <span className={`${style.text} text-sm font-semibold tracking-wide uppercase`}>
          Your Profile
        </span>
      </div>

      {/* Profile name */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
        {content.name}
      </h1>

      {/* Tagline */}
      <p className="text-lg sm:text-xl text-gray-500 max-w-md mx-auto leading-relaxed">
        {content.tagline}
      </p>
    </div>
  );
}
