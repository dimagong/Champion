import {createSlice} from '@reduxjs/toolkit';

import type {RootState} from '../store/store';

// Define a type for the slice state
interface ScoreState {
  value: string;
}

export const scoreSlice = createSlice({
  name: 'resultMatch',
  initialState: {
    value: '0 - 0 ',
  },
  reducers: {
    changeResultMatch: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeResultMatch} = scoreSlice.actions;

const scoreSliceReducer = scoreSlice.reducer;

export default scoreSliceReducer;
