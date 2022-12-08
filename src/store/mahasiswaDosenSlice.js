import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {fetchData} from '../request'

export const getDataAsync = createAsyncThunk(
  'mahasiswaDosen/getDataAsync',
  async payload => {
    fetchData('GET', payload.type).then(resp => {
      const data = resp.data
      return {
        data,
        type: payload.type,
      }
    })
  },
)

export const addDataAsync = createAsyncThunk(
  'mahasiswaDosen/addDataAsync',
  async payload => {
    fetchData('POST', payload.type, payload.data).then(() => {
      fetchData('GET', payload.type).then(resp => {
        const data = resp.data
        return {
          data,
          type: payload.type,
        }
      })
    })
  },
)

export const updateDataAsync = createAsyncThunk(
  'mahasiswaDosen/updateDataAsync',
  async payload => {
    fetchData('PATCH', payload.type, payload.data).then(() => {
      fetchData('GET', payload.type).then(resp => {
        const data = resp.data
        return {
          data,
          type: payload.type,
        }
      })
    })
  },
)

export const deleteDataAsync = createAsyncThunk(
  'mahasiswaDosen/deleteDataAsync',
  async payload => {
    fetchData('DELETE', payload.type, payload.id).then(() => {
      fetchData('GET', payload.type).then(resp => {
        const data = resp.data
        return {
          data,
          type: payload.type,
        }
      })
    })
  },
)

const mahasiwaDosenSlice = createSlice({
  name: 'mahasiswaDosen',
  initialState: {
    mahasiswa: [],
    dosen: [],
  },
  extraReducers: builder => {
    builder
      .addCase(getDataAsync.fulfilled, (state, action) => {
        return {
          ...state,
          [action.payload.type]: action.payload.data,
        }
      })
      .addCase(addDataAsync.fulfilled, (state, action) => {
        return {
          ...state,
          [action.payload.type]: action.payload.data,
        }
      })
      .addCase(updateDataAsync.fulfilled, (state, action) => {
        return {
          ...state,
          [action.payload.type]: action.payload.data,
        }
      })
      .addCase(deleteDataAsync.fulfilled, (state, action) => {
        return {
          ...state,
          [action.payload.type]: action.payload.data,
        }
      })
  },
})

export default mahasiwaDosenSlice.reducer
