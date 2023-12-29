import { Image, ImageURISource, Text, TouchableWithoutFeedback, View } from "react-native";
import { ForgotPasswordLayout } from "../../../layouts";
import tw from "twrnc";
import { AuthInput } from "../../../components/atoms";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NewPassword = ({ navigation }: { navigation: any; }): React.ReactNode => {
  const image: ImageURISource = require("../../../assets/images/new.png");

  return (
    <ForgotPasswordLayout title="Create New Password" navigation={navigation}>
      <View style={[tw`w-[100%] h-[100%] flex flex-col py-3 justify-between`]}>
        <View>
          <Image source={image} width={506} height={493} style={[tw`mx-auto`]} />
          <Text style={[tw`text-lg py-6`, { fontFamily: "satoshi-bold" }]}>
            Create your new password
          </Text>

          <View style={[tw`mt-9 flex flex-col gap-y-7`]}>
            <AuthInput
              placeholder="New Password"
              secureTextEntry={true}
              icon={<MaterialCommunityIcons name="lock" size={24} color="#A0A0A0" />}
            />

            <AuthInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              icon={<MaterialCommunityIcons name="lock" size={24} color="#A0A0A0" />}
            />
          </View>
        </View>

        <TouchableWithoutFeedback>
          <Text style={[tw`bg-black text-white py-4 rounded-full text-lg text-center`, { fontFamily: "satoshi-bold" }]}>
            CONTINUE
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </ForgotPasswordLayout>
  )
}

export default NewPassword;
