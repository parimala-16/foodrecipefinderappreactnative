import React from 'react';
import uuid from 'react-native-uuid';
import Recipe from './Recipe';
import { View, StyleSheet } from 'react-native';

const recipe_list = ({ list_recipes }) => {
  return (

    <View style={stylesheet.listOfRecipies}>

      {list_recipes.map(r => (

        <Recipe key={uuid.v4()} recipe={r} />

      ))}

    </View>

  );
}

const stylesheet = StyleSheet.create({

    listOfRecipies: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 25,
        margin: 25,
      },

      '@media (max-width: 450px)': {
        recipeList: {

          gridTemplateColumns: 'repeat(2, 1fr)',
        },
      },

      '@media (max-width: 480px)': {
        recipeList: {
          gridTemplateColumns: 'repeat(2, 1fr)',
          margin: 13,
          gap: 16,
        
        },
      
      },
});

export default recipe_list;
