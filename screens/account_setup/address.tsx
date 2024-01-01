import React, { useEffect } from 'react'
import AccountSetupLayout from '../../layouts/account_setup_layout';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import tw from "twrnc";
import { SetupInput } from '../../components/atoms';
import { useAccountSetupState } from '../../zustand/AccountSetupStore';
import { fullText_regex, postal_code_regex, text_regex, username_regex } from '../../utils/regex_contants';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const Address = ({ navigation }: { navigation: any; }): React.ReactNode => {
  const setupInfo = useAccountSetupState((state) => state.setup_info);
  const updateSetupInfo = useAccountSetupState((state) => state.updateSetupInfo);

  const initialOpacity = useSharedValue(0.7);

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: initialOpacity.value
  }), []);

  useEffect(() => {
    if (!text_regex.test(setupInfo.state) || !text_regex.test(setupInfo.city) || !fullText_regex.test(setupInfo.address) || !postal_code_regex.test(setupInfo.postalCode)) {
      initialOpacity.value = withTiming(0.7, { duration: 100 });
      return;
    }

    initialOpacity.value = withTiming(1, { duration: 100 });
  }, [setupInfo]);

  return (
    <AccountSetupLayout navigation={navigation}>
      <View style={[tw`flex flex-col gap-y-6 justify-between h-[100%]`]}>
        <View style={[tw`flex flex-col gap-y-9 mt-5`]}>
          <View style={[tw`flex flex-col gap-y-2`]}>
            <Text style={[tw`text-xl px-1`, { fontFamily: "satoshi-bold" }]}>
              State
            </Text>
            <SetupInput
              placeholder='Select State'
              value={setupInfo.state}
              onTextChange={(text: string) => {
                updateSetupInfo({
                  ...setupInfo,
                  state: text
                })
              }}
              valid={text_regex.test(setupInfo.state)}
              validation_message='Enter A Valid State'
            />
          </View>

          <View style={[tw`flex flex-col gap-y-2`]}>
            <Text style={[tw`text-xl px-1`, { fontFamily: "satoshi-bold" }]}>
              City
            </Text>
            <SetupInput
              placeholder='Select City'
              value={setupInfo.city}
              onTextChange={(text: string) => {
                updateSetupInfo({
                  ...setupInfo,
                  city: text
                })
              }}
              valid={text_regex.test(setupInfo.city)}
              validation_message='Enter A Valid City'
            />
          </View>

          <View style={[tw`flex flex-col gap-y-2`]}>
            <Text style={[tw`text-xl px-1`, { fontFamily: "satoshi-bold" }]}>
              Address
            </Text>
            <SetupInput
              placeholder='Stret Address'
              value={setupInfo.address}
              onTextChange={(text: string) => {
                updateSetupInfo({
                  ...setupInfo,
                  address: text
                })
              }}
              valid={fullText_regex.test(setupInfo.address)}
              validation_message='Enter A Valid Address'
            />
          </View>

          <View style={[tw`flex flex-col gap-y-2`]}>
            <Text style={[tw`text-xl px-1`, { fontFamily: "satoshi-bold" }]}>
              Postal Code
            </Text>
            <SetupInput
              placeholder='000000'
              keyboardType="number-pad"
              value={setupInfo.postalCode}
              onTextChange={(text: string) => {
                updateSetupInfo({
                  ...setupInfo,
                  postalCode: text
                })
              }}
              valid={postal_code_regex.test(setupInfo.postalCode)}
              validation_message='Enter A Valid Postal Code'
            />
          </View>
        </View>

        <TouchableWithoutFeedback onPress={() => {
          if (!text_regex.test(setupInfo.state) || !text_regex.test(setupInfo.city) || !fullText_regex.test(setupInfo.address) || !postal_code_regex.test(setupInfo.postalCode)) {
            return;
          }

          navigation.navigate('guarantor')
        }}>
          <Animated.Text style={[tw`bg-black text-white text-center py-4 rounded-full text-lg`, { fontFamily: "satoshi-bold" }, opacityStyle]}>
            CONTINUE
          </Animated.Text>
        </TouchableWithoutFeedback>

      </View>
    </AccountSetupLayout>
  )
}

export default Address;

