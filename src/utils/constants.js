import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMediumM
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql, BiLogoPython } from "react-icons/bi";
import {CiSettings} from "react-icons/ci";
import {AiOutlineLinux} from "react-icons/ai";
import{CgMicrosoft} from "react-icons/cg";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  // { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" }
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Internet of Things",
    icon: FcElectronics,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Robotics",
    icon: BsRobot,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
  {
    "interest": "Python",
    "icon": BiLogoPython, 
},
{
    "interest": "Cyber Security",
    "icon": CiSettings,
},
{
  "interest": "Kali Linux",
  "icon": AiOutlineLinux,
},
{
  "interest": "Microsoft Office",
  "icon": CgMicrosoft,
}
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },

  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  
];

export const workData = [
  {
    company: "Aditya Birla Group",
    designation: "Software Engineer 2",
    duration: "March 2022 - Present",
    companyImg: "aditya.jpeg",
    description: (
      <>
        <ul>
          <li>
            I work on Information Technology Department in Aditya birla Group , Unit :Birla Copper
          </li>
          <li>
            {/* Engaged in developing new features, refactoring code, enhancing
            product performance, bug fixes and contributing towards achieving
            high scalability for the product. */}
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Linux Club VIT, Chennai",
    designation: "Interim Content lead",
    duration: "June 2023 - Present",
    companyImg: "linux.jpeg",
    description: (
      <>
        <ul>
          <li>
            I am a Interim Content Lead at Linux Club 
          </li>
          
        </ul>
      </>
    ),
  },
  {
    company: "The Biosphere Club VIT, Chennai",
    designation: "Overall Team Coordinator",
    duration: "June 2023 - Present",
    companyImg: "bio.jpeg",
    description: (
      <>
        <ul>
          <li>
            I am a Team coordinator at Biosphere Club VITCC
          </li>
          
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "Project",
    title: "DDoS Attack Detection using support vector Machine (SVM)",
    image: "",
    link: "",
    source: "",
  },
  {
    type: "WEB-APP",
    title: "AI chatroom",
    image: "",
    link: null,
    source: "",
  }
  
];


export const socialMediaLinks = [
  {
    href: "https://github.com/DataDreamer88",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/swapnilpatel.sp?igsh=MW0xZWhwY2hpcHludw==",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/in/swapnilpatel8/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  }
  
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
