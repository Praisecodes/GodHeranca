import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useOnBoardingState } from './zustand/AppStore';
import OnBoarding from './screens/onboarding';
import { useEffect } from 'react';
import { getData } from './utils/async_storage';

export default function App() {
  const onboarded = useOnBoardingState((state) => state.onboarded);
  const setOnBoarded = useOnBoardingState((state) => state.setOnBoarded);

  useEffect(() => {
    const runFirst = async () => {
      let onBoard = await getData('onboarded');
      console.log(onBoard);

      if (onBoard == null) {
        setOnBoarded(false);
        return;
      }

      setOnBoarded(true);
    }

    runFirst();
  }, []);

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
