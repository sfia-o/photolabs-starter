import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ hasFavourites, topics, onTopicSelect }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicSelect={onTopicSelect} />
      <FavBadge hasFavourites={hasFavourites} />
    </div>
  );
};

export default TopNavigation;
