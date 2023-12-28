import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import tw from 'twrnc';

const Page2 = (): React.ReactNode => {
  const image = require('../../public/images/onboarding/page2.png');

  return (
    <View style={tw`flex-1 flex flex-col`}>
      <View style={tw`flex-1 pt-10 px-4 flex gap-y-8 items-center justify-center`}>
        <Image
          source={image}
          width={100}
          height={100}
          style={tw``}
        />

        <Text style={[tw`text-2xl`, { fontFamily: "satoshi-bold" }]}>
          Find Favorite Items
        </Text>
        <Text style={[tw`text-center text-base px-3`, {fontFamily: "satoshi"}]}>
          Lorem ipsum dolor sit amet. Ut maiores voluptate qui doloremque consequuntur in mo
        </Text>
      </View>

      <View style={[tw`w-[100%] flex items-end`]}>
        <TouchableWithoutFeedback>
          <Text style={[tw`py-5 px-16 text-xl bg-[#FFD763] text-white`]}>
            Next
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default Page2;
