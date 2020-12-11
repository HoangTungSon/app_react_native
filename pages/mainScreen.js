import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import WalletScreen from './wallet/walletScreen';
import EmailScreen from './email/emailScreen';
import HomeList from './home/list';

const Tab = createBottomTabNavigator();

export default function ListScreen({ navigation }) {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'HomeList') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Wallet') {
              iconName = focused ? 'bug' : 'bookmarks';
            } else if (route.name === 'Email') {
              iconName = focused ? 'battery-full-outline' : 'bluetooth';
            }
  
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="HomeList" component={HomeList} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Email" component={EmailScreen} />
      </Tab.Navigator>
    )
}