import type { TierContent } from "@/lib/tier-content";

interface ProfileBadgeProps {
  content: TierContent;
}

export default function ProfileBadge({ content }: ProfileBadgeProps) {
  return (
    <div className="mb-8">
      {/* Tier pill */}
      <div
        className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-5"
        style={{
          backgroundColor: content.accentHex + "18",
          border: `1px solid ${content.accentHex}30`,
        }}
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: content.accentHex }}
        />
        <span
          className="text-sm font-bold tracking-wide uppercase"
          style={{ color: content.accentHex }}
        >
          {content.tag}
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-3">
        {content.headline}
      </h1>

      {/* Subheadline */}
      <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg">
        {content.subheadline}
      </p>
    </div>
  );
}
