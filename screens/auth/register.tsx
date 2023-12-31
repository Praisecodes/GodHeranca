import { View, Text, TouchableWithoutFeedback } from "react-native";
import { AuthLayout } from "../../layouts";
import { AuthInput } from "../../components/atoms";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useState } from "react";
import { password_regex, username_regex } from "../../utils/regex_contants";

const Register = ({ navigation }: { navigation: any }): React.ReactNode => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <AuthLayout page="register" navigation={navigation}>
      <View style={[tw`flex mb-9 flex-col gap-y-4 w-[100%] mx-auto`]}>
        <AuthInput
          icon={<FontAwesome5 name="user-alt" size={20} color="#A0A0A0" />}
          placeholder="Username"
          secureTextEntry={false}
          value={username}
          onChangeText={(text: string) => { setUsername(text) }}
          validation_message="Username Should Not Contain Any Whitespaces"
          valid={true}
        />

        <AuthInput
          icon={<MaterialCommunityIcons name="lock" size={24} color="#A0A0A0" />}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text: string) => { setPassword(text) }}
          valid={true}
          validation_message="Password must be a minimum of 6 characters, contain at least 1 digit, 1 uppercase and lowercase letter"
        />
      </View>

      <TouchableWithoutFeedback>
        <Text style={[tw`bg-black mb-4 text-white text-center rounded-full py-4 mx-auto w-[97%] text-xl`, { fontFamily: "satoshi-bold" }]}>
          SIGN UP
        </Text>
      </TouchableWithoutFeedback>
    </AuthLayout>
  )
}

export default Register;
