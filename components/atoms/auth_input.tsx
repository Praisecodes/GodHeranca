import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

interface IAuthInput {
  icon: any;
  placeholder: string;
  secureTextEntry: boolean;
  value: string;
  onChangeText: ((text: string) => void) | undefined;
  valid: boolean;
  validation_message: string;
}

const AuthInput = ({ icon, placeholder, secureTextEntry, value, onChangeText, validation_message, valid }: IAuthInput) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(secureTextEntry);

  const initialDisplay = useSharedValue<number>(0);

  const onPasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  }

  const displayStyle = useAnimatedStyle(() => ({
    opacity: initialDisplay.value,
  }), [valid]);

  useEffect(() => {
    if (!valid) {
      initialDisplay.value = withTiming(1, { duration: 100 });
      return;
    }

    initialDisplay.value = withTiming(0, { duration: 30 });
  }, [valid]);

  return (
    <>
      <View style={[tw`flex flex-row bg-[#F6F6F6] items-center rounded-md px-2`]}>
        {icon}

        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={passwordVisible}
          style={[tw`flex-1 w-[100%] py-4 px-4 text-lg`, { fontFamily: "satoshi" }]}
        />

        {secureTextEntry && (
          <TouchableWithoutFeedback onPress={() => { onPasswordToggle(); }}>
            <Ionicons name="ios-eye-off" size={24} color="#A5A5A5" />
          </TouchableWithoutFeedback>
        )}
      </View>

      <Animated.Text style={[
        tw`text-xs mt-[-16px] text-[#ff0000]`,
        { fontFamily: "satoshi" },
        displayStyle,
      ]}>
        {validation_message}
      </Animated.Text>
    </>
  )
}

export default AuthInput;
