'use client';

import React, { useEffect, useState } from 'react';

import SectionHeading from './section-heading';
import type { SportsEvent } from './sport-category';
import SportCategory from './sport-category';

interface SportsEventWithKey extends Omit<SportsEvent, 'uniqueKey'> {
  key: string;
}

type SportCategoriesProps = { sportsCategories: SportsEventWithKey[] };

export default function SportCategories({
  sportsCategories,
}: SportCategoriesProps) {
  // Group Each Similar Sport Together based on `group` from odds api response.
  const [groupedSports, setGroupedSports] = useState<{
    [key: string]: SportsEventWithKey[];
  }>({});

  useEffect(() => {
    const groupSports = async () => {
      const groupedBySportsGroup: { [key: string]: SportsEventWithKey[] } = {};

      // Map each sports category to a Promise
      const promises: Promise<void>[] = sportsCategories.map(
        async (currentItem) => {
          const { group } = currentItem;
          if (!groupedBySportsGroup[group]) {
            groupedBySportsGroup[group] = [];
          }
          groupedBySportsGroup[group].push(currentItem);
        },
      );

      // Wait for all promises to resolve
      await Promise.all(promises);

      // Update state after all promises are resolved
      setGroupedSports(groupedBySportsGroup);
    };

    groupSports();
  }, [sportsCategories]); // Trigger effect when sportsCategories changes

  return (
    <section className="mx-auto mb-28 w-full scroll-mt-28">
      <SectionHeading>Sports</SectionHeading>
      <div className="flex flex-row flex-wrap justify-between gap-12">
        {Object.entries(groupedSports).map(([sportKey, sportsArray]) => (
          <React.Fragment key={sportKey}>
            <div className="flex min-w-72 grow flex-col justify-center gap-4 divide-y divide-tan overflow-hidden rounded-lg border border-policeBlue bg-policeBlue p-4 text-white transition hover:bg-policeBlue/90 dark:divide-white dark:border-black/5 dark:bg-white/10 dark:text-white  dark:hover:bg-white/20 lg:justify-start">
              <h1 className="uppercase">{sportKey}</h1>
              <ul
                role="list"
                className="flex flex-col divide-y divide-dashed divide-white dark:divide-tan"
              >
                {sportsArray.map(
                  ({
                    key: uniqueKey,
                    group,
                    title,
                    description,
                    active,
                    has_outrights,
                  }) => (
                    <React.Fragment key={uniqueKey}>
                      <SportCategory
                        uniqueKey={uniqueKey}
                        group={group}
                        title={title}
                        description={description}
                        active={active}
                        has_outrights={has_outrights}
                      />
                    </React.Fragment>
                  ),
                )}
              </ul>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
