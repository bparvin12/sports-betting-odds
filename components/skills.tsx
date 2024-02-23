'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import SectionHeading from './section-heading';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-tan">
        {skillsData.map((skill, index) => (
          <motion.li
            className="borderBlack rounded-xl bg-policeBlue px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            whileHover={{ scale: 1.2, rotate: 10 }}
            // transition={{ type: 'spring', stiffness: 300 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
