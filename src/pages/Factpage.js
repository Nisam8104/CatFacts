import React from 'react';
import { StyleSheet, View} from 'react-native';
import CatImage from '../components/CatImage';
import Headingtext from '../components/Heading';
import FactCard from '../components/FactCard';

const Factpage = () => {
  

  return (
    <View style={styles.container}>
      <Headingtext title="Do you know about cats?" />
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

export default Factpage;
