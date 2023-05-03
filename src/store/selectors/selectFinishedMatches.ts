import {createSelector} from '@reduxjs/toolkit';
import type {RootState} from '../store';

export const selectFinishedMatches = createSelector(
  (state: RootState) => state.statistics.value,
    value => {
      const findTeam: any = value.find((item: any) => item?.team?.name === 'TJ Máj Ružomberok-Černová')
      console.log('findTeam', findTeam)
      return findTeam?.matches ?? []
  },
);
