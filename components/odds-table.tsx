import React from 'react';

import { MARKETS } from '@/lib/constants';
import type { SportOddsType } from '@/lib/types';
import { formatTimestamp } from '@/lib/utils';

import SectionHeading from './section-heading';

type OddsTableProps = {
  sportTitle: string;
  sportOdds: SportOddsType[];
};

export default function OddsTable({ sportTitle, sportOdds }: OddsTableProps) {
  if (sportTitle === undefined || sportOdds.length === 0)
    return (
      <SectionHeading>
        Odds not available. Sport may be out of season.
      </SectionHeading>
    );
  return (
    <table className="w-full table-auto border-collapse border border-policeBlue/70 dark:border-gray-200">
      {/* Table Header */}
      <thead className="border border-policeBlue/70 bg-policeBlue text-white dark:border-gray-200 dark:bg-sky-900/90">
        <tr className="uppercase">
          <th
            className="border border-policeBlue/70 p-4 dark:border-gray-200 md:w-1/6 lg:w-1/5"
            colSpan={3}
          >
            {sportTitle}
          </th>
        </tr>
      </thead>
      {/* Table Body */}
      <tbody>
        {sportOdds.map((sportOdd) => (
          <>
            {/* Row for Sport and Date */}
            <tr key={sportOdd.id} className="sticky top-24 z-50 bg-sky-900">
              <td
                className="flex w-full justify-evenly p-2 align-top text-white md:col-span-1 lg:col-span-1"
                colSpan={2}
              >
                <div className="border-bg-white grow border-r px-2">
                  <div>{sportOdd.home_team}</div>
                  <div>{sportOdd.away_team}</div>
                </div>
                <div className="grow px-2 text-sm sm:text-base">
                  {formatTimestamp(sportOdd.commence_time)}
                </div>
              </td>
              {/* <td className=" p-2 align-top">
                
              </td> */}
            </tr>
            {/* Row for Odds */}
            <tr className="">
              <td
                className=" p-2 align-top md:col-span-2 lg:col-span-2"
                colSpan={3}
              >
                {/* Bookmaker */}
                {sportOdd.bookmakers.map((bookmaker) => (
                  <div
                    className="flex w-full flex-wrap justify-stretch border-b-2 border-dashed border-tan py-2 even:bg-slate-300/10"
                    key={bookmaker.key}
                  >
                    {/* bookmaker name column */}
                    <div className="basis-1/5">{bookmaker.title}</div>
                    {/* Bookmaker odds */}
                    <div className="flex flex-row gap-2 md:basis-4/5">
                      {bookmaker.markets.map((market) => (
                        <div className="flex grow flex-col" key={market.key}>
                          {/* odds type name */}
                          <div className="underline">
                            {MARKETS?.[market.key as keyof typeof MARKETS]}
                          </div>
                          {/* odds type outcomes */}
                          <div className="flex flex-auto gap-2">
                            {market.outcomes.map((outcome) => (
                              <div
                                className="flex flex-col text-xs"
                                key={outcome.name}
                              >
                                <div>
                                  {outcome.name}{' '}
                                  {outcome.price >= 0
                                    ? `+${outcome.price}`
                                    : outcome.price}
                                </div>
                                {outcome?.point && (
                                  <div>
                                    {outcome.point >= 0
                                      ? `+${outcome.point}`
                                      : outcome.point}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
}
