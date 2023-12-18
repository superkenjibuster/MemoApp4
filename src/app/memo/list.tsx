import { View, StyleSheet } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect/* , useState */ } from 'react'
import { collection, onSnapshot, query/* , orderBy  */ } from 'firebase/firestore'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import LogOutButton from '../../components/LogOutButton'
import { db, auth } from '../../config'
/* import { type Memo } from '../../../types/memo' */

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
/*   const [memos, setMemos] = useState([]) */
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    const q = query(ref/* , orderBy('updateAt', 'desc') */)
    /* const unsubscribe = onSnapshot(q, (snapshot) => { */
    const remoteMemos = []

    onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data()
        console.log(doc.id, 'bodyText', data.bodyText.substr(0, 10), 'updateAt', data.updateAt)
        /* console.log('memo', doc.id) */
        /* const { bodyText, updateAt } = doc.data() */
        remoteMemos.push({
          id: doc.id,
          bodyText: data.bodyText,
          updateAt: data.updateAt
        })
      })
      console.log('remoteMemos', remoteMemos)
      /*       setMemos(remoteMemos) */
    })
    /* return unsubscribe */
  }, [])
  return (
    <View style={styles.container}>

        <View>
         <MemoListItem />
         <MemoListItem />
         <MemoListItem />
        </View>

        <CircleButton onPress={handlePress}>
            <Icon name='plus' size={40} color='#ffffff'/>
        </CircleButton>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
export default List
