import { create } from "zustand";

type UserState = {
  userInitialInfo: {
    step1: {
      name: string;
      emailAddress: string;
      phoneNumber: string;
    };
    step2: {
      planType: string;
      isYearly: boolean;
    };
    step3: {
      onlineServices: number;
      largerStorage: number;
      customizableProfile: number;
    };
  };
  userSelectedOptions: Record<string, any>;
  currentStep: number;
  setUserInfo: (step: string, data: any) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  resetForm: () => void;
};

const useStore = create<UserState>((set) => ({
  userInitialInfo: {
    step1: {
      name: "",
      emailAddress: "",
      phoneNumber: "",
    },
    step2: {
      planType: "arcade",
      isYearly: false,
    },
    step3: {
      onlineServices: 1,
      largerStorage: 2,
      customizableProfile: 2,
    },
  },
  userSelectedOptions: {},
  currentStep: 1,
  setUserInfo: (step, data) => {
    set((state) => ({
      userInitialInfo: {
        ...state.userInitialInfo,
        [step]: data,
      },
    }));
  },
  goToNextStep: () => {
    set((state) => ({
      currentStep: state.currentStep + 1,
    }));
  },
  goToPreviousStep: () => {
    set((state) => ({
      currentStep: state.currentStep - 1,
    }));
  },
  resetForm: () => {
    set({
      userInitialInfo: {
        step1: {
          name: "",
          emailAddress: "",
          phoneNumber: "",
        },
        step2: {
          planType: "arcade",
          isYearly: false,
        },
        step3: {
          onlineServices: 1,
          largerStorage: 2,
          customizableProfile: 2,
        },
      },
      userSelectedOptions: {},
      currentStep: 1,
    });
  },
}));

export default useStore;
