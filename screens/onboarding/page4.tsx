import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import tw from 'twrnc';

const Page4 = (): React.ReactNode => {
  const image = require('../../public/images/onboarding/page4.png');

  return (
    <View style={[tw`flex-1 flex flex-col`]}>
      <View style={tw`flex-1 pt-10 px-4 flex gap-y-8 items-center justify-center`}>
        <Image
          source={image}
          width={100}
          height={100}
          style={tw``}
        />

        <Text style={[tw`text-2xl`, { fontFamily: "satoshi-bold" }]}>
          Product Delivery
        </Text>
        <Text style={[tw`text-center text-base px-3`, { fontFamily: "satoshi" }]}>
          Lorem ipsum dolor sit amet. Ut maiores voluptate qui doloremque consequuntur in mo
        </Text>
      </View>

      <TouchableWithoutFeedback>
        <Text style={[tw`py-5 mx-auto w-[90%] my-5 rounded-full text-center text-xl bg-[#000] text-white`]}>
          Continue
        </Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Page4;
