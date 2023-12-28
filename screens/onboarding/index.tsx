import React from "react";
import PagerView from "react-native-pager-view";
import tw from 'twrnc';

const OnBoarding = (): React.ReactNode => {
  return (
    <PagerView initialPage={0} style={tw`flex-1 bg-[#008800]`}>
    </PagerView>
  )
}


export default OnBoarding;
