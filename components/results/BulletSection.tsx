interface BulletSectionProps {
  label: string;
  items: string[];
}

export default function BulletSection({ label, items }: BulletSectionProps) {
  return (
    <div className="mb-10">
      <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
        {label}
      </h2>
      <ul className="flex flex-col gap-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
            <span className="text-gray-700 text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
