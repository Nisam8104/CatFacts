import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {breedsApi} from '../api';
import BreedCard from './BreedCard';

const BreedList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [alreadySavedPages, setAlreadySavedPages] = useState([]);

  useEffect(() => {
    getBreeds();
  }, [page]);
  const getBreeds = () => {
    breedsApi(page).then(resp => {
      setAlreadySavedPages([...alreadySavedPages, page]); // avoid data duplication when saving code
      if (!alreadySavedPages.includes(page)) {
        setData([...data, ...resp]);
      }
    });
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()} // add this
      onEndReached={() => {
        setPage(page + 1);
      }}
      onEndReachedThreshold={0.5}
      initialNumToRender={10}
      renderItem={({item, index}) => {
        return <BreedCard item={item} index={index} />;
      }}
    />
  );
};

export default BreedList;
