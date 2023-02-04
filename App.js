import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Factpage from './src/pages/Factpage';
import Breedspage from './src/pages/Breedspage';

const App = () => {
  const [page, setPage] = useState('facts');
  return (
    <View style={styles.appContainer}>
      {page === 'breeds' ? <Breedspage /> : null}
      {page === 'facts' ? <Factpage /> : null}
      <View style={styles.buttonsContainer}>
        <Button title="Facts" onPress={() => setPage('facts')} />
        <Button title="Breeds" onPress={() => setPage('breeds')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
