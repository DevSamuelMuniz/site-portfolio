import React from "react";

//components
import HeaderComponent from "../../components/header/headerComponent";
import AboutmeComponent from "../../components/aboutmeComponent/aboutmeComponent";
import MyServiceComponents from "../../components/myServiceComponents/myServiceComponents";

function homePage() {
  return (
    <main>
      <HeaderComponent />
      <AboutmeComponent />
      <MyServiceComponents />
    </main>
  );
}

export default homePage;
