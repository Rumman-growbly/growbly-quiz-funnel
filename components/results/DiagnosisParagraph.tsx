interface DiagnosisParagraphProps {
  text: string;
}

export default function DiagnosisParagraph({ text }: DiagnosisParagraphProps) {
  return (
    <div className="mb-12">
      <div className="border-l-2 border-brand-accent pl-5">
        <p className="text-base sm:text-lg text-white/80 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
