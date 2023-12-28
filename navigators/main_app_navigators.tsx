import { useLoggedInState } from "../zustand/AppStore";
import AuthNavigators from "./auth_navigators";
import MainScreensNavigators from "./main_screens_navigators";

const MainAppNavigators = (): React.ReactNode => {
  const loggedIn = useLoggedInState((state) => state.loggedIn);

  return (loggedIn ? (<MainScreensNavigators />) :
    <AuthNavigators />
  )
}

export default MainAppNavigators;
