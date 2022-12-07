import {Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Styles from './styles'
import StudentIcon from '../../assets/icons/student.svg'
import TeacherIcon from '../../assets/icons/teacher.svg'

const Card = props => {
  const navigation = useNavigation()

  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {data: props.data})}>
        <View style={Styles.row}>
          <StudentIcon width={45} height={45} fill={'#2972DF'} />
          <View style={Styles.column}>
            <Text style={Styles.nama}>{props.data.nama}</Text>
            <Text style={Styles.email}>{props.data.nim}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Card
