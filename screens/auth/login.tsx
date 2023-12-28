import { StatusBar } from "expo-status-bar";
import { Text, TouchableWithoutFeedback, View } from "react-native"
import tw from "twrnc";
import { AuthLayout } from "../../layouts";
import { AuthInput } from "../../components/atoms";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Login = ({ navigation }: { navigation: any }): React.ReactNode => {
  return (
    <AuthLayout page="login" navigation={navigation}>
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
        <Text style={[tw`bg-black mb-4 text-white text-center rounded-full py-4 mx-auto w-[97%] text-xl`]}>
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
