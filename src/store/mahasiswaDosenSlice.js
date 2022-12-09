import {createSlice} from '@reduxjs/toolkit'
import {
  getDataAsync,
  addDataAsync,
  updateDataAsync,
  deleteDataAsync,
} from './mahasiswaDosenThunks'

const mahasiwaDosenSlice = createSlice({
  name: 'mahasiswaDosen',
  initialState: {
    loading: true,
    mahasiswa: [],
    dosen: [],
  },
  extraReducers: builder => {
    builder
      .addCase(getDataAsync.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getDataAsync.fulfilled, (state, action) => {
        switch (action.payload.type) {
          case 'dosen':
            state.loading = false
            state.dosen = action.payload.data.data
            break
          case 'mahasiswa':
            state.loading = false
            state.mahasiswa = action.payload.data.data
            break
          default:
            return state
        }
      })
      .addCase(addDataAsync.pending, (state, action) => {
        state.loading = true
      })
      .addCase(addDataAsync.fulfilled, (state, action) => {
        switch (action.payload.type) {
          case 'dosen':
            state.loading = false
            state.dosen = action.payload.data.data
            break
          case 'mahasiswa':
            state.loading = false
            state.mahasiswa = action.payload.data.data
            break
          default:
            return state
        }
      })
      .addCase(updateDataAsync.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updateDataAsync.fulfilled, (state, action) => {
        switch (action.payload.type) {
          case 'dosen':
            state.loading = false
            state.dosen = action.payload.data.data
            break
          case 'mahasiswa':
            state.loading = false
            state.mahasiswa = action.payload.data.data
            break
          default:
            return state
        }
      })
      .addCase(deleteDataAsync.pending, (state, action) => {
        state.loading = true
      })
      .addCase(deleteDataAsync.fulfilled, (state, action) => {
        switch (action.payload.type) {
          case 'dosen':
            state.loading = false
            state.dosen = action.payload.data.data
            break
          case 'mahasiswa':
            state.loading = false
            state.mahasiswa = action.payload.data.data
            break
          default:
            return state
        }
      })
  },
})

export const selectLoading = state => state.mahasiswaDosen.loading
export const selectMahasiswa = state => state.mahasiswaDosen.mahasiswa
export const selectDosen = state => state.mahasiswaDosen.dosen
export default mahasiwaDosenSlice.reducer
