import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

interface ISearchInput {
  placeholder: string;
  value: string;
  onChangeText?: ((text: string) => any) | undefined;
}

const SearchInput = ({ placeholder, value, onChangeText }: ISearchInput) => {
  return (
    <View style={[tw`flex flex-row items-center bg-[#F6F6F6] px-3 rounded-md`]}>
      <Feather name="search" size={20} color="#A5A5A5" />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[tw`text-lg px-4 py-3 flex-1`, { fontFamily: "satoshi" }]}
      />

      <TouchableWithoutFeedback>
        <MaterialIcons name="tune" size={24} color="black" />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default SearchInput;
