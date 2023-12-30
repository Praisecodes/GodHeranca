import React from 'react'
import AccountSetupLayout from '../../layouts/account_setup_layout';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import tw from "twrnc";
import { SetupInput } from '../../components/atoms';

const Guarantor = ({ navigation }: { navigation: any }): React.ReactNode => {
  return (
    <AccountSetupLayout navigation={navigation}>
      <View style={[tw`flex flex-col gap-y-6 justify-between h-[100%]`]}>
        <View style={[tw`flex flex-col gap-y-9 mt-5`]}>
          <View style={[tw`flex flex-col gap-y-2`]}>
            <Text style={[tw`text-xl px-1`, { fontFamily: "satoshi-bold" }]}>
              Guarantor Name
            </Text>
            <SetupInput
              placeholder='Guarantor Name'
            />
          </View>

          <View style={[tw`flex flex-col gap-y-2`]}>
            <Text style={[tw`text-xl px-1`, { fontFamily: "satoshi-bold" }]}>
              Guarantor Phone Number
            </Text>
            <SetupInput
              placeholder='Guarantor Phone Number'
            />
          </View>

          {/* <View style={[tw`flex flex-col gap-y-2`]}>
            <Text style={[tw`text-xl px-1`, { fontFamily: "satoshi-bold" }]}>
              Address
            </Text>
            <SetupInput
              placeholder='Stret Address'
            />
          </View>

          <View style={[tw`flex flex-col gap-y-2`]}>
            <Text style={[tw`text-xl px-1`, { fontFamily: "satoshi-bold" }]}>
              Postal Code
            </Text>
            <SetupInput
              placeholder='000000'
              keyboardType="number-pad"
            />
          </View> */}
        </View>

        <TouchableWithoutFeedback>
          <Text style={[tw`bg-black text-white text-center py-4 rounded-full text-lg`, { fontFamily: "satoshi-bold" }]}>
            CONTINUE
          </Text>
        </TouchableWithoutFeedback>

      </View>
    </AccountSetupLayout>
  )
}

export default Guarantor;
