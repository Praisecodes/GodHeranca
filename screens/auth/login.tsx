import { StatusBar } from "expo-status-bar";
import { Text, TouchableWithoutFeedback, View } from "react-native"
import tw from "twrnc";
import { AuthLayout } from "../../layouts";
import { AuthInput } from "../../components/atoms";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";
import { password_regex, username_regex } from "../../utils/regex_contants";

const Login = ({ navigation }: { navigation: any }): React.ReactNode => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <AuthLayout page="login" navigation={navigation}>
      <View style={[tw`flex mb-9 flex-col gap-y-4 w-[100%] mx-auto`]}>
        <AuthInput
          icon={<FontAwesome5 name="user-alt" size={20} color="#A0A0A0" />}
          placeholder="Username"
          secureTextEntry={false}
          value={username}
          onChangeText={(text: string) => { setUsername(text) }}
          validation_message="Username Should Not Contain Any Whitespaces"
          valid={username_regex.test(username)}
        />

        <AuthInput
          icon={<MaterialCommunityIcons name="lock" size={24} color="#A0A0A0" />}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text: string) => { setPassword(text) }}
          valid={password_regex.test(password)}
          validation_message="Password must be a minimum of 6 characters, contain at least 1 digit, 1 uppercase and lowercase letter"
        />
      </View>

      <TouchableWithoutFeedback onPress={() => { navigation.navigate("account_setup", { screen: "personal_info" }) }}>
        <Text style={[tw`bg-black mb-4 text-white text-center rounded-full py-4 mx-auto w-[97%] text-xl`, { fontFamily: "satoshi-bold" }]}>
          LOG IN
        </Text>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => { navigation.navigate('forgot_password') }}>
        <Text style={[tw`text-base text-center`, { fontFamily: "satoshi-bold" }]}>
          Forgot Password?
        </Text>
      </TouchableWithoutFeedback>
    </AuthLayout>
  )
}

export default Login;
