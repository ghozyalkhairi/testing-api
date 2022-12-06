import {Text, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import BackIcon from '../../assets/icons/back.svg'
import Styles from './styles'

const Button = props => {
  const navigation = useNavigation()
  if (props.back)
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={Styles.containerBack}>
        <BackIcon style={Styles.icon} width={25} heigth={25} fill={'#F2F2F2'} />
        <Text style={Styles.text}>{props.text}</Text>
      </TouchableOpacity>
    )
  if (props.landing)
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Mahasiswa')}
        style={Styles.container}>
        <Text style={Styles.text}>{props.text}</Text>
      </TouchableOpacity>
    )
  if (props.tambah)
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Tambah')}
        style={Styles.container}>
        <Text style={Styles.text}>{props.text}</Text>
      </TouchableOpacity>
    )
  if (props.submit)
    return (
      <TouchableOpacity style={Styles.container}>
        <Text style={Styles.text}>{props.text}</Text>
      </TouchableOpacity>
    )
}

export default Button
