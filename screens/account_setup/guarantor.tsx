import React, { useState } from 'react'
import AccountSetupLayout from '../../layouts/account_setup_layout';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import tw from "twrnc";
import { SetupInput } from '../../components/atoms';
import DropDownPicker from 'react-native-dropdown-picker';

const Guarantor = ({ navigation }: { navigation: any }): React.ReactNode => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const [relationship, setRelationship] = useState<any>(null);
  const [options, setOptions] = useState<any[]>([
    { label: "Father", value: "father" },
    { label: "Mother", value: "mother" },
    { label: "Brother", value: "brother" },
    { label: "Sister", value: "sister" },
    { label: "Friend", value: "friend" },
    { label: "Collegue", value: "collegue" },
  ]);
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
