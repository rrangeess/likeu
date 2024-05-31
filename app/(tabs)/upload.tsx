import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Colors from '@/constants/Colors'
import { Stack } from 'expo-router'
import { Camera, AutoFocus, CameraType } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'

const Page = () => {
  const [vedio, setVedio] = useState()
  const [imageUri, setImageUri] = useState(null)
  const [camera, setCamera] = useState(null)

  const cameraRef = useRef(null)
  const [cameraType, setCameraType] = useState(CameraType.back)
  const [zoomLevel, setZoomLevel] = useState(0)

  useEffect(() => {
    permisionFunction()
  }, [])

  const permisionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync()
    const imagePermission =
      await ImagePicker.requestMediaLibraryPermissionsAsync()
    console.log(cameraPermission.granted)
    console.log(imagePermission.granted)
  }

  const takePicture = () => {
    return (
      <Camera
        ref={cameraRef}
        type={cameraType}
        zoom={zoomLevel}
        autoFocus={AutoFocus.on}
      />
    )
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    console.log(result)
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.txt}>Uploading</Text>
        <View style={styles.uploading}></View>
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
    margin: 20,
    width: 130,
    height: 50,
    backgroundColor: Colors.primartColor,
  },
  btn_container: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: Colors.bgColor,
  },
  uploading: {
    width: 300,
    height: 500,
    margin: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.bgColor,
  },
})
