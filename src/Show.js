import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useGetPokemonByNameQuery } from './pokemon';
const Show = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  console.log(data ? data : "no");
  return (
    <View style={{ flex: 1 }} >
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        <>
          <Text>{data.species.name}</Text>
        </>
      ) : null}
    </View >
  );
};

export default Show;

const styles = StyleSheet.create({});
