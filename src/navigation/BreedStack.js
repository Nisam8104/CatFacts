import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Breedspage from '../pages/Breedspage';
import Breed from '../pages/Breed';
const Stack = createStackNavigator();

const BreedStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Breeds" component={Breedspage} />
      <Stack.Screen name="Breed" component={Breed} />
    </Stack.Navigator>
  );
  export default BreedStack;