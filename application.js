import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RecipeList from './components/RecipeList';
import LoginPage from './components/LoginPage';
import { StyleSheet, View } from 'react-native';
import SearchFrom from './components/SearchFrom';


function application() {
  
  const application_id = '933a95c8';
  const api_key = 'c411544cf373073dfdd222ed10cec52f';

  const [recipes_list, set_recipes] = useState([]);

  const [query, set_query] = useState('');

  useEffect(() => {

    if (query) 
    {

      get_Recipes();
    
    }
  }, [query]);

  const stack_navigator = createStackNavigator();

  const get_Recipes = async () => 
  {
    try
    {
      const getResponse = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${application_id}&app_key=${api_key}`);
      const jsondata = await getResponse.json();
      set_recipes(jsondata.hits);
    } catch (error) 
    {
      console.error('Error while fetching the recipes:', error);
    }

  };

  return (
    
    <NavigationContainer>
      <stack_navigator.Navigator firstPage="login">
        <stack_navigator.Screen name="login" component={login} />
        <stack_navigator.Screen name="search">

          {properties => (

            <View style={styles.container}>
              <SearchFrom {...properties} 
                get_query = {
                  q => set_query(query) } />
              {query && <RecipeList recipesList = {recipes_list} />}
            </View>

          )}

        </stack_navigator.Screen>
      </stack_navigator.Navigator>
    </NavigationContainer>

  );
}

export default application;
