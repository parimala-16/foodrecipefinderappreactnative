import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

function login() {
  const [values, setvalues] = useState({

    emailid: '',
    password: '',
  
  });

  const input = (key, value) => {
    setvalues(valuesbefore => ({
      ...valuesbefore,
      [key]: value,
    }));

  };

  const loginProcess = () => {

    console.log('EmailId:-', values.emailid);
    console.log('password:-', values.password);
  
  };

  return (
    <View style={stylesheet.container}>

      <View style={stylesheet.maincontainer}>

        <View style={stylesheet.screen}>

          <View style={stylesheet.screenContent}>
            <Image source={require('./imgs/logo1.png')} 
              style={stylesheet.logo} />
          </View>

          <View>

            <View style={stylesheet.content}>

              <View style={stylesheet.loginScreen}>

                <Text style={stylesheet.label}>
                  EmailId/UserId
                </Text>

                <TextInput
                  style={stylesheet.input}
                  placeholder="emailid"
                  value={values.emailid}
                  onChangeText={text => input('emailid', text)}/>

                <View>
                  <Text style={stylesheet.label}>
                    Password
                  </Text>
                  <TextInput
                    style={stylesheet.input}
                    placeholder="password"
                    secureTextEntry
                    value={values.password}
                    onChangeText={text => input('password', text)}/>
                </View>
                
                <Text style={stylesheet.buttonText}>
                  LogIn
                </Text>

              </View>

              <View style={stylesheet.signup}>
                <Text>
                  Already having account?
                </Text>
                <Text style={stylesheet.signupText}>
                  Login
                </Text>
              </View>

            </View>

          </View>

        </View>

      </View>

    </View>
    
  );
}

const stylesheet = StyleSheet.create({

  container: {
    flex: 2,
  },

  maincontainer: {
    flex: 2,
    alignItems: 'center',

  },
  screen: {
    flex: 2,
    alignItems: 'center',

  },
  screenContent: {

    flex: 2,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  
  content: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '110%',
  },

  loginScreen: {
    width: '80%',
    marginBottom: 35,
  },

  label: {
    marginBottom: 8,
  },

  input: {

    borderWidth: 3,
    borderColor: 'green',
    borderRadius: 7,
    padding: 15,
    marginBottom: 17,
    width: '110%',

  },

  button: {

    backgroundColor: 'grey',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',

  },

  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },

  signup: {
    marginTop: 15,
  },

  signupText: {

    fontWeight: 'italic',
    marginLeft: 7
    ,
  },

  recipe: {
    borderRadius: 7,
    shadowColor: '#533647',
    shadowOpacity: 0.6,
    shadowRadius: 14,
    minWidth: '54%',
    padding: 12,
  },

  recipeimg: {
    width: '47%',
    borderRadius: 35,
  },

  details: {
    width: '60%',
    padding: 7,
  },

  recipeName: {
    fontWeight: 'bold'
  },

});

export default login;

