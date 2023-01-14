import React, { useLayoutEffect } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity,Image, View, FlatList} from 'react-native';
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';
import Background from './Background';
import Btn from './Btn';
import { grey, red,menu,home,setting,man,ducati,yamaha,honda,ktm } from './Constants';
import { useNavigation } from '@react-navigation/native';
import Field from './Field';
import Catagory from './Catagory';


const Mainhome = (props) => {
  
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    },[]);

 

  return (
    <Background>
      <SafeAreaView >
        <View
            style={{
                backgroundColor: 'white',
                height:120,
                width: 500,
                display: 'flex',
                flexDirection: 'row',
                paddingTop:70,
                justifyContent:'space-between',
          
              }}
        >
            <Image 
                source={require("./assets/list.png")} 
                resizeMode="contain"
                style={{ 
                width: 50,
                height:50,
                marginLeft:20,
                paddingBottom:15,
                }}
            />

            <Image 
            source={require("./assets/man.png")} 
            resizeMode="contain"
            style={{ 
                width: 200,
                height:50,
                marginRight:20,
                paddingBottom:15,
            }}
            />

        </View>
        <View
        style={{
            display:'flex',
            flexDirection:'column',
            // justifyContent:'flex-start',
            marginLeft:30,
            marginTop:20
            
        }}
        >
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign:'left',
            
            paddingRight:70

          }}>
          Find your favourite motorcycle!
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign:'left',
            paddingRight:70,
            marginBottom:30,

          }}>
          Have a very pleasant experience
        </Text>

         <View
         style={{
            display:'flex',
            flexDirection:'row',

         }}
        >
         <Field
             placeholder="Search for a vehicle"
          />
          <Image 
                source={require("./assets/search.png")} 
                resizeMode="contain"
               style={{ 
                   width: 40,
                    height:50,
                   marginLeft:20,
                   marginTop:6
             }}
            />
         </View>
        
        </View>
        <ScrollView
            scrollEventThrottle={16}
        >
             <View style={{ height:250, marginTop:20, }}>
              <ScrollView
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
              >
                 <Catagory imageUri={require('./assets/ducati.png')}
                 name="Ducati"
                 />
                 <Catagory imageUri={require('./assets/yamaha.png')}
                 name="Ducati"
                 />
                 <Catagory imageUri={require('./assets/honda.png')}
                 name="Ducati"
                 />
                 <Catagory imageUri={require('./assets/ktm.png')}
                 name="Ducati"
                 />
              </ScrollView>

             </View>
        </ScrollView>     
      </SafeAreaView>
    </Background>
  );

 
}





export default Mainhome;