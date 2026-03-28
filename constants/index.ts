

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
  const techLogos = [
		{
			src: "/images/tools/react.png",
			alt: "React",
      href: "https://reactjs.org/"
		},
    {
      src: "/images/tools/nextjs.png",
      alt: "Next.js",
      href: "https://nextjs.org/"
    },
    {
      src: "/images/tools/aftereffects.png",
      alt: "After Effects",
      href: "https://www.adobe.com/products/aftereffects.html"
    },
    {
      src: "/images/tools/unity.png",
      alt: "Unity",
      href: "https://unity.com/"
    },
    {
      src: "/images/tools/blender.png",
      alt: "Blender",
      href: "https://www.blender.org/"
    },
    {
      src: "/images/tools/figma.png",
      alt: "Figma",
      href: "https://www.figma.com/"
    },
     {
       src: "/images/tools/photoshop.png",
        alt: "Photoshop",
        href: "https://www.adobe.com/products/photoshop.html"
     },
     {
      src: "/images/tools/r.png",
      alt: "R",
      href: "https://www.r-project.org/"
     },
     {  
      src: "/images/tools/python.png",
      alt: "Python",
      href: "https://www.python.org/"
     },
     {
      src: "/images/tools/solidity.png",
      alt: "Solidity",
      href: "https://docs.soliditylang.org/"
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

   const mockBlogs = [
    {
      id: 1,
      title: 'Building Agent 0g',
      image: '/images/0g.webp',
      description: 'How I created an AI agent that can perform tasks and interact with users. From concept to code, I share the journey of building Agent 0g and its potential applications in various industries.',
      date: 'March 15, 2024',
      author: 'Jude',
      link: "https://x.com/i/status/1986054121862873144"
    },
    {
      id: 2,
      title: 'Coming Soon',
      image: '/images/blog.png',
      description: 'Discover the latest blogs and insights from our team. Stay tuned for exciting updates and in-depth articles on technology, innovation, and more.',
      date: 'Estimated release: April 2024',
      author: 'Ystudios team',
      link: "#blog"
    },
    {
      id: 3,
      title: 'Coming Soon',
      image: '/images/blog.png',
      description: 'Discover the latest blogs and insights from our team. Stay tuned for exciting updates and in-depth articles on technology, innovation, and more.',
      date: 'Estimated release: April 2024',
      author: 'Ystudios team',
      link: "#blog"
      
  
    },
    {
      id: 4,
      title: 'Coming Soon',
      image: '/images/blog.png',
      description: 'Discover the latest blogs and insights from our team. Stay tuned for exciting updates and in-depth articles on technology, innovation, and more.',
      date: 'Estimated release: April 2024',
      author: 'Ystudios team',
      link: "#blog"
    }
  ];

   const ycrew= [
     {
       title: 'Jude',
       description: 'Software Engineer.Web3, AI, Robotics & IoT .',
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
       description: 'UI UX Artist. Unity Game Developer.',
       id: 4,
       icon: "/images/redryan.png",
        link: 'https://www.linkedin.com/in/redryan-odhiambo-9b1a4b1a0/'
     }

   ];

const featureList = [ 
  {
    title: "Toon World",
    description: "A low poly city with building and roadways made in Blender",
    link: "#",
    media: "/video/toonworld.png",
  }
];
export const appList: Project[] = [
  {
    title: "Nairobi Block Exchange",
    logo: "/images/projects/nbx.jpg",
    description: "Tokenizing equities and bonds on Hedera's Hashgraph.",
    link: "#",
    category: "Fintech"
  },
  {
    title: "RelyOn POS",
    logo: "/images/projects/Relyon.png",
    description: "A point-of-sale system with real-time inventory analytics .",
    link: "#",
    category: "Fintech"
  },
  {
    title: "Monster Trux",
    logo: "/images/projects/mtlogo.png",
    description: "Drive, race and explore the Monsterlands. Built with Unity on Polygon.",
    link: "#",
    category: "Games"
  },
  {
    title: "Campus Connect",
    logo: "/images/projects/cc.png",
    description: "Connect , collaborate  and share resources on campus.",
    link: "#",
    category: "Social"
  },
  {
    title: "Agent OG",
    logo: "/images/projects/agent.png",
    description: "Rent an agent and pay with 0g tokens.",
    link: "#",
    category: "AI"
  },
  {
    title: "BlockFridge",
    logo: "/images/projects/blockfridge.png",
    description: "Daily delivery of shopping and grocery.",
    link: "#",
    category: "Fintech"
  }
];

export interface Project {
  title: string;
  logo: string;
  description: string;
  link: string;
  category: string;
}

export{
    navLinks,
    socials,
    ycrew,
    featureList,
    mockBlogs,
    techLogos
};