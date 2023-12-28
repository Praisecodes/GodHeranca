import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useOnBoardingState } from './zustand/AppStore';
import OnBoarding from './screens/onboarding';

export default function App() {
  const onboarded = useOnBoardingState((state) => state.onboarded);
  const setOnBoarded = useOnBoardingState((state) => state.setOnBoarded);

  return (!onboarded ? (<OnBoarding />) :
    <View style={styles.container}>
      <Text>This is an ecommerce app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
