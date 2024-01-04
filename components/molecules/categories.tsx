import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const Categories = () => {
  const categories = [
    {
      "category": "Clothes",
      "icon": <Ionicons name="ios-shirt" size={24} color="black" />,
    },
    {
      "category": "Bags",
      "icon": <FontAwesome name="shopping-bag" size={24} color="black" />,
    },
    {
      "category": "Shoes",
      "icon": <MaterialCommunityIcons name="shoe-sneaker" size={24} color="black" />,
    },
    {
      "category": "Electronics",
      "icon": <MaterialCommunityIcons name="iron" size={24} color="black" />,
    },
    {
      "category": "Watches",
      "icon": <Ionicons name="watch" size={24} color="black" />,
    },
    {
      "category": "Kitchen",
      "icon": <MaterialCommunityIcons name="bowl-mix" size={24} color="black" />,
    },
    {
      "category": "Toys",
      "icon": <MaterialCommunityIcons name="car-side" size={24} color="black" />,
    },
    {
      "category": "Jewelry",
      "icon": <SimpleLineIcons name="diamond" size={24} color="black" />,
    },
  ];

  return (
    <View style={[tw`flex flex-row gap-x-8 justify-center items-center gap-y-8 flex-wrap`]}>
      {categories.map((category, index) => (
        <TouchableWithoutFeedback key={index}>
          <View >
            <View style={[tw`w-[4rem] h-[4rem] rounded-full flex items-center justify-center bg-[#F3F3F3]`]}>
              {category.icon}
            </View>

            <Text style={[tw`text-base mx-auto text-center`, {fontFamily: "satoshi-bold"}]}>
              {category.category}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  )
}

export default Categories;
