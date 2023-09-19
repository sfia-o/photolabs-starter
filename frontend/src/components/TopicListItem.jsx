import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, id, onTopicSelect }) => {
  return (
    <div className="topic-list__item">
      <p onClick={() => onTopicSelect(id)}>{title}</p>
    </div>
  );
};

export default TopicListItem;
