import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native"
import tw from "twrnc";
import { AuthLayout } from "../../layouts";

const Login = ({ navigation }: { navigation: any }): React.ReactNode => {
  return (
    <AuthLayout page="login" navigation={navigation}>
      <Text>This is the login screen</Text>
    </AuthLayout>
  )
}

export default Login;
