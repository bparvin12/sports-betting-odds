'use client';

import React from 'react';

import { personalProjectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import FunProject from './fun-project';
import SectionHeading from './section-heading';

export default function FunProjects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>Learning and Personal Projects</SectionHeading>
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4 lg:justify-start">
        {personalProjectsData.map(
          ({ title, description, tags, link }, index) => (
            <React.Fragment key={index}>
              <FunProject
                title={title}
                description={description}
                tags={tags}
                link={link}
              />
            </React.Fragment>
          ),
        )}
      </div>
    </section>
  );
}
