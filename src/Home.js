import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { grey, red } from './Constants';

const Home = (props) => {
  return (
    <Background>
      <SafeAreaView style={{ marginHorizontal: 40, alignItems: 'center', marginVertical: 200 }}>
      <Text 
      style=
      {{ 
        color: 'white', 
        fontSize: 50,
        textAlign:'center',
        paddingVertical:0,
        
        }}>
        Welcome To
        </Text>
      <Text 
      style=
      {{ 
        color: 'white',
         fontSize: 64, 
         marginBottom: 80 ,
         textAlign:'center',

         }}>
        Bike Rental
       </Text>
      <Btn bgColor={red} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={red} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;