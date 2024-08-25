import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';

export default function _layout() {
  return (
    <>
    <Tabs screenOptions={{
        tabBarStyle:{
            position: 'absolute',
            bottom:30,
            marginHorizontal:20,
            borderRadius:50,
            height:80,
            backgroundColor:'#CD9B69',
            paddingHorizontal:10,
             paddingVertical:8,
             paddingBottom:7
        },
        headerShown:false,
        tabBarShowLabel:false,
        tabBarInactiveTintColor:'white',
        tabBarActiveTintColor:'#CD9B69',
    }}>
        <Tabs.Screen name='index' options={{
            tabBarIcon:(({color , focused})=>(
                <View style={{ padding:17 , backgroundColor:focused ? 'white' : '#CD9B69' , borderRadius:50}}>
                    <FontAwesome name="home" size={24} color={color} />
                </View>
            ))
        }}/>
        <Tabs.Screen name='fav' options={{
            tabBarIcon:(({color , focused})=>(
                <View style={{ padding:17 , backgroundColor:focused ? 'white' : '#CD9B69' , borderRadius:50}}>
                    <AntDesign name="heart" size={24} color={color} />
                </View>
            ))
        }}/>
        <Tabs.Screen name='cart' options={{
            tabBarIcon:(({color , focused})=>(
                <View style={{ padding:17 , backgroundColor:focused ? 'white' : '#CD9B69' , borderRadius:50}}>
                    <FontAwesome name="shopping-bag" size={24} color={color} />
                </View>
            ))
        }}/>
        
    </Tabs>
    <StatusBar style='dark'/>
    </>
  )
}