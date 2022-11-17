import {configureStore} from '@reduxjs/toolkit';

import {
  scoreReducer,
  nextMatchReducer,
  statisticsReducer,
} from '../store/slices';

export const store = configureStore({
  reducer: {
    resultMatch: scoreReducer,
    nextMatch: nextMatchReducer,
    statistics: statisticsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
