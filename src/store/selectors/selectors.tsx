import {createSelector} from '@reduxjs/toolkit';
import type {RootState} from '../store';

export const selectNextMatch = createSelector(
  (state: RootState) => state.nextMatches,
  value => {
    const teamsDetails = value.value[0] as any;
    const teamHome = teamsDetails?.teams[0].name ?? 'No team';
    const teamGuest = teamsDetails?.teams[1].name ?? 'No team';
    // const options: any = {year: '2-digit', month: 'numeric', day: 'numeric'};
    const optionsTime: any = {
      year: '2-digit',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
    };

    const time =
      new Date(teamsDetails?.startDate).toLocaleDateString(
        'en-US',
        optionsTime,
      ) ?? new Date().toLocaleDateString('en-US', optionsTime);
    return {teamHome, teamGuest, time};
  },
);
