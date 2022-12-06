import {Dimensions, StyleSheet} from 'react-native'

const {height} = Dimensions.get('window')

const Styles = StyleSheet.create({
  container: {
    margin: 16,
    height: height * 0.93,
  },
  spinner: {
    flex: 1,
    alignSelf: 'center',
  },
})

export default Styles
