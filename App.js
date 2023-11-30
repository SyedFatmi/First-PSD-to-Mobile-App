import { View, Text } from 'react-native'
import React from 'react'
import MainNavigation from './src/Navigation/mainNavigation'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MainNavigation />
    </View>
  )
}