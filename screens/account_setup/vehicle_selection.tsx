import React, { useEffect, useState } from 'react'
import { View, TouchableWithoutFeedback, Text, Image, ImageURISource } from 'react-native';
import AccountSetupLayout from '../../layouts/account_setup_layout';
import tw from "twrnc";
import { useAccountSetupState } from '../../zustand/AccountSetupStore';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface IVehicles {
  name: string;
  title: string;
  image: ImageURISource;
}

const VehicleSelection = ({ navigation }: { navigation: any }): React.ReactNode => {
  const [vehicles] = useState<IVehicles[]>([
    {
      "name": "bicycle",
      "title": "Bicycle",
      "image": require("../../assets/images/vehicles/bicycle.png"),
    },
    {
      "name": "electric_bicycle",
      "title": "Electric Bicycle",
      "image": require("../../assets/images/vehicles/electric_bicycle.png"),
    },
    {
      "name": "scooter",
      "title": "Scooter",
      "image": require("../../assets/images/vehicles/scooter.png"),
    },
    {
      "name": "car",
      "title": "Car",
      "image": require("../../assets/images/vehicles/car.png"),
    },
  ]);

  const setupInfo = useAccountSetupState((state) => state.setup_info);
  const updateSetupInfo = useAccountSetupState((state) => state.updateSetupInfo);

  const initialOpacity = useSharedValue(0.7);

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: initialOpacity.value,
  }), []);

  useEffect(() => {
    if (setupInfo.vehicle == "") {
      initialOpacity.value = withTiming(0.7, { duration: 100 });
      return;
    }

    initialOpacity.value = withTiming(1, { duration: 100 });
  }, [setupInfo.vehicle]);

  return (
    <AccountSetupLayout navigation={navigation}>
      <View style={[tw`flex flex-col gap-y-6 justify-between h-[100%]`]}>
        <View style={[tw`flex flex-col gap-y-12 mt-12`]}>
          <View style={[tw`flex flex-row flex-wrap gap-y-5 justify-between items-center`]}>
            {vehicles.map((vehicle, index) => (
              <TouchableWithoutFeedback key={index} onPress={() => { updateSetupInfo({ ...setupInfo, vehicle: vehicle.name }) }}>
                <View style={[tw`w-[45%]`]}>
                  <View style={[tw`w-[100%] h-[9rem] ${(vehicle.name === setupInfo.vehicle) ? "border-[2.4px] border-black" : ""} flex items-center justify-center bg-white rounded-lg`, { elevation: 9 }]}>
                    <Image source={vehicle.image} />
                  </View>
                  <Text style={[tw`text-base py-1 text-center`, { fontFamily: "satoshi-bold" }]}>
                    {vehicle.title}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>

          <Text style={[tw`text-base`, { fontFamily: "satoshi" }]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <TouchableWithoutFeedback
          onPress={() => {
            if (setupInfo.vehicle == "") return;

            if (setupInfo.vehicle == "bicycle") {
              navigation.navigate("select_identity_document");
              return;
            }

            navigation.navigate("drivers_license");
          }
          }
        >
          <Animated.Text style={[tw`bg-black text-white text-center py-4 rounded-full text-lg`, { fontFamily: "satoshi-bold" }, opacityStyle]}>
            CONTINUE
          </Animated.Text>
        </TouchableWithoutFeedback>
      </View>
    </AccountSetupLayout>
  )
}

export default VehicleSelection;
