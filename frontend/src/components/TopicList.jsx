import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      <ul className="topic-list__item">
        {topics.map((topic) => (
          <li key={topic.id}>
            <TopicListItem  title={topic.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
