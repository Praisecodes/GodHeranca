import { View } from "react-native";
import AccountSetupLayout from "../../layouts/account_setup_layout";
import tw from "twrnc";

const PersonalInfo = ({ navigation }: { navigation: any; }): React.ReactNode => {
  return (
    <AccountSetupLayout navigation={navigation}>
      <View style={[tw`h-[100%]`]}>

      </View>
    </AccountSetupLayout>
  )
}

export default PersonalInfo;
