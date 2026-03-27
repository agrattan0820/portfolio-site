import { StaticImageData } from "next/image";

import ArtificialUnintelligence from "../images/Artificial_Unintelligence.png";
import Alcohol101Plus from "../images/alcohol101plus-og.jpg";
import ResponsibilityWorks from "../images/rw-og.png";
import HaydenAI from "../images/hayden-ai-og.png";
import SafeDrive from "../images/safe-opengraph.jpg";
import VesperAI from "../images/vesper-og.png";
import VirtualBar from "../images/virtual-bar.png";
import BigBurgh from "../images/big-burgh.png";
import SecretPittsburgh from "../images/secret_pittsburgh.png";
import SecretPittsburghMobile from "../images/secret_pittsburgh_small.png";
import PittCSC from "../images/Pitt_CSC_Screenshot.png";
import PittCSCMobile from "../images/Pitt_CSC_Screenshot_Small.png";
import PittCSCFigma from "../images/Pitt_CSC_Figma_Screenshot.png";
import PittCSCOld from "../images/Original_CSC_Site_Screenshot.png";
import GradeMyAid from "../images/GradeMyAid.png";
import GradeMyAidMobile from "../images/GradeMyAid_Small.png";
import GradeMyAidFigma from "../images/Grademyaid_Figma_Screenshot.png";
import Grosseries from "../images/grosseries.png";
import BellyButton from "../images/Belly_Button_Design.jpg";
import BellyButtonMobile from "../images/Belly_Button_Design_Small.jpg";
import VirtualSafari from "../images/Virtual_Safari_Screenshot.png";
import VirtualSafariMobile from "../images/Virtual_Safari_Screenshot_Small.png";

export type ProjectType = {
  name: string;
  description: string;
  longDescription?: string;
  image: StaticImageData;
  mobileImage?: StaticImageData;
  figma?: StaticImageData;
  old?: StaticImageData;
  code?: string;
  link?: string;
  slug: string;
  type: string;
};

export const projectsList: ProjectType[] = [
  {
    name: "Artificial Unintelligence",
    description:
      "Online multiplayer game where players compete against each other to create the funniest AI-generated images.",
    image: ArtificialUnintelligence,
    link: "https://www.artificialunintelligence.gg",
    code: "https://github.com/agrattan0820/artificial-unintelligence",
    slug: "artificial-unintelligence",
    type: "Personal Project",
  },
  {
    name: "Alcohol101+",
    description:
      "An innovative, interactive program which helps students make safe and responsible decisions about alcohol.",
    image: Alcohol101Plus,
    link: "https://www.alcohol101.plus",
    slug: "alcohol101-plus",
    type: "with Actual Size for Responsibility.org",
  },
  {
    name: "Hayden AI Marketing Website",
    description:
      "Hayden AI creates cutting-edge AI for smarter cities and this website highlights its various platforms and technologies.",
    image: HaydenAI,
    link: "https://www.hayden.ai",
    slug: "hayden-ai",
    type: "with Actual Size for Hayden AI",
  },
  {
    name: "Responsibility Works",
    description:
      "An online alcohol responsibility course that assists employers and employees in training and maintaining safe and responsible workplaces.",
    image: ResponsibilityWorks,
    link: "https://responsibilityworks.com",
    slug: "responsibility-works",
    type: "with Actual Size for Responsibility.org",
  },
  {
    name: "SAFE Marketing Website",
    description:
      "SAFE drives change by educating on the importance of ignition interlocks, a technology that encourages a responsible life after DUI.",
    image: SafeDrive,
    link: "https://www.safedrive.org",
    slug: "safe-drive",
    type: "with Actual Size for SAFE",
  },
  {
    name: "Virtual Bar App",
    description:
      "A iOS, Android, and web app that allows users to gain a better understanding of how different factors affect their blood-alcohol concentration – or BAC.",
    image: VirtualBar,
    link: "https://apps.apple.com/us/app/virtual-bar/id1055457361",
    slug: "virtual-bar",
    type: "with Actual Size for Responsibility.org",
  },
  {
    name: "Vesper AI Marketing Website",
    description:
      "Vesper AI, a subsiduary of Hayden AI, turns crowdsourced data into operational intelligence that saves lives, at Actual Size I created this website to tell this story.",
    image: VesperAI,
    link: "https://www.vespersolutions.ai",
    slug: "vesper-ai",
    type: "with Actual Size for Hayden AI",
  },
  {
    name: "Big Burgh Unofficial Redesign",
    description:
      "An unofficial new design and construction of the Big Burgh app used to help Pittsburgh natives find resources such as food and shelter.",
    image: BigBurgh,
    code: "https://github.com/agrattan0820/big-burgh",
    slug: "big-burgh",
    type: "Personal Project",
  },
  {
    name: "Secret Pittsburgh",
    description:
      "Website for the Secret Pittsburgh class at the University of Pittsburgh (ENGLIT 1412) dedicated to uncovering hidden spaces and unusual places in the city of Pittsburgh.",
    image: SecretPittsburgh,
    mobileImage: SecretPittsburghMobile,
    link: "https://secretpittsburgh.org",
    code: "https://github.com/agrattan0820/secret-pittsburgh",
    slug: "secret-pittsburgh",
    type: "Personal Project",
  },
  {
    name: "Pitt CSC",
    description:
      "Redesigned and developed the website for the Pitt Computer Science Club that helps advertise its efforts to support computer science and technology-related initiatives.",
    longDescription:
      "I was appointed as a club officer for the Pitt Computer Science Club, both to support initiatives and to redesign the club website.\nBesides upgrading the technology from an outdated Jekyll site to a modern Gatsby site, I wanted the design to represent the student spirit of Pitt Computer Science Club.\nI iterated with different designs, gaining feedback from members on how the club should be advertised.\nSome new things I experimented with for this project were svg animations and SEO analysis using Google Search Console, Google Analytics, and Hotjar.",
    image: PittCSC,
    mobileImage: PittCSCMobile,
    figma: PittCSCFigma,
    old: PittCSCOld,
    link: "https://pittcsc.org/",
    slug: "pitt-csc",
    code: "https://github.com/pittcsc/pittcsc-website",
    type: "Personal Project",
  },
  {
    name: "Grademyaid",
    description:
      "Application that allows students to grade their college financial aid packages using data from the US Department of Education.\nThis was built for Pitt CSC Hacks, a competition sponsored by the University of Pittsburgh's Computer Science Club.",
    image: GradeMyAid,
    mobileImage: GradeMyAidMobile,
    longDescription:
      "This was built for Pitt CSC Hacks, a competition sponsored by the University of Pittsburgh's Computer Science Club and was my first time participating in a coding competition. Going into the experience I was quite nervous.\nI stuck to my guns and went with an idea that I had the past summer which was a website that helps students analyze their financial aid package based on information about the school, similar to how Niche.com grades colleges and universities.\nI ended up finding a partner who didn't know much about web development, but was willing to work with me in developing this idea.\nThis was my first foray into handling large amounts of data and trying to contextualize it for a user. If I were to fix one thing about the site, it would be effectively distinguishing the grades between each other so that a user's result is crystal clear.",
    figma: GradeMyAidFigma,
    link: "https://grademyaid.netlify.app",
    slug: "grademyaid",
    code: "https://github.com/agrattan0820/grade-my-aid",
    type: "Personal Project",
  },
  {
    name: "Belly Button Chrome Extension",
    description:
      "Browser extension that helps developers and accessibility engineers inspect a website's buttons and determine if they follow HTML standards and Web Content Accessibility Guidelines (WCAG).",
    image: BellyButton,
    mobileImage: BellyButtonMobile,
    link: "http://getbellybutton.com",
    code: "https://github.com/agrattan0820/belly-button",
    slug: "belly-button",
    type: "Personal Project",
  },
  {
    name: "Virtual Safari",
    description:
      "A recreation of Timon and Pumbaa's Virtual Safari, a choose-your-own adventure from The Lion King DVD.\nI edited the choices into individual clips using the video editor, DaVinci Resolve, and used JavaScript to develop the site interaction.",
    image: VirtualSafari,
    mobileImage: VirtualSafariMobile,
    link: "https://virtualsafari.netlify.app",
    slug: "virtual-safari",
    code: "https://github.com/agrattan0820/Virtual-Safari",
    type: "Personal Project",
  },
];
