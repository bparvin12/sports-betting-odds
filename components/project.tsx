'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import type { projectsData } from '@/lib/data';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    const ulElement = ref.current?.querySelector('ul');
    if (ulElement) {
      ulElement.scrollTo({ top: ulElement.scrollHeight, behavior: 'smooth' });
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    const ulElement = ref.current?.querySelector('ul');
    if (ulElement) {
      ulElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={projectUrl} target="_blank">
        <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-policeBlue bg-policeBlue transition hover:bg-policeBlue/90 dark:border-black/5 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8">
          <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold text-tan">{title}</h3>
            <p className="my-2 text-xs leading-relaxed text-white dark:text-white/70">
              {description}
            </p>
            <ul className="mr-2 mt-4 flex flex-wrap gap-2 overflow-scroll sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition
        group-even:-left-40 
        group-even:right-[initial]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3

        group-even:group-hover:rotate-2 sm:block"
          />
        </section>
      </Link>
    </motion.div>
  );
}
