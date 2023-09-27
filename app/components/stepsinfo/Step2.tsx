import useStore from "app/store/userStore";
import React from "react";

function Step2() {
  const { userInitialInfo, setUserInfo } = useStore();
  console.log(userInitialInfo, "step2");

  return <div>Step 2</div>;
}

export default Step2;
