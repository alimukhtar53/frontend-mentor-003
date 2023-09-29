import useStore from "app/store/userStore";
import React from "react";

function Summary() {
  const { userInitialInfo } = useStore();
  console.log(userInitialInfo);
  return <div>Step4</div>;
}

export default Summary;
