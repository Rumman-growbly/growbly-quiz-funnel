import type { ProfileContent } from "@/lib/profile-content";

interface ProfileBadgeProps {
  content: ProfileContent;
}

export default function ProfileBadge({ content }: ProfileBadgeProps) {
  return (
    <div className="text-center mb-10">
      {/* Profile pill */}
      <div
        className={`inline-flex items-center gap-2 ${content.badgeColor} border ${content.badgeBorder} rounded-full px-5 py-2 mb-6`}
      >
        <span className="text-brand-light text-sm font-semibold tracking-wide uppercase">
          Your Profile
        </span>
      </div>

      {/* Profile name */}
      <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
        {content.name}
      </h1>

      {/* Tagline */}
      <p className="text-lg sm:text-xl text-brand-muted max-w-md mx-auto leading-relaxed">
        {content.tagline}
      </p>
    </div>
  );
}
