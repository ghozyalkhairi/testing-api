import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {
    padding: 14,
  },
  title: {
    color: '#F2F2F2',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 30,
    textAlign: 'center',
  },
  subtitle: {
    color: '#F2F2F2',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  detail: {
    color: '#F2F2F2',
    fontSize: 18,
    marginTop: 8,
    textAlign: 'center',
    marginBottom: 34,
  },
})

export default Styles
