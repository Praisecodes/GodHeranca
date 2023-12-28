import { useLoggedInState } from "../zustand/AppStore";
import AuthNavigators from "./auth_navigators";

const MainAppNavigators = (): React.ReactNode => {
  const loggedIn = useLoggedInState((state) => state.loggedIn);

  return (loggedIn ? (<></>) :
    <AuthNavigators />
  )
}

export default MainAppNavigators;
