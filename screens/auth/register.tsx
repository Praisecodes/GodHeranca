import { View, Text } from "react-native";
import { AuthLayout } from "../../layouts";

const Register = ({ navigation }: { navigation: any }): React.ReactNode => {
  return (
    <AuthLayout page="register" navigation={navigation}>
      <Text>
        This is the register screen
      </Text>
    </AuthLayout>
  )
}

export default Register;
