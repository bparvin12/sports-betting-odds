import type { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export type OutcomeType = {
  name: string;
  price: number;
  point?: number;
};

export type MarketType = {
  key: string;
  outcomes: OutcomeType[];
};

export type BookmakerType = {
  key: string;
  title: string;
  last_update: string;
  markets: MarketType[];
};

export type SportOddsType = {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: BookmakerType[];
};
