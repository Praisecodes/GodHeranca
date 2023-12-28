import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native"
import tw from "twrnc";

const Login = (): React.ReactNode => {
  return (
    <>
      <StatusBar style="auto" />
      <View style={[tw`flex-1`]}>
        <Text>This is the login screen</Text>
      </View>
    </>
  )
}

export default Login;
