import React, { Component } from 'react'
import { Text, View,Image, } from 'react-native'

export default class Catagory extends Component {
  render() {
    return (
        <View style={{ height:250,width:250, backgroundColor:'white', marginLeft:20,}}>
        <View style={{flex:2,}}>
            <Image source={this.props.imageUri}  
            style={{ flex:1, width:null,height:null, resizeMode:'cover'}}
            />
        </View>
        <View>
            <Text>
               {this.props.name}
            </Text>
        </View>
     </View>
    )
  }
}
