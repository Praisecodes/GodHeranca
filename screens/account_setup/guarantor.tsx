import React, { useEffect, useState } from 'react'
import AccountSetupLayout from '../../layouts/account_setup_layout';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import tw from "twrnc";
import { SetupInput } from '../../components/atoms';
import DropDownPicker from 'react-native-dropdown-picker';
import { useAccountSetupState } from '../../zustand/AccountSetupStore';
import { fullname_regex, phone_number_regex } from '../../utils/regex_contants';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const Guarantor = ({ navigation }: { navigation: any }): React.ReactNode => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const [relationship, setRelationship] = useState<any>("");
  const [options, setOptions] = useState<any[]>([
    { label: "Father", value: "father" },
    { label: "Mother", value: "mother" },
    { label: "Brother", value: "brother" },
    { label: "Sister", value: "sister" },
    { label: "Friend", value: "friend" },
    { label: "Collegue", value: "collegue" },
  ]);

  const initialOpacity = useSharedValue(0.7);

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: initialOpacity.value,
  }), []);

  const setupInfo = useAccountSetupState((state) => state.setup_info);
  const updateSetupInfo = useAccountSetupState((state) => state.updateSetupInfo);

  useEffect(() => {
    updateSetupInfo({
      ...setupInfo,
      guarantorRelationship: relationship
    });
  }, [relationship]);

  useEffect(() => {
    if (!fullname_regex.test(setupInfo.guarantorName) || !phone_number_regex.test(setupInfo.guarantorPhoneNumber) || setupInfo.guarantorRelationship == "") {
      initialOpacity.value = withTiming(0.7, { duration: 100 });
      return;
    }

    initialOpacity.value = withTiming(1, { duration: 100 });
  }, [setupInfo]);

  return (
    <AccountSetupLayout navigation={navigation}>
      <View style={[tw`flex flex-col gap-y-6 justify-between h-[100%]`]}>
        <View style={[tw`flex flex-col gap-y-10 mt-5`]}>
          <View style={[tw`flex flex-col gap-y-2`]}>
            <Text style={[tw`text-xl px-1`, { fontFamily: "satoshi-bold" }]}>
              Guarantor Name
            </Text>
            <SetupInput
              placeholder='Guarantor Name'
              value={setupInfo.guarantorName}
              onTextChange={(text) => {
                updateSetupInfo({
                  ...setupInfo,
                  guarantorName: text
                })
              }}
              validation_message='Enter A Valid Name'
              valid={fullname_regex.test(setupInfo.guarantorName)}
            />
          </View>

          <View style={[tw`flex flex-col gap-y-2`]}>
            <Text style={[tw`text-xl px-1`, { fontFamily: "satoshi-bold" }]}>
              Guarantor Phone Number
            </Text>
            <SetupInput
              placeholder='Guarantor Phone Number'
              value={setupInfo.guarantorPhoneNumber}
              keyboardType="phone-pad"
              onTextChange={(text) => {
                updateSetupInfo({
                  ...setupInfo,
                  guarantorPhoneNumber: text
                })
              }}
              validation_message='Enter A Valid Phone Number'
              valid={phone_number_regex.test(setupInfo.guarantorPhoneNumber)}
            />
          </View>

          <View style={[tw`flex flex-col gap-y-2`]}>
            <Text style={[tw`text-xl px-1`, { fontFamily: "satoshi-bold" }]}>
              Who is the Guarantor to you?
            </Text>
            <DropDownPicker
              open={dropDownOpen}
              value={relationship}
              setOpen={setDropDownOpen}
              setValue={setRelationship}
              items={options}
              setItems={setOptions}
              placeholder="Guarantor Relationship"
              style={[tw`border-0 bg-[#F6F6F6] text-lg py-4 px-5`]}
              textStyle={[tw`text-lg`, { fontFamily: "satoshi" }]}
            />
          </View>
        </View>

        <TouchableWithoutFeedback onPress={() => { navigation.navigate("vehicle_selection") }}>
          <Animated.Text style={[tw`bg-black text-white text-center py-4 rounded-full text-lg`, { fontFamily: "satoshi-bold" }, opacityStyle]}>
            CONTINUE
          </Animated.Text>
        </TouchableWithoutFeedback>

      </View>
    </AccountSetupLayout>
  )
}

export default Guarantor;
