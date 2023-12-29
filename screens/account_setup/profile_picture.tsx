import React from 'react'
import AccountSetupLayout from '../../layouts/account_setup_layout';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import tw from "twrnc";
import { FontAwesome5 } from '@expo/vector-icons';

const ProfilePicture = ({ navigation }: { navigation: any; }): React.ReactNode => {
  return (
    <AccountSetupLayout navigation={navigation}>
      <View style={[tw`h-[100%] flex flex-col gap-y-6 justify-between`]}>
        <View style={[tw`mt-9 flex flex-col gap-y-16`]}>
          <Text style={[tw`mx-auto text-xl`, { fontFamily: "satoshi-bold" }]}>
            Upload a profile picture
          </Text>

          <TouchableWithoutFeedback onPress={() => { }}>
            <View style={[tw`mx-auto rounded-100 p-16 bg-[#F3F3F3]`]}>
              <FontAwesome5 name="user-alt" size={64} color="#A7A7A7" />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={[tw`flex flex-row justify-between gap-x-4 items-center`]}>
          <TouchableWithoutFeedback>
            <Text style={[tw`text-black flex-1 text-center bg-[#E6E6E6] py-4 text-xl rounded-full`, { fontFamily: "satoshi-bold" }]}>
              Skip
            </Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <Text style={[tw`text-white flex-1 text-center bg-black py-4 text-xl rounded-full`, { fontFamily: "satoshi-bold" }]}>
              Continue
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </AccountSetupLayout>
  )
}

export default ProfilePicture;
