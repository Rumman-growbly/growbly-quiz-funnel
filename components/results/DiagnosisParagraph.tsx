interface DiagnosisParagraphProps {
  text: string;
  accentHex: string;
}

export default function DiagnosisParagraph({ text, accentHex }: DiagnosisParagraphProps) {
  return (
    <div className="mb-10">
      <div
        className="border-l-4 pl-5"
        style={{ borderColor: accentHex }}
      >
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
