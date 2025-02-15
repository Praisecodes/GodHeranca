import { create } from "zustand";

interface IOnboardingState {
  onboarded: boolean,
  setOnBoarded: (value: boolean) => void,
}

interface ILoggedInState {
  loggedIn: boolean,
  setLoggedIn: (value: boolean) => void,
}

interface IDocumentSelectedState {
  selected: string,
  setSelected: (value: string) => void,
}

interface IAccoutSetupState {
  accountSetup: boolean,
  setAccountSetup: (value: boolean) => void,
}

export const useOnBoardingState = create<IOnboardingState>()((set) => ({
  onboarded: true,
  setOnBoarded: (value: boolean) => set(() => ({ onboarded: value })),
}));

export const useLoggedInState = create<ILoggedInState>()((set) => ({
  loggedIn: false,
  setLoggedIn: (value: boolean) => set(() => ({ loggedIn: value })),
}));

export const useAccountSetupState = create<IAccoutSetupState>()((set) => ({
  accountSetup: false,
  setAccountSetup: (value: boolean) => set(() => ({ accountSetup: value })),
}));

export const useDocumentSelectedState = create<IDocumentSelectedState>()((set) => ({
  selected: "",
  setSelected: (value: string) => set(() => ({ selected: value })),
}))
