import { Suspense } from 'react';

import { getSportsCategories } from '@/app/page';
import OddsTable from '@/components/odds-table';
import type { SportsEvent } from '@/components/sport-category';
import { links } from '@/lib/data';
import type { SportOddsType } from '@/lib/types';

export const dynamicParams = false;
export const dynamic = 'force-static';

interface SportsEventWithKey extends Omit<SportsEvent, 'uniqueKey'> {
  key: string;
}

async function getOdds(sport: string): Promise<SportOddsType[]> {
  // https://app.swaggerhub.com/apis-docs/the-odds-api/odds-api/4#/current%20events/get_v4_sports__sport__odds
  try {
    const params = new URLSearchParams({
      apiKey: `${process.env.NEXT_PUBLIC_ODDS_API_KEY}`,
      regions: 'us',
      markets: 'h2h,spreads',
      oddsFormat: 'american',
    });
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/${sport}/odds?${params}`,
      { cache: 'no-store' },
    );
    console.log(response);
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    return await response.json();
  } catch (error) {
    console.error('Error fetching sports data:', error);
    throw error;
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const sportOdds = await getOdds(params.slug);
  console.log(sportOdds);
  return (
    <main className="flex flex-col items-center px-4">
      <Suspense fallback={<p>Loading feed...</p>}>
        <OddsTable
          sportTitle={sportOdds?.[0].sport_title}
          sportOdds={sportOdds}
        />
      </Suspense>
    </main>
  );
}

export async function generateStaticParams() {
  const sportsCategories = await getSportsCategories();

  const arrayOfSportsFromOddsApi: string[] = [];

  // Map each sports category to a Promise
  const promises: Promise<void>[] = sportsCategories.map(
    async (currentItem: SportsEventWithKey) => {
      const { key } = currentItem;
      return !arrayOfSportsFromOddsApi.includes(key)
        ? arrayOfSportsFromOddsApi.push(key)
        : [];
    },
  );

  // Wait for all promises to resolve
  await Promise.all(promises);

  const completeListOfLinks: string[] = [];

  links.map((link) => completeListOfLinks.push(link.src));
  arrayOfSportsFromOddsApi.map((link) => completeListOfLinks.push(link));

  return completeListOfLinks.map((link) => ({
    slug: link,
  }));
}
