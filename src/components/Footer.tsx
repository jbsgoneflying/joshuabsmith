import Image from "next/image";
import Reveal from "./Reveal";
import Monogram from "./visuals/Monogram";
import { contact } from "@/content/site";

export default function Footer() {
  return (
    <section id="contact" className="border-t border-line-soft py-[72px] md:py-[88px] lg:py-[104px]">
      <div className="container-page">
        <Reveal>
          <p className="label mb-4 text-brass/80">{contact.eyebrow}</p>
          <h2 className="font-serif text-3xl font-normal leading-tight text-text sm:text-4xl md:text-5xl">
            {contact.title}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-8 max-w-prose text-lg leading-relaxed text-text-secondary">
            {contact.intro}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <a
            href={`mailto:${contact.email}`}
            className="mt-6 inline-block rounded font-serif text-2xl text-text underline decoration-brass/40 decoration-1 underline-offset-[5px] transition-colors hover:decoration-brass focus:outline-none focus-visible:ring-2 focus-visible:ring-brass/50 sm:text-3xl"
          >
            {contact.email}
          </a>
        </Reveal>

        <Reveal delay={160}>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-2">
            {contact.links.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex min-h-[36px] items-center rounded text-[15px] text-text-secondary transition-colors hover:text-brass focus:outline-none focus-visible:ring-2 focus-visible:ring-brass/50"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 flex items-center justify-between gap-4 border-t border-line-soft pt-8">
            <div className="flex items-center gap-4">
              <Monogram className="h-6 w-6 text-muted" />
              <p className="text-sm text-muted">{contact.footer}</p>
            </div>
            <Image
              src="/hat-rabbit-mark-bone.png"
              alt=""
              aria-hidden
              width={660}
              height={1094}
              className="h-auto w-[22px] opacity-[0.18]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
