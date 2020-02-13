import React from "react";
import LessonService from "../../services/LessonService";
import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../../common/constants";
import {connect} from "react-redux";
import TopicService from "../../services/TopicService";

const TopicPills = ({topics}) =>
    <ul className="nav nav-pills wbdv-topic-pill-list">
        {topics.map(topic =>
            <li className="nav-item"
            key ={topic._id}>
                <a className="nav-link wbdv-topic-pill" href="#">
                    {topic.title}
                </a>
                <button onClick={() => this.props.deleteLesson(this.props.moduleId)}>-</button>
                <button onClick={() => this.props.addLesson(this.props.moduleId)}>+</button>
            </li>

        )}
    </ul>

// const stateToPropertyMapper = (state) => ({
//     topics: state.topics.topics
// })

const dispatcherToPropertyMapper = (dispatcher) => ({
    findTopicsForLesson: (topicId) =>
        TopicService.findTopicsForLesson(topicId)
            .then(topics => dispatcher({
                type: 'FIND_TOPICS_FOR_LESSON',
                topics: topics
            })),
    updateTopic: async (topic) => {
        const actualTopic = await TopicService.updateTopic(topic)
        dispatcher({
            type: 'UPDATE_Topic',
            lesson: actualTopic,
            lessonId: actualTopic._id
        })
    },
    addLesson: (moduleId) =>
        fetch(MODULES_LESSONS_API_URL(moduleId), {
            method: 'POST',
            body: JSON.stringify({title: 'New Lesson'}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualLesson =>
                dispatcher({
                    type: 'CREATE_LESSON',
                    lesson: actualLesson
                })),

    deleteLesson: (lessonId) =>
        fetch(`${LESSONS_API_URL}/${lessonId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status =>
                dispatcher({
                    type: 'DELETE_LESSON',
                    lessonId: lessonId
                })),
    findAllLessons: () =>
        fetch(LESSONS_API_URL)
            .then(response => response.json())
            .then(lessons =>
                dispatcher({
                    type: 'FIND_ALL_LESSONS',
                    lessons: lessons
                })
            )
})

// export default connect(
//     stateToPropertyMapper,
//     dispatcherToPropertyMapper
// )(TopicPills)

export default TopicPills