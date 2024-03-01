import { Suspense } from 'react';

import SportCategories from '@/components/sport-categories';

export async function getSportsCategories() {
  // https://app.swaggerhub.com/apis-docs/the-odds-api/odds-api/4#/
  try {
    const params = new URLSearchParams({
      apiKey: `${process.env.NEXT_PUBLIC_ODDS_API_KEY}`,
      all: 'false',
    });
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports?${params}`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching sports data:', error);
    throw error;
  }
}

export default async function Home() {
  const sportsCategories = await getSportsCategories();
  return (
    <main className="flex flex-col items-center px-4">
      <Suspense fallback={<p>Loading feed...</p>}>
        <SportCategories sportsCategories={sportsCategories} />
      </Suspense>
    </main>
  );
}
