import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { LineChart } from 'react-native-chart-kit'

const data = {
  labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  datasets: [
    {
      data: [20, 0, 45, 50, 79, 63, 66],
      color: (opacity = 1) => `rgba(248,134,0, ${opacity})`, // optional
      strokeWidth: 3, // optional
    },
  ],
  legend: ['Similarity'], // optional
}

const chartConfig = {
  backgroundGradientFrom: Colors.bgColor,
  // backgroundGradientFromOpacity: 0,
  backgroundGradientTo: Colors.bgColor,
  //backgroundGradientToOpacity: 0.5,
  backgroundColor: Colors.bgColor,
  color: (opacity = 1) => `rgba(248,134,0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

  strokeWidth: 1, // optional, default 3
  barPercentage: 1,
  useShadowColorFromDataset: false, // optional
}

const Chart = () => {
  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Text style={styles.title}>Chart</Text>
      <LineChart
        data={data}
        width={350}
        height={256}
        yAxisSuffix="%"
        yAxisInterval={1}
        chartConfig={chartConfig}
        bezier
        style={{ borderRadius: 10, marginTop: 10 }}
      />
    </View>
  )
}

export default Chart

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.white,
  },
})
