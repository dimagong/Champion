import {createSelector} from '@reduxjs/toolkit';
import type {RootState} from '../store';

export const selectNextMatch = createSelector(
  (state: RootState) => state.nextMatches,
  value => {
    const teamsDetails = value.value[0] as any;
    const teamHome = teamsDetails?.teams[0].name ?? 'No team';
    const teamGuest = teamsDetails?.teams[1].name ?? 'No team';
    const options: any = {year: '2-digit', month: 'numeric', day: 'numeric'};

    const meetingTime =
      new Date(teamsDetails?.startDate).toLocaleDateString('en-US', options) ??
      new Date().toLocaleDateString('en-US', options);
    return {teamHome, teamGuest, meetingTime};
  },
);
