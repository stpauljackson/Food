import { SafeAreaView, View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Navigation />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})