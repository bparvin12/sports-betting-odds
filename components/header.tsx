'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { links } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-policeBlue/40 bg-policeBlue/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950/75 sm:top-6 sm:h-[3.25rem] sm:w-[29rem] sm:rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.7rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-tan sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.src}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  'flex w-full items-center justify-center p-3 uppercase transition hover:text-yankeesBlue dark:text-gray-500 dark:hover:text-gray-300',
                  {
                    'text-white dark:text-white':
                      pathname === `/sport/${link.src}` ||
                      link.src === pathname,
                  },
                )}
                href={link.src === '/' ? '/' : `/sport/${link.src}`}
              >
                {link.name}

                {(pathname === `/sport/${link.src}` ||
                  link.src === pathname) && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-tan dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
