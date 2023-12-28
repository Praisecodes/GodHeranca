import React, { useRef } from "react";
import PagerView from "react-native-pager-view";
import tw from 'twrnc';
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";

const OnBoarding = (): React.ReactNode => {
  const pagerRef = useRef(null);

  const handleSwitchScreens = (pageNumber: number): any => {
    pagerRef.current?.setPage(pageNumber);
  }

  return (
    <PagerView initialPage={0} style={tw`flex-1 bg-[#fff]`} scrollEnabled={true} ref={pagerRef}>
      <Page1 key={1} handleSwitchScreens={handleSwitchScreens} />

      <Page2 key={2} handleSwitchScreens={handleSwitchScreens} />

      <Page3 key={3} handleSwitchScreens={handleSwitchScreens} />

      <Page4 key={4} handleSwitchScreens={handleSwitchScreens} />
    </PagerView>
  )
}


export default OnBoarding;
