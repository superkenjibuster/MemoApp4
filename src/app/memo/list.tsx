import { View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'  // 'Feather' は使用されていないため、削除してください

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import React from 'react'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
        <Header />

        <View>
            <MemoListItem />
            <MemoListItem />
            <MemoListItem />
        </View>

        <CircleButton>
            <Icon />
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
export default Index
