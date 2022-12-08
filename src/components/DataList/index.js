import {FlatList} from 'react-native'
import Card from '../Card'
import Styles from './styles'

const DataList = props => {
  const dosen = props.dosen
  return (
    <FlatList
      data={props.data}
      contentContainerStyle={Styles.container}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Card data={item} dosen={dosen} />}
    />
  )
}
export default DataList
