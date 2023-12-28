import { Text } from "react-native";
import { ForgotPasswordLayout } from "../../../layouts";

const SelectContact = ({ navigation }: { navigation: any }): React.ReactNode => {
  return (
    <ForgotPasswordLayout navigation={navigation} title="Forgot Password">
      <Text>
        Hi
      </Text>

    </ForgotPasswordLayout>
  )
}

export default SelectContact;
