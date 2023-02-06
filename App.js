import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Factpage from './src/pages/Factpage';
import Breedspage from './src/pages/Breedspage';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Breedspage1 from './src/pages/Breedspage1';

const Tab = createBottomTabNavigator();

const TabScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Breeds" component={Breedspage1} />
    <Tab.Screen name="Facts" component={Factpage} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabScreen />
    </NavigationContainer>
  );
}

const Apps = () => {
  const [page, setPage] = useState('facts');
  return (
    <View style={styles.appContainer}>
      {page === 'facts' ? <Factpage /> : null}
      {page === 'breeds' ? <Breedspage1 /> : null}
      {/* <View style={styles.buttonsContainer}>
        <Button title="Facts" onPress={() => setPage('facts')} />
        <Button title="Breeds" onPress={() => setPage('breeds')} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// export default App;
