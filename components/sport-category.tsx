import React from 'react';

export type SportsEvent = {
  uniqueKey: string;
  group: string;
  title: string;
  description: string;
  active: boolean;
  has_outrights: boolean;
};

export default function SportCategory({
  uniqueKey,
  title,
  description,
  active,
  has_outrights,
}: SportsEvent) {
  return (
    <li className="flex justify-between gap-x-6 py-5" key={uniqueKey}>
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="mt-1 truncate text-xs leading-5">{title}</p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6">{description}</p>
      </div>
    </li>
  );
}
