import { View, Text, TouchableWithoutFeedback } from "react-native";
import { AuthLayout } from "../../layouts";
import { AuthInput } from "../../components/atoms";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import tw from 'twrnc';

const Register = ({ navigation }: { navigation: any }): React.ReactNode => {
  return (
    <AuthLayout page="register" navigation={navigation}>
      <View style={[tw`flex mb-9 flex-col gap-y-4 w-[100%] mx-auto`]}>
        <AuthInput
          icon={<FontAwesome5 name="user-alt" size={20} color="#A0A0A0" />}
          placeholder="Username"
          secureTextEntry={false}
        />

        <AuthInput
          icon={<MaterialCommunityIcons name="lock" size={24} color="#A0A0A0" />}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <TouchableWithoutFeedback>
        <Text style={[tw`bg-black mb-4 text-white text-center rounded-full py-4 mx-auto w-[97%] text-xl`, {fontFamily: "satoshi-bold"}]}>
          SIGN UP
        </Text>
      </TouchableWithoutFeedback>
    </AuthLayout>
  )
}

export default Register;
