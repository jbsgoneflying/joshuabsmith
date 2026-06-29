import Reveal from "./Reveal";
import ArcStrip from "./ArcStrip";
import OperatingStack from "./visuals/OperatingStack";
import { hero } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_0%,rgba(46,95,79,0.10),transparent_70%)]"
      />
      <div className="container-page relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <h1 className="font-serif text-5xl font-normal leading-[1.05] text-text sm:text-6xl md:text-7xl">
              {hero.title}
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 font-serif text-2xl text-text-secondary sm:text-3xl">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-8 max-w-prose text-lg leading-[1.72] text-text-secondary">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-5 max-w-prose text-[1.05rem] leading-[1.72] text-text-secondary">
              {hero.longDescription}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-7 font-serif text-xl text-brass/90">
              {hero.tagline}
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-lg bg-green px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-[#356b58] focus:outline-none focus-visible:ring-2 focus-visible:ring-brass/60"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-medium text-text transition-colors hover:border-brass/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass/60"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hidden justify-center lg:flex">
          <div className="w-full max-w-[320px]">
            <OperatingStack labels={hero.stackLabels} className="w-full" />
          </div>
        </Reveal>
      </div>

      <div className="container-page relative mt-14 sm:mt-16">
        <Reveal delay={360}>
          <ArcStrip items={hero.arc} />
        </Reveal>
      </div>
    </section>
  );
}
