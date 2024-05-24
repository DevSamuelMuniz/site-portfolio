import React from "react";

//components
import HeaderComponent from "../../components/header/headerComponent";
import AboutmeComponent from "../../components/aboutmeComponent/aboutmeComponent";
import MyServiceComponents from "../../components/myServiceComponents/myServiceComponents";
import WorkExpComponent from "../../components/workExpComponent/workExpComponent";

function homePage() {
  return (
    <main>
      <HeaderComponent />
      <AboutmeComponent />
      <MyServiceComponents />
      <WorkExpComponent />
    </main>
  );
}

export default homePage;
