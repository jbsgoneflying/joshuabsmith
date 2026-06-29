import Reveal from "./Reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  large?: boolean;
};

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
  bordered = true,
  large = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${bordered ? "border-t border-line-soft" : ""} py-[72px] md:py-[88px] lg:py-[104px] ${className}`}
    >
      <div className="container-page">
        {(eyebrow || title) && (
          <Reveal className={large ? "mb-12 sm:mb-16" : "mb-10 sm:mb-14"}>
            {eyebrow && (
              <p className="label mb-4 text-brass/80">{eyebrow}</p>
            )}
            {title && (
              <h2
                className={`font-serif font-normal leading-tight text-text ${
                  large
                    ? "text-4xl sm:text-5xl md:text-6xl"
                    : "text-3xl sm:text-4xl md:text-5xl"
                }`}
              >
                {title}
              </h2>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
