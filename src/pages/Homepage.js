import React from 'react';
import { StyleSheet, View} from 'react-native';
import CatImage from '../components/CatImage';
import Headingtext from '../components/Heading';
import FactCard from '../components/FactCard';

const Homepage = () => {
  

  return (
    <View style={styles.container}>
      <Headingtext />
      <FactCard/>
      <CatImage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  }
});

export default Homepage;
