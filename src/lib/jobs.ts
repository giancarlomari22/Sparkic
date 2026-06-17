export type Job = {
  slug: string;
  title: string;
  type: string;
  location: string;
  shortDescription: string;
  intro: string;
  aboutRole: string[];
  requirements: string[];
  offer: string[];
  showGithub: boolean;
};

export const jobs: Job[] = [
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Remote / Rijeka",
    shortDescription:
      "Build and maintain web applications for our hospitality clients. Strong knowledge of React, Node.js and TypeScript required.",
    intro:
      "Spark Adriatic is looking for a Full Stack Developer to design, build and maintain custom web applications for our hospitality clients. You'll work in a small, collaborative team on meaningful projects from day one, with real ownership over the code you ship.",
    aboutRole: [
      "Develop and maintain full stack web applications using React, Next.js and Node.js",
      "Collaborate with designers and clients to translate requirements into clean, functional code",
      "Write well-tested, maintainable TypeScript following modern best practices",
      "Participate in code reviews and contribute to technical decisions",
      "Integrate third-party APIs and hardware devices as needed by client projects",
    ],
    requirements: [
      "2+ years of experience with React and Node.js",
      "Strong TypeScript skills and understanding of modern web development",
      "Experience with REST APIs and relational databases",
      "Good communication skills and ability to work independently",
      "Experience in the hospitality or POS industry is a plus",
    ],
    offer: [
      "Fully remote position with flexible working hours",
      "Competitive salary based on experience",
      "Small team with real ownership and direct impact on products",
      "Opportunity to work on diverse, real-world client projects",
    ],
    showGithub: true,
  },
  {
    slug: "ux-ui-designer",
    title: "UX/UI Designer",
    type: "Full-time",
    location: "Remote / Rijeka",
    shortDescription:
      "Design intuitive interfaces for complex hospitality workflows. You'll work closely with developers and clients from concept to delivery.",
    intro:
      "Spark Adriatic is looking for a UX/UI Designer to craft clean, intuitive interfaces for our hospitality technology products. You'll be involved from early discovery through to final delivery, shaping how real users interact with our systems every day.",
    aboutRole: [
      "Design user interfaces for web and mobile applications across hospitality use cases",
      "Create wireframes, prototypes and high-fidelity designs using Figma",
      "Conduct user research and usability testing to inform design decisions",
      "Collaborate closely with developers to ensure accurate implementation",
      "Maintain and evolve design systems and component libraries",
    ],
    requirements: [
      "2+ years of experience in UX/UI design for web or mobile products",
      "Proficiency in Figma or similar design tools",
      "Strong portfolio demonstrating end-to-end product design work",
      "Understanding of accessibility and responsive design principles",
      "Experience working in agile development teams",
    ],
    offer: [
      "Fully remote position with flexible working hours",
      "Competitive salary based on experience",
      "Real creative ownership over product design decisions",
      "Collaborative team that values and invests in good design",
    ],
    showGithub: false,
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    type: "Full-time",
    location: "Remote / Rijeka",
    shortDescription:
      "Create visual assets for our brand and clients — from marketing materials and posters to social media content and presentation decks.",
    intro:
      "Spark Adriatic is looking for a Graphic Designer to create compelling visual content for our brand and our clients. From digital campaigns and social media to printed materials and event collateral, you'll shape how Spark Adriatic and our partners are seen in the world.",
    aboutRole: [
      "Design marketing materials including brochures, posters, banners and presentations",
      "Create social media visuals, email templates and digital ad creatives",
      "Develop and maintain brand identity guidelines for Spark Adriatic and clients",
      "Collaborate with the marketing and project team to deliver on-brand assets on time",
      "Prepare print-ready files and manage organised asset libraries",
    ],
    requirements: [
      "2+ years of professional graphic design experience",
      "Proficiency in Adobe Illustrator, Photoshop and InDesign or equivalent tools",
      "Strong portfolio showing a range of print and digital design work",
      "Good understanding of typography, colour theory and layout",
      "Ability to manage multiple projects and meet deadlines independently",
    ],
    offer: [
      "Fully remote position with flexible working hours",
      "Competitive salary based on experience",
      "Creative freedom to bring your own ideas to projects",
      "Work with international brands across diverse client industries",
    ],
    showGithub: false,
  },
  {
    slug: "technical-support-specialist",
    title: "Technical Support Specialist",
    type: "Full-time",
    location: "Remote / Rijeka",
    shortDescription:
      "Assist clients with onboarding, troubleshooting and day-to-day support for our software and hardware solutions.",
    intro:
      "Spark Adriatic is looking for a Technical Support Specialist to be the first point of contact for our clients. You'll help hospitality businesses get the most out of our products by providing fast, friendly and effective support, and feeding real insights back to the product team.",
    aboutRole: [
      "Handle incoming support requests via email and chat, diagnosing and resolving technical issues",
      "Guide clients through onboarding and initial setup of software and hardware",
      "Escalate complex issues to the development team with clear, reproducible documentation",
      "Maintain and improve a knowledge base of common issues and solutions",
      "Relay client feedback to help shape product improvements",
    ],
    requirements: [
      "1+ years of experience in a technical support or helpdesk role",
      "Strong problem-solving skills and ability to explain technical concepts clearly",
      "Excellent written and spoken English",
      "Comfortable working with software systems and basic networking concepts",
      "Experience in hospitality or with POS systems is a plus",
    ],
    offer: [
      "Fully remote position with flexible working hours",
      "Competitive salary based on experience",
      "Clear career path into product, QA or operations roles",
      "Supportive team environment with structured onboarding",
    ],
    showGithub: false,
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}
