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

export interface IArticleEntity{
  answer: string,
  question: string
}

export interface IArticleContent{
  id: string;
  data: IArticleEntity[]
}

export interface IArticle {
  title: string;
  subTitle?: string;
  url?: any;
  id: string;
  content: IArticleContent

};

export enum Routes {
  Home= "home",
  Shop="shop",
  User="user"
}