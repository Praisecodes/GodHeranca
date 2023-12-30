import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect } from 'react';
import tw from "twrnc";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';

interface ISuccessModal {
  onClose: () => any;
  open: boolean;
  title: string;
  text: string;
}

const SuccessModal = ({ onClose, open, title, text }: ISuccessModal) => {
  const image = require("../../../assets/images/password_reset.png");
  const initialScale = useSharedValue<number>(0.3);
  const initialDisplay = useSharedValue<any>("none");

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: initialScale.value }
    ]
  }), []);

  const displayStyle = useAnimatedStyle(() => ({
    display: initialDisplay.value
  }), []);

  useEffect(() => {
    if (!open) {
      initialScale.value = withTiming(0.3, { duration: 200 });
      setTimeout(() => { initialDisplay.value = "none" }, 100);
      return;
    }

    initialScale.value = withTiming(1, { duration: 200 });
    initialDisplay.value = "flex";
  }, [open])

  return (
    <TouchableWithoutFeedback onPress={() => { onClose(); }}>
      <Animated.View style={[tw`h-[100%] absolute px-5 z-10 items-center justify-center w-[100%] bg-[#00000042]`, displayStyle]}>
        <Animated.View style={[tw`bg-white py-8 px-5 flex flex-col gap-y-8 w-[100%] rounded-lg`, animatedStyle]}>
          <Image source={image} style={[tw`mx-auto`]} />

          <Text style={[tw`text-2xl text-center`, { fontFamily: "satoshi-bold" }]}>
            {title}
          </Text>

          <Text style={[tw`text-lg text-center`, { fontFamily: "satoshi" }]}>
            {text}
          </Text>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default SuccessModal;
