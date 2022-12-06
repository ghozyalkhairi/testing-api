import {SafeAreaView, Text} from 'react-native'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Styles from './styles'

const Info = props => {
  return (
    <SafeAreaView style={Styles.container}>
      <Header text="Info" />
      <Text style={Styles.text}>
        Aplikasi ini digunakan untuk melihat data mahasiswa dan dosen
      </Text>
      <Navbar routeName={props.route.name} />
    </SafeAreaView>
  )
}

export default Info
