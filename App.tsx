import { useLoggedInState, useOnBoardingState } from './zustand/AppStore';
import OnBoarding from './screens/onboarding';
import { useEffect } from 'react';
import { getData } from './utils/async_storage';
import { useFonts } from 'expo-font';
import { MainAppNavigators } from './navigators';

export default function App() {
  const onboarded = useOnBoardingState((state) => state.onboarded);
  const setOnBoarded = useOnBoardingState((state) => state.setOnBoarded);
  const setLoggedIn = useLoggedInState((state) => state.setLoggedIn);

  const [fontLoaded] = useFonts({
    'satoshi': require('./assets/fonts/Satoshi-Regular.otf'),
    'satoshi-bold': require('./assets/fonts/Satoshi-Bold.otf'),
  });

  useEffect(() => {
    const runFirst = async () => {
      let onBoard = await getData('onboarded');
      let loggedIn = await getData('loggedIn');
      // console.log(onBoard);

      if (onBoard == null || onBoard !== "true") {
        setOnBoarded(false);
        setLoggedIn(false);
        return;
      }

      setOnBoarded(true);

      if (loggedIn == null || loggedIn !== "true") {
        setLoggedIn(false);
        return;
      }

      setLoggedIn(true);
    }

    runFirst();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (!onboarded ? (<OnBoarding />) :
    <MainAppNavigators />
  );
}
