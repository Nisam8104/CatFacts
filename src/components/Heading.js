import React from 'react';
import { Text, View } from 'react-native';

const Headingtext = () => {
  return (
    <Text style={styles.headingtext}>Do you know about cats?</Text>
  )
};

  const styles = {
    headingtext: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
      },
    };

    export default Headingtext