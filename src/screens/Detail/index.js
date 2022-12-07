import {SafeAreaView, Text, View} from 'react-native'
import {useStoreActions} from '../../store'
import Styles from './styles'
import Button from '../../components/Button'
import StudentIcon from '../../assets/icons/student.svg'
import TeacherIcon from '../../assets/icons/teacher.svg'
import {useNavigation} from '@react-navigation/native'

const Detail = props => {
  const data = props.route.params.data
  const dosen = data.role === 'dosen'
  const navigation = useNavigation()
  const {deleteMahasiswa} = useStoreActions()
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
          <Button
            onPress={() => {
              deleteMahasiswa(data.id)
              navigation.navigate('Mahasiswa')
            }}
            hapus
            text="Hapus"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Detail
