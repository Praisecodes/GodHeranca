import React, { useEffect, useState } from 'react'
import AccountSetupLayout from '../../layouts/account_setup_layout';
import { DimensionValue, Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import tw from "twrnc";
import { FontAwesome5 } from '@expo/vector-icons';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';
import { SuccessModal } from '../../components/templates/modals';
import { useAccountSetupState } from '../../zustand/AccountSetupStore';
import Animated, { AnimatableValue, SharedValue, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const ProfilePicture = ({ navigation }: { navigation: any; }): React.ReactNode => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const setup_info = useAccountSetupState((state) => state.setup_info);
  const updateSetupInfo = useAccountSetupState((state) => state.updateSetupInfo);

  const initialWidth = useSharedValue<DimensionValue | SharedValue<AnimatableValue> | undefined>("48%");

  useEffect(() => {
    if (setup_info.profilePicture == "") {
      initialWidth.value = withTiming("48%", { duration: 40 });
      // selectInitialWidth.value = withTiming("48%", { duration: 40 });
      return;
    }

    initialWidth.value = withTiming("100%", { duration: 300 });
    // selectInitialWidth.value = withTiming("100%", { duration: 300 });
  }, []);

  const selectAnimatedStyle = useAnimatedStyle(() => ({
    width: initialWidth.value,
    overflow: "hidden",
  }), []);

  const skipAnimatedStyle = useAnimatedStyle(() => ({
    width: initialWidth.value,
    overflow: "hidden",
  }), []);

  const toggleModal = () => setModalOpen(!modalOpen);

  const getImageFromDevice = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images
    });

    if (result.canceled) {
      return;
    }

    updateSetupInfo({
      ...setup_info,
      profilePicture: result.assets[0].uri
    });
    // skipInitialWidth.value = withTiming("0%", { duration: 300 });
    initialWidth.value = withTiming("100%", { duration: 300 });
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

            {setup_info.profilePicture == "" && (
              <View style={[tw`mx-auto rounded-100 p-16 bg-[#F3F3F3]`]}>
                <FontAwesome5 name="user-alt" size={64} color="#A7A7A7" />
              </View>
            )}

            {setup_info.profilePicture !== "" && (
              <Image source={{ uri: setup_info.profilePicture }} width={300} height={300} style={[tw`rounded-full mx-auto w-[13rem] h-[13rem]`]} />
            )}

            {setup_info.profilePicture !== "" && (
              <Text style={[tw`text-base text-center`, { fontFamily: "satoshi" }]}>
                Click on the "Change" button to select new image
              </Text>
            )}
          </View>

          <Animated.View style={[tw`flex w-[100%] flex-row ${setup_info.profilePicture == "" ? "justify-between gap-x-4" : "justify-center"} items-center`,]}>
            <TouchableWithoutFeedback onPress={() => { navigation.navigate('address') }}>
              <Animated.Text numberOfLines={1} style={[tw`text-black text-center bg-[#E6E6E6] py-3 text-lg rounded-full`, { fontFamily: "satoshi-bold" }, skipAnimatedStyle]}>
                Skip
              </Animated.Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={getImageFromDevice}>
              <Animated.Text style={[tw`text-white mx-auto text-center bg-black py-3 text-lg rounded-full`, { fontFamily: "satoshi-bold" }, selectAnimatedStyle]}>
                {setup_info.profilePicture == "" ? "Choose" : "Change"}
              </Animated.Text>
            </TouchableWithoutFeedback>
          </Animated.View>
        </View>
      </AccountSetupLayout>
    </>
  )
}

export default ProfilePicture;
