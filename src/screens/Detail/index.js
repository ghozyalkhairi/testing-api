import {SafeAreaView, Text, View, ToastAndroid} from 'react-native'
import {fetchData} from '../../request'
import {useNavigation} from '@react-navigation/native'
import Styles from './styles'
import Button from '../../components/Button'
import StudentIcon from '../../assets/icons/student.svg'
import TeacherIcon from '../../assets/icons/teacher.svg'

const Detail = props => {
  const navigation = useNavigation()
  const data = props.route.params.data
  const dosen = data.role === 'dosen'
  const deleteMahasiswa = () => {
    ToastAndroid.show('Menghapus', ToastAndroid.SHORT)
    fetchData('DELETE', 'mahasiswa', data.id).then(() => {
      navigation.navigate('Mahasiswa', {update: true})
    })
  }
  return (
    <SafeAreaView style={Styles.container}>
      <Button back text="Kembali" />
      <View style={Styles.infoContainer}>
        <View style={Styles.column}>
          {dosen ? (
            <TeacherIcon width={150} height={150} fill={'#2972DF'} />
          ) : (
            <StudentIcon width={150} height={150} fill={'#2972DF'} />
          )}
          <Text style={[Styles.nama, Styles.marginVertical]}>{data.nama}</Text>
          <Text style={[Styles.email, Styles.marginVertical]}>
            {data.alamat}
          </Text>
          <Text style={[Styles.email, Styles.marginVertical]}>
            {data.nim ? data.nim : 'Tidak ada nomor hp'}
          </Text>
        </View>
        <View style={Styles.bottom}>
          <Button hapus onPress={deleteMahasiswa} text="Hapus" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Detail
