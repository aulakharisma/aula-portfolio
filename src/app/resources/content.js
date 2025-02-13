import { InlineCode } from "@/once-ui/components";
import { display } from "./config";

const person = {
  firstName: "Aula",
  lastName: "Kharismah",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer",
  avatar: "/images/aula.png",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aulakharisma",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aulakharismah/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:aulakharismah.work@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Aula Kharismah</>,
  subline: (
    <>
      A Web Developer passionate about crafting intuitive and efficient web applications. Constantly learning, building, and improving.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://calendar.google.com/calendar/u/3?cid=YXVsYWtoYXJpc21haC53b3JrQGdtYWlsLmNvbQ",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aula is a Fresh Graduate of Computer Science with a strong interest in web development and user interface design. Experienced in designing and developing efficient and user-friendly systems. Known for being creative, having a high passion for learning, and enjoying collaboration within a team.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "PT. Petrokimia Gresik",
        timeframe: "Feb 2024 - Jan 2025",
        role: "Full Stack Web Developer Intern",
        achievements: [
          <>
            Designed, developed, tested, deployed, and maintained "GoPro", a project management system built using Laravel and Vite. The system is currently in use by Pengawasan Investasi Rutin EPC departement and contractors to streamline project workflows.
          </>,
          <>
            "GoPro" successfully showcased at Konvensi Inovasi Kompartemen (KIK) and advanced to Konvensi Inovasi Petrokimia Gresik (KIPG).
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/petro/gopro.jpg",
            alt: "GoPro Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PT. Otak Kanan",
        timeframe: "Feb - Jun 2023",
        role: "Full Stack Web Developer Intern",
        achievements: [
          <>
            Developed Kursusonline and Donora website using Scrum method
          </>,
          <>
            Translated interface designs for kursusonline.com and Donora website into functional and responsive websites using React JS
          </>,
        ],
        images: [],
      },
      {
        company: "Laznas LMI",
        timeframe: "Aug - Dec 2022",
        role: "UI/UX Designer Intern",
        achievements: [
          <>
            Redesigned UI for Laznas LMI's company profile and developed it into a functional website using CodeIgniter 4
          </>,
          <>
            Redesigned Infak.in and Wakafo websites using Design Thinking method
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Universitas Pembangunan Nasional Veteran Jawa Timur",
        description: 
        <>
          Informatics Major
          <br></br>
          <small>
          Final Project: Rancang Bangun Sistem Manajemen Proyek Konstruksi dengan Metode Certainty Factor sebagai Deteksi Dini Keterlambatan Proyek
          </small>
        </>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills and Tools",
    skills: [
      {
        title: "Skills",
        description: <>HTML, CSS, Javascript, PHP (Advance), TypeScript (Intermediate), Laravel (Advance), CodeIgniter (Intermediate), React JS (Intermediate) Bootstrap (Advance), Tailwind (Intermediate)</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Tools",
        description: <>Git, Postman, Figma</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const work = {
  label: "Project",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const blog = {
  display: false,
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};


const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
