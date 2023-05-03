export interface Navigation {
  navigate(destination: string, params?: any): void;
}

export interface IMatch {
  homeaway: 'home' | 'away';
  match: {
    startDate: string;
    __issfId: number;
    _id: string;
  };
  matchId: string;
  result: 'L' | 'D' | 'W';
  score: string;
  team: {
    displayName: string;
    name: string;
    resignation: boolean;
    _id: string;
  };
}
