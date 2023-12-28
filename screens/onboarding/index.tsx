import React from "react";
import { Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import tw from 'twrnc';
import Page1 from "./page1";

const OnBoarding = (): React.ReactNode => {
  return (
    <PagerView initialPage={0} style={tw`flex-1 bg-[#00ff00]`} scrollEnabled={true}>
      <Page1 key={1} />

      <View key={2} style={tw`h-[100%] flex w-[100%] items-center justify-center`}>
        <Text>Hello, Screen 2</Text>
      </View>

      <View key={3} style={tw`h-[100%] flex w-[100%] items-center justify-center`}>
        <Text>Hello, Screen 3</Text>
      </View>
    </PagerView>
  )
}


export default OnBoarding;
