type StatGridProps = {
  stats: string[];
  columns?: 2 | 3;
};

export default function StatGrid({ stats, columns = 3 }: StatGridProps) {
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <dl className={`grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line ${cols}`}>
      {stats.map((stat) => (
        <div
          key={stat}
          className="bg-bg px-6 py-7 transition-colors duration-300 hover:bg-bg-secondary"
        >
          <dt className="font-serif text-xl font-normal leading-snug text-text sm:text-2xl">
            {stat}
          </dt>
        </div>
      ))}
    </dl>
  );
}
