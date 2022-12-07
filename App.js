import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Landing from './src/screens/Landing'
import Mahasiswa from './src/screens/Mahasiswa'
import Detail from './src/screens/Detail'
import Dosen from './src/screens/Dosen'
import Info from './src/screens/Info'
import Tambah from './src/screens/Tambah'
import Update from './src/screens/Update'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Mahasiswa" component={Mahasiswa} />
        <Stack.Screen name="Dosen" component={Dosen} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Tambah" component={Tambah} />
        <Stack.Screen name="Update" component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
