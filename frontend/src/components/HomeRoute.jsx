import React from "react";
import PhotoList from "./PhotoList";
import TopNavigationBar from "./TopNavigationBar";
import ".././styles/HomeRoute.scss";

const HomeRoute = () => {
  return (
    <div className="App">
      <TopNavigationBar className="top-nav-bar" />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
