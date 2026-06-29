type ArcCell = { num: string; label: string };

type ArcStripProps = {
  items: ArcCell[];
};

export default function ArcStrip({ items }: ArcStripProps) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <li
          key={item.label}
          className="rounded-[14px] border border-line-card bg-card px-5 py-5"
        >
          <p className="font-serif text-xl leading-none text-brass sm:text-2xl">
            {item.num}
          </p>
          <p className="mt-3 text-sm leading-snug text-text-secondary">
            {item.label}
          </p>
        </li>
      ))}
    </ul>
  );
}
