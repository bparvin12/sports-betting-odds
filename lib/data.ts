import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

import bionutricsHomepage from '@/public/Bionutrics_Homepage.png';
import brownBenefits from '@/public/brownbenefits.png';
import jpMetagenics from '@/public/metagenics_jp.png';
import plmc from '@/public/plmc.png';
import portalMeta from '@/public/portal_metagenics.png';

export const links = [
  {
    name: 'Home',
    src: '/',
  },
  {
    name: 'nfl',
    src: 'americanfootball_nfl_super_bowl_winner',
  },
  {
    name: 'nba',
    src: 'basketball_nba',
  },
  {
    name: 'nhl',
    src: 'icehockey_nhl',
  },
  {
    name: 'mlb',
    src: 'baseball_mlb_preseason',
  },
  {
    name: 'mma',
    src: 'mma_mixed_martial_arts',
  },
] as const;

export const experiencesData = [
  {
    title: 'Senior Software Engineer, Frontend',
    location: 'Metagenics, Inc.',
    description:
      'Currently serving as a Senior Software Engineer, I lead initiatives that push the boundaries of software engineering excellence. With React/Next.js as my cornerstone, I collaborate with cross-functional teams to deliver robust solutions that redefine the eCommerce Web Application landscape.',
    icon: React.createElement(FaReact),
    date: 'Dec 2022 - Present',
  },
  {
    title: 'Software Engineer, Frontend',
    location: 'Metagenics, Inc.',
    description:
      'I navigated complex challenges in software development, leveraging React/Next.js and related technologies to drive innovation and streamline processes within the organization.',
    icon: React.createElement(FaReact),
    date: 'Feb 2019 - Dec 2022',
  },
  {
    title: 'Junior Software Engineer',
    location: 'Metagenics, Inc.',
    description:
      'Transitioning to the role of Junior Software Engineer, I continued to harness the power of Frontend Technologies, contributing to the development of cutting-edge solutions in the realm of eCommerce healthcare.',
    icon: React.createElement(FaReact),
    date: 'Sep 2019 - Feb 2021',
  },
  {
    title: 'Software Developer Intern',
    location: 'Metagenics, Inc.',
    description:
      'As a Software Developer Intern, I delved into the world of professional software development, laying the foundation for my journey from intern to senior developer I immersed myself in projects that sparked my passion for software engineering.',
    icon: React.createElement(FaReact),
    date: 'May 2019 - Sep 2019',
  },
  {
    title: 'Continuing Education, Full-Stack Software Development',
    location: 'University of California, Irvine',
    description:
      "Polished my skills in both front-end and back-end technologies. Through hands-on projects and rigorous training, I've refined the ability to craft scalable and user-centric web applications, ready to contribute innovative solutions to the ever-evolving technology industry.",
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'B.S. in Chemistry and Biochemistry',
    location: 'California State University, Fullerton',
    description:
      'I honed my analytical skills and passion for STEM fields. Equipped with a solid foundation, I was eager to apply my knowledge to real-world challenges.',
    icon: React.createElement(LuGraduationCap),
    date: '2018',
  },
] as const;

export const projectsData = [
  {
    title: 'bionutrics.fr',
    description:
      'Spearheaded the frontend development and maintenance of the Bionutrics.fr eCommerce website, focusing on high performance, accessibility, and scalability.',
    tags: [
      'React',
      'Next.js',
      'Vercel',
      'HTML/CSS',
      'TypeScript',
      'JavaScript',
      'Contentful CMS',
      'commerceTools',
      'AWS Services',
      'Cloudflare',
      'New Relic',
      'Data Dog',
      'Axios',
      'GraphQL',
      'Apollo',
      'React Testing Library',
      'ESLint',
      'Adyen Payment Processor',
    ],
    imageUrl: bionutricsHomepage,
    projectUrl: 'https://bionutrics.fr',
  },
  {
    title: 'metagenics.co.jp',
    description:
      'Metagenics Japanese eCommerce website, focusing on performance, user experience, and scalability.',
    tags: [
      'React',
      'Next.js',
      'Vercel',
      'HTML/CSS',
      'TypeScript',
      'JavaScript',
      'Contentful CMS',
      'commerceTools',
      'AWS Services',
      'Cloudflare',
      'New Relic',
      'Axios',
      'GraphQL',
      'Apollo',
      'React Testing Library',
      'ESLint',
      'CyberSource Payment Processor',
    ],
    imageUrl: jpMetagenics,
    projectUrl: 'https://www.metagenics.co.jp',
  },
  {
    title: 'portal.metagenics.com',
    description:
      'Led the frontend development and deployment efforts for the portal.metagenics.com website, a marketing platform sponsored by Metagenics, focusing on user engagement, performance, and search engine optimization (SEO).',
    tags: [
      'React',
      'Next.js',
      'Vercel',
      'Tailwind',
      'TypeScript',
      'Google Analytics',
      'OneTrust Cookie Consent',
      'next-seo',
      'next-sitemap',
    ],
    imageUrl: portalMeta,
    projectUrl: 'https://portal.metagenics.com/hcp-landing-page',
  },
  {
    title: 'brownbenefits.com',
    description:
      'Developed and customized the brownbenefits.com landing page on Wix, focusing on branding requirements, visual appeal, and user experience',
    tags: [
      'Wix',
      'HTML/CSS',
      'Cross-browser Compatibility',
      'Accessibility Standards',
    ],
    imageUrl: brownBenefits,
    projectUrl: 'https://www.brownbenefits.com',
  },
  {
    title: 'plmc.com',
    description:
      'Developed and deployed the plmc.com website, a marketing platform sponsored by Metagenics, focusing on user engagement, performance, and search engine optimization (SEO).',
    tags: [
      'React',
      'Next.js',
      'Vercel',
      'JavaScript',
      'HTML/CSS',
      'Contentful CMS',
      'Google Analytics',
      'next-seo',
      'next-sitemap',
    ],
    imageUrl: plmc,
    projectUrl: 'https://www.plmc.com',
  },
] as const;

export const personalProjectsData = [
  {
    title: 'Portfolio',
    description:
      'Responsive portfolio for displaying professional and personal experience',
    tags: ['React', 'Next.js', 'Vercel', 'HTML/CSS', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/bparvin12/BijanParvin_Portfolio_FE',
  },
  {
    title: 'Next.js Marketing Template',
    description:
      'Template for creating clean/modern marketing websites and landing pages',
    tags: ['React', 'Next.js', 'Vercel', 'HTML/CSS', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/bparvin12/metagenics-marketing-pages-nam',
  },
  {
    title: 'Next.js 14 Code Share Project',
    description: 'Next.js Project ~ App Router Practice',
    tags: ['React', 'Next.js', 'Vercel', 'Prisma', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/bparvin12/nextjs-14-code-share-tutorial',
  },
  {
    title: 'Next.js 14 Corporation Project',
    description: 'Next.js Project v14 ~ App Router Practice',
    tags: ['React', 'Next.js', 'Vercel', 'ESLint', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/bparvin12/nextjs-14-corporation-tutorial',
  },
  {
    title: 'Next.js 14 Foodies App',
    description: 'Next.js Project v14 ~ Food Dashboard',
    tags: ['React', 'Next.js', 'Vercel', 'ESLint', 'JavaScript', 'SQLite'],
    link: 'https://github.com/bparvin12/nextjs-14-course-foodies-app',
  },
  {
    title: 'TypeScript Course',
    description: 'TypeScript Course and Practice from Udemy',
    tags: ['TypeScript', 'React'],
    link: 'https://github.com/bparvin12/typescript-course',
  },
  {
    title: 'Turbo Repo Next.js',
    description: 'Understanding turbo repos with Next.js and React',
    tags: ['TypeScript', 'React', 'Next.js', 'turbo repo'],
    link: 'https://github.com/bparvin12/turborepo-next-basic',
  },
  {
    title: 'Next.js Dashboard App Router',
    description: 'Practicing with Next.js App Router and version 14',
    tags: ['TypeScript', 'React', 'Next.js', 'App Router'],
    link: 'https://github.com/bparvin12/nextjs-dashboard-app-router-tutorial',
  },
  {
    title: 'Glebhan',
    description:
      'Wedding website built with React.js, custom CSS, and Bootstrap',
    tags: ['JavaScript', 'React', 'Bootstrap', 'HTML/CSS'],
    link: 'https://github.com/bparvin12/Glebhan',
  },
];

export const skillsData = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'HTML',
  'CSS',
  'Vercel',
  'Node.js',
  'Git',
  'Tailwind',
  'Adyen',
  'CyberSource',
  'Axios',
  'Redux',
  'GraphQL',
  'Apollo',
  'AWS Services',
  'CMS',
  'eCommerce',
  'commerceTools',
  'Contentful CMS',
  'New Relic',
  'Data Dog',
  'Google Analytics',
  'Google Tag Manager',
  'Cookie Consent',
  'OneTrust',
  'Prisma',
  'Framer Motion',
  'CloudFlare',
  'SEO',
  'Marketing Pages',
  'Sitemap',
  'Agile Methodolgies',
  'Confluence',
  'Jira',
  'Figma',
] as const;
