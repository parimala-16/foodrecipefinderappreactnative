import React from 'react';
import Ingredients from './Ingredients';
import { View, Text, Image } from 'react-native';


const Recipe = ({ r }) => 
{
  return (

    <View style={stylesheet.recipe}>

      <View style={stylesheet.aboveRecipe}>
        <Image source={{ uri: r.recipe.img }} style={stylesheet.recipeImg} />

        <View style={stylesheet.recipeDetails}>
          <Text style={stylesheet.Name}>{r.recipe.label}
          </Text>
          <Text>
            <Text>
              Calories:-
            </Text> 
              {r.recipe.calories}
          </Text>
        </View>

      </View>

      <View>

        <Ingredients i={r.recipe.ingredients}/>

      </View>

    </View>

  );
};

const stylesheet = StyleSheet.create({

    recipe: {
      borderRadius: 8,
      shadowColor: '#363636',
      shadowOffset: {
        height: 3,
      },
      shadowOpacity: 0.5,
      shadowRadius: 17,
      minWidth: '38%',
      padding: 15,
    },

    aboveRecipe: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 17, 
    },

    recipeImg: {
      width: '37%',
      borderRadius: 45,
    },

    recipeDetails: {
      width: '54%',
      padding: 7,
    },

    Name: {
      fontSize: 22,
    },

  });
  
export default Recipe;
