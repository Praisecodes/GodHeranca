import React, { useState } from 'react'
import AccountSetupLayout from '../../layouts/account_setup_layout';
import { View, TouchableWithoutFeedback, Text, Image } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';
import { SuccessModal } from '../../components/templates/modals';

const DriversLicense = ({ navigation }: { navigation: any }): React.ReactNode => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const selectLicense = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images
    });

    if (result.canceled) {
      return;
    }

    // console.log(result);
    if (frontImage == null) {
      setFrontImage(result.assets[0].uri);
      return;
    }

    if (backImage == null) {
      setBackImage(result.assets[0].uri);
      return;
    }
  }

  const toggleModalOpen = () => setModalOpen(!modalOpen);

  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);

  return (
    <>
      <SuccessModal
        onClose={toggleModalOpen}
        open={modalOpen}
        title="Success!!"
        text="You've successfully set up your account. We'll verify your details and send you an email if your account is verified or not!"
      />

      <AccountSetupLayout navigation={navigation}>
        <View style={[tw`flex flex-col gap-y-6 justify-between h-[100%]`]}>
          <View style={[tw`mt-8 flex flex-col gap-y-7`]}>
            <View style={[tw`w-[100%] bg-[#F6F6F6] gap-y-3 py-12 rounded-lg flex flex-col items-center justify-center`]}>
              <Ionicons name="ios-cloud-upload" size={64} color="black" />

              <Text style={[tw`text-lg text-[#A5A5A5] mt-4`, { fontFamily: "satoshi-bold" }]}>
                Upload Your Driver's License Here
              </Text>
              <Text style={[tw`text-sm text-[#D9D9D9]`, { fontFamily: "satoshi" }]}>
                Files supported: JPG, PNG, PDF
              </Text>

              <TouchableWithoutFeedback onPress={() => { selectLicense() }}>
                <Text style={[tw`border-2 py-3 px-5 mt-5 text-base rounded-md`, { fontFamily: "satoshi-bold" }]}>
                  Browse Files
                </Text>
              </TouchableWithoutFeedback>
            </View>

            <View style={[tw`flex flex-row gap-x-4`]}>
              {frontImage == null && (
                <View style={[tw`h-[5rem] w-[5rem] bg-[#EDEDED] rounded-md`]} />
              )}

              {frontImage !== null && (
                <Image source={{ uri: frontImage }} style={[tw`w-[5rem] h-[5rem] rounded-md`]} />
              )}

              {backImage == null && (
                <View style={[tw`h-[5rem] w-[5rem] bg-[#EDEDED] rounded-md`]} />
              )}

              {backImage !== null && (
                <Image source={{ uri: backImage }} style={[tw`w-[5rem] h-[5rem] rounded-md`]} />
              )}
            </View>

            <Text style={[tw`text-[#737373] text-base`, { fontFamily: "satoshi" }]}>
              Front and back of your driver's license must be clear and captured
            </Text>
          </View>

          <TouchableWithoutFeedback onPress={() => { toggleModalOpen() }}>
            <Text style={[tw`bg-black text-white text-center py-4 rounded-full text-lg`, { fontFamily: "satoshi-bold" }]}>
              CONTINUE
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </AccountSetupLayout>
    </>
  )
}

export default DriversLicense;
