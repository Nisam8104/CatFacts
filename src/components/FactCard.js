import React ,{useState,useEffect} from 'react';
import { Text, View, Button} from 'react-native';
import {factApi} from '../api';

const FactCard = () => {
    const [fact, setFact] = useState('');
  useEffect(() => {
    getFact();
  }, []);

  const getFact = () => {
    factApi().then(resp => {
      setFact(resp);
    });
  };
  return (
    <View style={styles.container}>
    <Text style={styles.textstyle}>{fact}</Text>
    <View>
      <Button title="Next Fact" onPress={getFact} />
    </View>
  </View>
  )
};

  const styles = {
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
    
    };

    export default FactCard