import {useEffect, useState} from 'react'
import {ActivityIndicator, SafeAreaView} from 'react-native'
import {fetchData} from '../../request'
import Styles from './styles'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import DataList from '../../components/DataList'

const Dosen = props => {
  const [dataDosen, setDataDosen] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchDataDosen = () =>
      fetchData('dosen', 'GET').then(resp => {
        setDataDosen(resp.data.data)
        setLoading(false)
      })

    fetchDataDosen()
  }, [])
  return (
    <SafeAreaView style={Styles.container}>
      <Header text="Data Dosen" />
      {loading ? (
        <ActivityIndicator color="#2972DF" size={50} style={Styles.spinner} />
      ) : (
        <DataList data={dataDosen} />
      )}
      <Navbar routeName={props.route.name} />
    </SafeAreaView>
  )
}

export default Dosen
