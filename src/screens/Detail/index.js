import {SafeAreaView, Text, View, ToastAndroid, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useStoreActions} from '../../store'
import Styles from './styles'
import Button from '../../components/Button'

const Detail = props => {
  const navigation = useNavigation()
  const data = props.route.params.data
  const dosen = props.route.params.dosen
  const actions = useStoreActions()
  const deleteData = () => {
    const identitas = dosen ? 'dosen' : 'mahasiswa'
    ToastAndroid.show('Menghapus', ToastAndroid.SHORT)
    actions.deleteData(identitas, data.id).then(() => {
      navigation.navigate(dosen ? 'Dosen' : 'Mahasiswa')
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
          <Button update data={data} dosen={dosen} text="Update" />
          <Button hapus onPress={deleteData} text="Hapus" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Detail
