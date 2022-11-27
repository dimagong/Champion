import {configureStore} from '@reduxjs/toolkit';

import {
  scoreReducer,
  nextMatchesReducer,
  statisticsReducer,
} from '../store/slices';

export const store = configureStore({
  reducer: {
    resultMatch: scoreReducer,
    nextMatches: nextMatchesReducer,
    statistics: statisticsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
