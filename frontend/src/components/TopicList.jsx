import React from "react";
import TopicListItem from "./TopicListItem";
import topicsData from '../mocks/topics';
import "../styles/TopicList.scss";

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      <ul className="topic-list__item">
        {topicsData.map((topic) => (
          <li key={topic.id}>
            <TopicListItem  title={topic.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
