import { Text, TouchableWithoutFeedback, View } from "react-native";
import { ForgotPasswordLayout } from "../../../layouts";
import tw from "twrnc";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const Otp = ({ navigation }: { navigation: any; }): React.ReactNode => {
  return (
    <ForgotPasswordLayout title="Forgot Password" navigation={navigation}>
      <View style={[tw`flex-1 w-[100%] flex flex-col justify-between`]}>
        <View style={[tw`mt-10`]}>
          <Text style={[tw`text-center text-base`, {fontFamily: "satoshi-bold"}]}>
            Code Has Been Sent To Contact
          </Text>
          <OTPInputView
            style={tw`w-[90%] h-[200px] mx-auto`}
            pinCount={4}
            autoFocusOnLoad
            onCodeFilled={(code: string) => {
              console.log(code);
            }}
            secureTextEntry={false}
            codeInputFieldStyle={tw`border-2 h-[90px] w-[70px] text-xl text-black`}
          />
        </View>

        <TouchableWithoutFeedback>
          <Text style={[tw`bg-black text-white py-4 rounded-full text-xl text-center`, { fontFamily: "satoshi-bold" }]}>
            Verify
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </ForgotPasswordLayout>
  )
}

export default Otp;
