import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Reviews from './Reviews';
import Menu from './Menu';



export default function Navigation() {
      const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
    <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Reviews" component={Reviews} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})