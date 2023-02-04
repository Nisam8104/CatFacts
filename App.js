import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Factpage from './src/pages/Factpage';


const App = () => {
  return (
    <View style={styles.appContainer}>
    <Factpage/>
    <View style={styles.buttonsContainer}>
      <Button title='Fact' onPress={()=> console.log('fact pressed')} />
      <Button title='Breeds' onPress={()=> console.log('Breeds pressed')} />
    </View>
    </View>
  );
};

const styles =StyleSheet.create({
  appContainer:{
    flex:1,
  },
  buttonsContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  }
})

export default App;
