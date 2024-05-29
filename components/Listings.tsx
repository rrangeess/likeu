import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { ListingType } from '@/types/listingType'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props = {
  listings: any[]
  category: string
}

const Listings = ({ listings, category }: Props) => {
  const [loading, setLoding] = useState(false)
  useEffect(() => {
    console.log('Update list')
    setLoding(true)

    setTimeout(() => {
      setLoding(false)
    }, 200)
  }, [category])
  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.bookmark}>
              <Ionicons name="star-outline" size={20} color={Colors.white} />
            </View>
            <Text
              style={{ color: Colors.white, fontSize: 16, fontWeight: '700' }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      </Link>
    )
  }
  return (
    <View>
      <FlatList
        data={loading ? [] : listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Listings

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.bgColor,
    padding: 10,
    marginRight: 20,
    borderRadius: 10,
  },
  image: {
    width: 170,
    height: 250,
    borderRadius: 10,
    marginBottom: 30,
    objectFit: 'cover',
  },
  bookmark: {
    position: 'absolute',
    top: 240,
    right: 10,
    backgroundColor: Colors.primartColor,
    padding: 10,
    borderRadius: 30,
    shadowColor: Colors.black,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
})
