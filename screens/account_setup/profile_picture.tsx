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
  const initialDirection = useSharedValue<"row" | "column" | "column-reverse" | "row-reverse" | undefined>("row");

  useEffect(() => {
    if (setup_info.profilePicture == "") {
      initialWidth.value = withTiming("48%", { duration: 40 });
      initialDirection.value = withTiming("row", { duration: 40 });
      return;
    }

    initialWidth.value = withTiming("100%", { duration: 300 });
    initialDirection.value = withTiming("column-reverse", { duration: 200 });
  }, []);

  const selectAnimatedStyle = useAnimatedStyle(() => ({
    width: initialWidth.value,
    overflow: "hidden",
    color: setup_info.profilePicture == "" ? "white" : "black",
    backgroundColor: setup_info.profilePicture == "" ? "black" : "#E6E6E6"
  }), [setup_info.profilePicture]);

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    display: "flex",
    flexDirection: initialDirection.value,
    width: "100%",
    flexWrap: "wrap-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    rowGap: 4,
    columnGap: 6,
  }), []);

  const skipAnimatedStyle = useAnimatedStyle(() => ({
    width: initialWidth.value,
    overflow: "hidden",
    color: setup_info.profilePicture !== "" ? "white" : "black",
    backgroundColor: setup_info.profilePicture !== "" ? "black" : "#E6E6E6"
  }), [setup_info.profilePicture]);

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

    initialWidth.value = withTiming("100%", { duration: 300 });
    initialDirection.value = withTiming("column-reverse", { duration: 200 });
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

          <Animated.View style={[containerAnimatedStyle]}>
            <TouchableWithoutFeedback onPress={() => { navigation.navigate('address') }}>
              <Animated.Text numberOfLines={1} style={[tw`text-center py-3 text-lg rounded-full`, { fontFamily: "satoshi-bold" }, skipAnimatedStyle]}>
                {setup_info.profilePicture == "" ? "Skip" : "Save And Continue"}
              </Animated.Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={getImageFromDevice}>
              <Animated.Text style={[tw`mx-auto text-center py-3 text-lg rounded-full`, { fontFamily: "satoshi-bold" }, selectAnimatedStyle]}>
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
