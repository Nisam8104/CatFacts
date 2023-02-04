import React from 'react';
import {View, StyleSheet} from 'react-native';
import BreedList from '../components/BreedsList';
import Headingtext from '../components/Heading';

const Breedspage = () => {
  return (
    <View style={styles.headerContainer}>
      <Headingtext title="Cat breed information" />
      <BreedList />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    backgroundColor: 'black',
    flex: 1,
  },
});

export default Breedspage;
