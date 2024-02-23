'use client';

import React from 'react';

import { useSectionInView } from '@/lib/hooks';

import SectionHeading from './section-heading';
import type { SportsEvent } from './sport-category';
import SportCategory from './sport-category';

type SportCategoriesProps = { sportsCategories: SportsEvent[] };

export default function SportCategories({
  sportsCategories,
}: SportCategoriesProps) {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>Sports</SectionHeading>
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4 lg:justify-start">
        {sportsCategories.map(
          ({ key, group, title, description, active, has_outrights }) => (
            <React.Fragment key={key}>
              <SportCategory
                key={key}
                group={group}
                title={title}
                description={description}
                active={active}
                has_outrights={has_outrights}
              />
            </React.Fragment>
          ),
        )}
      </div>
    </section>
  );
}
