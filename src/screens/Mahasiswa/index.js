import {ActivityIndicator, SafeAreaView} from 'react-native'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectLoading} from '../../store/mahasiswaDosenSlice'
import {getDataAsync} from '../../store/mahasiswaDosenThunks'
import DataList from '../../components/DataList'
import Navbar from '../../components/Navbar'
import Styles from './styles'
import Button from '../../components/Button'

const Mahasiswa = props => {
  const loading = useSelector(selectLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataAsync({type: 'mahasiswa'}))
  }, [])

  return (
    <SafeAreaView style={Styles.container}>
      <Button tambah text="Tambah Mahasiswa?" dosen={false} />
      {loading ? (
        <ActivityIndicator color="#2972DF" size={50} style={Styles.spinner} />
      ) : (
        <DataList dosen={false} />
      )}
      <Navbar routeName={props.route.name} />
    </SafeAreaView>
  )
}

export default Mahasiswa
