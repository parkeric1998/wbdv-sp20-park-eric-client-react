import React from "react";
import LessonService from "../../services/LessonService";
import {LESSONS_API_URL, LESSONS_TOPICS_API_URL, MODULES_LESSONS_API_URL} from "../../common/constants";
import {connect} from "react-redux";
import TopicService from "../../services/TopicService";
import {Link} from "react-router-dom";

class TopicPills extends React.Component {

    componentDidMount() {
        // this.props.findTopicsForLesson(this.props.topicId)
        this.props.findAllTopics()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.topicId !== prevProps.topicId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }

    render() {
        return (
            <ul >
                {
                    this.props.topics && this.props.topics.map(topic =>
                        <li className="nav-item"
                            key={topic._id}>
                            <Link to={`/course-editor/${this.props.courseId}/modules/${this.props.moduleId}/lessons/${this.props.lessonId}/topics/${topic._id}`}>
                                {topic.title}
                            </Link>
                            {/*<button onClick={() => this.props.deleteLesson(this.props.moduleId)}>-</button>*/}

                        </li>
                    )
                }
                <button onClick={() => this.props.addTopic(this.props.lessonId)}>+</button>
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    topics: state.topics.topics
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findTopicsForLesson: (topicId) =>
        TopicService.findTopicsForLesson(topicId)
            .then(topics => dispatcher({
                type: 'FIND_TOPICS_FOR_LESSONS',
                topics: topics
            })),
    updateTopic: async (topic) => {
        const actualTopic = await TopicService.updateTopic(topic)
        dispatcher({
            type: 'UPDATE_Topic',
            topic: actualTopic,
            topicId: actualTopic._id
        })
    },
    addTopic: (lessonId) =>
        fetch(LESSONS_TOPICS_API_URL(lessonId), {
            method: 'POST',
            body: JSON.stringify({title: 'New Topic'}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualTopic =>
                dispatcher({
                    type: 'CREATE_TOPIC',
                    topic: actualTopic
                })),

    // deleteLesson: (lessonId) =>
    //     fetch(`${LESSONS_API_URL}/${lessonId}`, {
    //         method: 'DELETE'
    //     }).then(response => response.json())
    //         .then(status =>
    //             dispatcher({
    //                 type: 'DELETE_LESSON',
    //                 lessonId: lessonId
    //             })),
    // findAllLessons: () =>
    //     fetch(LESSONS_API_URL)
    //         .then(response => response.json())
    //         .then(lessons =>
    //             dispatcher({
    //                 type: 'FIND_ALL_LESSONS',
    //                 lessons: lessons
    //             })
    //         )
    findAllTopics: () =>
        fetch("http://localhost:8080/api/topics")
            .then(res=>res.json())
            .then(topics=>dispatcher({
                type: "SET_TOPICS",
                topics: topics
                }))
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(TopicPills)

// export default TopicPills