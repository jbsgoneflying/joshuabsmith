import Image from "next/image";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ProofCard from "@/components/ProofCard";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import {
  built,
  founderTimeline,
  manufacturing,
  exitsRecognition,
  advisory,
  currentWork,
  whatIDo,
  technicalDepth,
  proofPoints,
  howIWork,
  stewardship,
  hatTrick,
} from "@/content/site";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />

        {/* Built Before It Was Easy */}
        <Section id="built" eyebrow={built.eyebrow} title={built.title}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[200px_1fr]">
            <Reveal className="hidden lg:block">
              <ul className="sticky top-28 space-y-4 border-l border-line pl-6">
                {built.timeline.map((item) => (
                  <li
                    key={item}
                    className="relative text-sm text-muted before:absolute before:-left-[26px] before:top-[0.45rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brass/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="max-w-prose space-y-6 text-lg leading-relaxed text-text-secondary">
              {built.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
          </div>
        </Section>

        {/* Founder Timeline */}
        <Section
          id="timeline"
          eyebrow={founderTimeline.eyebrow}
          title={founderTimeline.title}
        >
          <Reveal className="mb-10 max-w-prose text-lg leading-relaxed text-text-secondary">
            <p>{founderTimeline.intro}</p>
          </Reveal>

          <Reveal className="mb-14">
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
              {founderTimeline.stats.map((stat) => (
                <li
                  key={stat}
                  className="bg-bg px-5 py-4 text-sm leading-snug text-text-secondary"
                >
                  {stat}
                </li>
              ))}
            </ul>
          </Reveal>

          <Timeline entries={founderTimeline.entries} />
        </Section>

        {/* The Manufacturing Chapter */}
        <Section
          id="manufacturing"
          eyebrow={manufacturing.eyebrow}
          title={manufacturing.title}
          large
        >
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
            <Reveal className="max-w-prose space-y-6 text-lg leading-[1.72] text-text-secondary">
              {manufacturing.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="border-l-2 border-brass/50 pl-5 font-serif text-xl leading-relaxed text-text">
                {manufacturing.closing}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <ul className="divide-y divide-line-soft overflow-hidden rounded-[14px] border border-line-card bg-card">
                {manufacturing.stats.map((stat, i) => {
                  const isLast = i === manufacturing.stats.length - 1;
                  return (
                    <li
                      key={stat}
                      className={`px-6 py-4 text-base leading-snug ${
                        isLast ? "font-medium text-brass" : "text-text-secondary"
                      }`}
                    >
                      {stat}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* Exits and Recognition */}
        <Section
          id="exits"
          eyebrow={exitsRecognition.eyebrow}
          title={exitsRecognition.title}
        >
          <Reveal className="mb-12 max-w-prose space-y-6 text-lg leading-relaxed text-text-secondary">
            {exitsRecognition.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[14px] border border-line-card bg-card p-7 sm:p-8">
                <p className="label mb-5 text-brass/80">
                  {exitsRecognition.exitsTitle}
                </p>
                <ul className="space-y-4 text-[1.02rem] leading-relaxed text-text-secondary">
                  {exitsRecognition.exits.map((item) => (
                    <li key={item} className="border-l border-line pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-[14px] border border-line-card bg-card p-7 sm:p-8">
                <p className="label mb-5 text-brass/80">
                  {exitsRecognition.recognitionTitle}
                </p>
                <ul className="space-y-4 text-[1.02rem] leading-relaxed text-text-secondary">
                  {exitsRecognition.recognition.map((item) => (
                    <li key={item} className="border-l border-line pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* The Advisory Chapter */}
        <Section
          id="advisory"
          eyebrow={advisory.eyebrow}
          title={advisory.title}
        >
          <Reveal>
            <div className="rounded-2xl border border-line-card bg-card p-8 sm:p-10">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
                <div className="max-w-prose space-y-6 text-lg leading-[1.72] text-text-secondary">
                  {advisory.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-line-card bg-line-card sm:grid-cols-2 lg:grid-cols-1">
                  {advisory.stats.map((stat) => (
                    <li
                      key={stat}
                      className="bg-bg-secondary px-6 py-4 text-base leading-snug text-text-secondary"
                    >
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* Current Work */}
        <Section id="work" eyebrow={currentWork.eyebrow} title={currentWork.title}>
          <Reveal className="mb-12 max-w-prose text-lg leading-relaxed text-text-secondary">
            <p>{currentWork.intro}</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {currentWork.cards.map((card, i) => (
              <Reveal key={card.title} delay={(i % 2) * 80}>
                <Card label={card.label} title={card.title}>
                  {card.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* What I Do */}
        <Section id="what-i-do" eyebrow={whatIDo.eyebrow} title={whatIDo.title}>
          <Reveal className="mb-12 max-w-prose text-lg leading-relaxed text-text-secondary">
            <p>{whatIDo.intro}</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {whatIDo.cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <Card title={card.title}>
                  <p>{card.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Technical Depth */}
        <Section
          id="systems"
          eyebrow={technicalDepth.eyebrow}
          title={technicalDepth.title}
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal className="max-w-prose space-y-6 text-lg leading-relaxed text-text-secondary">
              {technicalDepth.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={80} className="space-y-6">
              {technicalDepth.blocks.map((block) => (
                <ProofCard
                  key={block.title}
                  title={block.title}
                  copy={block.body}
                />
              ))}
            </Reveal>
          </div>
          <Reveal className="mt-12 max-w-prose text-lg leading-relaxed text-text-secondary">
            <p>{technicalDepth.closing}</p>
          </Reveal>
        </Section>

        {/* Selected Proof Points */}
        <Section
          id="proof"
          eyebrow={proofPoints.eyebrow}
          title={proofPoints.title}
        >
          <Reveal className="mb-12 max-w-prose text-lg leading-relaxed text-text-secondary">
            <p>{proofPoints.intro}</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {proofPoints.cards.map((card, i) => (
              <Reveal key={card.title} delay={(i % 2) * 80}>
                <ProofCard title={card.title} copy={card.body} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* How I Work */}
        <Section id="how-i-work" eyebrow={howIWork.eyebrow} title={howIWork.title}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
            <Reveal className="max-w-prose space-y-6 text-lg leading-relaxed text-text-secondary">
              {howIWork.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={80}>
              <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
                {howIWork.principles.map((principle) => (
                  <li
                    key={principle}
                    className="bg-bg px-5 py-5 text-[1.02rem] text-text"
                  >
                    {principle}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* Stewardship */}
        <Section
          id="stewardship"
          eyebrow={stewardship.eyebrow}
          title={stewardship.title}
          className="py-28 sm:py-40"
        >
          <Reveal className="mx-auto max-w-prose space-y-7 text-xl leading-relaxed text-text-secondary">
            {stewardship.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </Section>

        {/* One Hat Trick After Another */}
        <section id="hat-trick" className="border-t border-line-soft py-[72px] md:py-[88px] lg:py-[104px]">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <Reveal>
                <p className="label mb-4 text-brass/80">{hatTrick.eyebrow}</p>
                <h2 className="font-serif text-3xl font-normal leading-tight text-text sm:text-4xl md:text-5xl">
                  {hatTrick.title}
                </h2>
                <div className="mt-8 max-w-prose space-y-6 text-lg leading-[1.72] text-text-secondary">
                  {hatTrick.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal
                delay={120}
                aria-hidden
                className="mt-4 flex justify-center lg:mt-0 lg:justify-end"
              >
                <Image
                  src="/hat-rabbit-mark-bone.png"
                  alt=""
                  aria-hidden
                  width={660}
                  height={1094}
                  className="h-auto w-[155px] opacity-[0.46] lg:w-[230px] lg:opacity-[0.52]"
                />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* Contact / Footer */}
      <Footer />
    </>
  );
}
