import {createSlice} from '@reduxjs/toolkit';

import {fetchStatistics} from './thunks/fetchStatistics';
import {fetchNextMatches} from './thunks/fetchNextMatches';

//import type {RootState} from '../store/store';

// Define a type for the slice state
interface ScoreState {
  value: string;
}

export const scoreSlice = createSlice({
  name: 'resultMatch',
  initialState: {
    value: '0 - 0',
  },
  reducers: {
    changeResultMatch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const nextMatchesSlice = createSlice({
  name: 'nextmatches',
  initialState: {
    value: [],
  },
  reducers: {
    // setNextMatch: (state, action) => {
    //   state.nextmatches = action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNextMatches.pending, (state, action) => {
        console.log('fetchNextMatches.pending');
        // if (state.loading === 'idle') {
        //   state.loading = 'pending'
        //   state.currentRequestId = action.meta.requestId
        // }
      })
      .addCase(fetchNextMatches.fulfilled, (state, action) => {
        const {payload} = action;
        state.value = payload;

        //
        //state.value = payload;
        // if (
        //   state.loading === 'pending' &&
        //   state.currentRequestId === requestId
        // ) {
        //   state.loading = 'idle'
        //   state.entities.push(action.payload)
        //   state.currentRequestId = undefined
        // }
      })
      .addCase(fetchNextMatches.rejected, (state, action) => {
        console.log('fetchNextMatches.rejected');
        const {requestId} = action.meta;
        // if (
        //   state.loading === 'pending' &&
        //   state.currentRequestId === requestId
        // ) {
        //   state.loading = 'idle'
        //   state.error = action.error
        //   state.currentRequestId = undefined
        // }
      });
  },
});

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    value: [],
  },
  reducers: {
    // setStatistics: (state, action) => {
    //   state.value = action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchStatistics.pending, (state, action) => {
        console.log('fetchStatistics.pending');
        // if (state.loading === 'idle') {
        //   state.loading = 'pending'
        //   state.currentRequestId = action.meta.requestId
        // }
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        const {payload} = action;
        state.value = payload;
        //
        //;
        // if (
        //   state.loading === 'pending' &&
        //   state.currentRequestId === requestId
        // ) {
        //   state.loading = 'idle'
        //   state.entities.push(action.payload)
        //   state.currentRequestId = undefined
        // }
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        console.log('fetchStatistics.rejected');
        const {requestId} = action.meta;
        // if (
        //   state.loading === 'pending' &&
        //   state.currentRequestId === requestId
        // ) {
        //   state.loading = 'idle'
        //   state.error = action.error
        //   state.currentRequestId = undefined
        // }
      });
  },
});

// Action creators are generated for each case reducer function
export const {changeResultMatch} = scoreSlice.actions;
//export const {setNextMatch} = nextMatchSlice.actions;
//export const {setStatistics} = statisticsSlice.actions;

export const scoreReducer = scoreSlice.reducer;
export const nextMatchesReducer = nextMatchesSlice.reducer;
export const statisticsReducer = statisticsSlice.reducer;
