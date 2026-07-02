/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from "@/types";

/**
 * Assets
 */
import {
  Briefcase,
  GithubIcon,
  Globe,
  Home,
  Layers,
  LucideLinkedin,
  LucideTwitter,
  Mail,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  User,
} from "lucide-react";

const navLinks: LinksType[] = [
  { label: "Home", link: "#hero", icon: Home },
  { label: "About", link: "#about", icon: User },
  {
    label: "Projects",
    link: "#projects",
    icon: Briefcase,
  },
  {
    label: "Services",
    link: "#services",
    icon: Settings,
  },
  { label: "Resume", link: "#resume", icon: Briefcase },
  { label: "Contact", link: "#contact", icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: LucideTwitter,
    label: "Twitter",
    link: "https://x.com/TobbyAdelaja",
  },
  {
    icon: GithubIcon,
    label: "Github",
    link: "https://github.com/El-jefecito",
  },
  {
    icon: LucideLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/adelaja-tobiloba/",
  },
];

// const projectsData: ProjectType[] = [
//   {
//     imgSrc: "/images/Weight_less.jpg",
//     title: "Full stack music app",
//     github: "https://github.com/yourusername/portfolio",
//     demo: "https://yourportfolio.com",
//   },
//   {
//     imgSrc: "/images/project_2.png",
//     title: "Full stack music app",
//     tags: ["Github", "Demo"],
//     projectLink: "https://musify-5al0.onrender.com/",
//   },
//   {
//     imgSrc: "/images/project-ph-3.jpeg",
//     title: "Full stack music app",
//     tags: ["API", "Development"],
//     projectLink: "https://musify-5al0.onrender.com/",
//   },
//   {
//     imgSrc: "/images/project-ph-4.jpeg",
//     title: "Full stack music app",
//     tags: ["API", "Development"],
//     projectLink: "https://musify-5al0.onrender.com/",
//   },
// ];

const projectsData: ProjectType[] = [
  {
    imgSrc: "/images/bookstore.png.png",
    title: "Bookstore e-commerce",
    github: "https://github.com/El-jefecito/booknesta",
    demo: "https://booknesta-69qq.vercel.app/",
  },
  {
    imgSrc: "/images/Weight_less.jpg",
    title: "weightless non-profit",
    github: "https://github.com/El-jefecito/weight_less-new",
    demo: "https://weightless-org.vercel.app//",
  },
  {
    imgSrc: "/images/project_2.png",
    title: "Music Streaming App",
    github: "https://github.com/El-jefecito/homeaxil",
    demo: "https://homeaxil-five.vercel.app/",
  },
  {
    imgSrc: "/images/project-ph-3.png",
    title: "Vestra interior decoration",
    github: "https://github.com/El-jefecito/Int-Des",
    demo: "https://vestra-flame.vercel.app/",
  },
];

const education: ExperienceType[] = [
  {
    year: "2018 – 2020",
    title: "Bachelor of Computer Science",
    institute: "National University of Technology",
    desc: "Focused on front-end development, UI design, and web application architecture.",
  },
  {
    year: "2021 – 2022",
    title: "Frontend Development Bootcamp",
    institute: "Udemy / Online Course",
    desc: "Learned modern JavaScript, React, and responsive UI patterns through real-world projects.",
  },
  {
    year: "2023",
    title: "Advanced UI/UX Design Course",
    institute: "Design+Code",
    desc: "Explored advanced design systems, motion design, and accessibility best practices.",
  },
];

const experience: ExperienceType[] = [
  {
    year: "2021 – 2022",
    title: "Frontend Developer Intern",
    institute: "PixelForge Studio",
    desc: "Built and optimized responsive websites, collaborating closely with designers and backend teams.",
  },
  {
    year: "2022 – Present",
    title: "UI Engineer",
    institute: "Freelance / Remote Work",
    desc: "Designed and developed web interfaces for SaaS startups using React, Tailwind, and Figma.",
  },
];

const tools: ToolsType[] = [
  // {
  //   label: "Html",
  //   imgSrc: "/images/tools/html5-line.svg",
  // },
  {
    label: "CSS",
    imgSrc: "https://cdn.simpleicons.org/css/1572B6",
  },
  {
    label: "Tailwind CSS",
    imgSrc: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  {
    label: "JavaScript",
    imgSrc: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    label: "React",
    imgSrc: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    label: "Node.js",
    imgSrc: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    label: "Express.js",
    imgSrc: "https://cdn.simpleicons.org/express/888888",
  },
  {
    label: "MongoDB",
    imgSrc: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  {
    label: "Next.js",
    imgSrc: "https://cdn.simpleicons.org/nextdotjs/888888",
  },
  {
    label: "TypeScript",
    imgSrc: "https://cdn.simpleicons.org/typescript/3178C6",
  },
];

const services: ServiceType[] = [
  {
    title: "Brand Identity",
    desc: "I craft modern visual identities that help brands stand out through strong typography, colors, and minimal design.",
    projects: "32 Projects",
    icon: <Palette className="h-6 w-6 text-green-400" />,
  },
  {
    title: "UI/UX Design",
    desc: "Designing clean, intuitive, and user-friendly interfaces that improve user experience and boost conversions.",
    projects: "47 Projects",
    icon: <Layers className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Web Development",
    desc: "Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.",
    projects: "58 Projects",
    icon: <Globe className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Mobile App Design",
    desc: "Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability.",
    projects: "21 Projects",
    icon: <Smartphone className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Product Launch Strategy",
    desc: "Helping startups prepare their digital products for launch with design systems, marketing pages, and assets.",
    projects: "15 Projects",
    icon: <Rocket className="h-6 w-6 text-green-400" />,
  },
];

const statsData: StatsType[] = [
  {
    number: "30+",
    label: "Happy Clients",
  },
  {
    number: "05+",
    label: "Years Of Experience",
  },
  {
    number: "50+",
    label: "Projects Done",
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: "Alex Tomato",
    role: "Brand Manager at Instant Design",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.",
    link: "#",
  },
  {
    name: "Sara Bloom",
    role: "Founder at Bloom Agency",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.",
    link: "#",
  },
  {
    name: "John Park",
    role: "CEO at PixelFlow",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.",
    link: "#",
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
