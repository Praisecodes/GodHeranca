import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

interface ISearchButton {
  onPress: () => any;
}

const SearchButton = ({ onPress }: ISearchButton) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[tw`flex flex-row items-center bg-[#F6F6F6] px-3 rounded-md`]}>
        <Feather name="search" size={20} color="#A5A5A5" />
        <View
          style={[tw`text-lg px-4 py-4 flex-1`, { fontFamily: "satoshi" }]}
        >
          <Text style={[tw`text-lg text-[#A5A5A5]`, {fontFamily: "satoshi"}]}>
            Search
          </Text>
        </View>

        <TouchableWithoutFeedback>
          <MaterialIcons name="tune" size={24} color="black" />
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SearchButton;
