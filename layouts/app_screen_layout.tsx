import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const AppScreenLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <View style={[tw`flex-1 pt-6 bg-white`]}>
      <ScrollView contentContainerStyle={[tw`min-h-[100%] px-4`]}>
        {children}
      </ScrollView>
    </View>
  )
}

export default AppScreenLayout;
