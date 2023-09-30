import { create } from "zustand";

export type Plan = {
  title: "arcade" | "advanced" | "pro";
  value: number;
};

export type Addons = {
  title: "Online Services" | "Larger Storage" | "Customizable Profile";
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
      addons: Addons[];
      selectedAddons: string[];
    };
  };
  userSelectedOptions: Record<string, any>;
  currentStep: number;
  setUserInfo: (step: string, data: any) => void;
  goToNextStep: (incrementBy: number) => void;
  goToPreviousStep: (decrementBy: number) => void;
  changePlanType: (planType: string) => void;
  selectAddons: (planType: string) => void;
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
      addons: [
        { title: "Online Services", value: 1 },
        { title: "Larger Storage", value: 2 },
        { title: "Customizable Profile", value: 2 },
      ],
      selectedAddons: [],
    },
  },
  userSelectedOptions: {},
  currentStep: 0,
  setUserInfo: (step, data) => {
    set((state) => ({
      userInitialInfo: {
        ...state.userInitialInfo,
        [step]: data,
      },
    }));
  },
  goToNextStep: (incrementBy: number) => {
    set((state) => ({
      currentStep: state.currentStep + incrementBy,
    }));
  },
  goToPreviousStep: (decrementBy: number) => {
    set((state) => ({
      currentStep: state.currentStep - decrementBy,
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
  selectAddons: (addon: string) => {
    set((prevState) => ({
      userInitialInfo: {
        ...prevState.userInitialInfo,
        step3: {
          ...prevState.userInitialInfo.step3,
          selectedAddons: [
            ...prevState.userInitialInfo.step3.selectedAddons,
            addon,
          ],
        },
      },
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
          addons: [
            { title: "Online Services", value: 1 },
            { title: "Larger Storage", value: 2 },
            { title: "Customizable Profile", value: 2 },
          ],
          selectedAddons: [],
        },
      },
      userSelectedOptions: {},
      currentStep: 1,
    });
  },
}));

export default useStore;
