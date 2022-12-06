import {ImageBackground, Text, View} from 'react-native'
import Button from '../../components/Button'
import Styles from './styles'

const Landing = () => {
  return (
    <ImageBackground
      style={Styles.background}
      source={require('../../assets/images/landing.png')}>
      <View style={Styles.container}>
        <Text style={Styles.title}>IFApps</Text>
        <Text style={Styles.subtitle}>
          Data Mahasiwa dan Dosen Teknik Informatika
        </Text>
        <Text style={Styles.detail}>Universitas Muhammadiyah Pontianak</Text>
        <Button landing text="Mulai" />
      </View>
    </ImageBackground>
  )
}

export default Landing
