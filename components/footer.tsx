import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="m-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {year} biaji. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Sports
        Betting Odds dashboard built with React & Next.js (App Router & Server
        Actions), TypeScript, Tailwind CSS, Framer Motion, Vercel hosting.
      </p>
    </footer>
  );
}
