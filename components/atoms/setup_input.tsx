import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native';
import React, { useEffect } from 'react';
import tw from 'twrnc';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface ISetupInput {
  placeholder: string;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  onTextChange?: ((text: string) => any | undefined);
  valid?: boolean;
  validation_message?: string;
}

const SetupInput = ({ placeholder, value, onTextChange, keyboardType, validation_message, valid }: ISetupInput) => {
  const displayValue = useSharedValue(0);

  const displayStyle = useAnimatedStyle(() => ({
    opacity: displayValue.value
  }), [valid]);

  useEffect(() => {
    if (!valid) {
      displayValue.value = withTiming(1, { duration: 100 });
      return;
    }

    displayValue.value = withTiming(0, { duration: 30 });
  }, [valid]);

  return (
    <>
      <TextInput
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onTextChange}
        style={[tw`w-[100%] bg-[#F6F6F6] rounded-md py-4 px-5 text-lg`, { fontFamily: "satoshi" }]}
      />
      <Animated.Text style={[tw`text-xs text-[#ff0000] mt-[-20px]`, { fontFamily: "satoshi" }, displayStyle]}>
        {validation_message}
      </Animated.Text>
    </>
  )
}

export default SetupInput;
