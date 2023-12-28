import { create } from "zustand";

interface IOnboardingState {
  onboarded: boolean,
  setOnBoarded: (value: boolean) => void,
}

interface ILoggedInState {
  loggedIn: boolean,
  setLoggedIn: (value: boolean) => void,
}

export const useOnBoardingState = create<IOnboardingState>()((set) => ({
  onboarded: true,
  setOnBoarded: (value: boolean) => set(() => ({ onboarded: value })),
}));

export const useLoggedInState = create<ILoggedInState>()((set) => ({
  loggedIn: false,
  setLoggedIn: (value: boolean) => set(() => ({ loggedIn: value })),
}));
