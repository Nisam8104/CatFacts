import React ,{useState,useEffect} from 'react';
import { Text, View, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {breedsApi} from '../api';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BreedCard = (props) => {
  const navigation = useNavigation();
    const {index, item} = props
    // const index = props.index
    // const item = props.item

  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Breed',{...props})}>
    <View style={styles.cards}>
              <View style={styles.center}>
                <Text style={styles.textBold}> {index + 1}</Text>
                <Text style={styles.textBold}>Breed: {item.breed}</Text>
              </View>
              
            </View>
            </TouchableOpacity>
  )
};

  const styles = {
    cards: {
        marginTop: 50,
        marginBottom: 50,
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
        fontSize: 15,
        color: 'red',
        justifyContent: 'center',
        fontWeight: 'bold',
      },
    
    
    };

    export default BreedCard