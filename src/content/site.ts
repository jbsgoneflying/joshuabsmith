export type NavLink = { label: string; href: string };
export type WorkCard = { label: string; title: string; body: string[] };
export type ProofPoint = { title: string; body: string };
export type LinkItem = { label: string; href: string };

export const nav = {
  brand: "Joshua b. Smith",
  links: [
    { label: "Built", href: "#built" },
    { label: "Work", href: "#work" },
    { label: "Systems", href: "#systems" },
    { label: "Stewardship", href: "#stewardship" },
    { label: "Contact", href: "#contact" },
  ] as NavLink[],
};

export const hero = {
  title: "Joshua b. Smith",
  subtitle: "Founder. Operator. Systems Builder.",
  description:
    "I build and advise at the intersection of ecommerce growth, AI-assisted operating systems, product strategy, and founder-led execution.",
  longDescription:
    "My work started long before the modern tools existed. From a gym project at 17, to real estate development, ecommerce, supplements, manufacturing, subscription commerce, ocean plastics, and AI-assisted operating systems, the pattern has stayed the same: find the constraint, learn the system, build the bridge, and turn it into leverage.",
  tagline: "Built by effort. Carried by grace.",
  primaryCta: { label: "View the founder arc", href: "#timeline" },
  secondaryCta: { label: "Contact", href: "#contact" },
  stackLabels: ["Data", "Signal", "Judgment", "Execution"],
  arc: [
    { num: "17", label: "First founder project" },
    { num: "1995 to 2019", label: "Built and exited companies" },
    { num: "2019", label: "KEEG acquired by University of California, Irvine" },
    { num: "2021 to now", label: "Advisory, RavenOS, and owned systems" },
  ],
};

export const built = {
  eyebrow: "Origin",
  title: "Built Before It Was Easy",
  timeline: [
    "1990s Web",
    "Payments",
    "Ecommerce",
    "Manufacturing",
    "Reclaimed Plastics",
    "AI Systems",
  ],
  paragraphs: [
    "I started building before the tools made it simple.",
    "In the 90s, I taught myself HTML because I wanted to sell online before ecommerce had a clean playbook. Before modern payment gateways were normal, I wired together cash register logic, Microsoft Access, and early credit card processing so a business could accept payments online.",
    "That pattern kept repeating.",
    "I founded, built, and exited companies across ecommerce, supplements, subscription commerce, manufacturing, and consumer products. Some were pure internet businesses. Some were physical-product and manufacturing companies. Some were built without outside capital, partnerships, or institutional support.",
    "One ecommerce business was acquired by a Chicago-based retail chain. KEEG Ocean Plastics, a physical-products and manufacturing company, was acquired by University of California, Irvine. Along the way, I learned the work at the level it required: HTML, ecommerce, payments, injection molding, extrusion, process control, factory layout, material handling, customer acquisition, subscription retention, and cash flow.",
    "At one point, that meant building and operating a 20,000 sq. ft. plastics factory on US soil and developing a high-speed bulk method for using reclaimed ocean plastics as virgin regrind.",
    "Looking back, I do not see that arc as self-made. I see the Lord\u2019s wisdom, favor, correction, and grace woven through all of it. The opened doors, the hard lessons, the falls, the recoveries, and the ability to keep going were not mine to manufacture.",
    "The category changed. The pattern did not.",
    "Find the constraint. Learn the system. Build the bridge. Be faithful with what is in front of me.",
    "RavenOS, NRGX Labs, InjuryOS, and Versefold are current expressions of that same operating pattern.",
  ],
};

export type TimelineEntry = { period: string; title: string; body: string };

export const founderTimeline = {
  eyebrow: "Founder First",
  title: "Founder Timeline",
  intro:
    "I spent the first 25 years of my career building and operating companies from the inside. Advisory came later. The foundation was founder work: payroll, cash flow, machinery, customer acquisition, inventory, distribution, facilities, subscriptions, exits, and the constant pressure of making the business work.",
  stats: [
    "25+ years founder/operator",
    "Started first company project at 17",
    "6 founder-led companies",
    "Multiple exits",
    "Built without outside capital",
    "$587M+ gross retail sales",
  ],
  entries: [
    {
      period: "1995 to 2000",
      title: "Millennium Gym & Racquetball Club",
      body: "At 17, I helped organize and launch a $2.5M project to build the first fitness center in Eureka Springs, Arkansas. The project included a 12,000 sq. ft. multi-use facility with a fitness center, juice bar, aerobic space, and three racquetball courts. I sold my interest to the remaining managing partners in 2000.",
    },
    {
      period: "2000 to 2008",
      title: "Smith Retail, Inc.",
      body: "Built and operated a real estate development company in Northwest Arkansas focused on greenfield residential and commercial projects. The work included land acquisition, subdivisions of 50 to 100+ homesites, office parks, commercial buildings, apartments, rental homes, contractors, financing, and day-to-day development operations.",
    },
    {
      period: "2000 to 2006",
      title: "ASCG, Inc.",
      body: "Worked in Alaska as a non-destructive evaluation technician across X-ray inspection, ultrasonic inspection, magnetic particle inspection, and dye penetrant inspection. This became an early technical foundation in quality control, physical systems, inspection discipline, and operational precision.",
    },
    {
      period: "2005 to 2009",
      title: "MySupplementStore.com",
      body: "Founded a health and vitamin ecommerce distributor in Bentonville, Arkansas. Built the ecommerce operation, warehouse systems, team, SKU catalog, and customer base. The company carried 44,000 SKUs, served over 150,000 monthly customers, shipped over 1 million orders, and was later sold to a national chain store.",
    },
    {
      period: "2009 to 2017",
      title: "XS Supplements, Inc.",
      body: "Founded a nutraceutical manufacturing company in Republic, Missouri. Developed and launched 37 blended vitamin, performance, and athlete-specific formulas. Built ecommerce, wholesale, retail, manufacturing, packaging, and distribution. Products reached 500+ U.S. retail stores including Vitamin Shoppe, GNC, Walmart, Costco, and Sam\u2019s Club, with international distribution in the UK, Australia, South Africa, and Japan. The company was sold in 2017.",
    },
    {
      period: "2017 to 2019",
      title: "KEEG Ocean Plastics, Inc.",
      body: "Founded and built a manufacturing and ecommerce company around high-tolerance monofilament, extrusion, injection molding, reclaimed materials, Shopify Plus, subscriptions, and direct-to-consumer sales. The company was sold to University of California, Irvine in 2019.",
    },
  ] as TimelineEntry[],
};

export const manufacturing = {
  eyebrow: "The Manufacturing Chapter",
  title: "The Manufacturing Chapter",
  paragraphs: [
    "KEEG Ocean Plastics was the final company in my first 25-year founder/operator arc.",
    "I built two 10,000 sq. ft. manufacturing plants in Springfield, Missouri, sourced and imported the equipment, designed custom tooling and dies, programmed Siemens PLC servo-automation, and hired, trained, and managed the extrusion and injection molding team.",
    "The operation included four monofilament extrusion lines with combined output of roughly 400 lbs. per hour over a 10-hour shift while maintaining tolerances of +/- 0.02mm. We also built a recycling program that reclaimed over 500,000 lbs. of scrap each year.",
    "One of the core breakthroughs was developing a high-speed bulk method for turning reclaimed ocean plastics back into prime regrind for extrusion, injection molding, and sheet molding at scale, including pulls over 10 metric tons.",
    "Alongside the factory, I built and operated a Shopify Plus ecommerce engine that served more than 200,000 customers, processed 850,000+ orders, and supported a monthly subscription box program with 3,700+ members.",
    "KEEG was acquired by University of California, Irvine in 2019.",
  ],
  closing:
    "That exit marked the end of my first founder/operator chapter and the beginning of the advisory chapter.",
  stats: [
    "20,000 sq. ft. US manufacturing footprint",
    "4 extrusion lines",
    "400 lbs/hour output",
    "+/- 0.02mm tolerance",
    "500,000+ lbs reclaimed annually",
    "10+ metric ton reclaimed plastic pulls",
    "200,000+ customers",
    "850,000+ orders",
    "3,700+ subscription members",
    "Acquired by University of California, Irvine",
  ],
};

export const exitsRecognition = {
  eyebrow: "Outside Validation",
  title: "Exits and Recognition",
  paragraphs: [
    "The outside recognition was never the point, but it does mark that the work had real-world weight.",
    "Across that first founder/operator chapter, I built and exited companies across ecommerce, supplements, subscription commerce, manufacturing, and consumer products. One ecommerce business was acquired by a national chain store. XS Supplements was sold in 2017. KEEG Ocean Plastics was acquired by University of California, Irvine in 2019.",
    "Along the way, the work earned recognition including Inc. 5000 honors three years running, a #40 ranking among the fastest-growing retail companies in the U.S., #793 overall among U.S. companies, Inc. Magazine\u2019s \u201c30 Top CEOs Under 30,\u201d and Hewlett Packard\u2019s worldwide Innovative Packaging and Design Award for 2009.",
  ],
  exitsTitle: "Exits",
  exits: [
    "MySupplementStore.com: acquired by a national chain store",
    "XS Supplements: sold in 2017",
    "KEEG Ocean Plastics: acquired by University of California, Irvine",
  ],
  recognitionTitle: "Recognition",
  recognition: [
    "Inc. 5000: three years running",
    "#40 fastest-growing retail company in the U.S.",
    "#793 overall among U.S. companies",
    "Inc. Magazine \u201c30 Top CEOs Under 30\u201d",
    "Hewlett Packard Innovative Packaging and Design Award",
  ],
};

export const advisory = {
  eyebrow: "The Advisory Chapter",
  title: "The Advisory Chapter",
  paragraphs: [
    "After the KEEG Ocean Plastics exit in 2019, advisory became the next chapter.",
    "Upwork was not the origin story. It became the distribution channel for founder/operator judgment built over the prior 25 years.",
    "Since 2021, that advisory work has generated nearly $3M in billings through Upwork while maintaining Expert-Vetted Top 1% status, 100% Job Success, and a premium founder-level positioning. The work has centered on ecommerce growth, Shopify, Klaviyo, CRO, retention, lifecycle systems, subscriptions, offer strategy, and AI-assisted growth analysis.",
    "That chapter also created the raw material for RavenOS: hundreds of founder conversations, dozens of growth blueprints, repeated revenue-leak patterns, and a sharper understanding of where ecommerce businesses quietly lose money.",
  ],
  stats: [
    "2021 to current",
    "Nearly $3M billed",
    "Expert-Vetted Top 1%",
    "100% Job Success",
    "DTC Growth Operator",
    "RavenOS developed from repeated advisory patterns",
  ],
};

export const currentWork = {
  eyebrow: "Current Work",
  title: "Current Work",
  intro:
    "Today, the work is moving from personal advisory into owned systems. RavenOS, NRGX Labs, InjuryOS, and Versefold are not separate side quests. They are current expressions of the same pattern that has followed me since the beginning: understand the system, find the constraint, build the bridge, and make better decisions possible.",
  cards: [
    {
      label: "Growth System",
      title: "RavenOS",
      body: [
        "Private AI-assisted growth analysis system for ecommerce brands.",
        "RavenOS reviews Shopify, Klaviyo, GA4, Meta, and customer data to surface revenue leaks that are easy to miss: failed payments, weak lifecycle flows, cohort decay, discount stacking, checkout friction, poor offer sequencing, low repeat purchase, and revenue hiding inside the existing customer base.",
        "The AI helps dig through the data. I decide what matters.",
      ],
    },
    {
      label: "Research Platform",
      title: "NRGX Labs",
      body: [
        "Invite-only institutional options research platform.",
        "NRGX Labs is built around quant engines, live market-state analysis, structured AI explanations, and production-grade research workflows. The operating philosophy is simple: quant decides, the model explains.",
      ],
    },
    {
      label: "Legal Tech",
      title: "InjuryOS",
      body: [
        "Legal-tech operating system concept for plaintiff-side injury firms.",
        "InjuryOS is being designed around demand capture, intake speed, qualification, nurture, attribution, and signed-case feedback. The goal is to move legal growth from channel-first marketing into a connected operating system.",
      ],
    },
    {
      label: "Scripture App",
      title: "Versefold",
      body: [
        "Scripture-first iOS Bible app concept.",
        "Versefold is designed around quiet reading, contextual study, privacy-aware AI, licensing-aware Bible content, offline reading, and restraint. The product thesis is: Less phone. More Word.",
      ],
    },
  ] as WorkCard[],
};

export const whatIDo = {
  eyebrow: "Engagements",
  title: "What I Do",
  intro: "Most of my client work falls into three lanes.",
  cards: [
    {
      title: "Growth Blueprints",
      body: "Operator-level review of the current growth system: performance snapshot, ranked revenue-leak map, acquisition and lifecycle fixes, retention opportunities, CRO priorities, and a practical 90-day execution plan.",
    },
    {
      title: "Conversion & Retention Sprints",
      body: "Focused work around one visible constraint: funnel efficiency, lifecycle revenue, repeat purchase, email/SMS performance, offer clarity, checkout friction, or revenue per visitor.",
    },
    {
      title: "Founder Growth Advisory",
      body: "Ongoing advisory for founders who want a senior operator watching the business week over week. RavenOS surfaces anomalies, leaks, and opportunities. I review the findings and help turn them into practical decisions.",
    },
  ] as ProofPoint[],
};

export const technicalDepth = {
  eyebrow: "Technical Depth",
  title: "Technical Depth",
  intro: [
    "Outside client work, I build my own software systems. That changes how I see growth problems.",
    "A lot of modern growth issues are no longer only marketing problems. They sit at the intersection of customer behavior, data, product experience, automation, backend logic, lifecycle systems, and decision support.",
  ],
  blocks: [
    {
      title: "NRGX Labs",
      body: "An invite-only institutional options research platform built around 18 quant engines, roughly 190 API routes, 160K+ lines of Python/JS, 1,200+ tests, and layered OpenAI systems that explain deterministic research instead of replacing the logic.",
    },
    {
      title: "Versefold",
      body: "A Scripture-first iOS Bible app concept designed around quiet reading, contextual LLM study, licensing-aware Bible content, offline reading, citation validation, privacy, and native app experience.",
    },
  ] as ProofPoint[],
  closing:
    "The pattern is the same across both: build the underlying system carefully, keep AI in the right role, and make the user experience feel simple even when the machinery underneath is complex.",
};

export const proofPoints = {
  eyebrow: "Selected Proof Points",
  title: "Selected Proof Points",
  intro: "A few NDA-safe examples from past work.",
  cards: [
    {
      title: "DTC Growth",
      body: "Supported a WordPress/WooCommerce DTC brand from roughly $7.6M to $14M+ in annual revenue by tightening PPC, funnel strategy, owned-channel follow-up, acquisition, retention, and campaign performance.",
    },
    {
      title: "Lifecycle Growth",
      body: "Led lifecycle strategy for a premium ecommerce brand where revenue moved from $4.9M to $7.1M, with $5.8M attributed to email and SMS conversions up 174%.",
    },
    {
      title: "High-Volume Acquisition",
      body: "Worked as COO alongside the founder of a giveaway/sweepstakes ecommerce company built from idea to over $25M/year in sales, including Meta, SMS infrastructure, Klaviyo, production, and campaign operations.",
    },
    {
      title: "High-Trust Ecommerce",
      body: "Built growth blueprints for trust-heavy ecommerce categories including precious metals, supplements, luxury goods, technical products, and high-consideration DTC.",
    },
  ] as ProofPoint[],
};

export const howIWork = {
  eyebrow: "Approach",
  title: "How I Work",
  paragraphs: [
    "I look for the real constraint before touching tactics.",
    "That usually means separating traffic quality, offer clarity, product-page friction, checkout leaks, lifecycle capture, retention economics, analytics gaps, and operating cadence.",
    "Most businesses do not need more random ideas. They need the right problem named in the right order.",
  ],
  principles: [
    "Founder judgment first",
    "Data as signal, not decoration",
    "AI as leverage, not strategy",
    "Systems before spikes",
    "Revenue leaks before new complexity",
    "Clear next move over long theory",
  ],
};

export const stewardship = {
  eyebrow: "Foundation",
  title: "Stewardship",
  paragraphs: [
    "I do not see the last 25 years as a self-made story.",
    "I have worked hard, taken risks, built companies, learned systems, and carried real responsibility. But whatever wisdom, favor, endurance, opportunity, correction, and provision I have had came from the Lord.",
    "He opened doors I could not have forced. He carried me through seasons I could not have survived on my own strength. He used both success and failure to shape me.",
    "That is why I see business as stewardship. Build with excellence. Tell the truth. Protect what matters. Be faithful with what has been placed in my hands. Leave the increase to God.",
    "This is the quiet foundation underneath everything I build now.",
  ],
};

export const hatTrick = {
  eyebrow: "Personal Mark",
  title: "One Hat Trick After Another",
  paragraphs: [
    "I have joked for years that my life has been one hat trick after another.",
    "One of my first tattoos was a rabbit being pulled out of the Mad Hatter\u2019s hat. At the time, it felt like a symbol for the way I had always operated: build under pressure, find the hidden move, and pull something unlikely out of an impossible situation.",
    "That old tattoo became a kind of private shorthand for the pattern.",
    "I still understand the image, but I understand it differently now.",
    "What looked like cleverness was often grace. What looked like timing was often provision. What looked like resilience was often the Lord carrying me when I did not have enough strength, wisdom, or margin to carry myself.",
    "Twenty-five years later, that pattern is less about tricks and more about stewardship.",
    "RavenOS, NRGX Labs, Versefold, and the next chapter are all built from the same conviction: find the hidden mechanism, make it useful, build with excellence, and leave the increase to God.",
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Contact",
  intro:
    "For founder-level growth work, technical systems, or serious build conversations, the simplest path is email.",
  email: "jbs@joshuabsmith.io",
  links: [
    { label: "Upwork", href: "https://www.upwork.com/freelancers/jbsmith" },
    { label: "GitHub", href: "https://github.com/jbsgoneflying" },
    { label: "NRGX Labs", href: "https://nrgxlabs.com/" },
    { label: "Versefold", href: "https://versefold.app/" },
  ] as LinkItem[],
  footer: "\u00A9 Joshua b. Smith. Built quietly. Updated occasionally.",
};
