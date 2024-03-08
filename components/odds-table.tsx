import React from 'react';

import type { SportOddsType } from '@/lib/types';
import { formatTimestamp } from '@/lib/utils';

import SectionHeading from './section-heading';

type OddsTableProps = {
  sportTitle: string;
  sportOdds: SportOddsType[];
};

export default function OddsTable({ sportTitle, sportOdds }: OddsTableProps) {
  console.log(sportOdds);
  if (sportTitle === undefined || sportOdds.length === 0)
    return <SectionHeading>Odds not available</SectionHeading>;
  return (
    <table className="w-full table-auto border-collapse border border-gray-200">
      {/* Table Header */}
      <thead className="border border-gray-200 bg-sky-900">
        <tr className="uppercase">
          <th
            className="border border-gray-200 p-4 md:w-1/6 lg:w-1/5"
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
                className="p-2 align-top md:col-span-1 lg:col-span-1"
                colSpan={2}
              >
                <div>{sportOdd.home_team}</div>
                <div>{sportOdd.away_team}</div>
              </td>
              <td className=" p-2 align-top">
                {formatTimestamp(sportOdd.commence_time)}
              </td>
            </tr>
            {/* Row for Odds */}
            <tr className="">
              <td
                className=" p-2 align-top md:col-span-2 lg:col-span-2"
                colSpan={3}
              >
                {sportOdd.bookmakers.map((bookmaker) => (
                  <div
                    className="my-2 flex w-full flex-wrap justify-stretch"
                    key={bookmaker.key}
                  >
                    <div className="basis-1/5">{bookmaker.title}</div>
                    <div className="flex flex-row gap-2 divide-dashed divide-tan md:basis-4/5 md:divide-y">
                      {bookmaker.markets.map((market) => (
                        <div className="flex flex-col" key={market.key}>
                          <div className="underline">{market.key}</div>
                          <div className="flex flex-auto grow gap-2">
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
