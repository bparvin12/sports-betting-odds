import React from 'react';

import type { SportOddsType } from '@/lib/types';
import { formatTimestamp } from '@/lib/utils';

type OddsTableProps = {
  sportTitle: string;
  sportOdds: SportOddsType[];
};

export default function OddsTable({ sportTitle, sportOdds }: OddsTableProps) {
  return (
    <table className="w-full table-auto border-collapse border border-gray-200">
      <thead className="sticky top-24 z-50 border border-gray-200 bg-sky-950">
        <tr className="uppercase">
          <th className="border border-gray-200 p-4" style={{ width: '15%' }}>
            {sportTitle}
          </th>
          <th className="border border-gray-200 p-4" style={{ width: '15%' }}>
            DATE
          </th>
          <th className="p-4">ODDS</th>
        </tr>
      </thead>
      <tbody>
        {sportOdds.map((sportOdd) => {
          return (
            <tr key={sportOdd.id} className="border-t border-gray-200">
              <td className="border-r border-gray-200 p-2 align-top">
                <div className="sticky top-40">
                  <div>{sportOdd.home_team}</div>
                  <div>{sportOdd.away_team}</div>
                </div>
              </td>
              <td className="border-r border-gray-200 p-2 align-top">
                <div className="sticky top-40">
                  {formatTimestamp(sportOdd.commence_time)}
                </div>
              </td>
              <td className="p-2 align-top">
                {sportOdd.bookmakers.map((bookmaker) => {
                  return (
                    <div className="flex" key={bookmaker.key}>
                      <div className="my-2 flex flex-row">
                        <div className="basis-1/2">{bookmaker.title}</div>
                        <div className="flex flex-row gap-2">
                          {bookmaker.markets.map((market) => {
                            return (
                              <div className="flex flex-col" key={market.key}>
                                <div className="underline">{market.key}</div>
                                <div className="flex flex-auto grow gap-2">
                                  {market.outcomes.map((outcome) => {
                                    return (
                                      <div
                                        className="flex text-xs"
                                        key={outcome.name}
                                      >
                                        <p>
                                          {outcome.name}{' '}
                                          {outcome.price >= 0
                                            ? `+${outcome.price}`
                                            : outcome.price}
                                        </p>
                                        {outcome?.point && (
                                          <p>
                                            {outcome.point >= 0
                                              ? `+${outcome.point}`
                                              : outcome.point}
                                          </p>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
