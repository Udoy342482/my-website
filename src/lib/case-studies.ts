import { Building2, User, Users, type LucideIcon } from "lucide-react";

export type CaseStudyMeta = { label: string; value: string; sub: string };
export type Highlight = { index: string; title: string; description: string };
export type FieldNote = { label: string; quote: string; insight: string };
export type PersonaItem = {
  icon: LucideIcon;
  title: string;
  tag: string;
  description: string;
};
export type OptionCard = {
  label: string;
  title: string;
  description: string;
  badge: string;
};
export type MetricCard = {
  value: string;
  label: string;
  description: string;
  tone?: "brand" | "destructive";
};
export type IssueCard = { title: string; description: string };
export type KeyDecisionCard = {
  number?: string;
  badge: string;
  title: string;
  description: string;
  highlighted?: boolean;
};

export type CaseStudy = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  meta: CaseStudyMeta[];
  heroEyebrow?: string;
  heroImageCaption: string;
  heroImage?: string;
  overview: {
    title: string;
    paragraphs: string[];
    highlights: Highlight[];
    imageCaption: string;
    image?: string;
  };
  problem: {
    title: string;
    paragraphs: string[];
    quote: string;
    quoteAttribution: string;
  };
  research?: {
    title: string;
    paragraphs: string[];
    notes: FieldNote[];
    imageCaption: string;
    images?: [string, string];
  };
  personas: {
    eyebrow?: string;
    title: string;
    description: string;
    items: PersonaItem[];
  };
  designChallenge?: {
    title: string;
    description: string;
    options: [OptionCard, OptionCard];
    adopted: { badge: string; title: string; description: string };
    comparisonCaptions: [string, string];
    comparisonImages?: [string | undefined, string | undefined];
  };
  keyDecisions?: {
    title: string;
    description: string;
    decisions: KeyDecisionCard[];
  };
  engineering?: {
    title: string;
    description: string;
    theirCase: string;
    myCase: string;
    resolution: string;
    steps: [string, string, string];
    stepImages?: [string, string, string];
  };
  businessDecision?: {
    title: string;
    description: string;
    columnLabels: [string, string];
    rows: { stage: string; a: string; b: string }[];
  };
  outcome: {
    title: string;
    description: string;
    metrics: [MetricCard, MetricCard, MetricCard];
  };
  openProblems: {
    title: string;
    description: string;
    issues: IssueCard[];
  };
  reflection?: {
    title: string;
    paragraphs: [string, string];
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tagcam",
    title: "Tagcam",
    tag: "AI / CAMERA",
    summary:
      "Turning a phone camera into an agentic video pipeline that tags, indexes, and renders footage the moment it's captured.",
    meta: [
      {
        label: "ROLE",
        value: "Lead Product Designer",
        sub: "Solo design, paired closely with ML infra",
      },
      {
        label: "TIMELINE",
        value: "Sep 2023 - Present",
        sub: "10+ months and counting, iterating in production",
      },
      {
        label: "TEAM",
        value: "Founder + ML Infra + Mobile",
        sub: "Cross-functional pod of 5",
      },
      {
        label: "STATUS",
        value: "Live on iOS, Android in beta",
        sub: "Actively scaling the capture pipeline",
      },
    ],
    heroImageCaption:
      "Placeholder: Hero product shot - capture flow and metadata overlay",
    overview: {
      title: "What Tagcam is",
      paragraphs: [
        "Tagcam is an agentic, video-first capture platform. Instead of just recording, the app tags people, objects, and locations at the edge in real time, then renders searchable metadata alongside every clip. Field teams can pull a specific moment back out of hours of footage without ever opening an editor.",
        "I owned design from the first capture prototype through the current production pipeline, working directly with the founder and the ML infra team to keep the interface honest about what the models could and couldn't do yet.",
      ],
      highlights: [
        {
          index: "01 / EDGE TAGGING",
          title: "",
          description:
            "Running lightweight recognition models on-device so tagging keeps up with capture instead of lagging behind it.",
        },
        {
          index: "02 / SEARCHABLE FOOTAGE",
          title: "",
          description:
            "Treating every clip like a database row - operators handle 10M+ tagging operations a month without touching a scrub bar.",
        },
      ],
      imageCaption: "Platform overview - capture, tag review, and search screens",
    },
    problem: {
      title: "Raw footage was a black box",
      paragraphs: [
        "Field teams were shooting hours of video a day and then paying editors to scrub through all of it just to find the fifteen seconds that mattered. Nothing about the raw file told you what was in it.",
        "By the time footage reached a desktop for tagging, the context - who was in frame, what site this was, what happened right before - was already fading from memory. Manual tagging after the fact was slow and consistently wrong.",
      ],
      quote:
        "\"We didn't need a better editor. We needed the camera to know what it was looking at while it was still looking at it.\"",
      quoteAttribution: "- FOUNDER DEBRIEF",
    },
    research: {
      title: "Testing what the models could actually promise",
      paragraphs: [
        "Before designing any capture UI, I ran a two-week shadowing study with six field crews across construction and event-production use cases, logging every moment someone said some version of \"where was that clip again.\"",
        "The key finding: confidence mattered more than coverage. Crews trusted a tag they could correct in one tap far more than a system that tagged everything but was occasionally, silently wrong.",
      ],
      notes: [
        {
          label: "SITE SUPERVISOR, CONSTRUCTION CREW",
          quote:
            "\"I don't need it to catch everything. I need to trust the ten things it does catch.\"",
          insight:
            "- why confidence scoring became a first-class UI element, not a settings toggle",
        },
        {
          label: "EVENT VIDEOGRAPHER",
          quote:
            "\"By the time I'm back at my laptop I've forgotten which take was the good one.\"",
          insight: "- the case for tagging at capture time, not in post",
        },
      ],
      imageCaption:
        "Research synthesis - field shadowing notes and tagging confidence patterns",
    },
    personas: {
      title: "Four people, four different jobs to be done",
      description:
        "Tagcam isn't one editor with one timeline. It's a capture-to-search pipeline, and each role needed a different surface into the same footage.",
      items: [
        {
          icon: Building2,
          title: "Production Lead",
          tag: "[ ROLE #1 ]",
          description:
            "Needs to hand a client a finished reel without re-watching every raw file first.",
        },
        {
          icon: Users,
          title: "Field Operator",
          tag: "[ ROLE #2 ]",
          description: "Shooting continuously, needs tagging that never interrupts the shot.",
        },
        {
          icon: User,
          title: "Solo Creator",
          tag: "[ ROLE #3 ]",
          description:
            "Wants studio-grade organization without hiring an assistant editor.",
        },
        {
          icon: Users,
          title: "Ops Reviewer",
          tag: "[ ROLE #4 ]",
          description:
            "Audits flagged footage after the fact and needs to search by person, site, or timestamp instantly.",
        },
      ],
    },
    designChallenge: {
      title: "The chicken-and-egg of on-device confidence",
      description:
        "Do we show a tag the moment the model guesses, or wait until confidence crosses a threshold? Show too early and operators stop trusting tags. Wait too long and the tag arrives after the moment has passed.",
      options: [
        {
          label: "Option 1",
          title: "Tag on first detection",
          description:
            "Every frame proposal renders immediately. Fast, but flooded the timeline with low-confidence noise operators had to sift through.",
          badge: "✗ Rejected - too noisy to trust",
        },
        {
          label: "Option 2",
          title: "Tag only above 90% confidence",
          description:
            "Clean output, but real-world lighting and motion meant plenty of true tags never crossed the bar and silently disappeared.",
          badge: "✗ Rejected - dropped real tags silently",
        },
      ],
      adopted: {
        badge: "✓ Adopted - keeps every real tag visible and correctable",
        title: "Shipped: Provisional tag, one-tap confirm",
        description:
          "Every detection renders instantly as a provisional (dotted-outline) tag. Confirming or correcting it in one tap both fixes the record and retrains the on-device model for that shoot.",
      },
      comparisonCaptions: [
        "Live capture with provisional tags",
        "Early wireframes/sketches of this flow",
      ],
    },
    engineering: {
      title: "Defending the one-tap confirm loop",
      description:
        "Infra wanted to batch-process tagging on upload to cut on-device compute cost. I had to show why that broke the trust loop research had just validated.",
      theirCase:
        "\"Running detection at capture time burns battery and compute we don't have headroom for on mid-tier Android hardware.\"",
      myCase:
        "\"If confirmation doesn't happen in the moment, operators won't do it at all - and an unconfirmed tag is worse than no tag, because it looks trustworthy and isn't.\"",
      resolution:
        "We kept on-device provisional tagging, but capped it to a lightweight model tier on mid-range devices and deferred only the heavier re-ranking pass to upload, preserving the in-moment confirm loop research showed people actually needed.",
      steps: [
        "1. Live capture with provisional tags",
        "2. The part that needed defending - one-tap confirm loop",
        "3. Confirmed tags synced to the searchable index",
      ],
    },
    businessDecision: {
      title: "Why I pushed back on a flat per-seat price",
      description:
        "The initial model planned to charge a flat monthly seat price regardless of footage volume. I argued for usage-based pricing tied to tagging operations, since seat pricing punished the highest-value power users first.",
      columnLabels: ["INDIVIDUAL", "TEAM"],
      rows: [
        {
          stage: "MVP (NOW)",
          a: "Free tier, capped tagging volume",
          b: "Usage-based, billed per 10k tagging ops",
        },
        {
          stage: "AT 50K ACTIVE",
          a: "Free tier unchanged",
          b: "Volume discounts above 1M ops/month",
        },
        {
          stage: "AT 1M ACTIVE",
          a: "Light subscription for extended storage",
          b: "Enterprise tier with dedicated model tuning",
        },
      ],
    },
    outcome: {
      title: "Live, and proving the tagging loop works",
      description:
        "Tagcam is now processing production footage across its beta customer base. Early metrics validated the confirm loop, while surfacing where confidence scoring still needs work.",
      metrics: [
        {
          value: "Month 1",
          label: "Insight Period",
          description:
            "Detections processed across the beta fleet, tracked from first full month of production use.",
        },
        {
          value: "92%",
          label: "CONFIRM-TAP ACCEPTANCE",
          description:
            "Share of provisional tags operators confirmed instead of correcting or dismissing.",
          tone: "brand",
        },
        {
          value: "8",
          label: "MISTAGGED SITE FLAGS",
          description:
            "Cases where location tagging conflicted with GPS metadata, now feeding a fix.",
          tone: "destructive",
        },
      ],
    },
    openProblems: {
      title: "Being honest about where it stands",
      description:
        "Great design portfolios don't pretend everything is perfect post-launch. Here are the three main live problems still being designed for.",
      issues: [
        {
          title: "Battery drain on sustained capture",
          description:
            "Continuous on-device tagging over 45+ minute shoots still measurably shortens battery life on mid-tier Android devices.",
        },
        {
          title: "Cross-shoot search relevance",
          description:
            "Search ranks tags within a single shoot well, but ranking across a creator's entire archive still needs tuning.",
        },
        {
          title: "False-negative tagging in low light",
          description:
            "Detection confidence drops sharply in low-light event footage, occasionally missing tags entirely instead of flagging them as low-confidence.",
        },
      ],
    },
    reflection: {
      title: "What I'd carry forward",
      paragraphs: [
        "Tagcam taught me that trust in an AI feature is built or lost in the first correction, not the first suggestion. Designing the confirm loop mattered more than designing the detection itself.",
        "If I could rebuild the first phase, I'd instrument confidence-threshold tuning as a visible, per-shoot setting from day one instead of a fixed global value - lighting and motion vary too much across use cases for one number to serve everyone.",
      ],
    },
  },
  {
    slug: "cordia",
    title: "Cordia",
    tag: "DATING APPLICATION",
    summary:
      "A dating app designed for those starting fresh, prioritizing schedules and values over endless swipes.",
    meta: [
      {
        label: "ROLE",
        value: "Product Designer",
        sub: "High-fidelity UI design & interactive prototyping",
      },
      {
        label: "TEAM",
        value: "Glen Potter (Potcor Pty Ltd)",
        sub: "Defined brand direction and authored detailed specifications.",
      },
      {
        label: "STATUS",
        value: "Live on iOS & Android",
        sub: "Early growth stage",
      },
    ],
    heroEyebrow: "CORDIA CASE STUDY",
    heroImageCaption: "Hero product shot - app screens on device mockup",
    heroImage: "/images/case-studies/cordia/hero.png",
    overview: {
      title: "What Cordia is",
      paragraphs: [
        "Cordia (formerly Second Story) connects people based on true compatibility, parental status, availability, values, and dealbreakers not just photos.",
        "I personally crafted the product requirements screen by screen, then designed and developed a fully interactive, pixel-perfect Figma prototype for Glen Potter at Potcor Pty Ltd.",
      ],
      highlights: [
        {
          index: "01 / COMPATIBILITY FIRST",
          title: "",
          description:
            "Capturing parental status, availability, values, and dealbreakers before any match is made.",
        },
        {
          index: "02 / SCHEDULE-AWARE MATCHING",
          title: "",
          description:
            "Visualizing overlapping free time so a match can turn into a date invite with a single tap.",
        },
      ],
      imageCaption: "Platform overview - key screens showing the ecosystem",
      image: "/images/case-studies/cordia/overview.png",
    },
    problem: {
      title: "Endless swiping doesn't work for lives that are already full.",
      paragraphs: [
        "Separated, divorced, single parents, and career-driven daters need quick clarity: does this person's life truly fit mine?",
        "Swipe-first apps focus on quantity, not quality. Cordia flips that approach.",
      ],
      quote:
        "\"Dating should reflect who you are today, not who you were a decade ago.\"",
      quoteAttribution: "- CORDIA.",
    },
    personas: {
      eyebrow: "WHO CORDIA IS BUILT FOR",
      title: "Four life stages, united by the need for genuine connection.",
      description: "Four distinct life stages, clearly identified in the brief.",
      items: [
        {
          icon: Building2,
          title: "Separated or Divorced",
          tag: "[ ROLE #1 ]",
          description: "Starting fresh, seeking something meaningful and lasting.",
        },
        {
          icon: Users,
          title: "Single Parent — Full-Time",
          tag: "[ ROLE #2 ]",
          description:
            "Parenting full-time—matches must understand this commitment.",
        },
        {
          icon: User,
          title: "Single Parent — Shared Custody",
          tag: "[ ROLE #3 ]",
          description:
            "Alternating weeks—availability is as important as chemistry.",
        },
        {
          icon: Users,
          title: "Career-Focused, Ready to Settle",
          tag: "[ ROLE #4 ]",
          description:
            "Established career, now seeking a meaningful relationship.",
        },
      ],
    },
    keyDecisions: {
      title: "Three pivotal choices that shaped the product.",
      description:
        "Not the full specification—just the essentials that define its look, feel, and launch.",
      decisions: [
        {
          number: "01",
          badge: "INTERACTION",
          title: "Tap to decide, swipe to browse.",
          description:
            "Like and dismiss require intentional taps; swiping only scrolls through photos.",
        },
        {
          number: "02",
          badge: "BRAND",
          title: "Cordia front and center, Second Story left behind.",
          description:
            "Originally built as Second Story internally, every public screen proudly displays Cordia.",
        },
        {
          badge: "PRICING",
          title: "Three months free before any payment.",
          description:
            "FRESHSTART unlocks Premium at launch with no credit card needed.",
          highlighted: true,
        },
      ],
    },
    outcome: {
      title: "Available on both stores, early in its growth journey.",
      description:
        "Cordia launched on iOS and Android under Cordia Group Pty Ltd. These figures are verified public store listings, not internal data.",
      metrics: [
        {
          value: "10+",
          label: "GOOGLE PLAY DOWNLOADS",
          description: "Downloads reported on the Google Play Store listing.",
        },
        {
          value: "5.0",
          label: "APP STORE RATING",
          description: "Average rating displayed on the Apple App Store listing.",
        },
        {
          value: "1",
          label: "APP STORE RATINGS COUNT",
          description:
            "Total number of ratings recorded on the Apple App Store listing.",
        },
      ],
    },
    openProblems: {
      title: "Honest about current challenges.",
      description:
        "This shipped as a linked prototype, so 'broken' means gaps in the spec, not user complaints-yet.",
      issues: [
        {
          title: "Onboarding step count inconsistent across specs.",
          description:
            "Most show 'Step X of 13'; one shows 'Step 8 of 10.'",
        },
      ],
    },
  },
  {
    slug: "squadin",
    title: "Squadin",
    tag: "BOOKING PLATFORM",
    summary:
      "Turning turf booking from a phone call into a platform where players, teams, and venues actually find each other.",
    meta: [
      {
        label: "ROLE",
        value: "Product Designer",
        sub: "Solo end-to-end execution",
      },
      {
        label: "TIMELINE",
        value: "Feb 2023 - Jul 2024",
        sub: "1.5 years from concept to launch",
      },
      {
        label: "TEAM",
        value: "Founder + Engineering",
        sub: "Direct collaborative environment",
      },
      {
        label: "STATUS",
        value: "Live on iOS & Android",
        sub: "Actively scaling operations",
      },
    ],
    heroImageCaption: "Squadin - home, match search, and request screens",
    heroImage: "/images/case-studies/squadin/hero.png",
    overview: {
      title: "What Squadin is",
      paragraphs: [
        "Squadin is a turf booking platform that brings players, teams, venues, and organizers onto one system. Instead of just booking a slot, people can find an opponent, join a team that needs one more player, run a competition, and track standings, all in one place. Venue owners list their business and run their own booking campaigns.",
        "I led design from the first user interview through a year of post-launch iteration, working alongside the founder/PM and the second-stage engineering team to take this from an idea to a live app on both stores.",
      ],
      highlights: [
        {
          index: "01 / INTEGRATED FLOWS",
          title: "",
          description:
            "Unifying match finding with immediate automated court reservations.",
        },
        {
          index: "02 / TWO-SIDED VALUE",
          title: "",
          description:
            "Reducing scheduling churn for court owners and minimizing squad shortages for captains.",
        },
      ],
      imageCaption: "Platform overview - key screens showing the ecosystem",
      image: "/images/case-studies/squadin/overview.png",
    },
    problem: {
      title: "Booking a game meant calling around and hoping",
      paragraphs: [
        "Amateur athletic scheduling was entirely fractured. Players struggled to find open slots on phone lines, and turf owners spent hours dealing with sudden cancellations and manual slot reservations.",
        "The issue was doubly severe for independent free agents. Even if they secured a booking, they often lacked enough players to fulfill a game slot, or had their entire schedule compromised when an opponent canceled at the last minute.",
      ],
      quote:
        "\"The idea was simple: you should be able to come to one app, find a game, find people, book the venue, and leave. Nothing about that existed yet.\"",
      quoteAttribution: "- FOUNDER DEBRIEF",
    },
    research: {
      title: "Validating the problem before designing anything",
      paragraphs: [
        "We started with a foundation established by the founder's initial research - an outreach initiative covering 30 turf operators and 100 passionate players. Building on top of this, I directed a 20-person user study session spanning four groups of participants.",
        "The crucial research insight: booking a turf wasn't the fundamental friction point. The real challenge was organizing the humans - finding reliable opponents, managing team rosters, and mitigating coordination-bound drop-offs.",
      ],
      notes: [
        {
          label: "FREE AGENT, INTERVIEWED AT A TURF",
          quote:
            "\"I show up here at 6 PM hoping some team is missing a player and lets me join. If not, I just sit on the bench and go home.\"",
          insight: "- why \"no team\" was the real blocker, not \"no venue\"",
        },
        {
          label: "VENUE OWNER, PHONE INTERVIEW",
          quote:
            "\"Captains text me asking for a slot. I check, suggest another time, they take 4 hours to check with their team, and by then that slot is booked.\"",
          insight:
            "- the timing back-and-forth that later shaped the booking sequence",
        },
      ],
      imageCaption: "Research synthesis - affinity map or interview notes",
      images: [
        "/images/case-studies/squadin/research-1.png",
        "/images/case-studies/squadin/research-2.png",
      ],
    },
    personas: {
      title: "Four people, four different jobs to be done",
      description:
        "Squadin isn't one user with one flow. It's a small marketplace, and each side needed something different from the same app.",
      items: [
        {
          icon: Building2,
          title: "Venue Owner",
          tag: "[ ROLE #1 ]",
          description:
            "Wants bookings without doing sales or scheduling by phone all day.",
        },
        {
          icon: Users,
          title: "Team Captain",
          tag: "[ ROLE #2 ]",
          description: "Has a full team and a home ground. Just needs an opponent.",
        },
        {
          icon: User,
          title: "Free Agent",
          tag: "[ ROLE #3 ]",
          description:
            "Plays well and wants a game, but has no team to get onto the pitch with.",
        },
        {
          icon: Users,
          title: "Incomplete Squad",
          tag: "[ ROLE #4 ]",
          description:
            "Has some players, but missing specific positions before a match.",
        },
      ],
    },
    designChallenge: {
      title: "The chicken-and-egg of booking a venue",
      description:
        "When do we secure the booking? If we book on match request, players lose money if nobody accepts. If we book on match acceptance, the slot might have already vanished.",
      options: [
        {
          label: "Option 1",
          title: "Book venue at request creation",
          description:
            "Requires full payment before the opponent is secured. High friction for requestors.",
          badge: "✗ Rejected - high cancellation rate",
        },
        {
          label: "Option 2",
          title: "Book venue on opponent acceptance",
          description:
            "Opponent accepts, but the court was booked by someone else offline. Unreliable experience.",
          badge: "✗ Rejected - no-shows left venues unpaid and empty",
        },
      ],
      adopted: {
        badge: "✓ Adopted - protects the venue, keeps the booking real",
        title: "Shipped: Hold, confirm, then collect",
        description:
          "Hold the court for 30 minutes. Once an opponent accepts, coordinate confirmation happens automatically before collecting payment split.",
      },
      comparisonCaptions: [
        "Venue hold + confirmation call screen",
        "Early wireframes/sketches of this flow",
      ],
      comparisonImages: [
        "/images/case-studies/squadin/design-challenge-booking-flow.png",
        "/images/case-studies/squadin/design-challenge-wireframe-flow.png",
      ],
    },
    engineering: {
      title: "Defending position-based matching",
      description:
        "Engineering wanted to strip down metadata constraints to ship faster. I had to design a solution that defended user needs without ballooning sprint scope.",
      theirCase:
        "\"Position-based matching adds real build complexity for a feature that could just be 'join this team' with no filtering layer underneath.\"",
      myCase:
        "\"Without it, incomplete squads get flooded with people who don't fill the actual gap. Position matching is what makes a match request useful instead of just noisy.\"",
      resolution:
        "We kept it, but I simplified the onboarding inputs down to a 3-step progressive layout to save weeks of dev overhead while retaining crucial database parameters.",
      steps: [
        "1. Sport, date, and slot",
        "2. The part engineering wanted cut - position, level, age, gender",
        "3. Confirmation before the request goes out",
      ],
      stepImages: [
        "/images/case-studies/squadin/engineering-1.png",
        "/images/case-studies/squadin/engineering-2.png",
        "/images/case-studies/squadin/engineering-3.png",
      ],
    },
    businessDecision: {
      title: "Why I pushed back on subscriptions",
      description:
        "The initial model planned to lock match request creation behind a monthly tier. I argued for a percentage commission on venue booking instead, demonstrating how a subscription barrier kills early network liquidity.",
      columnLabels: ["PLAYER SIDE", "VENUE SIDE"],
      rows: [
        {
          stage: "MVP (NOW)",
          a: "Free match making, free requests",
          b: "Commission-funded per booked slot (low friction)",
        },
        {
          stage: "AT 50K ACTIVE",
          a: "Light subscription, only for creating match/player requests. Booking stays free.",
          b: "Still free",
        },
        {
          stage: "AT 1M ACTIVE",
          a: "Same as above",
          b: "Subscription introduced",
        },
      ],
    },
    outcome: {
      title: "Live, and doing what an MVP is supposed to do",
      description:
        "Squadin is now in production. The metrics from the initial cohorts revealed a robust validation of the matchmaking mechanic, while exposing points of friction we are actively optimizing.",
      metrics: [
        {
          value: "Month 1",
          label: "Insight Period",
          description:
            "This is the insight of the first month which we tracked to check the market fit.",
        },
        {
          value: "89",
          label: "MONTH 1 BOOKINGS",
          description: "Total confirmed games facilitated entirely through the app.",
          tone: "brand",
        },
        {
          value: "13",
          label: "UNPAID CANCELLATIONS",
          description:
            "Canceled when venues called to collect 20% upfront payment.",
          tone: "destructive",
        },
      ],
    },
    openProblems: {
      title: "Being honest about where it stands",
      description:
        "Great design portfolios don't pretend everything is perfect post-launch. Here are the three main live problems we are currently designing solutions for.",
      issues: [
        {
          title: "Low onboarding conversion - drop-off before first booking",
          description:
            "Users download and configure profiles, but stall out before submitting their first match/court hold.",
        },
        {
          title: "Noisy player requests - notifications mismatch",
          description:
            "Notification logic occasionally alerts goalkeepers of open matches looking strictly for forwards.",
        },
        {
          title: "Self-reported skill disputes - sort level complaints",
          description:
            "Teams classify as Beginner, but play like Professionals, creating frustrations during open matched bookings.",
        },
      ],
    },
    reflection: {
      title: "What I'd carry forward",
      paragraphs: [
        "Building Squadin taught me how to operate in a high-speed ecosystem where engineering cost and platform liquidity hold absolute sway. Defending design patterns, like position-based filtering, required proving how they protected core customer retention from getting choked by notification noise.",
        "If I could rebuild the first phase, I would run earlier on-field trials validating how teams actually assess skill-level. Designing for real environments means anticipating human ego - and validating those self-reported parameters before they compromise booking matchmaking.",
      ],
    },
  },
  {
    slug: "epicnap",
    title: "Epicnap",
    tag: "MOBILE / HEALTH",
    summary:
      "Turning a decade of scattered sleep advice into one calm, data-backed nightly ritual people actually stick with.",
    meta: [
      {
        label: "ROLE",
        value: "Product Designer",
        sub: "Solo design, embedded with mobile eng",
      },
      {
        label: "TIMELINE",
        value: "Mar 2022 - Jun 2023",
        sub: "15 months from research to 1.0",
      },
      {
        label: "TEAM",
        value: "Founder + 3 Mobile Engineers",
        sub: "Small, tightly-scoped startup team",
      },
      {
        label: "STATUS",
        value: "Live on iOS & Android",
        sub: "250k+ active sessions tracked",
      },
    ],
    heroImageCaption:
      "Placeholder: Hero product shot - sleep dashboard and wind-down ritual",
    overview: {
      title: "What Epicnap is",
      paragraphs: [
        "Epicnap is a sleep tracker and mindfulness app built for people who've tried every sleep app once and abandoned it within a week. It pairs passive tracking with a short, adaptive wind-down ritual instead of another dashboard full of unexplained numbers.",
        "I led design from the first sleep-diary study through the 1.0 launch, working closely with the founder and three mobile engineers to keep the experience calm enough to actually use at bedtime.",
      ],
      highlights: [
        {
          index: "01 / PASSIVE-FIRST TRACKING",
          title: "",
          description:
            "Sleep data collects itself in the background, so the app never asks for effort at the exact moment someone is trying to wind down.",
        },
        {
          index: "02 / ADAPTIVE RITUAL",
          title: "",
          description:
            "A wind-down sequence that reshapes itself nightly based on that day's stress signals, not a static routine.",
        },
      ],
      imageCaption: "Platform overview - sleep dashboard, wind-down ritual, and trend screens",
    },
    problem: {
      title: "More data made sleep feel more stressful, not less",
      paragraphs: [
        "Existing sleep apps buried people in charts - REM percentages, heart rate variability, sleep scores - without ever answering the question that actually mattered: what should I do differently tonight?",
        "Many of these apps asked for active input right at bedtime - logging mood, setting alarms across five screens - which is precisely the moment someone least wants to interact with a phone. The tools meant to help sleep were often the thing keeping people up.",
      ],
      quote:
        "\"Nobody has ever fallen asleep faster because they understood their HRV chart. I wanted one thing to change before bed, not ten things to read.\"",
      quoteAttribution: "- FOUNDER DEBRIEF",
    },
    research: {
      title: "Watching what people actually do at 11pm",
      paragraphs: [
        "Starting from a two-week sleep-diary study with 25 participants, I ran in-home evening observation sessions with eight of them to see, rather than ask, what bedtime routines actually looked like phone in hand.",
        "The pivotal insight: almost nobody wanted to learn about sleep science at bedtime. They wanted permission to stop scrolling and a single, low-effort cue that it was time to wind down - the data mattered far more the next morning than at night.",
      ],
      notes: [
        {
          label: "PARTICIPANT, SLEEP-DIARY STUDY",
          quote:
            "\"By the time I'm in bed I don't want to think anymore. I just want something to tell me I'm done for the day.\"",
          insight: "- why the ritual had to be near-zero effort at night",
        },
        {
          label: "PARTICIPANT, MORNING FOLLOW-UP",
          quote:
            "\"I actually do want to know what happened, just not right when I'm trying to fall asleep.\"",
          insight: "- the case for deferring insights to a morning summary",
        },
      ],
      imageCaption: "Research synthesis - evening observation notes and bedtime friction points",
    },
    personas: {
      title: "Four people, four different jobs to be done",
      description:
        "Epicnap isn't one sleeper with one routine. Different nights and different bodies needed the ritual to flex without asking for more effort.",
      items: [
        {
          icon: User,
          title: "Restless Sleeper",
          tag: "[ ROLE #1 ]",
          description:
            "Falls asleep fine but wakes repeatedly, and wants to understand why without a science lecture.",
        },
        {
          icon: Users,
          title: "Shift Worker",
          tag: "[ ROLE #2 ]",
          description:
            "Sleep schedule shifts weekly and needs a ritual that adapts instead of assuming a fixed bedtime.",
        },
        {
          icon: Building2,
          title: "Wellness Coach",
          tag: "[ ROLE #3 ]",
          description:
            "Recommends the app to clients and needs shareable, jargon-free summaries.",
        },
        {
          icon: Users,
          title: "New Parent",
          tag: "[ ROLE #4 ]",
          description:
            "Sleep is fragmented into short windows and needs tracking that doesn't assume one continuous night.",
        },
      ],
    },
    designChallenge: {
      title: "The chicken-and-egg of asking for input",
      description:
        "Do we ask people to log how they feel before bed to personalize the ritual, or infer it silently from passive signals? Asking is more accurate but adds friction at the worst possible moment. Inferring is frictionless but risks getting the ritual wrong.",
      options: [
        {
          label: "Option 1",
          title: "Nightly mood check-in before the ritual",
          description:
            "More accurate personalization, but a two-tap survey at bedtime was exactly the friction research said people wanted gone.",
          badge: "✗ Rejected - reintroduced bedtime friction",
        },
        {
          label: "Option 2",
          title: "Fully passive inference, no input",
          description:
            "Zero friction, but the ritual sometimes felt generic on nights with unusual stress the sensors couldn't see.",
          badge: "✗ Rejected - missed real personalization",
        },
      ],
      adopted: {
        badge: "✓ Adopted - near-zero effort, still personal",
        title: "Shipped: One glance-able toggle, not a survey",
        description:
          "A single, optional mood toggle sits on the lock screen widget - answerable in under a second without opening the app - while everything else infers from passive signals.",
      },
      comparisonCaptions: [
        "Lock-screen mood toggle",
        "Early wireframes/sketches of this flow",
      ],
    },
    engineering: {
      title: "Defending nightly ritual personalization",
      description:
        "Mobile eng wanted to ship one fixed wind-down sequence to hit the 1.0 date, deferring personalization to a later release. I had to make the case for shipping adaptive sequencing at launch.",
      theirCase:
        "\"A single fixed ritual sequence is a fraction of the build complexity of one that reshapes itself nightly from sensor and toggle data.\"",
      myCase:
        "\"Research showed the entire pitch of this product is 'this feels made for tonight, not every night' - shipping a static ritual at 1.0 undercuts the one thing that would make people stick around past week one.\"",
      resolution:
        "We kept adaptive sequencing, but reduced it from a fully dynamic model to three ritual variants (calm, restless, short) selected by a lightweight rule set, giving most of the perceived personalization at a fraction of the build cost.",
      steps: [
        "1. Lock-screen mood toggle",
        "2. The part that needed defending - adaptive ritual sequencing",
        "3. Morning summary, deferred insight",
      ],
    },
    businessDecision: {
      title: "Why I pushed back on a hard paywall",
      description:
        "The initial plan put the wind-down ritual entirely behind a subscription from day one. I argued for a free core ritual with premium trend insights instead, since the ritual itself was the retention driver, not a monetizable feature.",
      columnLabels: ["CORE RITUAL", "INSIGHTS"],
      rows: [
        {
          stage: "MVP (NOW)",
          a: "Free, unlimited nightly ritual",
          b: "3-day trend history free, full history paywalled",
        },
        {
          stage: "AT 50K ACTIVE",
          a: "Same, ritual stays free",
          b: "Coach-sharing exports introduced as premium",
        },
        {
          stage: "AT 1M ACTIVE",
          a: "Same, ritual stays free",
          b: "Personalized coaching tier introduced",
        },
      ],
    },
    outcome: {
      title: "Live, and building a real nightly habit",
      description:
        "Epicnap launched on both stores and crossed 250k+ tracked sessions in its first year. Early retention data validated the low-friction ritual while surfacing where the morning summary still needs work.",
      metrics: [
        {
          value: "Month 1",
          label: "Insight Period",
          description:
            "First month of tracked sessions used to check habit formation against the research hypothesis.",
        },
        {
          value: "4.8",
          label: "AVERAGE APP STORE RATING",
          description: "Across 250k+ active tracked sessions in the first year post-launch.",
          tone: "brand",
        },
        {
          value: "39%",
          label: "MORNING SUMMARY SKIP RATE",
          description:
            "Share of users who dismiss the deferred morning insight without opening it.",
          tone: "destructive",
        },
      ],
    },
    openProblems: {
      title: "Being honest about where it stands",
      description:
        "Great design portfolios don't pretend everything is perfect post-launch. Here are the three main live problems still being designed for.",
      issues: [
        {
          title: "Morning summary gets skipped",
          description:
            "A meaningful share of users dismiss the morning summary notification without opening it, so the deferred-insight model may need a lighter touch.",
        },
        {
          title: "Shift-work scheduling still assumes rough regularity",
          description:
            "The adaptive ritual handles moderate schedule drift well, but highly irregular shift patterns still confuse the wind-down timing.",
        },
        {
          title: "Sensor drop-off on older Android devices",
          description:
            "Passive tracking accuracy degrades noticeably on a subset of older Android hardware with less reliable background sensors.",
        },
      ],
    },
    reflection: {
      title: "What I'd carry forward",
      paragraphs: [
        "Epicnap taught me that removing friction is sometimes the entire feature - the wind-down ritual succeeded not because it was clever, but because it asked for almost nothing at the one moment people had nothing left to give.",
        "If I could rebuild the first phase, I'd invest earlier in the morning summary experience instead of treating it as a lower-priority companion screen - deferred insight only works if people actually come back to read it.",
      ],
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getNextCaseStudy(slug: string) {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  return caseStudies[(index + 1) % caseStudies.length];
}
