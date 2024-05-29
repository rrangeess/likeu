import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const NewsCard = () => {
  return (
    <View>
      <Text style={styles.title}>News</Text>
    </View>
  )
}

export default NewsCard

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.white,
  },
})
