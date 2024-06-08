import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '@/constants/Colors'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Chart from '@/components/Chart'
import userlogs from '@/data/userlogs.json'
import * as ImagePicker from 'expo-image-picker'

const Page = () => {
  const [name, setName] = useState('LikeU')
  const [dataset, setDataset] = useState(
    userlogs.data.similarity_per_date.similarity
  )
  const [garraryPermissions, setGarraryPermissions] = useState('false')
  const [userImage, setUserImage] = useState(null)

  useEffect(() => {
    permisionFunction()
  }, [])

  const loadUserInfo = () => {}

  const permisionFunction = async () => {
    const imagePermission =
      await ImagePicker.requestMediaLibraryPermissionsAsync()
    setGarraryPermissions(imagePermission.status)
  }

  const pickImage = async () => {
    if (garraryPermissions !== 'false') {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      })

      setUserImage(result.assets[0].uri)
    }
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ height: 100, backgroundColor: Colors.black }}></View>
      <ScrollView style={{ backgroundColor: Colors.black }}>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={{
                uri: userImage
                  ? userImage
                  : require('@/assets/null/github.jpeg'),
              }}
              style={{ width: 150, height: 150, borderRadius: 50 }}
            />
            <TouchableOpacity onPress={pickImage} style={styles.btn}>
              <Ionicons name="brush" size={20} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: Colors.white,
              margin: 10,
              fontSize: 20,
              fontWeight: '700',
            }}
          >
            {name}
          </Text>
        </View>
        <View style={styles.container}>
          <Chart dataset={dataset} />
        </View>
      </ScrollView>
    </>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  imgContainer: {
    width: 150,
    height: 150,
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 1,
    bottom: 1,
    backgroundColor: 'black',
    width: 30,
    height: 30,
    borderRadius: 30,
  },
})
