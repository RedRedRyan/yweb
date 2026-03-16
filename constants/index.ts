import { link } from "fs";
import { title } from "process";

const navLinks = [
    {
      label: 'home',
      href: '#hero',
      ariaLabel: 'Home',
      rotation: -8,
      hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    {
      label: 'about',
      href: '#about',
      ariaLabel: 'About',
      rotation: 8,
      hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
      label: 'projects',
      href: '#projects',
      ariaLabel: 'Projects',
      rotation: 8,
      hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
    },
    {
      label: 'blog',
      href: '#',
      ariaLabel: 'Blog',
      rotation: 8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
    {
      label: 'contact',
      href: '#',
      ariaLabel: 'Contact',
      rotation: -8,
      hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    }
  ];
  const socials = [
    {
       name: "Youtube",
       icon: "/icons/youtube.png",
       url: "#",
    },
    {
       name: "X (Twitter)",
       icon: "/icons/twitter.png",
       url: "#",
    },
    {
       name: "Discord",
       icon: "/icons/discord.png",
       url: "#",
    },
   ];

   const ycrew= [
     {
       title: 'Jude',
       description: 'Software Engineer. AI,IoT.',
       id: 1,
       icon: "/images/jude.png",
       link: 'https://www.linkedin.com/in/jude-tulel-9b1a4b1a0/'
     },
     {
       title: 'Costo',
       description: 'Environmental Artist. 3D Modeling and Animations.',
       id: 2,
       icon: "/images/costo.png",
       link: 'https://www.linkedin.com/in/costo-odhiambo-9b1a4b1a0/'
     },
     {
       title: 'Koiya',
       description: 'Motion Designer. Audio and Visual Editor',
       id: 3,
       icon: "/images/koiya.png",
        link: 'https://www.linkedin.com/in/koiya-odhiambo-9b1a4b1a0/'
     },
     {
       title: 'RedRyan',
       description: 'UI/UX Artist. Unity Game Developer.',
       id: 4,
       icon: "/images/redryan.png",
        link: 'https://www.linkedin.com/in/redryan-odhiambo-9b1a4b1a0/'
     }

   ];

  const appList = [
    {
      title: "Nairobi Block Exchange",
      logo: "/images/nbx.png",
      description: "Tokenizing equities and bonds on Hedera's Hashgraph.",
      link: "#",
      category: "Fintech"
    
    },
    {
      title: "RelyOn POS",
      logo: "/images/relyon.png",
      description: "A point-of-sale system with real-time inventory management and analytics for small businesses.",
      link: "#",
      category: "Fintech"
    },
    {
      title: "Monster Trux",
      logo: "/images/monstertrux.png",
      description: "Drive, race and explore the Monsterlands. Built with Unity on Polygon.",
      link: "#",
      category: "Games"
    },
    {
      title: "Campus Connect",
      logo: "/images/campusconnect.png",
      description: "A social platform for university students to connect, share resources, and collaborate on projects.",
      link: "#",
      category: "Social"
    },
    {
      title: "Agent OG",
      logo: "/images/agentog.png",
      description: "Rent AI agents to automate tasks, generate content, and provide insights across various domains.",
      link: "#",
      category: "AI"
    },
    {
      title: "BlockFridge",
      logo: "/images/blockfridge.png",
      description: "A decentralized marketplace for buying and selling fresh produce directly from local farmers.",
      link: "#",
      category: "Fintech"
    },
    
  ];
const featureList = [
  {
    title: "Toon World",
    description: "A low poly city with building and roadways made in Blender",
    link: "#",
    media: "/images/toonworld.png",
  }
];

export{
    navLinks,
    socials,
    ycrew,
    appList,
    featureList
};