import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sports Betting Odds | { biaji }',
    short_name: 'Sports Betting Odds | { biaji }',
    description:
      'Sports Betting Odds and Spreads for all in-season sports. NFL, NHL, NBA, etc.',
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
