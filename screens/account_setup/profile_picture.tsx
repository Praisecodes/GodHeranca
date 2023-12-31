import React, { useState } from 'react'
import AccountSetupLayout from '../../layouts/account_setup_layout';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import tw from "twrnc";
import { FontAwesome5 } from '@expo/vector-icons';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';
import { SuccessModal } from '../../components/templates/modals';

const ProfilePicture = ({ navigation }: { navigation: any; }): React.ReactNode => {
  const [image, setImage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const getImageFromDevice = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images
    });

    if (result.canceled) {
      return;
    }

    setImage(result.assets[0].uri);
  }

  return (
    <>
      <SuccessModal
        onClose={toggleModal}
        open={modalOpen}
        text='Your account is ready to use. you will be redirected to your home page in a few seconds'
        title='Congratulations!'
      />

      <AccountSetupLayout navigation={navigation}>
        <View style={[tw`h-[100%] flex flex-col gap-y-6 justify-between`]}>
          <View style={[tw`mt-9 flex flex-col gap-y-16`]}>
            <Text style={[tw`mx-auto text-xl`, { fontFamily: "satoshi-bold" }]}>
              Upload a profile picture
            </Text>

            {image == null && (<TouchableWithoutFeedback onPress={() => { getImageFromDevice() }}>
              <View style={[tw`mx-auto rounded-100 p-16 bg-[#F3F3F3]`]}>
                <FontAwesome5 name="user-alt" size={64} color="#A7A7A7" />
              </View>
            </TouchableWithoutFeedback>)}

            {image !== null && (
              <TouchableWithoutFeedback onPress={getImageFromDevice}>
                <Image source={{ uri: image }} width={300} height={300} style={[tw`rounded-full mx-auto w-[13rem] h-[13rem]`]} />
              </TouchableWithoutFeedback>
            )}

            {image !== null && (
              <Text style={[tw`text-base text-center`, { fontFamily: "satoshi" }]}>
                Click on the image to select new image
              </Text>
            )}
          </View>

          <View style={[tw`flex flex-row justify-between gap-x-4 items-center`]}>
            <TouchableWithoutFeedback onPress={() => { navigation.navigate('address') }}>
              <Text style={[tw`text-black flex-1 text-center bg-[#E6E6E6] py-3 text-lg rounded-full`, { fontFamily: "satoshi-bold" }]}>
                Skip
              </Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={toggleModal}>
              <Text style={[tw`text-white flex-1 text-center bg-black py-3 text-lg rounded-full`, { fontFamily: "satoshi-bold" }]}>
                Continue
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </AccountSetupLayout>
    </>
  )
}

export default ProfilePicture;
