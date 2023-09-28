import useStore from "app/store/userStore";
import React from "react";

function Step3() {
  const { userInitialInfo } = useStore();
  console.log(userInitialInfo);

  return <div>Step 3</div>;
}

export default Step3;
