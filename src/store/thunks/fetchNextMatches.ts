import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {receiveNextMatches} from '../../data/api/services'

export const fetchNextMatches = createAsyncThunk(  
  'nextMatches/fetchNextMatches',
  async (thunkAPI) => {
    const data = await receiveNextMatches()
    console.log('fetchNextMatches data', data)
    return data
  }
)
