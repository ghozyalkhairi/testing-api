import {FlatList} from 'react-native'
import {useDataMahasiswa} from '../../store'
import Card from '../Card'
import Styles from './styles'

const DataList = () => {
  const dataMahasiswa = useDataMahasiswa()
  const renderItem = ({item}) => <Card data={item} />
  return (
    <FlatList
      data={dataMahasiswa}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={Styles.container}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  )
}
export default DataList
