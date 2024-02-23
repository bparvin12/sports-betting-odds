'use client';

import React from 'react';

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import Project from './project';
import SectionHeading from './section-heading';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>Professional projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
