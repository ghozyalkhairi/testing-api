import {useNavigation} from '@react-navigation/native'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addDataAsync} from '../../store/mahasiswaDosenThunks'
import Button from '../../components/Button'
import {View, Text, TextInput, ToastAndroid} from 'react-native'
import Styles from './styles'

const Tambah = props => {
  const dosen = props.route.params.dosen
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [nama, setNama] = useState()
  const [id, setId] = useState()
  const [alamat, setAlamat] = useState()
  const submitData = () => {
    const identitas = dosen ? 'dosen' : 'mahasiswa'
    const dataBaru = dosen
      ? {
          nama,
          nidn: id,
          alamat,
        }
      : {
          nama,
          nim: id,
          alamat,
        }
    ToastAndroid.show('Menambah', ToastAndroid.SHORT)
    setNama('')
    setId('')
    setAlamat('')
    dispatch(addDataAsync({type: identitas, data: dataBaru}))
    const route = dosen ? 'Dosen' : 'Mahasiswa'
    navigation.navigate(route)
  }
  return (
    <View style={Styles.container}>
      <Text>Tambah {dosen ? 'Dosen' : 'Mahasiswa'}</Text>
      <Text>Nama</Text>
      <TextInput
        style={Styles.input}
        value={nama}
        onChangeText={text => setNama(text)}
      />
      <Text>{dosen ? 'NIDN' : 'NIM'}</Text>
      <TextInput
        style={Styles.input}
        value={id}
        onChangeText={text => setId(text)}
      />
      <Text>Alamat</Text>
      <TextInput
        style={Styles.input}
        value={alamat}
        onChangeText={text => setAlamat(text)}
      />
      <Button onPress={submitData} text="Tambah" />
    </View>
  )
}

export default Tambah
