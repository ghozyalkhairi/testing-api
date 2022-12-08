import create from 'zustand'
import {fetchData} from '../request'

const useStore = create((set, get) => ({
  // * States
  dataMahasiswa: [],
  dataDosen: [],
  loading: true,
  // * Actions
  actions: {
    getData: async type => {
      set({loading: true})
      fetchData('GET', type).then(resp => {
        const newData = resp.data.data
        if (type === 'mahasiswa') set({dataMahasiswa: newData, loading: false})
        if (type === 'dosen') set({dataDosen: newData, loading: false})
      })
    },
    postData: async (type, dataBaru) => {
      set({loading: true})
      fetchData('POST', type, dataBaru).then(() => {
        fetchData('GET', type).then(resp => {
          const newData = resp.data.data
          if (type === 'mahasiswa')
            set({dataMahasiswa: newData, loading: false})
          if (type === 'dosen') set({dataDosen: newData, loading: false})
        })
      })
    },
    deleteData: async (type, idData) => {
      set({loading: true})
      fetchData('DELETE', type, idData).then(() => {
        fetchData('GET', type).then(resp => {
          const newData = resp.data.data
          if (type === 'mahasiswa')
            set({dataMahasiswa: newData, loading: false})
          if (type === 'dosen') set({dataDosen: newData, loading: false})
        })
      })
    },
    updateData: async (type, dataUpdate) => {
      set({loading: true})
      fetchData('PATCH', type, dataUpdate).then(() => {
        fetchData('GET', type).then(resp => {
          const newData = resp.data.data
          if (type === 'mahasiswa')
            set({dataMahasiswa: newData, loading: false})
          if (type === 'dosen') set({dataDosen: newData, loading: false})
        })
      })
    },
  },
}))

export const useDataMahasiswa = () => useStore(state => state.dataMahasiswa)
export const useDataDosen = () => useStore(state => state.dataDosen)
export const useLoading = () => useStore(state => state.loading)
export const useStoreActions = () => useStore(state => state.actions)
