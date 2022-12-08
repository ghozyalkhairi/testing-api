import {useNavigation} from '@react-navigation/native'
import {useState} from 'react'
import {fetchData} from '../../request'
import Button from '../../components/Button'
import {Text, TextInput, ToastAndroid, SafeAreaView} from 'react-native'
import Styles from '../Tambah/styles'

const Add = () => {
  const navigation = useNavigation()
  const [nama, setNama] = useState()
  const [nidn, setNidn] = useState()
  const [alamat, setAlamat] = useState()
  const submitData = () => {
    const dosenBaru = {
      nama,
      nidn,
      alamat,
    }
    fetchData('POST', 'dosen', dosenBaru).then(() => {
      setNama('')
      setNidn('')
      setAlamat('')
      ToastAndroid.show('Berhasil', ToastAndroid.SHORT)
      navigation.navigate('Dosen', {update: true})
    })
  }
  return (
    <SafeAreaView style={Styles.container}>
      <Text>Tambah Dosen</Text>
      <Text>Nama</Text>
      <TextInput
        style={Styles.input}
        value={nama}
        onChangeText={text => setNama(text)}
      />
      <Text>NIDN</Text>
      <TextInput
        style={Styles.input}
        value={nidn}
        onChangeText={text => setNidn(text)}
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

export default Add
