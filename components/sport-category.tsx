import React from 'react';

export type SportsEvent = {
  key: string;
  group: string;
  title: string;
  description: string;
  active: boolean;
  has_outrights: boolean;
};

export default function SportCategory({
  key,
  group,
  title,
  description,
  active,
  has_outrights,
}: SportsEvent) {
  return (
    <div className="flex w-full flex-col justify-end rounded-lg border border-policeBlue bg-policeBlue p-4 transition hover:bg-policeBlue/90 dark:border-black/5 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:w-72">
      <div className="text-xl text-tan sm:basis-16">{group}</div>
      <div className="sm:max-w-3/4 my-2 w-full border-t-2" />
      <div className="text-xl text-tan sm:basis-16">{title}</div>
      <div className="my-2 text-sm text-white">{description}</div>
      {/* <div className="flex w-full justify-end">
        <a
          className="borderBlack my-2 flex w-min cursor-pointer items-center rounded-full bg-tan p-4 text-[1.35rem] text-policeBlue transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href={link}
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </div> */}
    </div>
  );
}
