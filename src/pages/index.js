import React from "react";
import { HeroBg, VideoBg } from "../components/Navbar/NavbarElements";
import Video from "../videos/video.mp4";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      {/* <h1>Home</h1> */}
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
    </div>
  );
};

export default Home;
