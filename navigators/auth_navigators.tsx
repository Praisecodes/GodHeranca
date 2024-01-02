import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register } from "../screens/auth";
import ForgotPasswordNavigators from "./forgot_password_navigators";
import AccoutSetupNavigators from "./account_setup_navigators";
import MainAppNavigators from "./main_app_navigators";

const Stack = createNativeStackNavigator();

const AuthNavigators = (): React.ReactNode => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="forgot_password" component={ForgotPasswordNavigators} />
          <Stack.Screen options={{ animation: "fade_from_bottom" }} name="account_setup" component={AccoutSetupNavigators} />
          <Stack.Screen options={{ animation: "simple_push" }} name="main" component={MainAppNavigators} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default AuthNavigators;
