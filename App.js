import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Image, Text, View} from 'react-native';

const App = () => {
  const [fact, setFact] = useState('');
  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.text())
      .then(result => {
        const wholeData = JSON.parse(result);
        setFact(wholeData.fact);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View style={styles.Heading}>
      <Text style={styles.headingtext}>Do you know about cats?</Text>
      <View style={styles.container}>
        <Text style={styles.textstyle}>{fact}</Text>
        <View>
          <Button title="Next Fact" onPress={apiCall} />
        </View>
      </View>

      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={require('./images/cat.jpg')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 10,
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
  textstyle: {
    fontSize: 20,
    color: 'black',
  },
  headingtext: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  Heading: {
    padding: 20,
    flex: 1,
  },
  image: {
    width: 350,
    height: 350,
  },
  imagecontainer: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
});

export default App;
