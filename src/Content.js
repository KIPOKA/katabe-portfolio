// import images
import Hero_person from "./assets/images/Hero/kat.png";
import nodejs from "./assets/images/Skills/node.png";
import mysql from "./assets/images/Skills/mysql.png";
import git from "./assets/images/Skills/git.png";
import java from "./assets/images/Skills/java.png";
import docker from "./assets/images/Skills/docker.png";
import html from "./assets/images/Skills/html.png";
import js from "./assets/images/Skills/js.png";
import github from "./assets/images/Skills/github.png";
import tail from "./assets/images/Skills/tail.jpg";
import jira from "./assets/images/Skills/jira.png";
import react from "./assets/images/Skills/react.png";
import flask from "./assets/images/Skills/flask.png";
import time from "./assets/images/Skills/time.png";
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import pl from "./assets/images/Skills/pl.png";
import com from "./assets/images/Skills/com.png";
import cert1 from "./assets/images/Certifications/cert1.png";
import cert2 from "./assets/images/Certifications/cert2.png";
import cert5 from "./assets/images/Certifications/cert5.png";
import cert6 from "./assets/images/Certifications/cert6.png";
import cert7 from "./assets/images/Certifications/cert7.png";
import cert8 from "./assets/images/Certifications/cert8.jpeg";
import boot from "./assets/images/Skills/boot.png";
import digital from "./assets/images/Skills/digital.jpeg";
import portfolio from "./assets/images/Skills/portfolio.jpg";
import bricoll from "./assets/images/Projects/bricoll.webp";
import aman from "./assets/images/Skills/pizza.png";
import student from "./assets/images/Skills/student.jpeg";
import lib from "./assets/images/Skills/lib.jpeg";
import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";

import hireme_person from "./assets/images/Hireme/person.png";

import { GrMail } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { TbCertificate, TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { RiProjectorLine, RiServiceLine } from "react-icons/ri";

const Nav = [
  {
    link: "#home",
    icon: TbSmartHome,
  },
  {
    link: "#aboutme",
    icon: BiUser,
  },
  {
    link: "#skills",
    icon: GiSkills,
  },

  {
    link: "#services",
    icon: RiServiceLine,
  },
  {
    link: "#projects",
    icon: RiProjectorLine,
  },
  {
    link: "#contact",
    icon: MdOutlinePermContactCalendar,
  },
];

const social_media = [
  {
    text: "ladykipoka@gmail.com",
    icon: GrMail,
    link: "mailto:ladykipoka@gmail.com",
  },
  {
    text: "Katabe KL",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/kl-katabe-7a7623204/",
  },
  {
    text: "Katabe",
    icon: AiFillGithub,
    link: "https://github.com/KIPOKA",
  },
];
const cert_content = [
  {
    title: "Oracle Cloud Infrastructure 2024 Certified Developer Professional",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=62C57609853F17D04BC5C8213FE5F74514586122F8FA58C788102AFC03DFE33C",
    image:
      "https://brm-workforce.oracle.com/pdf/certview/images/OCID2024CP.png",
  },
  {
    title: "Oracle Certified Professional, Java SE 8 Programmer",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7150FE2EA98D08F2D32A1F2DD4A5A487B04D95277185B268D04CEE1E1298F3AB",
    image: "https://brm-workforce.oracle.com/pdf/certview/images/OCPJSE8.png",
  },
  {
    title: "Oracle Cloud Infrastructure 2024 Certified DevOps Professional",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=626266EE80DDDC838B6D5FFCD8567ABD36933ADEFF42EF705D948D1147967D74",
    image:
      "https://brm-workforce.oracle.com/pdf/certview/images/OCI2024DOPOCP.png",
  },
  {
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7D311F9484B6360A03BC18199C0FDBFCD7B252935AB01626B20902BF93BA49DB",
    image: "https://brm-workforce.oracle.com/pdf/certview/images/OCAJSE8.png",
  },
  {
    title:
      "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=2766D12BC1722B59E051F38F5B122C78B2119732F2AF774A430314D257CF0B5F",
    image:
      "https://brm-workforce.oracle.com/pdf/certview/images/OCI24AICFA.png",
  },
  {
    title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=626266EE80DDDC838B6D5FFCD8567ABD04D625908DC961DB0D8583FF3C5E80D4",
    image:
      "https://brm-workforce.oracle.com/pdf/certview/images/OCI2024FNDCFA.png",
  },
  {
    title: "MongoDB Associate Developer",
    link: "https://brm-workforce.oracle.com/pdf/certview/images/OCI24AICFA.png",
    image: cert1,
  },
  {
    title: "Agile Project Management",
    link: "https://coursera.org/share/a92c70e92b02890f7d7a5ab3deb418ab",
    image: cert8,
  },
  {
    title: "MongoDB Data Modeling",
    image: cert2,
    link: "https://learn.mongodb.com/c/lkxA2J6RTE2Ash0IL--EtA",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    link: "https://badgr.com/public/assertions/JKnbd3dAQwCPpg3dxr1n_A?identity__email=sohaib.manah@etu.uae.ac.ma",
    image: cert5,
  },
  {
    title: "SQL (Advanced)",
    link: "https://www.hackerrank.com/certificates/3a683fbab8d4",
    image: cert6,
  },
  {
    title: "MongoDB Python Developer Path",
    link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/a96c73c5-e997-5d54-80a0-54f8afa0e457-sohaib-manah-0239280c-b43a-45ac-a4b7-a55c4db1b568-certificate.pdf",
    image: cert7,
  },
];

export const content = {
  en: {
    Nav,
    hero: {
      title: "Software Developer",
      firstName: "KATABE",
      LastName: "KIPOKA L.",
      //btnText: "View my resume",
      //btnLink: "https://www.canva.com/design/DAFltazUEpM/1HUGhv9zLupr7TU3NbZ68w/view",
      image: Hero_person,
      hero_content: [
        {
          count: `+${
            new Date().getFullYear() - new Date("2022-07-07").getFullYear()
          }`,
          text: "Years of Experience in Web development And  Mobile development ",
        },
        {
          count: "10+",
          text: "Projects Worked in my career",
        },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "//my top skills",
      skills_content: [
        {
          name: "Flask | Python",
          para: "Experience in building web applications and APIs using Flask and Python.",
          logo: flask,
        },
        {
          name: "React JS",
          para: "Building responsive and dynamic user interfaces for web applications.",
          logo: react,
        },
        {
          name: "Bootstrap",
          para: "Designing modern and responsive websites with the Bootstrap framework.",
          logo: boot,
        },

        {
          name: "Node.js",
          para: "Developing server-side logic and building scalable applications with Node.js.",
          logo: nodejs,
        },
        {
          name: "HTML & CSS",
          para: "Crafting modern web interfaces with HTML5 and CSS3 for responsive design.",
          logo: html,
        },
        {
          name: "MySQL",
          para: "Database management, relational data modeling, and query optimization with MySQL.",
          logo: mysql,
        },
        {
          name: "PL/SQL",
          para: "Writing and optimizing stored procedures, functions, and triggers using PL/SQL.",
          logo: pl,
        },
        {
          name: "Tailwind CSS",
          para: "Building modern, responsive user interfaces with the utility-first Tailwind CSS framework.",
          logo: tail,
        },
        {
          name: "Basic Docker Knowledge",
          para: "Containerizing applications with Docker for efficient deployment and scaling.",
          logo: docker,
        },
        {
          name: "Jira",
          para: "Proficient in using Jira for project tracking, task management, and sprint planning.",
          logo: jira, // Jira logo
        },
        {
          name: "Git",
          para: "Version control using Git for efficient code collaboration and management.",
          logo: git, // Git logo
        },
        {
          name: "GitHub",
          para: "Collaborating and sharing code on GitHub with Git version control integration.",
          logo: github, // GitHub logo
        },
        {
          name: "JavaScript",
          para: "Building dynamic and interactive web applications with JavaScript.",
          logo: js, // JavaScript logo
        },
        {
          name: "Java EE",
          para: "Developing enterprise-level applications using Java EE technologies.",
          logo: java, // Java EE logo
        },
        {
          name: "React Native",
          para: "Developing cross-platform mobile applications with React Native.",
          logo: react, // React Native logo
        },

        {
          name: "Communication Skills",
          para: "Strong verbal and written communication for effective collaboration.",
          logo: com, // Communication icon
        },
        {
          name: "Time Management",
          para: "Effectively prioritize tasks to meet deadlines and ensure project success.",
          logo: time, // Example time management icon
        },
      ],
    },
    services: {
      title: "Services",
      subtitle: "//what I offer",
      service_content: [
        {
          title: "Web Development",
          para: "Building web applications and websites with modern technologies and best practices is my passion, and I can help you do that with my experience in this field.",
          logo: services_logo1,
        },
        {
          title: "Mobile Development",
          para: "Creating cross-platform mobile applications with the latest tools and frameworks to provide seamless user experiences on both Android and iOS.",
          logo: services_logo2,
        },
        {
          title: "Database Design",
          para: "Designing and optimizing database systems for scalability, efficiency, and reliability to ensure data integrity and fast access.",
          logo: services_logo3,
        },
      ],
    },

    Projects: {
      title: "Projects",
      subtitle: "//my creations",
      project_content: [
        {
          title: "Pizza Shop App",
          para: "This is an online pizza shop, using Java and MySQL database.",
          image: aman,
          githubLink: "https://github.com/KIPOKA/PizzaApp",
        },
        {
          title: "Library Management System",
          para: "This is a Python project with Django Admin for database storage, and still working on it to improve.",
          image: lib,
          githubLink: "https://github.com/KIPOKA/Book-Management",
        },
        {
          title: "Student Management System",
          para: "This is a Java EE web application using JSP, GlassFish Server, Servlet, etc.",
          image: student,
          githubLink: "https://github.com/KIPOKA/Student-management-system",
        },
        {
          title: "Digital Marketing Agency Web",
          para: "This is a Python and Django, Bootstrap, HTML, and CSS project, with an online messaging system for real-time email.",
          image: digital,
          githubLink: "https://github.com/KIPOKA/Digitalmarketingagency",
        },

        {
          title: "My Portfolio",
          para: "An HTML-based personal portfolio site showcasing skills and projects.",
          image: portfolio,
          githubLink: "https://github.com/KIPOKA/portofolio",
        },
      ],
    },

    Testimonials: {
      title: "Testimonials",
      subtitle: "MY CLIENT REVIEWS",
      testimonials_content: [
        {
          review:
            "“Sohaib was terrific, did a great job understanding my projects' needs, and delivered super fast! I highly recommend his services.”",
          img: avatar3,
          name: "jean V. Fiver Client",
          rating: 5,
        },
        {
          review:
            "“I wanted to take a moment to share my positive experience with Sohaib, whom I recently hired to assist with our company's rebranding effort. ”",
          img: avatar3,
          name: "khalid D. Fiver Client",
          rating: 5,
        },
        {
          review:
            "“Thank you for reaching out and for your great work . we are very satisfied with the final product.Your expertise and professionalism were invaluable to our project, and I have no doubt that you will continue to provide excellent services ”",
          img: avatar1,
          name: "Mohamed E. Bougeons ensemble's designer ",
          rating: 5,
        },
        {
          review:
            "“I know how important it is to work with reliable, flexible, and responsive individuals, and Sohaib certainly demonstrated these qualities throughout the entire project.  Their expertise and attention to detail were invaluable”",
          img: avatar2,
          name: "Manal Z. It Geeks's team leader",
          rating: 5,
        },
      ],
    },
    Aboutme: {
      title: "About Me",
      subtitle: "//This is a brief introduction about me",
      image1: Hero_person,
      image2: Hero_person,
      para: "As a motivated and dedicated junior software developer, I am eager to contribute to a dynamic and challenging work environment. Driven by a passion for technology and security, I continually seek opportunities to expand my knowledge and refine my skills. I excel at tackling complex problems with innovative and creative solutions and thrive in environments that embrace new challenges. I am excited to apply my expertise in a setting that fosters growth, collaboration, and forward-thinking.",
      btnText: "More about me",
    },
    Contact: {
      title: "Contact Me",
      subtitle: "LET'S GET IN TOUCH",
      social_media,
    },
    Certifications: {
      title: "Certifications",
      subtitle: "My Certifications",
      cert_content,
    },
  },
  fr: {
    Nav,
    hero: {
      title: "Développeur Logiciel",
      firstName: "KATABE",
      LastName: "KIPOKA L.",
      image: Hero_person,
      hero_content: [
        {
          count: `+${
            new Date().getFullYear() - new Date("2022-07-07").getFullYear()
          }`,
          text: "Ans d'expérience en développement Web et en développement de logiciels",
        },
        {
          count: "10+",
          text: "Projets Travaillé dans ma carrière",
        },
      ],
    },
    skills: {
      title: "compétences",
      subtitle: "MES MEILLEURES COMPÉTENCES",
      skills_content: [
        {
          name: "Flask | Python",
          para: "Expérience dans la création d'applications web et d'API avec Flask et Python.",
          logo: flask,
        },
        {
          name: "React JS",
          para: "Création d'interfaces utilisateur réactives et dynamiques pour les applications web.",
          logo: react, // Logo React JS
        },
        {
          name: "Bootstrap",
          para: "Conception de sites web modernes et réactifs avec le framework Bootstrap.",
          logo: boot, // Logo Bootstrap
        },
        {
          name: "Node.js",
          para: "Développement de la logique côté serveur et création d'applications évolutives avec Node.js.",
          logo: nodejs, // Logo Node.js
        },
        {
          name: "HTML & CSS",
          para: "Création d'interfaces web modernes avec HTML5 et CSS3 pour un design réactif.",
          logo: html, // Logo HTML5
        },
        {
          name: "MySQL",
          para: "Gestion de base de données, modélisation de données relationnelles et optimisation des requêtes avec MySQL.",
          logo: mysql, // Logo MySQL
        },
        {
          name: "PL/SQL",
          para: "Écriture et optimisation de procédures stockées, de fonctions et de déclencheurs avec PL/SQL.",
          logo: pl, // Logo PL/SQL
        },
        {
          name: "Tailwind CSS",
          para: "Création d'interfaces utilisateur modernes et réactives avec le framework utilitaire-first Tailwind CSS.",
          logo: tail,
        },
        {
          name: "Connaissances de base en Docker",
          para: "Containerisation des applications avec Docker pour un déploiement et une mise à l'échelle efficaces.",
          logo: docker,
        },
        {
          name: "Jira",
          para: "Compétent dans l'utilisation de Jira pour le suivi de projets, la gestion des tâches et la planification des sprints.",
          logo: jira, // Logo Jira
        },
        {
          name: "Git",
          para: "Contrôle de version avec Git pour une collaboration et une gestion efficaces du code.",
          logo: git, // Logo Git
        },
        {
          name: "GitHub",
          para: "Collaboration et partage de code sur GitHub avec l'intégration du contrôle de version Git.",
          logo: github, // Logo GitHub
        },
        {
          name: "JavaScript",
          para: "Création d'applications web dynamiques et interactives avec JavaScript.",
          logo: js, // Logo JavaScript
        },
        {
          name: "Java EE",
          para: "Développement d'applications de niveau entreprise avec les technologies Java EE.",
          logo: java, // Logo Java EE
        },
        {
          name: "React Native",
          para: "Création d'applications mobiles multiplateformes avec React Native.",
          logo: react, // Logo React Native
        },
        {
          name: "Compétences en communication",
          para: "Compétences en communication verbale et écrite pour une collaboration efficace.",
          logo: com, // Icône de communication
        },
        {
          name: "Gestion du temps",
          para: "Priorisation efficace des tâches pour respecter les délais et garantir le succès du projet.",
          logo: time, // Icône de gestion du temps
        },
      ],
    },
    services: {
      title: "Services",
      subtitle: "//ce que je propose",
      service_content: [
        {
          title: "Développement Web",
          para: "Construire des applications web et des sites internet avec des technologies modernes et les meilleures pratiques est ma passion, et je peux vous aider à le faire grâce à mon expérience dans ce domaine.",
          logo: services_logo1,
        },
        {
          title: "Développement Mobile",
          para: "Créer des applications mobiles multiplateformes avec les derniers outils et frameworks pour offrir une expérience utilisateur fluide sur Android et iOS.",
          logo: services_logo2,
        },
        {
          title: "Conception de Base de Données",
          para: "Concevoir et optimiser des systèmes de bases de données pour la scalabilité, l'efficacité et la fiabilité afin de garantir l'intégrité des données et un accès rapide.",
          logo: services_logo3,
        },
      ],
    },

    Projects: {
      title: "Projets",
      subtitle: "//mes créations",
      project_content: [
        {
          title: "Application Pizza Shop",
          para: "Il s'agit d'une pizzeria en ligne, utilisant Java et une base de données MySQL.",
          image: aman,
          githubLink: "https://github.com/KIPOKA/PizzaApp",
        },
        {
          title: "Système de Gestion de Bibliothèque",
          para: "C'est un projet Python avec Django Admin pour le stockage de la base de données, et je continue à y travailler pour l'améliorer.",
          image: lib,
          githubLink: "https://github.com/KIPOKA/Book-Management",
        },
        {
          title: "Système de Gestion Étudiant",
          para: "Il s'agit d'une application web Java EE utilisant JSP, GlassFish Server, Servlet, etc.",
          image: student,
          githubLink: "https://github.com/KIPOKA/Student-management-system",
        },
        {
          title: "Site Web d'Agence de Marketing Digital",
          para: "C'est un projet Python et Django, avec Bootstrap, HTML, CSS, et un système de messagerie en ligne pour les emails en temps réel.",
          image: digital,
          githubLink: "https://github.com/KIPOKA/Digitalmarketingagency",
        },
        {
          title: "Mon Portfolio",
          para: "Un site portfolio personnel basé sur HTML mettant en avant mes compétences et projets.",
          image: portfolio,
          githubLink: "https://github.com/KIPOKA/portofolio",
        },
      ],
    },

    Aboutme: {
      title: "A propos de moi",
      subtitle: "//Ceci est une brève introduction sur moi",
      image1: Hero_person,
      image2: Hero_person,
      para: "En tant que développeur logiciel junior motivé et dévoué, je suis impatient de contribuer à un environnement de travail dynamique et stimulant. Animé par une passion pour la technologie et la sécurité, je cherche continuellement des opportunités pour approfondir mes connaissances et perfectionner mes compétences. J'excelle dans la résolution de problèmes complexes grâce à des solutions innovantes et créatives, et je m'épanouis dans des environnements qui valorisent les nouveaux défis. Je suis enthousiaste à l'idée de mettre mon expertise au service d'un cadre qui favorise la croissance, la collaboration et l'innovation.",
      btnText: "En savoir plus",
    },
    Contact: {
      title: "contactez-moi",
      subtitle: "RESTONS EN CONTACT",
      social_media,
    },
    Certifications: {
      title: "Certifications",
      subtitle: "mes Certifications",
      cert_content,
    },
  },
};
