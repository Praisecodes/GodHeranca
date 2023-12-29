import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

interface IAuthInput {
  icon: any;
  placeholder: string;
  secureTextEntry: boolean;
}

const AuthInput = ({ icon, placeholder, secureTextEntry }: IAuthInput) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(secureTextEntry);

  const onPasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <View style={[tw`flex flex-row bg-[#F6F6F6] items-center rounded-md px-2`]}>
      {icon}

      <TextInput
        placeholder={placeholder}
        secureTextEntry={passwordVisible}
        style={[tw`flex-1 w-[100%] py-4 px-4 text-lg`, {fontFamily: "satoshi"}]}
      />

      {secureTextEntry && (
        <TouchableWithoutFeedback onPress={() => { onPasswordToggle(); }}>
          <Ionicons name="ios-eye-off" size={24} color="#A5A5A5" />
        </TouchableWithoutFeedback>
      )}
    </View>
  )
}

export default AuthInput;
