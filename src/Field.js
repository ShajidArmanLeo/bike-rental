import React from 'react';
import {TextInput} from 'react-native';
import {grey, red} from './Constants';

const Field = props => {


  return (
    <TextInput

      {...props}
      style={{borderRadius: 100, textAlign:'center', color: red, paddingHorizontal: 8, paddingVertical: 8, width: '65%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
      placeholderTextColor={grey}></TextInput>
  );
};

export default Field;