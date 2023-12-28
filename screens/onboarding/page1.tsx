import { ImageBackground, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import tw from 'twrnc';

const Page1 = (): React.ReactNode => {
  const backgroundImage = require('../../assets/images/onboarding/woman.jpg');
  return (
    <ImageBackground source={backgroundImage} style={tw`flex-1 flex flex-col justify-end`}>
      <View style={tw`bg-[#00000033] p-7 max-h-[40%] w-[100%]`}>
        <Text style={[tw`text-white text-3xl`, { fontFamily: "satoshi" }]}>
          Welcome To
        </Text>
        <Text style={[tw`text-6xl pt-2 text-white`, { fontFamily: "satoshi" }]}>
          GodHeranca
        </Text>

        <Text style={[tw`text-white text-base py-3`, { fontFamily: "satoshi" }]}>
          The best e-commerce app  of the century
          for your daliy needs
        </Text>

        <TouchableWithoutFeedback onPress={() => { console.log("Clicked!!") }}>
          <Text style={[tw`bg-black text-white text-center py-4 text-lg mt-6 font-bold rounded-full`, { fontFamily: "satoshi" }]}>
            Get Started
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  )
}

export default Page1;
