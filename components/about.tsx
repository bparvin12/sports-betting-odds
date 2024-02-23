'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { useSectionInView } from '@/lib/hooks';

import SectionHeading from './section-heading';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a B.S. degree in{' '}
        <span className="font-medium">Chemistry and Biochemistry</span> at{' '}
        <span className="underline">CSU Fullerton</span>, I decided to pursue my
        passion for programming. I enrolled in a continuing education and coding
        bootcamp at <span className="underline">UC Irvine</span> and earned{' '}
        <span className="font-medium">
          full-stack web development certifications
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js, and JS/TS</span>.
      </p>

      <p>
        I am an{' '}
        <span className="italic">
          avid learner, debate lover, and forever optimistic
        </span>
        . I like <span>creating</span> products that either a) have fun and
        nifty features or b) solve a problem for people. I especially love
        creating products that have both of those things! Above all that, I am a{' '}
        <span className="italic">supportive</span> and{' '}
        <span className="italic">enthusiastic team player</span> dedicated to
        streamlining processes and efficiently resolving project issues. Plus, I
        make my best effort in <span className="italic">teaching</span> or
        sharing my knowledge with my teammates, what I like to call,{' '}
        <span className="font-medium">“spreading the love”.</span>
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        traveling or being active with my friends and family just as much as I
        enjoy playing video games or having a movie night in! During the winter,
        you can find me at the nearest snowboarding resort, and during the
        summer, most likely in a national park or playing soccer, pickleball,
        you name it!
      </p>
    </motion.section>
  );
}
