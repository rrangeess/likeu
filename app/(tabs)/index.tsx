import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { useHeaderHeight } from '@react-navigation/elements'
import CategoryButtons from '@/components/CategoryButtons'
import Listings from '@/components/Listings'
import listingData from '@/data/destinations.json'

const Page = () => {
  const headerHeight = useHeaderHeight()
  const [team, setTeam] = useState('All')

  const onTeamChanged = (team: string) => {
    setTeam(team)
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={require('../../assets/null/github.jpeg')}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: 'gray',
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.bgColor,
                padding: 10,
                borderRadius: 10,
                shadowColor: '#171717',
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.5,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="settings" size={20} color={Colors.gray} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={18}
              style={{ marginRight: 5 }}
              color={Colors.white}
            />
            <TextInput placeholder="Search..." />
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
            <Ionicons name="options" size={28} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <CategoryButtons onTeamChanged={onTeamChanged} />
        <Listings listings={listingData} category={team} />
      </View>
    </>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.black,
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.bgColor,
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Colors.primartColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
})
