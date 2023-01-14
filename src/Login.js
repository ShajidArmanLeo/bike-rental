import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {grey, red} from './Constants';
import Field from './Field';

const Login = (props) => {
  
  // const[email, setEmail]= useState('')
  // const[password, setPassword]= useState('') 


  return (
    <Background>
      <View style={{ alignItems: 'center', width: 400, }}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            marginVertical: 50,
            textAlign:'center',
          }}>
          Login To Bike Rental
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 600,
            width: 460,
            borderTopLeftRadius: 130,
            borderBottomRightRadius:130,
            paddingTop: 70,
            alignItems: 'center',
            
          }}>
          <Text style={{fontSize: 40, color: red, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          
          <Field
            placeholder="Email / Username"
            // value={email}
            // onChangeText={text => setEmail(text)}
            keyboardType={'email-address'}
            
          />
          <Field placeholder="Password"
          // value={password}
          // onChangeText={text => setPassword(text)}
          secureTextEntry={true} />

         
         
          <View
            style={{
              alignItems: 'flex-end', 
              width: '78%', paddingRight: 16, 
              marginBottom: 70
              }}>
            <Text style={{
              color: red, 
              fontWeight: 'bold', 
              fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={red} btnLabel="Login" Press={() => props.navigation.navigate("Mainhome")} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: red, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;