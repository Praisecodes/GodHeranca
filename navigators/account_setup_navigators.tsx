import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Guarantor, PersonalInfo, ProfilePicture, Address, VehicleSelection, DriversLicense, SelectIdentityDocument, IdentityDocument } from "../screens/account_setup";

const Stack = createNativeStackNavigator();

const AccoutSetupNavigators = (): React.ReactNode => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="personal_info" component={PersonalInfo} />
        <Stack.Screen name="profile_picture" component={ProfilePicture} />
        <Stack.Screen name="address" component={Address} />
        <Stack.Screen name="guarantor" component={Guarantor} />
        <Stack.Screen name="vehicle_selection" component={VehicleSelection} />
        <Stack.Screen name="drivers_license" component={DriversLicense} />
        <Stack.Screen name="select_identity_document" component={SelectIdentityDocument} />
        <Stack.Screen name="identity_document" component={IdentityDocument} />
      </Stack.Navigator>
    </>
  )
}

export default AccoutSetupNavigators;
