import {configureStore} from '@reduxjs/toolkit';

import scoreSliceReducer from '../store/slices';

export const store = configureStore({
  reducer: {
    resultMatch: scoreSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
