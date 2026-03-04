interface BulletSectionProps {
  label: string;
  items: string[];
  accentHex: string;
}

export default function BulletSection({ label, items, accentHex }: BulletSectionProps) {
  return (
    <div className="mb-12">
      <h2
        className="text-xl sm:text-2xl font-bold uppercase tracking-wide mb-5 mt-2"
        style={{ color: accentHex }}
      >
        {label}
      </h2>
      <ul className="flex flex-col gap-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: accentHex + "80" }}
            />
            <span className="text-gray-700 text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
