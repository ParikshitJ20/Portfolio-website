// Skills data
export const skills = [
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML", icon: "html5", level: 90 },
      { name: "CSS", icon: "css3", level: 85 },
      { name: "JavaScript", icon: "javascript", level: 90 },
      { name: "TypeScript", icon: "typescript", level: 85 },
      { name: "React", icon: "react", level: 90 },
      { name: "Tailwind CSS", icon: "tailwind", level: 85 },
      { name: "Framer Motion", icon: "framermotion", level: 80 },
    ],
  },
  {
    name: "Blockchain & Web3",
    skills: [
      { name: "Solidity", icon: "solidity", level: 75 },
      { name: "Ethereum", icon: "ethereum", level: 80 },
      { name: "Smart Contracts", icon: "smartcontract", level: 75 },
      { name: "Web3.js", icon: "web3", level: 70 },
    ],
  },
  {
    name: "Cybersecurity",
    skills: [
      { name: "Network Security", icon: "network", level: 75 },
      { name: "Penetration Testing", icon: "pentesting", level: 70 },
      { name: "Security Analysis", icon: "security", level: 75 },
    ],
  },
  {
    name: "Other Tools",
    skills: [
      { name: "Git", icon: "git", level: 85 },
      { name: "VS Code", icon: "vscode", level: 90 },
      { name: "Node.js", icon: "nodejs", level: 80 },
      { name: "Docker", icon: "docker", level: 70 },
    ],
  },
];

// Project data
export const projects = [
  {
    title: "Decentralized Exchange",
    description:
      "A fully functional decentralized exchange built on Ethereum using Solidity smart contracts. Features include token swapping, liquidity provision, and yield farming.",
    tags: ["React", "Solidity", "Web3.js", "Ethereum"],
    image: "Images/Id.jpg",
    source_code_link: "https://github.com/yourusername/dex",
    demo_link: "https://dex-demo.netlify.app/",
  },
  {
    title: "NFT Marketplace",
    description:
      "A platform for creators to mint, sell, and trade NFTs. Includes features like auctions, fixed-price sales, and royalty distributions to creators.",
    tags: ["React", "Solidity", "IPFS", "Ethereum"],
    image: "/project2.webp",
    source_code_link: "https://github.com/yourusername/nft-marketplace",
    demo_link: "https://nft-marketplace-demo.vercel.app/",
  },
  {
    title: "Cybersecurity Dashboard",
    description:
      "A comprehensive dashboard for monitoring and analyzing security threats in real-time. Includes intrusion detection, vulnerability assessment, and incident response tools.",
    tags: ["React", "Node.js", "Socket.io", "D3.js"],
    image: "/project3.webp",
    source_code_link: "https://github.com/yourusername/security-dashboard",
    demo_link: "https://security-dashboard-demo.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, interactive UI elements, and a dark mode toggle.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/project4.webp",
    source_code_link: "https://github.com/yourusername/portfolio",
    demo_link: "https://portfolio-demo.vercel.app/",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with features like product catalog, shopping cart, user authentication, payment integration, and order management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/project5.webp",
    source_code_link: "https://github.com/yourusername/ecommerce",
    demo_link: "https://ecommerce-demo.vercel.app/",
  },
  {
    title: "Crypto Tracker",
    description:
      "A cryptocurrency tracking application that displays real-time price data, historical charts, and market information for thousands of cryptocurrencies.",
    tags: ["React", "CoinGecko API", "Chart.js", "TypeScript"],
    image: "/project6.webp",
    source_code_link: "https://github.com/yourusername/crypto-tracker",
    demo_link: "https://crypto-tracker-demo.vercel.app/",
  },
];

// Social links
export const socialLinks = [
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/ParikshitJ20",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/parikshit-jayale-254195231/",
  },
  {
    name: "Email",
    icon: "mail",
    url: "mailto:parikshitjayale20@gmail.com",
  },
];

// Navigation links
export const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Resume", to: "resume" },
  { name: "Contact", to: "contact" },
]; 