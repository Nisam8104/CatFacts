import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Factpage from '../pages/Factpage';
import BreedStack from './BreedStack';


const Tab = createBottomTabNavigator();
const TabScreen = () => (
    <Tab.Navigator>
      <Tab.Screen name="Breedstack" component={BreedStack} />
      <Tab.Screen name="Facts" component={Factpage} />
    </Tab.Navigator>
  );
  export default TabScreen;