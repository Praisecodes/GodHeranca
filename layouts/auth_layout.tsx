import { View, Text, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { StatusBar } from 'expo-status-bar';

interface IAuthLayout {
  children: React.ReactNode,
  page: string,
  navigation: any,
}

const AuthLayout = ({ children, page, navigation }: IAuthLayout) => {
  const facebook = require('../assets/images/facebook.png');
  const google = require('../assets/images/google.png');

  return (
    <>
      <StatusBar style='auto' />
      <View style={[tw`min-h-[100%] bg-[#F0F0F0] pt-7`]}>
        <ScrollView contentContainerStyle={[tw`px-4 w-[100%] min-h-[100%] flex flex-col pb-5 justify-end`]}>
          <Text style={[tw`text-5xl leading-normal mb-8`, { fontFamily: "satoshi-bold" }]}>
            {page == "login" ? "Login To Your Account" : "Create your Account"}
          </Text>

          {children}

          <View style={[tw`flex flex-row gap-x-2 w-[100%] mt-9 mb-7 items-center`]}>
            <View style={[tw`flex-1 h-[1px] bg-[#A0A0A0]`]}></View>
            <Text style={[tw`text-base`, { fontFamily: "satoshi-bold" }]}>
              Or Continue
            </Text>
            <View style={[tw`flex-1 h-[1px] bg-[#A0A0A0]`]}></View>
          </View>

          <View style={[tw`flex flex-row gap-x-8 mb-8 items-center justify-center w-[100%]`]}>
            <TouchableWithoutFeedback>
              <View style={[tw`border-[#DBDBDB] border rounded-md py-3 px-9`]}>
                <Image source={facebook} style={[tw`w-[2rem] h-[2rem]`]} />
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <View style={[tw`border-[#DBDBDB] border rounded-md py-3 px-9`]}>
                <Image source={google} style={[tw`w-[2rem] h-[2rem]`]} />
              </View>
            </TouchableWithoutFeedback>
          </View>

          <Text style={[tw`text-[#A5A5A5] text-base w-[100%] text-center flex flex-row gap-x-2`, { fontFamily: "satoshi-bold" }]}>
            {page == "login" ? "Don't have an account? " : "Already have an account? "}

            <TouchableWithoutFeedback onPress={() => { navigation.navigate(page == "login" ? "register" : "login") }}>
              <Text style={tw`text-black`}>
                {page == "login" ? "Sign up" : "Login"}
              </Text>
            </TouchableWithoutFeedback>
          </Text>
        </ScrollView>
      </View>
    </>
  )
}

export default AuthLayout;
