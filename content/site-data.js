window.PORTFOLIO_CONTENT = {
  identity: {
    name: "Rachel Branscombe",
    initials: "RB",
    role: "Graphic Designer",
    location: "United Kingdom",
    email: "hello@example.com",
    availability: "Available for branding, editorial, UI/UX, information design, and mixed-media commissions.",
  },
  navigation: [
    { label: "Work", href: "#work" },
    { label: "CV", href: "#cv" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Portfolio / Graphic Design / 2026",
    title: ["Rachel", "Branscombe"],
    copy:
      "I am a graphic designer and BA (Hons) Graphic Communication graduate from the Department of Typography and Graphic Communication at the University of Reading.",
    image: {
      src: "./content/images/swiss-portfolio-flatlay.png",
      alt: "Swiss modernist portfolio materials arranged on a precise design grid.",
      label: "Archive 00 / Visual Systems",
    },
    actions: [
      { label: "View selected work", href: "#work", variant: "primary" },
      { label: "Contact", href: "#contact", variant: "secondary" },
    ],
  },
  workIntro:
    "I use this space for branding, editorial, UI/UX, information design, and miscellaneous projects, with room for images, embeds, links, and article-style case studies.",
  filters: ["All", "Branding", "Editorial", "UI/UX", "Information design", "Misc"],
  projects: [
    {
      id: "civic-identity-system",
      title: "Branding System",
      category: "Branding",
      year: "2026",
      type: "image",
      image: "./content/images/swiss-portfolio-flatlay.png",
      alt: "Printed identity material using red, blue, yellow, black, and off-white geometric layouts.",
      summary:
        "A flexible identity language built around grid discipline, restrained colour, and repeatable campaign assets.",
      details:
        "Use this module for brand identity case studies. Replace the image path, title, summary, metadata, and links in content/site-data.js.",
      links: [
        { label: "Case study", href: "#work" },
        { label: "Project link", href: "#contact" },
      ],
    },
    {
      id: "interface-system",
      title: "Interface System",
      category: "UI/UX",
      year: "2025",
      type: "video",
      image: "./content/images/swiss-portfolio-flatlay.png",
      alt: "Graphic design materials arranged like a motion design storyboard.",
      embedUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0",
      summary:
        "A UI/UX project slot where I can share embedded walkthroughs, launch films, prototypes, or process videos.",
      details:
        "The video module opens an accessible dialog and can embed YouTube, Vimeo, or any privacy-conscious iframe source.",
      links: [{ label: "Watch video", href: "#interface-system" }],
    },
    {
      id: "publication-grid",
      title: "Publication Grid",
      category: "Editorial",
      year: "2024",
      type: "article",
      image: "./content/images/swiss-portfolio-flatlay.png",
      alt: "Book spreads and typographic clippings laid out on a Swiss grid.",
      summary:
        "A publication system for interviews, long-form articles, typographic essays, and image-rich editorial features.",
      details:
        "Article modules are useful for process notes, design writing, interviews, or external editorial work.",
      links: [
        { label: "Read article", href: "#work" },
        { label: "Archive", href: "#work" },
      ],
    },
    {
      id: "information-system",
      title: "Information System",
      category: "Information design",
      year: "2023",
      type: "link",
      image: "./content/images/swiss-portfolio-flatlay.png",
      alt: "Campaign poster studies with bold colour blocks and typographic hierarchy.",
      summary:
        "A compact module for maps, diagrams, data-led layouts, wayfinding, research systems, or explanatory visual design.",
      details:
        "Use link modules when the best destination is outside the portfolio, while still keeping the visual archive coherent.",
      links: [{ label: "Open project", href: "#contact" }],
    },
    {
      id: "misc-archive",
      title: "Miscellaneous Archive",
      category: "Misc",
      year: "2022",
      type: "article",
      image: "./content/images/swiss-portfolio-flatlay.png",
      alt: "A measured arrangement of article clippings and typographic research notes.",
      summary:
        "A flexible slot for experiments, self-initiated work, research notes, talks, writing, or mixed-format projects.",
      details:
        "Miscellaneous content can sit beside formal case studies without becoming a separate template.",
      links: [{ label: "Read notes", href: "#cv" }],
    },
  ],
  cv: {
    summary:
      "My education, experience, and specialist design focus. I can replace the downloadable file whenever a fuller CV is ready.",
    downloadLabel: "Download CV",
    downloadHref: "./content/cv/rachel-branscombe-cv.pdf",
    profile:
      "I am a graphic designer with a typographic and communication-led practice shaped by my study at the University of Reading.",
    education: [
      {
        qualification: "BA (Hons) Graphic Communication",
        department: "Department of Typography and Graphic Communication",
        institution: "University of Reading",
        status: "Graduate",
      },
    ],
    competencies: [
      "Art direction",
      "Branding",
      "Editorial design",
      "UI/UX",
      "Information design",
      "Typography",
      "Research",
      "Miscellaneous formats",
    ],
    timeline: [
      {
        range: "2024 to present",
        title: "Graphic Designer",
        detail: "I work across branding, editorial, UI/UX, information design, and mixed-format visual communication.",
      },
      {
        range: "2021 to 2024",
        title: "Senior Designer",
        detail: "I led typographic systems, campaign assets, and cross-channel visual languages.",
      },
      {
        range: "2018 to 2021",
        title: "Designer",
        detail: "I created brand, print, packaging, and content design across studio and freelance work.",
      },
    ],
  },
  contact: {
    intro:
      "For commissions, collaborations, talks, or portfolio enquiries, you can contact me below.",
    links: [
      { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
      { label: "Instagram", value: "@rachelbranscombe", href: "https://instagram.com/" },
      { label: "LinkedIn", value: "Rachel Branscombe", href: "https://linkedin.com/" },
      { label: "Location", value: "UK / Remote", href: "#contact" },
    ],
  },
};
