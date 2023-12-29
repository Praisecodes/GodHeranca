import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native';
import React from 'react';
import tw from 'twrnc';

interface ISetupInput {
  placeholder: string;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  onTextChange?: any;
}

const SetupInput = ({ placeholder, value, onTextChange, keyboardType }: ISetupInput) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      keyboardType={keyboardType}
      onChangeText={onTextChange}
      style={[tw`w-[100%] bg-[#F6F6F6] py-4 px-4 text-lg`, { fontFamily: "satoshi" }]}
    />
  )
}

export default SetupInput;
