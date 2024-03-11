'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 hidden h-16 w-1 rounded-full bg-policeBlue dark:bg-gray-50/20 sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
