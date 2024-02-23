import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '{ bparvin } Portfolio',
    short_name: '{ bparvin } portfolio',
    description:
      "A portfolio website built with next.js, react, tailwind, and typescript depicting Bijan's Software Development experience",
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
