interface RecommendationListProps {
  includes: string[];
  accentHex: string;
}

export default function RecommendationList({ includes, accentHex }: RecommendationListProps) {
  return (
    <div className="mb-10">
      <h2 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: accentHex }}>
        What&rsquo;s Included
      </h2>
      <div
        className="rounded-2xl border p-6"
        style={{ borderColor: accentHex + "25", backgroundColor: accentHex + "08" }}
      >
        <ul className="flex flex-col gap-3">
          {includes.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: accentHex + "20" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accentHex}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-gray-700 text-sm sm:text-base leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
