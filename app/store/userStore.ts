import { create } from "zustand";

export type Plan = {
  title: "arcade" | "advanced" | "pro"; // Specify the possible values for title
  value: number;
};

type UserState = {
  userInitialInfo: {
    step1: {
      name: string;
      emailAddress: string;
      phoneNumber: string;
    };
    step2: {
      plans: Plan[];
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
  changePlanType: (planType: string) => void;
  changePlanDuration: (isYearly: boolean) => void;
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
      plans: [
        { title: "arcade", value: 9 },
        { title: "advanced", value: 12 },
        { title: "pro", value: 15 },
      ],
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
  changePlanType: (planType: string) => {
    set((prevState) => ({
      userInitialInfo: {
        ...prevState.userInitialInfo,
        step2: {
          ...prevState.userInitialInfo.step2,
          planType: planType,
        },
      },
      userSelectedOptions: prevState.userSelectedOptions,
      currentStep: prevState.currentStep,
    }));
  },
  changePlanDuration: (isYearly: boolean) => {
    set((prevState) => ({
      userInitialInfo: {
        ...prevState.userInitialInfo,
        step2: {
          ...prevState.userInitialInfo.step2,
          isYearly: isYearly,
        },
      },
      userSelectedOptions: prevState.userSelectedOptions,
      currentStep: prevState.currentStep,
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
          plans: [
            { title: "arcade", value: 9 },
            { title: "advanced", value: 12 },
            { title: "pro", value: 15 },
          ],
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
