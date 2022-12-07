import {useNavigation} from '@react-navigation/native'
import {useState} from 'react'
import {fetchData} from '../../request'
import Button from '../../components/Button'
import {Text, TextInput, ToastAndroid, SafeAreaView} from 'react-native'
import Styles from './styles'

const Tambah = () => {
  const navigation = useNavigation()
  const [nama, setNama] = useState()
  const [nim, setNim] = useState()
  const [alamat, setAlamat] = useState()
  const submitData = () => {
    const mahasiswaBaru = {
      nama,
      nim,
      alamat,
    }
    fetchData('POST', 'mahasiswa', mahasiswaBaru).then(() => {
      setNama('')
      setNim('')
      setAlamat('')
      ToastAndroid.show('Berhasil', ToastAndroid.SHORT)
      navigation.navigate('Mahasiswa', {update: true})
    })
  }
  return (
    <SafeAreaView style={Styles.container}>
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
      <Button onPress={submitData} text="Tambah" />
    </SafeAreaView>
  )
}

export default Tambah
