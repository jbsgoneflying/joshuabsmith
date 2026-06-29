import Reveal from "./Reveal";
import type { TimelineEntry } from "@/content/site";

type TimelineProps = {
  entries: TimelineEntry[];
};

export default function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="relative border-l border-line pl-7 sm:pl-10">
      {entries.map((entry, i) => (
        <Reveal as="li" key={entry.title} delay={i * 60} className="relative pb-9 last:pb-0">
          <span
            aria-hidden
            className="absolute -left-[33px] top-[7px] h-[9px] w-[9px] rounded-full bg-brass shadow-[0_0_0_4px_var(--bg)] sm:-left-[45px]"
          />
          <p className="label mb-2 text-brass/75">{entry.period}</p>
          <h3 className="font-serif text-xl font-normal leading-tight text-text sm:text-2xl">
            {entry.title}
          </h3>
          <p className="mt-3 max-w-prose text-[1.02rem] leading-[1.72] text-text-secondary">
            {entry.body}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}
