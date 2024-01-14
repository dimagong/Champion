import {configureStore} from '@reduxjs/toolkit';

import {
  resultMatchReducer,
  nextMatchesReducer,
  statisticsReducer,
  articlesReducer,
} from '../store/slices';

export const store = configureStore({
  reducer: {
    resultMatch: resultMatchReducer,
    nextMatches: nextMatchesReducer,
    statistics: statisticsReducer,
    articles: articlesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
