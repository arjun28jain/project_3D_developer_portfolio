import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Profile",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js, Next.js, Three.js",
    icon: mobile,
  },
  {
    title: "DBMS, C++, MySQL",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Cognifyz Technologies",
    icon: tesla,
    iconBg: "#383E56",
    date: "May 2024 - June 2024",
    points: [
      "I led frontend web development with Javascript, React, creating scalable microservices and interfaces.",
      "I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "IBM Skillbuild",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2024 - Aug 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Head Coordinator",
    company_name: "Team HORIZON",
    icon: tesla,
    iconBg: "#383E56",
    date: "April 2022 - present",
    points: [
      "A cadre of dynamic individuals, possessing a diverse spectrum of aptitudes, and perspectives, constitutes Team Horizon.",
      "The organization aspires to cultivate the technical and managerial sagacity of students, equipping them to navigate perpetually.",
      "Works upon enhancing and cultivating top notch speaking and communication skills.",
      "Got recongnition from various IITs by our participation and bringing loreals to our college.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "WEALTH BUILD AI",
     description:
      "WealthBuild is a web application designed to help users manage and grow their wealth through personalized financial strategies. The platform provides tools and insights for setting and tracking investment goals, making informed financial decisions, and optimizing portfolio performance.",
      delpoyment: "https://main--wealthbuild.netlify.app/",
      tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "React js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://main--wealthbuild.netlify.app/",
  },
  {
    name: "DOCS-APP",
    description:
      "Developed an interactive notes-making application that stores multiple notes on a dynamic 2D plane. This innovative approach enhances user engagement and productivity by 25% to 50%, offering an intuitive and visually appealing interface for managing and organizing notes efficiently",
      delpoyment: "https://main--wealthbuild.netlify.app/",
      tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/arjun28jain/docsapp",
  },
  {
    name: "HEALTH BEATS",
    description:
      "Developed an AI-powered kiosk named Health Beats, designed to deliver medical aid in remote areas where access to physical doctors is limited. The system offers essential healthcare services, bridging the gap in medical accessibility and providing critical support to underserved regions.",
      delpoyment: "https://main--wealthbuild.netlify.app/",
      tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/arjun28jain/Health-beats",
  },
];

export { services, technologies, experiences, testimonials, projects };
