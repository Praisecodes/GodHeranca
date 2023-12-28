import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useOnBoardingState } from './zustand/AppStore';
import OnBoarding from './screens/onboarding';
import { useEffect } from 'react';
import { getData } from './utils/async_storage';
import { useFonts } from 'expo-font';

export default function App() {
  const onboarded = useOnBoardingState((state) => state.onboarded);
  const setOnBoarded = useOnBoardingState((state) => state.setOnBoarded);

  const [fontLoaded] = useFonts({
    'satoshi': require('./assets/fonts/Satoshi-Regular.otf'),
    'satoshi-bold': require('./assets/fonts/Satoshi-Bold.otf'),
  });

  useEffect(() => {
    const runFirst = async () => {
      let onBoard = await getData('onboarded');
      // console.log(onBoard);

      if (onBoard == null || onBoard !== "true") {
        setOnBoarded(false);
        return;
      }

      setOnBoarded(true);
    }

    runFirst();
  }, []);

  if (!fontLoaded) {
    return null;
  }

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
