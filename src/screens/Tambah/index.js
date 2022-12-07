import {useNavigation} from '@react-navigation/native'
import {useState} from 'react'
import {useStoreActions} from '../../store'
import {View, Text, TextInput, Button, ToastAndroid} from 'react-native'
import Styles from './styles'

const Tambah = () => {
  const navigation = useNavigation()
  const [nama, setNama] = useState()
  const [nim, setNim] = useState()
  const [alamat, setAlamat] = useState()
  const actions = useStoreActions()
  const submitData = () => {
    const mahasiswaBaru = {
      nama,
      nim,
      alamat,
    }
    actions.postMahasiswa(mahasiswaBaru).then(() => {
      setNama('')
      setNim('')
      setAlamat('')
      ToastAndroid.show('Berhasil', ToastAndroid.SHORT)
      navigation.navigate('Mahasiswa')
    })
  }
  return (
    <View style={Styles.container}>
      <Text>Tambah Mahasiswa</Text>
      <Text>Nama</Text>
      <TextInput
        style={Styles.input}
        value={nama}
        onChangeText={text => setNama(text)}
      />
      <Text>NIM</Text>
      <TextInput
        style={Styles.input}
        value={nim}
        onChangeText={text => setNim(text)}
      />
      <Text>Alamat</Text>
      <TextInput
        style={Styles.input}
        value={alamat}
        onChangeText={text => setAlamat(text)}
      />
      <Button onPress={submitData} title="Tambah" />
    </View>
  )
}

export default Tambah
