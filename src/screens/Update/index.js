import {useNavigation} from '@react-navigation/native'
import {useState} from 'react'
import {fetchData} from '../../request'
import {Text, TextInput, ToastAndroid, SafeAreaView} from 'react-native'
import Button from '../../components/Button'
import Styles from './styles'

const Update = props => {
  const data = props.route.params.data
  const navigation = useNavigation()
  const [nama, setNama] = useState(data.nama)
  const [nim, setNim] = useState(data.nim)
  const [alamat, setAlamat] = useState(data.alamat)
  const submitData = () => {
    const mahasiswaUpdate = {
      nama,
      nim,
      alamat,
      id: data.id,
    }
    fetchData('PATCH', 'mahasiswa', mahasiswaUpdate).then(() => {
      setNama('')
      setNim('')
      setAlamat('')
      ToastAndroid.show('Berhasil', ToastAndroid.SHORT)
      navigation.navigate('Mahasiswa', {update: true})
    })
  }
  return (
    <SafeAreaView style={Styles.container}>
      <Text>Update Data {data.nama}</Text>
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
      <Button onPress={() => submitData()} text="Update" />
    </SafeAreaView>
  )
}

export default Update
