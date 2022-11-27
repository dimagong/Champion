import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {receiveStatistics} from '../../data/api/services'

export const fetchStatistics = createAsyncThunk(  
  'statistics/fetchStatistics',
  async (thunkAPI) => {
    const data = await receiveStatistics()
    console.log('fetchStatistics data', data)
    return data
  }
)

