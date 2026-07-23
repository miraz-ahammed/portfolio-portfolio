const projectList = [
  {
    slug: "tiles-gallery",
    name: "Tiles Gallery",
    desc: "Premium tiles showcase with smooth animation, auth, and polished UI.",
    longDesc:
      "Tiles Gallery is a visually rich showcase application built to display product tiles with smooth, physics-based animations. It includes a full authentication flow and focuses heavily on polish — micro-interactions, hover states, and responsive layout across devices.",
    tech: ["Next.js", "Tailwind", "JSON Server"],
    live: "https://assignment-eight-project-jbqf.vercel.app/",
    github: "https://github.com/miraz-ahammed/assignment-eight-project",
    previewImage: "/screenshots/tiles-gallery.svg",
    accent: "from-fuchsia-500/20 via-violet-500/10 to-slate-900",
    challenges:
      "Getting the tile animations to stay smooth on lower-end mobile devices was the biggest challenge — I profiled re-renders and moved several animations from JS-driven to CSS-driven transforms to keep everything at 60fps.",
    futurePlans:
      "Planned improvements: a real backend to replace JSON Server, drag-and-drop tile reordering, and a dark/light theme toggle.",
  },
  {
    slug: "keenkeeper",
    name: "Keenkeeper",
    desc: "Relationship tracking dashboard with status cards and smooth filtering.",
    longDesc:
      "Keenkeeper is a dashboard for tracking relationships/contacts with status-based cards, quick filtering, and a clean, scannable layout, built to make it fast to see who needs a follow-up at a glance.",
    tech: ["React", "API", "CSS"],
    live: "https://assignment-seven-six.vercel.app/",
    github: "https://github.com/miraz-ahammed/Assignment-seven",
    previewImage: "/screenshots/keenkeeper.svg",
    accent: "from-emerald-500/20 via-emerald-400/10 to-slate-900",
    challenges:
      "Keeping filtering fast and instant-feeling as the number of cards grew was tricky — I debounced filter input and memoized the filtered list instead of recalculating on every keystroke.",
    futurePlans:
      "Next steps: reminders/notifications for follow-ups, tagging, and a calendar view of upcoming interactions.",
  },
  {
    slug: "skillswap",
    name: "SkillSwap",
    desc: "Marketplace app with auth, Stripe checkout, and dynamic search.",
    longDesc:
      "SkillSwap is a marketplace platform where users can offer and book skills/services. It includes full authentication, a Stripe-powered checkout flow, and dynamic search so users can quickly find the right skill provider.",
    tech: ["React", "Node.js", "MongoDB", "BetterAuth", "Stripe"],
    live: "https://skillswap-client-snowy.vercel.app/",
    github: "https://github.com/miraz-ahammed/skillswap-client",
    previewImage: "/screenshots/skillswap.svg",
    accent: "from-cyan-500/20 via-sky-500/10 to-slate-900",
    challenges:
      "Integrating Stripe checkout securely — without exposing sensitive keys on the client and handling webhook events reliably — took the most time. I also had to design the MongoDB schema carefully to support fast search across skills and users.",
    futurePlans:
      "Planned: ratings & reviews for providers, in-app messaging between buyers and sellers, and admin tools for dispute resolution.",
  },
  {
    slug: "ideavault",
    name: "IdeaVault",
    desc: "Secure notes dashboard with categories, search, and encrypted storage.",
    longDesc:
      "IdeaVault is a private notes application for securely capturing and organizing ideas. Notes are categorized, searchable, and stored with encryption so users can trust their data stays private.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://ideavault-frontend-three.vercel.app/",
    github: "https://github.com/miraz-ahammed/ideavault-frontend",
    previewImage: "/screenshots/ideavault.svg",
    accent: "from-indigo-500/20 via-violet-500/10 to-slate-900",
    challenges:
      "Implementing encryption/decryption without hurting search performance was the main challenge — I settled on field-level encryption for sensitive content only, keeping other fields queryable.",
    futurePlans:
      "Future plans: note sharing with permission levels, rich-text/markdown support, and offline access with sync.",
  },
];

export default projectList;

export function getProjectBySlug(slug) {
  return projectList.find((p) => p.slug === slug);
}