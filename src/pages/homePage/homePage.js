import React from "react";

//components
import HeaderComponent from "../../components/header/headerComponent";
import AboutmeComponent from "../../components/aboutmeComponent/aboutmeComponent";
import MyServiceComponents from "../../components/myServiceComponents/myServiceComponents";
import WorkExpComponent from "../../components/workExpComponent/workExpComponent";
import MeetMeComponent from "../../components/meetMeComponent/meetMeComponent";

function homePage() {
  return (
    <main>
      <HeaderComponent />
      <AboutmeComponent />
      <MyServiceComponents />
      <WorkExpComponent />
      <MeetMeComponent />
    </main>
  );
}

export default homePage;
