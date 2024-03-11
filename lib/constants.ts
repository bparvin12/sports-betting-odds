export const MAX_RETRIES = 3;

export const MARKETS = {
  h2h: 'Moneyline',
  spreads: 'Spread',
};

export const ODDS_API_KEY_ROTATION = [
  process.env.ODDS_API_KEY,
  process.env.ODDS_API_KEY_BACKUP_1,
];
