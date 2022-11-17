import { createAction } from "@reduxjs/toolkit";

export const statisticsAction = createAction("statistics/setStatistics", (statistics) => {
    return { payload: statistics  };
  });