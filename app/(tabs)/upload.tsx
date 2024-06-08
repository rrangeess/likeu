import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Colors from '@/constants/Colors'
import { Stack } from 'expo-router'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'

const Page = () => {
  const [vedio, setVedio] = useState(null)
  const [imageUri, setImageUri] = useState(null)
  const [camera, setCamera] = useState(null)
  const [cameraPermissions, setCameraPermissions] = useState('false')
  const [garraryPermissions, setGarraryPermissions] = useState('false')

  useEffect(() => {
    permisionFunction()
  }, [])

  const permisionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync()
    const imagePermission =
      await ImagePicker.requestMediaLibraryPermissionsAsync()

    setCameraPermissions(cameraPermission.status)
    setGarraryPermissions(imagePermission.status)
  }

  const takePicture = async () => {
    let result = await Camera.getCameraPermissionsAsync()
    console.log(result)
  }

  const pickImage = async () => {
    if (garraryPermissions !== 'false') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      })
      setImageUri(result.assets[0].uri)
    }
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.txt}>Uploading</Text>
        <View style={styles.uploading}>
          <Image
            source={{
              uri: imageUri ? imageUri : require('@/assets/null/github.jpeg'),
            }}
            style={{
              width: 280,
              height: 390,
              objectFit: 'fill',
              borderRadius: 10,
            }}
          />
          <TouchableOpacity onPress={() => {}} style={styles.btn}>
            <Text style={styles.txt}>Predict</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity onPress={pickImage} style={styles.btn}>
            <Text style={styles.txt}>OPEN GARRARY</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture} style={styles.btn}>
            <Text style={styles.txt}>OPEN CAMERA</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  txt: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 15,
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 130,
    height: 50,
    backgroundColor: Colors.primartColor,
  },
  btn_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 300,
    height: 70,
    borderRadius: 10,
    backgroundColor: Colors.bgColor,
  },
  uploading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 450,
    margin: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.bgColor,
  },
})
