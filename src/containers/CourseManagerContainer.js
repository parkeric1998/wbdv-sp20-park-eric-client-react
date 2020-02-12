import React from "react";
import CourseTableComponent from "../components/CourseList/CourseTableComponent";
import CourseGridComponent from "../components/CourseList/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse, findCourseById, updateCourse} from "../services/CourseService";
import CourseManagerHeader from "../components/CourseList/CourseManagerHeader";
import './CourseManagerContainer.css';
import CourseListComponent from "../components/CourseList/CourseListComponent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: 'New Course',
        courses: [
            {_id: '123', title: 'Course A', date: 'test123'},
            {_id: '234', title: 'Course B', date: 'tester098'}
        ]
    }
    componentDidMount = async () => {
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })

    }

    toggle = () =>
        this.setState(prevState => {
            if (prevState.layout === 'table') {
                return ({
                    layout: 'grid'
                })
            } else {
                return ({
                    layout: 'table'
                })
            }
        })
    deleteCourse = (course) =>
        deleteCourse(course._id)
            .then(status => {
                this.setState(prevState => {
                    return ({
                        courses: prevState
                            .courses
                            .filter(function (crs) {
                                return crs._id !== course._id
                            })
                    })
                })
            })


    addCourse = () =>
        createCourse({
            title: this.state.newCourseTitle
        }).then(actualCourse => this.setState(prevState => {
            return ({
                courses: [
                    ...prevState.courses,
                    {
                        _id: (new Date()).getTime(),
                        title: prevState.newCourseTitle
                    }
                ]
            })
        }))

    editCourse = (course, newCourse) =>
        updateCourse(
            course._id,
            newCourse
        )


    showEditor = () =>
        this.setState({
            showEditor: true
        })

    hideEditor = () =>
        this.setState({
            showEditor: false
        })

    updateForm = (newState) => {
        this.setState(newState)
    }

    updateInnerForm = (newState) => {
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <div>

                    <Router>
                        <Route
                            path="/course-editor/:courseId"
                            exact={true}
                            render={(props) =>
                                <CourseEditorComponent
                                    {...props}
                                    moduleId={props.match.params.moduleId}
                                    courseId={props.match.params.courseId}
                                />}
                        />

                        <Route
                            path="/"
                            exact={true}
                            render={() =>
                                <CourseListComponent
                                    layout={this.state.layout}
                                    toggle={this.toggle}
                                    courses={this.state.courses}
                                    editCourse={this.editCourse}
                                    showEditor={this.showEditor}
                                    deleteCourse={this.deleteCourse}
                                    addCourse={this.addCourse}
                                    updateForm={this.updateForm}
                                    newCourseTitle={this.state.newCourseTitle}
                                />}
                        />

                    </Router>
                </div>
            </div>

        )
    }
}


export default CourseManagerContainer