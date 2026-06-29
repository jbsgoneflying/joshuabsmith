type ProofCardProps = {
  title: string;
  copy: string;
};

export default function ProofCard({ title, copy }: ProofCardProps) {
  return (
    <div className="group relative rounded-xl border border-line bg-card p-7 transition-colors duration-300 hover:border-brass/40 sm:p-8">
      <span className="absolute left-0 top-7 h-7 w-px bg-brass/50 transition-all duration-300 group-hover:h-10" />
      <h3 className="font-serif text-xl font-normal leading-tight text-text sm:text-2xl">
        {title}
      </h3>
      <p className="mt-4 text-[1.02rem] leading-relaxed text-text-secondary">
        {copy}
      </p>
    </div>
  );
}
