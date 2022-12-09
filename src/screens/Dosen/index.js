import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectLoading} from '../../store/mahasiswaDosenSlice'
import {getDataAsync} from '../../store/mahasiswaDosenThunks'
import {ActivityIndicator, SafeAreaView} from 'react-native'
import Button from '../../components/Button'
import Styles from './styles'
import Navbar from '../../components/Navbar'
import DataList from '../../components/DataList'

const Dosen = props => {
  const loading = useSelector(selectLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataAsync({type: 'dosen'}))
  }, [])

  return (
    <SafeAreaView style={Styles.container}>
      <Button tambah text="Tambah Dosen?" dosen={true} />
      {loading ? (
        <ActivityIndicator color="#2972DF" size={50} style={Styles.spinner} />
      ) : (
        <DataList dosen={true} />
      )}
      <Navbar routeName={props.route.name} />
    </SafeAreaView>
  )
}

export default Dosen
