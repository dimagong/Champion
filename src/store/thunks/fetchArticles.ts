import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {receiveArticles} from '../../data/api/services'

export const fetchArticles = createAsyncThunk(  
  'articles/fetchArticles',
  async (thunkAPI) => {
    const data = await receiveArticles()
    console.log('receiveArticles data =======', data)
    return data
  }
)