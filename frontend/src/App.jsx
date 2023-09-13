import React from "react";
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const App = () => {

  return (
    <div className="App">
      <nav className="top-nav-bar">
      <TopicList />
      </nav>
      
      <PhotoList/>
    </div>
  );
};

export default App;
