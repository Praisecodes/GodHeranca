import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import tw from "twrnc";

interface IPasswordResetModal {
  onClose: () => any;
  open: boolean;
}

const PasswordResetModal = ({ onClose, open }: IPasswordResetModal) => {
  const image = require("../../../assets/images/password_reset.png");

  return (
    <TouchableWithoutFeedback onPress={() => { onClose(); }}>
      <View style={[tw`h-[100%] absolute px-5 z-10 ${open ? "flex" : "hidden"} items-center justify-center w-[100%] bg-[#00000042]`]}>
        <View style={[tw`bg-white py-8 px-5 flex flex-col gap-y-8 w-[100%] rounded-lg`]}>
          <Image source={image} style={[tw`mx-auto`]} />

          <Text style={[tw`text-2xl text-center`, { fontFamily: "satoshi-bold" }]}>
            Congratulations!
          </Text>

          <Text style={[tw`text-lg text-center`, { fontFamily: "satoshi" }]}>
            Your password was successfully
            changed . you will be redirected to your
            login page in few seconds.
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default PasswordResetModal;
