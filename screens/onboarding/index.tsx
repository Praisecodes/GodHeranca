import React from "react";
import { Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import tw from 'twrnc';
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";

const OnBoarding = (): React.ReactNode => {
  return (
    <PagerView initialPage={0} style={tw`flex-1 bg-[#fff]`} scrollEnabled={true}>
      <Page1 key={1} />

      <Page2 key={2} />

      <Page3 key={3} />

      <Page4 key={4} />
    </PagerView>
  )
}


export default OnBoarding;
