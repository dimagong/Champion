import {configureStore} from '@reduxjs/toolkit';

import {scoreReducer, nextMatchReducer, teamsReducer} from '../store/slices';

export const store = configureStore({
  reducer: {
    resultMatch: scoreReducer,
    nextMatch: nextMatchReducer,
    teams: teamsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
