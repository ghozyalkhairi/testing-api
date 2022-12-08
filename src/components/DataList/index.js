import {FlatList} from 'react-native'
import {useDataMahasiswa, useDataDosen} from '../../store'
import Card from '../Card'
import Styles from './styles'

const DataList = props => {
  const dosen = props.dosen
  const dataMahasiswa = useDataMahasiswa()
  const dataDosen = useDataDosen()
  const renderItem = ({item}) => <Card data={item} dosen={dosen} />
  return (
    <FlatList
      data={dosen ? dataDosen : dataMahasiswa}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={Styles.container}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  )
}
export default DataList
