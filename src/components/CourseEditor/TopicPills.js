import React from "react";
import LessonService from "../../services/LessonService";
import {LESSONS_API_URL, LESSONS_TOPICS_API_URL, MODULES_LESSONS_API_URL} from "../../common/constants";
import {connect} from "react-redux";
import TopicService from "../../services/TopicService";
import {Link} from "react-router-dom";

class TopicPills extends React.Component {

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.lessonId !== this.props.lessonId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }

    render() {
        return (
            <ul >
                {
                    this.props.topics && this.props.topics.map(topic =>
                        <li className="nav-item"
                            key={topic.id}>
                            <Link to={`/course-editor/${this.props.courseId}/modules/${this.props.moduleId}/lessons/${this.props.lessonId}/topics/${topic.id}`}>
                                {topic.title}
                            </Link>
                            <button onClick={() => this.props.deleteTopic(this.topicId)}>-</button>

                        </li>
                    )
                }
                <button onClick={() => this.props.createTopic(this.props.lessonId,{title: "New Topic"})}>+</button>

            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    topics: state.topics.topics
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findTopicsForLesson: (lessonId) =>
        fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`)
            .then(response => response.json())
            .then(topics => dispatcher({
                type: 'FIND_ALL_TOPICS',
                topics: topics
            })),

    createTopic: (lessonId, newTopic) =>
        fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`, {
            method: 'POST',
            body: JSON.stringify(newTopic),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(newTopic => dispatcher({
                type: 'CREATE_TOPIC',
                topic: newTopic
            })),


    deleteTopic: (topicId) =>
        fetch(`http://localhost:8080/api/topics/${topicId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status =>
                dispatcher({
                    type: 'DELETE_TOPIC',
                    topicId: topicId
                })),



    // findAllTopics: () =>
    //     fetch("http://localhost:8080/api/topics")
    //         .then(res=>res.json())
    //         .then(topics=>dispatcher({
    //             type: "SET_TOPICS",
    //             topics: topics
    //             }))
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(TopicPills)

// export default TopicPills