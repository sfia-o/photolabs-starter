import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicSelect }) => {
  return (
    <div className="top-nav-bar__topic-list">
      <ul className="topic-list__item">
        {topics.map((topic) => (
          <li key={topic.id}>
            <TopicListItem
              onTopicSelect={onTopicSelect}
              id={topic.id}
              title={topic.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
