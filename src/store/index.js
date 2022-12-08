import {configureStore} from '@reduxjs/toolkit'
import mahasiswaDosenReducer from './mahasiswaDosenSlice'

const store = configureStore({
  reducer: {
    mahasiswaDosen: mahasiswaDosenReducer,
  },
})

export default store
