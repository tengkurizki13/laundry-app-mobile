import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Splashscreen,Homescreen } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Userscreen from '../pages/Userscreen';
import ButtomTabs from '../components/molecus/BottomTabs';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


function MainApp() {
  return (
    <Tab.Navigator screenOptions={{ headerShown:false }} tabBar={props => <ButtomTabs {...props} />}>
      <Tab.Screen name="Homescreen" component={Homescreen} />
      <Tab.Screen name="Userscreen" component={Userscreen} />
    </Tab.Navigator>
  );
}


const Router = () => {
  return (
  <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />    
        <Stack.Screen name="Homescreen" component={Homescreen} />    
        <Stack.Screen name="Userscreen" component={Userscreen} />    
  </Stack.Navigator>
  )
}

export default MainApp

const styles = StyleSheet.create({})