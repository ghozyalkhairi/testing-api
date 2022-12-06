import {TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import StudentIcon from '../../assets/icons/student.svg'
import TeacherIcon from '../../assets/icons/teacher.svg'
import InfoIcon from '../../assets/icons/info.svg'
import Styles from './styles'

const Navbar = props => {
  const navigation = useNavigation()
  const routeName = props.routeName
  return (
    <View style={Styles.container}>
      <View style={Styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Mahasiswa')}>
          <StudentIcon
            width={40}
            height={40}
            fill={routeName === 'Mahasiswa' ? '#2972DF' : '#323232'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Dosen')}>
          <TeacherIcon
            width={40}
            height={40}
            fill={routeName === 'Dosen' ? '#2972DF' : '#323232'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Info')}>
          <InfoIcon
            width={40}
            height={40}
            fill={routeName === 'Info' ? '#2972DF' : '#323232'}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Navbar
