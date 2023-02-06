import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.parentView}>
      <View style={styles.cards}>
        <View style={styles.center}>
          <Text style={styles.textBold}>Card No:1</Text>
          <Text style={styles.textBold}>Breed: Abyssinian</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Country: Ethiopia</Text>
          <Text style={styles.text}>Origin: Natural\/Standard</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Coat: Short</Text>
          <Text style={styles.text}>Pattern: Ticked</Text>
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
