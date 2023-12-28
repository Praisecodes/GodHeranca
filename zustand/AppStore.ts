import { create } from "zustand";

interface IOnboardingState {
  onboarded: boolean,
  setOnBoarded: (value: boolean) => void,
}

export const useOnBoardingState = create<IOnboardingState>()((set) => ({
  onboarded: false,
  setOnBoarded: (value: boolean) => set(() => ({ onboarded: value })),
}))