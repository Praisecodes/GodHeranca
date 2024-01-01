import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import AccountSetupLayout from '../../layouts/account_setup_layout';
import tw from "twrnc";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useAccountSetupState } from '../../zustand/AccountSetupStore';

const SelectIdentityDocument = ({ navigation }: { navigation: any; }): React.ReactNode => {
  const initialBoarder = useSharedValue<number>(0);
  const initialScale = useSharedValue<number>(0);
  const [documentTypes] = useState<any[]>([
    {
      "name": "id_card",
      "title": "ID Card",
    },
    {
      "name": "student_visa",
      "title": "Student Visa",
    },
    {
      "name": "permanent_residence",
      "title": "Permanent Residence",
    },
    {
      "name": "protocol",
      "title": "Protocol",
    },
  ]);
  const setupInfo = useAccountSetupState((state) => state.setup_info);
  const updateSetupInfo = useAccountSetupState((state) => state.updateSetupInfo);

  const initialOpacity = useSharedValue(0.7);

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: initialOpacity.value,
  }), []);

  useEffect(() => {
    if (setupInfo.documentType == "") {
      initialOpacity.value = withTiming(0.7, { duration: 100 });
      return;
    }

    initialOpacity.value = withTiming(1, { duration: 100 });
  }, [setupInfo.documentType]);

  return (
    <AccountSetupLayout navigation={navigation}>
      <View style={[tw`flex h-[100%] flex-col justify-between`]}>
        <View style={[tw`mt-3`]}>
          <Text style={[tw`text-lg mb-5`, { fontFamily: "satoshi-bold" }]}>
            Choose a document to upload
          </Text>

          <View style={[tw`flex flex-col gap-y-8`]}>
            {documentTypes.map((documentType, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => {
                  initialBoarder.value = withTiming(0, { duration: 0 });
                  initialScale.value = withTiming(0.5, { duration: 0 });
                  updateSetupInfo({
                    ...setupInfo,
                    documentType: documentType.name
                  });
                  // setSelected(documentType.name);
                  initialBoarder.value = withTiming(2, { duration: 50 });
                  initialScale.value = withTiming(1, { duration: 50 });
                }}
              >
                <Animated.View style={[
                  tw`flex flex-row items-center rounded-lg py-1 px-4 bg-[#F1F1F1]`,
                  useAnimatedStyle(() => ({
                    borderColor: "black",
                    borderWidth: documentType.name == setupInfo.documentType ? initialBoarder.value : 0,
                  }), [setupInfo.documentType])
                ]}
                >
                  <Text style={[tw`flex-1 text-black text-lg py-4`, { fontFamily: "satoshi-bold" }]}>
                    {documentType.title}
                  </Text>

                  <View style={[tw`w-[1.7rem] p-1 h-[1.7rem] border-2 rounded-full`]}>
                    <Animated.View
                      style={[
                        tw`bg-black rounded-full w-[100%] h-[100%]`,
                        useAnimatedStyle(() => ({
                          transform: [
                            { scale: documentType.name == setupInfo.documentType ? initialScale.value : 0 }
                          ]
                        }), [setupInfo.documentType])
                      ]}
                    />
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>

        <TouchableWithoutFeedback onPress={() => {
          if (setupInfo.documentType == "") {
            return;
          }
          
          navigation.navigate("identity_document")
        }}
        >
          <Animated.Text style={[tw`bg-black text-white text-center py-4 rounded-full text-lg`, { fontFamily: "satoshi-bold" }, opacityStyle]}>
            CONTINUE
          </Animated.Text>
        </TouchableWithoutFeedback>
      </View>
    </AccountSetupLayout>
  )
}

export default SelectIdentityDocument;
