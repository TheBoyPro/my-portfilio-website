import { nanoid } from "nanoid";
import {
  FaCode,
  FaHtml5,
  FaJs,
  FaLink,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import eCommerce from "./img/admin-dashboard.jpg";
import landingPage from "./img/dialogflux-landing.jpg";
import chatApp from "./img/chatApp.jpg";
import debumars from "./img/debumars.jpg";

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 size={44} />,
    text: "Expert",
    // text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs size={44} />,
    text: "Advanced",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact size={44} />,
    text: "Expert",
  },
  {
    id: nanoid(),
    title: "React Native",
    icon: <FaReact size={44} />,
    text: "Advanced",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs size={44} />,
    text: "Advanced",
  },
  {
    id: nanoid(),
    title: "Express",
    icon: <FaCode size={44} />,
    text: "Expert",
  },
  {
    id: nanoid(),
    title: "Socket.io",
    icon: <FaLink size={44} />,
    text: "Advanced",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: debumars,
    url: "https://main--sage-twilight-eb7915.netlify.app/",
    github: "https://github.com/TheBoyPro",
    title: "Perfect E-commerce website (frontend only)",
    text: "This is a Completed client's front-end job. The site is fully equipped with atleast 6 complex forms, fully functional cart operations, login-as-admin/guest and so much more!",
  },
  {
    id: nanoid(),
    img: eCommerce,
    url: "https://admin-frontend-857c.onrender.com",
    github: "https://github.com/TheBoyPro",
    title: "Sophisticated e-commerce Admin dashboard",
    text: "Truly sophisticated build with numerous tools for tracking sales, orders, delivery and clients according to region.",
  },
  {
    id: nanoid(),
    img: chatApp,
    url: "https://github.com/TheBoyPro",
    github: "https://github.com/TheBoyPro",
    title: "Fullstack Chat App",
    text: "Working with websockets to establish seamingless instant communication between clients, showing last seen, online status, last message and so much more.",
  },
  {
    id: nanoid(),
    img: landingPage,
    url: "https://dialogflux-landing.onrender.com/",
    github: "https://github.com/TheBoyPro",
    title: "Dialogflux Landing page",
    text: "This is a client's work. Landing page for the dialogfulx company.",
  },
];
