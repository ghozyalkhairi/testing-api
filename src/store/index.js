import create from 'zustand'
import {fetchData} from '../request'

const useStore = create((set, get) => ({
  // * States
  dataMahasiswa: [],
  dataDosen: [],
  loading: true,
  // * Actions
  actions: {
    fetchMahasiswa: async () => {
      set({loading: true})
      fetchData('GET', 'mahasiswa').then(resp => {
        const newData = resp.data.data
        set({dataMahasiswa: newData, loading: false})
      })
    },
    postMahasiswa: async mahasiswaBaru => {
      set({loading: true})
      fetchData('POST', 'mahasiswa', mahasiswaBaru).then(() => {
        fetchData('GET', 'mahasiswa').then(resp => {
          const newData = resp.data.data
          set({dataMahasiswa: newData, loading: false})
        })
      })
    },
    deleteMahasiswa: async idMahasiswa => {
      set({loading: true})
      fetchData('DELETE', 'mahasiswa', idMahasiswa).then(() => {
        fetchData('GET', 'mahasiswa').then(resp => {
          const newData = resp.data.data
          set({dataMahasiswa: newData, loading: false})
        })
      })
    },
  },
}))

export const useDataMahasiswa = () => useStore(state => state.dataMahasiswa)
export const useDataDosen = () => useStore(state => state.dataDosen)
export const useLoading = () => useStore(state => state.loading)
export const useStoreActions = () => useStore(state => state.actions)
