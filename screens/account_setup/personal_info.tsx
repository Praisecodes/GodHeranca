import { Text, TouchableWithoutFeedback, View } from "react-native";
import AccountSetupLayout from "../../layouts/account_setup_layout";
import tw from "twrnc";
import { SetupInput } from "../../components/atoms";
import DropDownPicker from "react-native-dropdown-picker";
import { useEffect, useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useAccountSetupState } from "../../zustand/AccountSetupStore";
import { cpf_regex, email_regex, fullname_regex, phone_number_regex } from "../../utils/regex_contants";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const PersonalInfo = ({ navigation }: { navigation: any; }): React.ReactNode => {
  const initialOpacity = useSharedValue(0.7);
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const [dropDownOptions, setDropDownOptions] = useState<any[]>([
    { label: "Rider", value: "rider" },
    { label: "Buyer", value: "buyer" }
  ]);
  const [dateOfBirth, setDateOfBirth] = useState<string | null>("");

  const setup_info = useAccountSetupState((state) => state.setup_info);
  const updateSetupInfo = useAccountSetupState((state) => state.updateSetupInfo);

  const [typeValue, setTypeValue] = useState<any>(setup_info.accountType);

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: initialOpacity.value
  }), []);

  const chooseBirthDate = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      mode: "date",
      is24Hour: true,
      onChange: ((event, selectedDate) => {
        if (event.type == "dismissed") {
          return;
        }

        updateSetupInfo({
          ...setup_info,
          dateOfBirth: new Date(`${selectedDate}`).toISOString().split('T')[0]
        });
        setDateOfBirth(new Date(`${selectedDate}`).toISOString().split('T')[0]);
      }),
      onTouchCancel: (() => { setDateOfBirth("") })
    })
  }

  useEffect(() => {
    // console.log(setup_info);

    if (!fullname_regex.test(setup_info.fullName) || !email_regex.test(setup_info.email) || !cpf_regex.test(setup_info.cpf) || !phone_number_regex.test(setup_info.phoneNumber) || setup_info.dateOfBirth == "") {
      initialOpacity.value = withTiming(0.7, { duration: 100 });
      return;
    }

    initialOpacity.value = withTiming(1, { duration: 100 });
  }, [setup_info]);

  useEffect(() => {
    updateSetupInfo({
      ...setup_info,
      accountType: typeValue
    });
  }, [typeValue]);

  return (
    <AccountSetupLayout navigation={navigation}>
      <View style={[tw`h-[100%] gap-y-6 flex flex-col justify-between`]}>
        <View>
          <Text style={[tw`text-lg`, { fontFamily: "satoshi-bold" }]}>
            Fill in your details to setup account
          </Text>

          <View style={[tw`mt-9 flex flex-col gap-y-7`]}>
            <SetupInput
              placeholder="Full Name"
              value={setup_info.fullName}
              validation_message="Enter A Valid Name"
              valid={fullname_regex.test(setup_info.fullName)}
              onTextChange={(text: string) => {
                updateSetupInfo({
                  ...setup_info,
                  fullName: text
                })
              }}
            />

            <SetupInput
              placeholder="Email"
              keyboardType="email-address"
              value={setup_info.email}
              validation_message="Enter A Valid Email"
              valid={email_regex.test(setup_info.email)}
              onTextChange={(text: string) => {
                updateSetupInfo({
                  ...setup_info,
                  email: text
                })
              }}
            />

            <SetupInput
              placeholder="CPF"
              keyboardType="number-pad"
              value={setup_info.cpf.toString()}
              valid={cpf_regex.test(setup_info.cpf)}
              validation_message="Please Enter Your CPF"
              onTextChange={(text: string) => {
                updateSetupInfo({
                  ...setup_info,
                  cpf: text
                })
              }}
            />

            <SetupInput
              placeholder="Phone Number"
              keyboardType="phone-pad"
              validation_message="Enter A Valid Phone Number"
              valid={phone_number_regex.test(setup_info.phoneNumber)}
              value={setup_info.phoneNumber}
              onTextChange={(text: string) => {
                updateSetupInfo({
                  ...setup_info,
                  phoneNumber: text
                })
              }}
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
              <Text style={[tw`text-lg py-4 bg-[#F6F6F6] px-4 ${setup_info.dateOfBirth == "" ? "text-[#A5A5A5]" : "text-black"}`, { fontFamily: "satoshi" }]}>
                {setup_info.dateOfBirth == "" ? "Date of birth" : setup_info.dateOfBirth}
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <TouchableWithoutFeedback
          onPress={() => {
            if (!fullname_regex.test(setup_info.fullName) || !email_regex.test(setup_info.email) || !cpf_regex.test(setup_info.cpf) || !phone_number_regex.test(setup_info.phoneNumber) || setup_info.dateOfBirth == "") {
              return;
            }

            navigation.navigate("profile_picture");
          }}
        >
          <Animated.Text style={[tw`text-lg bg-black text-center rounded-full py-4 text-white`, { fontFamily: "satoshi-bold" }, opacityStyle]}>
            CONTINUE
          </Animated.Text>
        </TouchableWithoutFeedback>
      </View>
    </AccountSetupLayout>
  )
}

export default PersonalInfo;
