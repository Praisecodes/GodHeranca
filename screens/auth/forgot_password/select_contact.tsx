import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { ForgotPasswordLayout } from "../../../layouts";
import tw from "twrnc";
import DummyContacts from "../../../json/dummy_contact.json";
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

const SelectContact = ({ navigation }: { navigation: any }): React.ReactNode => {
  const image = require('../../../assets/images/forgot.png');
  const [selected, setSelected] = useState<string>("");

  return (
    <ForgotPasswordLayout navigation={navigation} title="Forgot Password">
      <Image source={image} style={[tw`w-[100%] mt-3`]} width={416} height={379} />
      <Text style={[tw`text-base py-2 mt-3`, { fontFamily: "satoshi-bold" }]}>
        Select which contact details you wish to use in
        resetting your password
      </Text>

      <View style={[tw`mt-10 flex flex-col gap-y-7`]}>
        {DummyContacts.map((contact, index) => (
          <TouchableWithoutFeedback key={index} onPress={() => { setSelected(contact.contact) }}>
            <View style={[tw`py-4 px-5 border-2 ${selected == contact.contact ? "border-black" : "border-[#DEDEDE]"} flex flex-row items-center rounded-lg`]}>
              <View style={[tw`bg-[#EDEDED] rounded-full p-5`]}>
                {(contact.type == "phone") && (<MaterialIcons name="sms" size={28} color="black" />)}

                {(contact.type == "email") && (<MaterialIcons name="mail" size={28} color="black" />)}
              </View>

              <View style={[tw`px-3 flex flex-col gap-y-1`]}>
                <Text style={[tw`text-base text-[#A0A0A0]`, { fontFamily: "satoshi-bold" }]}>
                  {contact.type == "phone" ? "Via Sms" : "Via Email"}
                </Text>

                <Text style={[tw`text-lg`, { fontFamily: "satoshi-bold" }]}>
                  {contact.type == "phone" ?
                    `${contact.contact.substring(0, 4) + "****" + contact.contact.substring(8,)}`
                    :
                    contact.contact.split('@')[0].substring(0, 5) + '******' + "@" + contact.contact.split('@')[1]
                  }
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}

        <TouchableWithoutFeedback onPress={() => { navigation.navigate('otp') }}>
          <Text style={[tw`bg-black text-white text-center py-4 rounded-full text-lg`, { fontFamily: "satoshi-bold" }]}>
            CONTINUE
          </Text>
        </TouchableWithoutFeedback>
      </View>

    </ForgotPasswordLayout>
  )
}

export default SelectContact;
