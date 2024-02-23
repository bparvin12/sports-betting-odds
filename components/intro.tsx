'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { FaSquareGitlab } from 'react-icons/fa6';
import { HiDownload } from 'react-icons/hi';
import { RiInstagramFill } from 'react-icons/ri';

import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);

  const currentYear = new Date().getFullYear();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/profile_pic.jpeg"
              alt="Bijan Parvin Profile Picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="size-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-xl !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="pb-3">
          <span className="font-bold">Hello, I&apos;m Bijan.</span> I&apos;m a{' '}
          <span className="font-bold">Software Developer</span> with{' '}
          <span className="font-bold">{currentYear - 2019}+ years</span> of
          professional experience. I enjoy crafting online adventures.
        </p>
        <p className="pb-3">
          My niche is{' '}
          <span className="underline">
            Frontend Engineering ~ React (Next.js)
          </span>{' '}
          🚀, but I am a forever learner and enjoy diving into{' '}
          <span className="underline">Full Stack Applications</span>.
        </p>
        <p className="pb-3">Feel free to explore my journey! 🗺️</p>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="borderBlack group mx-8 flex cursor-pointer items-center gap-2 rounded-full bg-policeBlue px-7 py-3 text-tan outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 dark:text-white"
          href="/BijanParvin_Resume_FE.pdf"
          download
        >
          Download CV{' '}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
      </motion.div>
      <motion.div
        className="flex flex-row items-center justify-center gap-2 p-4 text-lg font-medium sm:flex-row"
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
    </section>
  );
}
