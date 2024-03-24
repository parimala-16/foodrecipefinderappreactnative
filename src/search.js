import React, { useState } from 'react';

import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const search = ({ get_Query }) => {

  const [search, set_search] = useState('');

  const searchHandle = () => {
    get_Query(search);
  };

  return (
    <View style={stylesheet.form_search}>

      <TextInput
        style={stylesheet.searchbar}
        value={search}
        placeholder="Search for Recipe"
        onChangeText={set_search}
      />

      <TouchableOpacity style={stylesheet.button1} onclick={searchHandle}>
        <Text style={stylesheet.buttontext}>
          Search
        </Text>
      </TouchableOpacity>
    </View>

  );
};

const stylesheet = StyleSheet.create({
    form_search: {

        minHeight: '13%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

      },
      searchbar: {
        width: '60%',
        borderWidth: 3,
        borderColor: 'rgb(157, 74, 13)',
        padding: 12,
      },

      button1: {
        backgroundColor: 'rgb(157, 74, 13)',
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderRadius: 7,
      },
      
      buttontext: {
        color: '#black',
      },
      
});

export default search;
