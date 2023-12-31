import { create } from "zustand";

interface IAccountSetupDetails {
  fullName: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  accountType: "rider" | "buyer";
  dateOfBirth: string;
  profilePicture?: string;
  state: string;
  city: string;
  address: string;
  postalCode: string;
  guarantorName?: string;
  guarantorPhoneNumber?: string;
  guarantorRelationship?: string;
  vehicle?: string;
  documentType?: string;
  documentUrl?: string;
  driversLicenseFront?: string;
  driversLicenseBack?: string;
}

interface IAccountSetupState {
  setup_info: IAccountSetupDetails;
  updateSetupInfo: (setupInfo: IAccountSetupDetails) => void;
}

export const useAccountSetupState = create<IAccountSetupState>()((set) => ({
  setup_info: {
    fullName: "",
    email: "",
    cpf: "",
    phoneNumber: "",
    accountType: "buyer",
    dateOfBirth: "",
    profilePicture: "",
    state: "",
    city: "",
    address: "",
    postalCode: "",
    guarantorName: "",
    guarantorPhoneNumber: "",
    guarantorRelationship: "",
    vehicle: "",
    documentType: "",
    documentUrl: "",
    driversLicenseBack: "",
    driversLicenseFront: ""
  },
  updateSetupInfo: (setupInfo: IAccountSetupDetails) => set((existingState) => ({
    setup_info: { ...setupInfo }
  })),
}));
