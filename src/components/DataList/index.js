import {FlatList} from 'react-native'
import {selectMahasiswa, selectDosen} from '../../store/mahasiswaDosenSlice'
import {useSelector} from 'react-redux'
import Card from '../Card'
import Styles from './styles'

const DataList = props => {
  const dosen = props.dosen
  const dataMahasiswa = useSelector(selectMahasiswa)
  const dataDosen = useSelector(selectDosen)
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
