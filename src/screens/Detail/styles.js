import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoContainer: {
    marginTop: 24,
    height: '87%',
    borderWidth: 4,
    borderColor: '#2972DF',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  nama: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#323232',
  },
  email: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#323232',
  },
  marginVertical: {
    marginVertical: 10,
  },
  bottom: {
    width: '100%',
  },
  profil: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#2972DF',
    marginBottom: 4,
  },
})

export default Styles
