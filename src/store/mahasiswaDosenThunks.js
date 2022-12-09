import {createAsyncThunk} from '@reduxjs/toolkit'
import {fetchData} from '../request'

export const getDataAsync = createAsyncThunk(
  'mahasiswaDosen/getDataAsync',
  async payload =>
    fetchData('GET', payload.type).then(resp => {
      const data = resp.data
      return {
        data,
        type: payload.type,
      }
    }),
)

export const addDataAsync = createAsyncThunk(
  'mahasiswaDosen/addDataAsync',
  async payload =>
    fetchData('POST', payload.type, payload.data).then(() =>
      fetchData('GET', payload.type).then(resp => {
        const data = resp.data
        return {
          data,
          type: payload.type,
        }
      }),
    ),
)

export const updateDataAsync = createAsyncThunk(
  'mahasiswaDosen/updateDataAsync',
  async payload =>
    fetchData('PATCH', payload.type, payload.data).then(() =>
      fetchData('GET', payload.type).then(resp => {
        const data = resp.data
        return {
          data,
          type: payload.type,
        }
      }),
    ),
)

export const deleteDataAsync = createAsyncThunk(
  'mahasiswaDosen/deleteDataAsync',
  async payload =>
    fetchData('DELETE', payload.type, payload.id).then(() =>
      fetchData('GET', payload.type).then(resp => {
        const data = resp.data
        return {
          data,
          type: payload.type,
        }
      }),
    ),
)
