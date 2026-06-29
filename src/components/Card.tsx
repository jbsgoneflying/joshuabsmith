type CardProps = {
  label?: string;
  title: string;
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function Card({
  label,
  title,
  children,
  href,
  className = "",
}: CardProps) {
  const inner = (
    <div
      className={`group h-full rounded-[14px] border border-line-card bg-card p-[22px] transition-colors duration-300 hover:border-brass/30 hover:bg-white/[0.045] ${className}`}
    >
      {label && (
        <p className="label mb-5 text-muted transition-colors duration-300 group-hover:text-brass/80">
          {label}
        </p>
      )}
      <h3 className="font-serif text-2xl font-normal leading-tight text-text sm:text-[1.7rem]">
        {title}
      </h3>
      <div className="mt-4 space-y-4 text-[1.02rem] leading-relaxed text-text-secondary">
        {children}
      </div>
    </div>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="block rounded-[14px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brass/50"
      >
        {inner}
      </a>
    );
  }

  return inner;
}
