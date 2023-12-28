import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewPassword, Otp, SelectContact } from "../screens/auth/forgot_password";

const Stack = createNativeStackNavigator();

const ForgotPasswordNavigators = (): React.ReactNode => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="select_contact" component={SelectContact} />
      <Stack.Screen name="otp" component={Otp} />
      <Stack.Screen name="new_password" component={NewPassword} />
    </Stack.Navigator>
  )
}

export default ForgotPasswordNavigators;
