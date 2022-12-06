import axios from 'axios'

export const fetchData = async (method, type, data) => {
  switch (method) {
    case 'GET':
      const URLMahasiswaGET = 'http://192.168.1.4:8000/api/mahasiswa/'
      const URLDosenGET = 'http://192.168.1.4:8000/api/dosen/'
      const urlGET = type === 'dosen' ? URLDosenGET : URLMahasiswaGET
      const optionsGET = {
        url: urlGET,
        method,
      }
      return await axios.request(optionsGET)
    case 'POST':
      const URLMahasiswaPOST = 'http://192.168.1.4:8000/api/mahasiswa/simpan'
      const URLDosenPOST = 'http://192.168.1.4:8000/api/dosen/simpan'
      const urlPOST = type === 'dosen' ? URLDosenPOST : URLMahasiswaPOST
      const optionsPOST = {
        url: urlPOST,
        method,
        data,
      }
      return await axios.request(optionsPOST)
  }
}
