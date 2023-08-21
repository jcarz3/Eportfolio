import {
  alumniSystem,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  meta,
  eportfolio,
  branchVisit,
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
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Design",
    icon: figma,
  },
  {
    title: "Web Development",
    icon: reactjs,
  },
  {
    title: "Backend Development",
    icon: mongodb,
  },
  {
    title: "Mobile Development",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "CTU Argao Campus",
    icon: mongodb,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Jan 2023",
    points: [
      "As the full-stack developer on a collaborative team, I helped create an Alumni Information System with Data Analytics for our capstone project.",
      "Using the MERN stack, I combined front-end and back-end elements to build a complete platform.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "RAFI Microfinance Inc",
    icon: meta,
    iconBg: "#383E56",
    date: "Feb 2023 - Aug 2023",
    points: [
      "Developing and maintaining web applications using React.js, TypeScript and xstate for the frontend.",
      "Collaborating with cross-functional teams including designers, product owners, and other developers to create high-quality products.",
      "Implementing design that has a theme like microsoft teams.",
      "Participating in code reviews.",
    ],
  },
];

const projects = [
  {
    name: "Alumni Info System",
    description:
      "Web-based platform that allows alumni to register and signin, can edit profile, have job post, events organizer and lastly with Data analytics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "text-[#1d6727]",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: alumniSystem,
    source_code_link: "https://github.com/",
  },
  {
    name: "Branch Visit App",
    description:
      "Internal Web application that enables branch Manager to visit certain branch of the RAFI MFI, The app also have a checklist for the Assessment Area and Details.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "web-api",
        color: "text-[#702291]",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: branchVisit,
    source_code_link: "https://github.com/",
  },
  {
    name: "E portfolio",
    description:
      "My e-portfolio serves as a digital canvas where I paint my professional journey. By sharing my experiences and accomplishments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: eportfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, projects };
