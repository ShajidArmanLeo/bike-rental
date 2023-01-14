import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen, red} from './Constants';
import Field from './Field';

const Signup = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 400, paddingVertical:10}}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            marginTop: 40,
            textAlign:'center'
            
          }}>
          Register To Bike Rental
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 600,
            width: 460,
            borderTopLeftRadius: 130,
            borderBottomRightRadius:130,
            paddingTop: 30,
            alignItems: 'center',
          }}>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Contact Number" keyboardType={'number'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            <Text style={{
                color: 'grey', 
                fontSize: 16
                }}>
              By signing in, you agree to our{' '}
            </Text>
            <Text 
            style={{
                color: darkGreen, 
                fontWeight: 'bold', 
                fontSize: 16
                }}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{
                color: 'grey', 
                fontSize: 16
                }}>
              and {" "}
            </Text>
            <Text style={{
                color: 'black',
                fontWeight: 'bold', 
                fontSize: 16
                }}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={red}
            btnLabel="Signup"
            Press={() => {
              alert('Account created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: red, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;