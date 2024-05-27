import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="category" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="bookmarks" />
      <Tabs.Screen name="profile" />
    </Tabs>
  )
}
