import React from "react";

// Components
import HeaderComponent from "../../components/header/headerComponent";
import AboutmeComponent from "../../components/aboutmeComponent/aboutmeComponent";
import MyServiceComponents from "../../components/myServiceComponents/myServiceComponents";
import WorkExpComponent from "../../components/workExpComponent/workExpComponent";
import MeetMeComponent from "../../components/meetMeComponent/meetMeComponent";
import Footer from "../../components/footer/footer";

function homePage() {
  return (
    <main>
      <HeaderComponent />
      <section id="section1">
        <AboutmeComponent />
      </section>
      <section id="section2">
        <MyServiceComponents />
      </section>
      <section id="section3">
        <WorkExpComponent />
      </section>
      <section id="section4">
        <MeetMeComponent />
      </section>
      <section id="section5">
        <Footer />
      </section>
    </main>
  );
}

export default homePage;
