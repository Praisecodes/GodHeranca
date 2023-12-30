import React, { useState } from 'react'
import { View, TouchableWithoutFeedback, Text, Image, ImageURISource } from 'react-native';
import AccountSetupLayout from '../../layouts/account_setup_layout';
import tw from "twrnc";

interface IVehicles {
  name: string;
  title: string;
  image: ImageURISource;
}

const VehicleSelection = ({ navigation }: { navigation: any }): React.ReactNode => {
  const [selected, setSelected] = useState<string>("");
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

  return (
    <AccountSetupLayout navigation={navigation}>
      <View style={[tw`flex flex-col gap-y-6 justify-between h-[100%]`]}>
        <View style={[tw`flex flex-col gap-y-12 mt-12`]}>
          <View style={[tw`flex flex-row flex-wrap gap-y-5 justify-between items-center`]}>
            {vehicles.map((vehicle, index) => (
              <TouchableWithoutFeedback key={index} onPress={() => { setSelected(vehicle.name) }}>
                <View style={[tw`w-[45%]`]}>
                  <View style={[tw`w-[100%] h-[9rem] ${(vehicle.name === selected) && "border-[2.4px] border-black"} flex items-center justify-center bg-white rounded-lg`, { elevation: 9 }]}>
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

        <TouchableWithoutFeedback onPress={() => { if (selected == "bicycle") { return; }; navigation.navigate("drivers_license") }}>
          <Text style={[tw`bg-black text-white text-center py-4 rounded-full text-lg`, { fontFamily: "satoshi-bold" }]}>
            CONTINUE
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </AccountSetupLayout>
  )
}

export default VehicleSelection;
