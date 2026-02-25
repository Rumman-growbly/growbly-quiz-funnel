import type { SocialProof } from "@/lib/profile-content";

interface SocialProofBlockProps {
  proof: SocialProof;
}

export default function SocialProofBlock({ proof }: SocialProofBlockProps) {
  if (!proof.quote) return null;

  return (
    <div className="mb-12 p-6 rounded-2xl bg-brand-light/20 border border-brand-light">
      {proof.metric && (
        <div className="inline-flex items-center gap-2 bg-brand-accent/10 rounded-full px-3 py-1 mb-4">
          <span className="text-brand-accent text-xs font-bold">
            {proof.metric}
          </span>
        </div>
      )}
      <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 italic">
        &ldquo;{proof.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-sm font-bold text-white">
          {proof.author.charAt(0)}
        </div>
        <div>
          <p className="text-gray-900 text-sm font-medium">{proof.author}</p>
          <p className="text-gray-500 text-xs">{proof.company}</p>
        </div>
      </div>
    </div>
  );
}
