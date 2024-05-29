import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useRef, useState } from 'react'
import Colors from '@/constants/Colors'
import nbaTeam from '@/data/categories'

type Props = {
  onTeamChanged: (team: string) => void
}

const CategoryButtons = ({ onTeamChanged }: Props) => {
  const scrollRef = useRef<ScrollView>(null)
  const itemRef = useRef<TouchableOpacity[] | null[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current[index]
    setActiveIndex(index)
    selected?.measure(x => {
      scrollRef.current?.scrollTo({ x: x, y: 0, animated: true })
    })
    onTeamChanged(nbaTeam[index].title)
  }

  return (
    <View>
      <Text style={styles.title}>Teams</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {nbaTeam.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={el => (itemRef.current[index] = el)}
            onPress={() => handleSelectCategory(index)}
            style={
              activeIndex == index
                ? styles.categoryBtnActive
                : styles.categoryBtn
            }
          >
            <Image
              source={item.logoPath}
              style={{ width: 30, height: 30, objectFit: 'contain' }}
            />
            <Text
              style={
                activeIndex == index
                  ? { color: Colors.white, margin: 5, fontWeight: '700' }
                  : { color: Colors.gray, margin: 5 }
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default CategoryButtons

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.white,
  },
  categoryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: Colors.gray,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  categoryBtnActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primartColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: Colors.gray,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
})
