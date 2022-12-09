import {configureStore} from '@reduxjs/toolkit'
import mahasiswaDosenReducer from './mahasiswaDosenSlice'

export const store = configureStore({
  reducer: {
    mahasiswaDosen: mahasiswaDosenReducer,
  },
})
