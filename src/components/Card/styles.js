import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 4,
    borderColor: '#2972DF',
    marginBottom: 14,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  nama: {
    fontSize: 17,
    marginBottom: 8,
    color: '#323232',
  },
  email: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#323232',
  },
})

export default Styles
