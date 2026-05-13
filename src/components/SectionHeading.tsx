interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({ label, title, description, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {label && (
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {label}
        </span>
      )}
      <h2 className="heading-2 mt-2">{title}</h2>
      {description && <p className="body-text mt-4">{description}</p>}
    </div>
  );
}
