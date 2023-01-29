import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

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

  return <Text>{fact}</Text>;
};

export default App;
