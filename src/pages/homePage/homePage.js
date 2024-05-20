import React from "react";

//components
import HeaderComponent from "../../components/header/headerComponent";
import AboutmeComponent from "../../components/aboutmeComponent/aboutmeComponent";

function homePage() {
  return (
    <main>
      <HeaderComponent />
      <AboutmeComponent />
    </main>
  );
}

export default homePage;
