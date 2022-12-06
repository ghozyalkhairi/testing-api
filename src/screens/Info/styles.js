import {Dimensions, StyleSheet} from 'react-native'

const {height} = Dimensions.get('window')

const Styles = StyleSheet.create({
  container: {
    margin: 16,
    height: height * 0.93,
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#323232',
    textAlign: 'center',
    flex: 1,
    textAlignVertical: 'center',
  },
})

export default Styles
