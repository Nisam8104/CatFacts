import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native';
import Breedspage from './Breedspage';
import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation();
const App = (props) => {
  const {index, item} = props.route.params
  console.log('abc',index,item)
  return (
    <View style={styles.parentView}>
      <View style={styles.cards}>
        <View style={styles.center}>
          <Text style={styles.textBold}>Card No:{index+1}</Text>
          <Text style={styles.textBold}>Breed: {item.breed}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Country: {item.country}</Text>
          <Text style={styles.text}>Origin: {item.origin}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Coat: {item.coat}</Text>
          <Text style={styles.text}>Pattern: {item.pattern}</Text>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    backgroundColor: 'black',
    flex: 1,
  },
  cards: {
    marginTop: 100,
    marginBottom: 200,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,

    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 15,
    color: 'black',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBold: {
    fontSize: 25,
    color: 'red',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});

export default App;
