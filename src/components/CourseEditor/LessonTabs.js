import React from "react";
import {connect} from "react-redux";
import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../../common/constants";
// import {updateLesson} from "../../services/LessonService";
import LessonService from "../../services/LessonService"

// const LessonTabs = ({lessons}) =>

    // <div className="row">
    //     {lessons && lessons.map(lesson =>
    //         <div
    //             key={lesson._id}
    //             className="col-2">
    //             <h3>
    //                 {lesson.title}
    //             </h3>
    //         </div>
    //     )}
    // </div>

// const stateToPropertyMapper = (state) => ({
//     lessons: state.lessons.lessons
// })
//
//
// export default connect(stateToPropertyMapper)
// (LessonTabs)



class LessonTabs extends React.Component {

    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.moduleId !== prevProps.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId)
        }
    }

    state = {
        selectedLessonId: '',
        editingLessonId: '',
        lesson: {
            title: '',
            _id: ''
        }
    }

    render() {
        return(
            <ul>
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                        <li key={lesson._id}>
                            {lesson.title}
                            <button onClick={() => this.props.deleteLesson(this.props.moduleId)}>-</button>
                        </li>

                    )
                }
                    <button onClick={() => this.props.addLesson(this.props.moduleId)}>+</button>

            </ul>
        )
    }
}



const stateToPropertyMapper = (state) => ({
    lessons: state.lessons.lessons
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findLessonsForModule: (moduleId) =>
       LessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatcher({
                type: 'FIND_LESSONS_FOR_MODULE',
                lessons: lessons
            })),
    updateLesson: async (lesson) => {
        const actualLesson = await LessonService.updateLesson(lesson)
        dispatcher({
            type: 'UPDATE_LESSON',
            lesson: actualLesson,
            lessonId: actualLesson._id
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

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(LessonTabs)