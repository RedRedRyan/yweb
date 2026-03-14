import { link } from "fs";

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
export{
    navLinks,
    socials,
    ycrew
};