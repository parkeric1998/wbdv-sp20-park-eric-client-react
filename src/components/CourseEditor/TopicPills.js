import React from "react";

const TopicPills = ({topics}) =>
    <ul className="nav nav-pills wbdv-topic-pill-list">
        {topics.map(topic =>
            <li className="nav-item">
                <a className="nav-link wbdv-topic-pill" href="#">
                    {topic.title}
                </a>
            </li>
        )}
    </ul>

export default TopicPills