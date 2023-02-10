import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Factpage from '../pages/Factpage';
import BreedStack from './BreedStack';
import { Image } from 'react-native';


const Tab = createBottomTabNavigator();
const TabScreen = () => (
    <Tab.Navigator>
      <Tab.Screen 
       options={{
        tabBarLabel:'Breeds',
        headerShown: false,
       tabBarIcon: ({ focused, color, size }) => (
        <Image
          source={require('../images/happy.png')}
          style={{ tintColor: color, width: size, height: size }}/>)}}
       name="Breedstack" 
       component={BreedStack} />
      <Tab.Screen 
      options={{
        tabBarLabel:'Fact',
        
       tabBarIcon: ({ focused, color, size }) => (
        <Image
          source={require('../images/did-you-know.png')}
          style={{ width: size, height: size }}/>)}}
      name="Facts" component={Factpage} />
    </Tab.Navigator>
  );
  export default TabScreen;