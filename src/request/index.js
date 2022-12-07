/* eslint-disable prettier/prettier */
import axios from 'axios'

export const fetchData = async (method, type, data) => {
  switch (method) {
    case 'GET':
      // const URLMahasiswaGET = 'http://192.168.1.4:8000/api/mahasiswa/'
      const URLMahasiswaGET = 'http://10.0.2.2:8000/api/mahasiswa/'
      const URLDosenGET = 'http://10.0.2.2:8000/api/dosen/'
      const urlGET = type === 'dosen' ? URLDosenGET : URLMahasiswaGET
      const optionsGET = {
        url: urlGET,
        method,
      }
      return await axios.request(optionsGET)
    case 'POST':
      // const URLMahasiswaPOST = 'http://192.168.1.4:8000/api/mahasiswa/simpan'
      const URLMahasiswaPOST = 'http://10.0.2.2:8000/api/mahasiswa/simpan'
      const URLDosenPOST = 'http://10.0.2.2:8000/api/dosen/simpan'
      const urlPOST = type === 'dosen' ? URLDosenPOST : URLMahasiswaPOST
      // eslint-disable-next-line prettier/prettier
      const optionsPOST = {
        url: urlPOST,
        method,
        data,
      }
      return await axios.request(optionsPOST)
    case 'DELETE':
      // const URLMahasiswaDELETE = `http://192.168.1.4:8000/api/mahasiswa/${data}/hapus`
      const URLMahasiswaDELETE = `http://10.0.2.2:8000/api/mahasiswa/${data}/hapus`
      const URLDosenDELETE = `http://10.0.2.2:8000/api/dosen/${data}/hapus`
      const urlDELETE = type === 'dosen' ? URLDosenDELETE : URLMahasiswaDELETE
      const optionsDELETE = {
        url: urlDELETE,
        method,
      }
      return await axios.request(optionsDELETE)
  }
}
