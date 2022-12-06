import {ActivityIndicator, SafeAreaView} from 'react-native'
import {useEffect, useState} from 'react'
import {fetchData} from '../../request'
import DataList from '../../components/DataList'
import Navbar from '../../components/Navbar'
import Styles from './styles'
import Button from '../../components/Button'

const Mahasiswa = props => {
  const [loading, setLoading] = useState(true)
  const [dataMahasiswa, setDataMahasiswa] = useState([])
  useEffect(() => {
    setLoading(true)
    const fetchDataMahasiswa = () =>
      fetchData('GET', 'mahasiswa').then(resp => {
        setDataMahasiswa(resp.data.data)
        setLoading(false)
      })
    fetchDataMahasiswa()
  }, [])
  useEffect(() => {
    if (props.route.params?.update) {
      console.log('UPDATING')
      setLoading(true)
      fetchData('GET', 'mahasiswa').then(resp => {
        setDataMahasiswa(resp.data.data)
        setLoading(false)
        props.navigation.setParams({
          update: false,
        })
      })
    }
  }, [props.route.params?.update])
  return (
    <SafeAreaView style={Styles.container}>
      <Button tambah text="Tambah Mahasiswa?" />
      {loading ? (
        <ActivityIndicator color="#2972DF" size={50} style={Styles.spinner} />
      ) : (
        <DataList data={dataMahasiswa} />
      )}
      <Navbar routeName={props.route.name} />
    </SafeAreaView>
  )
}

export default Mahasiswa
