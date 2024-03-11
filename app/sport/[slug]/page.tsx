import { Suspense } from 'react';

import { getSportsCategories } from '@/app/page';
import OddsTable from '@/components/odds-table';
import type { SportsEvent } from '@/components/sport-category';
import { ODDS_API_KEY_ROTATION } from '@/lib/constants';
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
      apiKey: `${ODDS_API_KEY_ROTATION[1]}`,
      regions: 'us',
      markets: 'h2h,spreads',
      oddsFormat: 'american',
    });
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/${sport}/odds?${params}`,
      // { cache: 'no-store' },
    );

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return (await response.json()) ?? [];
    }
    throw new Error('Response is not in JSON format');
  } catch (error) {
    console.error('Error fetching sports data:', error);
    throw error;
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const sportOdds = await getOdds(params.slug);
    return (
      <main className="flex flex-col items-center px-4">
        <Suspense fallback={<p>Loading feed...</p>}>
          <OddsTable
            sportTitle={sportOdds?.[0]?.sport_title}
            sportOdds={sportOdds}
          />
        </Suspense>
      </main>
    );
  } catch (error) {
    console.error('Error fetching sports data:', error);
    return (
      <main className="flex flex-col items-center px-4">
        <p>Error fetching sports data. Please try again later.</p>
      </main>
    );
  }
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
