import {Text, View} from 'react-native'
import Styles from './styles'

const Header = props => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{props.text}</Text>
    </View>
  )
}

export default Header
