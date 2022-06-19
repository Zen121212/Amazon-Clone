import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#FD7F20',
      tabBarInactiveTintColor: '#FDB750'


    }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" color={color} size={25} />
        }}
      />
      <Tab.Screen name="profile" component={HomeScreen} options={{
        tabBarIcon: ({ color }) => <Entypo name="user" color={color} size={25} />
      }} />
      <Tab.Screen name="shoppingCart" component={ShoppingCartScreen} options={{
        tabBarIcon: ({ color }) => <Entypo name="shopping-cart" color={color} size={25} />
      }} />
      <Tab.Screen name="more" component={HomeScreen} options={{
        tabBarIcon: ({ color }) => <Entypo name="menu" color={color} size={25} />
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
