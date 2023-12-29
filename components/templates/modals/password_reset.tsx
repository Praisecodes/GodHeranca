import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect } from 'react';
import tw from "twrnc";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';

interface IPasswordResetModal {
  onClose: () => any;
  open: boolean;
}

const PasswordResetModal = ({ onClose, open }: IPasswordResetModal) => {
  const image = require("../../../assets/images/password_reset.png");
  const initialScale = useSharedValue<number>(0.5);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: initialScale.value }
    ]
  }), []);

  useEffect(() => {
    if (!open) {
      initialScale.value = withSpring(0.8);
      return;
    }

    initialScale.value = withRepeat(withSpring(1), -1, true);
    console.log("stuff");
  }, [open])

  return (
    <TouchableWithoutFeedback onPress={() => { onClose(); }}>
      <View style={[tw`h-[100%] absolute px-5 z-10 ${open ? "flex" : "hidden"} items-center justify-center w-[100%] bg-[#00000042]`]}>
        <Animated.View style={[tw`bg-white py-8 px-5 flex flex-col gap-y-8 w-[100%] rounded-lg`, animatedStyle]}>
          <Image source={image} style={[tw`mx-auto`]} />

          <Text style={[tw`text-2xl text-center`, { fontFamily: "satoshi-bold" }]}>
            Congratulations!
          </Text>

          <Text style={[tw`text-lg text-center`, { fontFamily: "satoshi" }]}>
            Your password was successfully
            changed . you will be redirected to your
            login page in few seconds.
          </Text>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default PasswordResetModal;
