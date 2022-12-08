import {SafeAreaView, Image, Text, View, ToastAndroid} from 'react-native'
import {fetchData} from '../../request'
import {useNavigation} from '@react-navigation/native'
import Styles from './styles'
import Button from '../../components/Button'

const Detail = props => {
  const navigation = useNavigation()
  const data = props.route.params.data
  const dosen = data.nidn
  const deleteData = () => {
    ToastAndroid.show('Menghapus', ToastAndroid.SHORT)
    const identitas = dosen ? 'dosen' : 'mahasiswa'
    fetchData('DELETE', identitas, data.id).then(() => {
      const route = dosen ? 'Dosen' : 'Mahasiswa'
      navigation.navigate(route, {update: true})
    })
  }
  return (
    <SafeAreaView style={Styles.container}>
      <Button back text="Kembali" />
      <View style={Styles.infoContainer}>
        <View style={Styles.column}>
          <Image
            style={Styles.profil}
            source={{
              uri: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80',
            }}
          />
          <Text style={[Styles.nama, Styles.marginVertical]}>{data.nama}</Text>
          <Text style={[Styles.email, Styles.marginVertical]}>
            {data.alamat}
          </Text>
          <Text style={[Styles.email, Styles.marginVertical]}>
            {dosen ? data.nidn : data.nim}
          </Text>
        </View>
        <View style={Styles.bottom}>
          <Button update data={data} text="Update" dosen={dosen} />
          <Button hapus onPress={deleteData} text="Hapus" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Detail
