import {createSelector} from '@reduxjs/toolkit';
import type {RootState} from '../store';

export const selectNextMatch = createSelector(
  (state: RootState) => state.nextMatches,
  value => {
    const teamsDetails = value.value[0] as any;
    const teamHome = teamsDetails?.teams[0].name ?? 'No team';
    const teamGuest = teamsDetails?.teams[1].name ?? 'No team';
    const meetingTime =
      new Date(teamsDetails?.startDate).toLocaleDateString() ??
      new Date().toLocaleDateString();
    return {teamHome, teamGuest, meetingTime};
  },
);
