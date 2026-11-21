
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Product & Staff Management System",
    description:
      "A full-stack management application for handling organizations, products, categories, staff, employee roles, and quotation workflows.",
    image: "/images/pms.jpg",
    technologies: [
      "React",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/akash-uppula/PMS",
  },
  {
    id: 2,
    title: "KRIBB",
    description:
      "A cross-platform mobile application built with React Native and Expo, focusing on a modern mobile user experience.",
    image: "/images/kribb.jpg",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "JavaScript",
    ],
    github: "https://github.com/akash-uppula/KRIBB",
  },
  {
    id: 3,
    title: "MyShelf",
    description:
      "A mobile application built with React Native and Expo, integrated with Appwrite for backend services.",
    image: "/images/myshelf.jpg",
    technologies: [
      "React Native",
      "Expo",
      "Appwrite",
      "JavaScript",
    ],
    github: "https://github.com/akash-uppula/MyShelf-Mobile-App",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website showcasing my technical skills, projects, professional experience, and developer journey.",
    image: "/images/portfolio.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/akash-uppula/Portfolio",
  },
];
