'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { FaSquareGitlab } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

import { useSectionInView } from '@/lib/hooks';

import SectionHeading from './section-heading';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <div>
        <div className="mt-6 border-t border-policeBlue dark:border-gray-200">
          <dl className="divide-y divide-policeBlue dark:divide-gray-200">
            {/* Name */}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6">Full name</dt>
              <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                Bijan Parvin
              </dd>
            </div>

            {/* Email */}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6">Email address</dt>
              <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                <a href="mailto:bparvin12@gmail.com" target="_blank">
                  bparvin12@gmail.com
                </a>
              </dd>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center justify-center px-4 py-6 ">
              <motion.div
                className="flex w-full flex-row items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                }}
              >
                <a
                  className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-policeBlue p-4 text-tan transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white"
                  href="https://www.linkedin.com/in/bparvin12/"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>

                <a
                  className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-policeBlue p-4 text-[1.35rem] text-tan transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white"
                  href="https://gitlab.com/bparvin12"
                  target="_blank"
                >
                  <FaSquareGitlab />
                </a>

                <a
                  className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-policeBlue p-4 text-[1.35rem] text-tan transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white"
                  href="https://github.com/bparvin12"
                  target="_blank"
                >
                  <FaGithubSquare />
                </a>

                <a
                  className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-policeBlue p-4 text-[1.35rem] text-tan transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white"
                  href="https://www.instagram.com/reactjs.tips/"
                  target="_blank"
                >
                  <RiInstagramFill />
                </a>
              </motion.div>
            </div>
          </dl>
        </div>
      </div>
    </motion.section>
  );
}
