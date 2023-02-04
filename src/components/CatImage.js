// CatImage.js
import React from 'react';
import { Image, View } from 'react-native';

const CatImage = () => {
  return (
    <View style={styles.imagecontainer}>
      <Image style={styles.image} source={require('../images/cat.jpg')} />
    </View>
  );
};

const styles = {
  imagecontainer: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  image: {
    width: 350,
    height: 350,
  },
};

export default CatImage
