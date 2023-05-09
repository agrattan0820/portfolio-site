export type ProjectType = {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  mobileImage?: string;
  figma?: string;
  old?: string;
  code: string;
  link?: string;
  slug: string;
  tools: string[];
};

export const projectsList: ProjectType[] = [
  {
    id: 1,
    name: "Grademyaid",
    description:
      "Website that allows students to grade their college financial aid packages using data from the US Department of Education.\nThis is a full redesign of one of my previous web applications built for a University of Pittsburgh hackathon.",
    image: "/images/grademyaid.png",
    longDescription:
      "This was originally built for Pitt CSC Hacks, a competition sponsored by the University of Pittsburgh's Computer Science Club and was my first time participating in a coding competition. Going into the experience I was quite nervous.\nI stuck to my guns and went with an idea that I had the past summer which was a website that helps students analyze their financial aid package based on information about the school, similar to how Niche.com grades colleges and universities. Two years later I had the opportunity to rebuild the application from the ground up using new technologies I've picked up from internships and school including TypeScript, Next.js, PostgreSQL, and Supabase.",
    link: "https://www.grademyaid.com/",
    slug: "grademyaid",
    code: "https://github.com/agrattan0820/grademyaid",
    tools: ["React/Next.js", "TypeScript", "PostgreSQL", "Supabase"],
  },
  {
    id: 2,
    name: "Big Burgh Redesign",
    description:
      "A new design and construction of the Big Burgh app (not an official redesign) used to help Pittsburgh natives find resources such as food and shelter.",
    image: "/images/big-burgh.png",
    code: "https://github.com/agrattan0820/big-burgh",
    slug: "big-burgh",
    tools: ["React Native/Expo", "TypeScript", "Styled Components"],
  },
  {
    id: 3,
    name: "Secret Pittsburgh",
    description:
      "Website for the Secret Pittsburgh class at the University of Pittsburgh (ENGLIT 1412) dedicated to uncovering hidden spaces and unusual places in the city of Pittsburgh.",
    image: "/images/secret_pittsburgh.png",
    mobileImage: "/images/secret_pittsburgh_small.png",
    link: "https://secretpittsburgh.org/",
    code: "https://github.com/agrattan0820/secret-pittsburgh",
    slug: "secret-pittsburgh",
    tools: ["React/Gatsby", "Tailwind CSS"],
  },
  {
    id: 4,
    name: "Pollock Is Shit",
    description:
      "Web app that manipulates image data to create a Pollock-like painting (because literally anyone could've been Pollock).",
    image: "/images/Pollock_Is_Shit_Screenshot.png",
    mobileImage: "/images/Pollock_is_Shit_OG.png",
    link: "https://pollockisshit.netlify.app/",
    code: "https://github.com/agrattan0820/Pollock-is-Poop",
    slug: "pollock-is-shit",
    tools: ["React/Next.js", "Tailwind CSS", "p5.js"],
  },
  {
    id: 5,
    name: "Pitt CSC",
    description:
      "Redesigned and developed the website for the Pitt Computer Science Club that helps advertise its efforts to support computer science and technology-related initiatives.",
    longDescription:
      "I was appointed as a club officer for the Pitt Computer Science Club, both to support initiatives and to redesign the club website.\nBesides upgrading the technology from an outdated Jekyll site to a modern Gatsby site, I wanted the design to represent the student spirit of Pitt Computer Science Club.\nI iterated with different designs, gaining feedback from members on how the club should be advertised.\nSome new things I experimented with for this project were svg animations and SEO analysis using Google Search Console, Google Analytics, and Hotjar.",
    image: "/images/Pitt_CSC_Screenshot.png",
    mobileImage: "/images/Pitt_CSC_Screenshot_Small.png",
    figma: "/images/Pitt_CSC_Figma_Screenshot.png",
    old: "/images/Original_CSC_Site_Screenshot.png",
    link: "https://pittcsc.org/",
    slug: "pitt-csc",
    code: "https://github.com/pittcsc/pittcsc-website",
    tools: ["React/Gatsby", "Tailwind CSS", "Notion API", "Framer Motion"],
  },
  {
    id: 6,
    name: "Grademyaid (Legacy)",
    description:
      "Application that allows students to grade their college financial aid packages using data from the US Department of Education.\nThis was built for Pitt CSC Hacks, a competition sponsored by the University of Pittsburgh's Computer Science Club.",
    image: "/images/GradeMyAid-legacy.png",
    mobileImage: "/images/GradeMyAid_Small-legacy.png",
    longDescription:
      "This was built for Pitt CSC Hacks, a competition sponsored by the University of Pittsburgh's Computer Science Club and was my first time participating in a coding competition. Going into the experience I was quite nervous.\nI stuck to my guns and went with an idea that I had the past summer which was a website that helps students analyze their financial aid package based on information about the school, similar to how Niche.com grades colleges and universities.\nI ended up finding a partner who didn't know much about web development, but was willing to work with me in developing this idea.\nThis was my first foray into handling large amounts of data and trying to contextualize it for a user. If I were to fix one thing about the site, it would be effectively distinguishing the grades between each other so that a user's result is crystal clear.",
    figma: "/images/Grademyaid_Figma_Screenshot.png",
    link: "https://grademyaid.netlify.app/",
    slug: "grademyaid-legacy",
    code: "https://github.com/agrattan0820/grade-my-aid-old",
    tools: ["React", "Framer Motion", "Scss"],
  },
  {
    id: 7,
    name: "Grosseries",
    description:
      "A mobile app that helps individuals to track expiration dates and the inventory of their food, a group project for the University of Pittsburgh's CS1635 created with Flutter.",
    image: "/images/grosseries.png",
    code: "https://github.com/agrattan0820/cs1635-flutter-project",
    slug: "grosseries",
    tools: ["Flutter"],
  },
  {
    id: 8,
    name: "Belly Button Chrome Extension",
    description:
      "Browser extension that helps developers and accessibility engineers inspect a website's buttons and determine if they follow HTML standards and Web Content Accessibility Guidelines (WCAG).",
    image: "/images/Belly_Button_Design.jpg",
    mobileImage: "/images/Belly_Button_Design_Small.jpg",
    link: "http://getbellybutton.com/",
    code: "https://github.com/agrattan0820/belly-button",
    slug: "belly-button",
    tools: ["HTML", "CSS", "JavaScript", "Chrome API"],
  },
  {
    id: 9,
    name: "Allegory of the Cave",
    description:
      "An experiment where I created an audiovisual experience with an interactive 3D sun. Created for the University of Pittsburgh's ENGCMP 1130 class.",
    longDescription:
      "One of my assignments for the University of Pittsburgh class, Projects in Digital Composition (ENGCMP 1130), was to create a piece of content that characterizes or responds to Plato's Allegory of the Cave.\nThree.js is a JavaScript library I had experimented with in the past but I had failed to make anything significant with it. For this project I wanted to push myself to understand using 3D on the web and how it can create engaging experiences.",
    image: "/images/Allegory_Cave_Screenshot.jpg",
    mobileImage: "/images/Allegory_Cave_Screenshot_Small.jpg",
    link: "https://allegory-of-the-cave.netlify.app/",
    code: "https://github.com/agrattan0820/allegory-of-the-cave",
    slug: "allegory-cave",
    tools: ["HTML", "CSS", "JavaScript", "Three.js"],
  },
  {
    id: 10,
    name: "Virtual Safari",
    description:
      "A recreation of Timon and Pumbaa's Virtual Safari, a choose-your-own adventure from The Lion King DVD.\nI edited the choices into individual clips using the video editor, DaVinci Resolve, and used JavaScript to develop the site interaction.",
    image: "/images/Virtual_Safari_Screenshot.png",
    mobileImage: "/images/Virtual_Safari_Screenshot_Small.png",
    link: "https://virtualsafari.netlify.app/",
    slug: "virtual-safari",
    code: "https://github.com/agrattan0820/Virtual-Safari",
    tools: ["HTML", "CSS", "JavaScript"],
  },
];
