interface OutcomeBlockProps {
  text: string;
  accentHex: string;
}

export default function OutcomeBlock({ text, accentHex }: OutcomeBlockProps) {
  return (
    <div
      className="mb-12 rounded-2xl p-6 sm:p-8"
      style={{
        backgroundColor: accentHex + "0a",
        borderLeft: `4px solid ${accentHex}`,
      }}
    >
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
    </div>
  );
}
