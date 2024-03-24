import React from 'react';
import uuid from 'react-native-uuid';
import { View, Text, StyleSheet } from 'react-native';

const Ingredients = ({ ingredients }) => {

  return (
    
    <View style={stylesheet.style_ingredients}>

      <Text style={stylesheet.style_Text}>
        Ingredients:-
      </Text>
      
      <View>
        {ingredients.map(ingredient => (
          <Text key={uuid.v4()}>
            {ingredient.text}
          </Text>

        ))}
      </View>

    </View>
  );

}

const stylesheet = StyleSheet.create({

  style_ingredients: {
    marginTop: 8,
  },
  style_Text: {
    fontWeight: 'italic',
    marginBottom: 3,
  },
  style_ingredients :{
    
    ul: {
        paddingTop: 7,
        paddingLeft: 27,
    }
}
});

export default Ingredients;
