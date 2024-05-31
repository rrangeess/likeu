import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '@/constants/Colors'
import { LineChart } from 'react-native-chart-kit'

type Props = {
  dataset: any[]
}

const Chart = ({ dataset }: Props) => {
  const data = {
    labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    datasets: [
      {
        data: dataset,
        color: (opacity = 1) => `rgba(248,134,0, ${opacity})`,
        strokeWidth: 3,
      },
    ],
    legend: ['Similarity'],
  }

  const chartConfig = {
    backgroundGradientFrom: Colors.bgColor,
    backgroundGradientTo: Colors.bgColor,
    backgroundColor: Colors.bgColor,
    color: (opacity = 1) => `rgba(248,134,0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

    strokeWidth: 1,
    barPercentage: 1,
    useShadowColorFromDataset: false,
  }

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
