import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

const NewsCard = () => {
  return (
    <View
      style={{
        marginBottom: 10,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <Text style={styles.title}>News</Text>
      <View
        style={{
          backgroundColor: Colors.white,
          width: windowWidth - 40,
          height: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>AD OR NEWs PLACE</Text>
      </View>
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
