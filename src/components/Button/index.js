import {Text, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import BackIcon from '../../assets/icons/back.svg'
import Styles from './styles'

const Button = ({back, landing, tambah, hapus, text, onPress}) => {
  const navigation = useNavigation()
  if (back)
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={Styles.containerBack}>
        <BackIcon style={Styles.icon} width={25} heigth={25} fill={'#F2F2F2'} />
        <Text style={Styles.text}>{text}</Text>
      </TouchableOpacity>
    )
  if (landing)
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Mahasiswa')}
        style={Styles.container}>
        <Text style={Styles.text}>{text}</Text>
      </TouchableOpacity>
    )
  if (tambah)
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Tambah')}
        style={Styles.container}>
        <Text style={Styles.text}>{text}</Text>
      </TouchableOpacity>
    )
  if (hapus)
    return (
      <TouchableOpacity onPress={onPress} style={Styles.containerHapus}>
        <Text style={Styles.text}>{text}</Text>
      </TouchableOpacity>
    )
}

export default Button
