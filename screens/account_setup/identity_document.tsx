import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react';
import tw from 'twrnc';
import AccountSetupLayout from '../../layouts/account_setup_layout';
import { Ionicons } from '@expo/vector-icons';
import { useDocumentSelectedState } from '../../zustand/AppStore';
import { ImagePickerResult, MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';
import { DocumentPickerResult, getDocumentAsync } from 'expo-document-picker';
import { SuccessModal } from '../../components/templates/modals';

const IdentityDocument = ({ navigation }: { navigation: any }): React.ReactNode => {
  const selected = useDocumentSelectedState((state) => state.selected);
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);
  const [pdfDoc, setPdfDoc] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const selectDocument = async () => {
    let result: ImagePickerResult | DocumentPickerResult;
    if (selected == "id_card") {
      result = await launchImageLibraryAsync({ mediaTypes: MediaTypeOptions.Images });
      if (result.canceled) {
        return;
      }

      if (frontImage == null) {
        setFrontImage(result.assets[0].uri);
        return;
      }

      if (backImage == null) {
        setBackImage(result.assets[0].uri);
        return;
      }

      return;
    }

    result = await getDocumentAsync({
      type: "application/pdf"
    });

    if (result.canceled) {
      return;
    }

    // console.log(result.assets[0]);
    setPdfDoc(result.assets[0].name.split('.pdf')[0]);
    return;
  }

  const toggleModalOpen = () => setModalOpen(!modalOpen);

  return (
    <>
      <SuccessModal
        onClose={toggleModalOpen}
        open={modalOpen}
        title="Success!!"
        text="You've successfully set up your account. We'll verify your details and send you an email if your account is verified or not!"
      />

      <AccountSetupLayout navigation={navigation}>
        <View style={[tw`flex flex-col h-[100%] justify-between gap-y-5`]}>
          <View style={[tw`${selected == "id_card" ? "mt-10" : "flex-1 items-center justify-center"} flex flex-col gap-y-7`]}>
            <View style={[tw`w-[100%] bg-[#F6F6F6] gap-y-3 py-12 rounded-lg flex flex-col items-center justify-center`]}>
              <Ionicons name="ios-cloud-upload" size={64} color="black" />

              <Text style={[tw`text-lg text-[#A5A5A5] mt-4`, { fontFamily: "satoshi-bold" }]}>
                Upload Your {selected == "id_card" ? "ID Card" : "Document"} Here
              </Text>
              <Text style={[tw`text-sm text-[#D9D9D9]`, { fontFamily: "satoshi" }]}>
                Files supported: {selected == "id_card" ? "JPG, PNG, PDF" : "PDF"}
              </Text>

              <TouchableWithoutFeedback onPress={() => { selectDocument() }}>
                <Text style={[tw`border-2 py-3 px-5 mt-5 text-base rounded-md`, { fontFamily: "satoshi-bold" }]}>
                  Browse Files
                </Text>
              </TouchableWithoutFeedback>
            </View>

            {selected == "id_card" && (
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
            )}

            {selected == "id_card" && (
              <Text style={[tw`text-[#737373] text-base`, { fontFamily: "satoshi" }]}>
                Front and back of your ID card must be clear and captured
              </Text>
            )}

            {selected !== "id_card" && (
              <Text style={[tw`text-[#737373] text-base`, { fontFamily: "satoshi" }]}>
                File Selected: {pdfDoc}
              </Text>
            )}
          </View>

          <TouchableWithoutFeedback onPress={() => { toggleModalOpen() }}>
            <Text style={[tw`bg-black text-white text-center py-4 rounded-full text-lg`, { fontFamily: "satoshi-bold" }]}>
              FINISH
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </AccountSetupLayout>
    </>
  )
}

export default IdentityDocument;
