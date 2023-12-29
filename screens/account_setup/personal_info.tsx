import { Text, TouchableWithoutFeedback, View } from "react-native";
import AccountSetupLayout from "../../layouts/account_setup_layout";
import tw from "twrnc";
import { SetupInput } from "../../components/atoms";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const PersonalInfo = ({ navigation }: { navigation: any; }): React.ReactNode => {
  const [typeValue, setTypeValue] = useState<any>(null);
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const [dropDownOptions, setDropDownOptions] = useState<any[]>([
    { label: "Rider", value: "rider" },
    { label: "Buyer", value: "buyer" }
  ]);
  const [dateOfBirth, setDateOfBirth] = useState<string | null>(null);

  const chooseBirthDate = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      mode: "date",
      is24Hour: true,
      onChange: ((event, selectedDate) => {
        if (event.type == "dismissed") {
          // setDateOfBirth(null);
          return;
        }

        // console.log(selectedDate);
        setDateOfBirth(new Date(`${selectedDate}`).toISOString().split('T')[0]);
      }),
      onTouchCancel: (() => { setDateOfBirth(null) })
    })
  }

  return (
    <AccountSetupLayout navigation={navigation}>
      <View style={[tw`h-[100%] flex flex-col justify-between`]}>
        <View>
          <Text style={[tw`text-lg`, { fontFamily: "satoshi-bold" }]}>
            Fill in your details to setup account
          </Text>

          <View style={[tw`mt-9 flex flex-col gap-y-7`]}>
            <SetupInput
              placeholder="Full Name"
            />

            <SetupInput
              placeholder="Email"
              keyboardType="email-address"
            />

            <SetupInput
              placeholder="CPF"
              keyboardType="number-pad"
            />

            <SetupInput
              placeholder="Phone Number"
              keyboardType="phone-pad"
            />

            <DropDownPicker
              open={dropDownOpen}
              value={typeValue}
              setOpen={setDropDownOpen}
              setValue={setTypeValue}
              items={dropDownOptions}
              setItems={setDropDownOptions}
              placeholder="Account Type"
              style={[tw`border-0 bg-[#F6F6F6] text-lg py-4 px-4`]}
              textStyle={[tw`text-lg`, { fontFamily: "satoshi" }]}
            />

            <TouchableWithoutFeedback onPress={() => { chooseBirthDate() }}>
              <Text style={[tw`text-lg py-4 bg-[#F6F6F6] px-4 ${dateOfBirth == null ? "text-[#A5A5A5]" : "text-black"}`, { fontFamily: "satoshi" }]}>
                {dateOfBirth == null ? "Date of birth" : dateOfBirth}
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <TouchableWithoutFeedback>
          <Text style={[tw`text-lg bg-black text-center rounded-full py-4 text-white`, { fontFamily: "satoshi-bold" }]}>
            CONTINUE
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </AccountSetupLayout>
  )
}

export default PersonalInfo;
