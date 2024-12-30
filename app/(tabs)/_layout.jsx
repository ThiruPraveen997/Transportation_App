import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import {Colors} from '../../constants/Colors'
export default function TabLayout () {
return (
<Tabs screenOptions={{
    headerShown:false,
    tabBarActiveTintColor:Colors.PRIMARY,
    tabBarIconTintColor:Colors.PRIMARY
    }}>
    <Tabs.Screen name='home'
        options={{
            tabBarLabel:'Home',
            tabBarIcon :({ColorS})=><AntDesign name="home" size={24} color=  'black' />
        }}/>

  
    <Tabs.Screen name='help'
          options={{
            tabBarLabel:'Help',
            tabBarIcon :({color})=><AntDesign name="customerservice" size={24} color="black" />
        }}/>

    <Tabs.Screen name='profile'
     options={{
        tabBarLabel:'Profile',
        tabBarIcon :({color})=><MaterialIcons name="person-outline" size={24} color="black" />
    }} />


</Tabs>
)
}