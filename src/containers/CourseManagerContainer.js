import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse, findCourseById, updateCourse} from "../services/CourseService";
import CourseManagerHeader from "../components/CourseManagerHeader";
import './CourseManagerContainer.css';

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
                {/*<CourseManagerHeader/>*/}
                {
                    !this.state.showEditor &&
                    <h2 id="wbdv-course-header">
                        <div className="row">
                            <div className="col-1">
                                <i className="wbdv-field wbdv-hamburger fa fa-bars"
                                   id="wbdv-hamburger"></i>
                            </div>
                            <div className="col-4">
                                <a>
                                    Course Manager
                                </a>
                            </div>

                            <div className="col-4">

                                <input
                                    className="form-control wbdv-field wbdv-new-course"
                                    placeholder="New Course"
                                    onChange={(e) => this.updateForm({
                                        newCourseTitle: e.target.value
                                    })}
                                    value={this.state.newCourseTitle}/>

                            </div>

                            <div className="col-1">
                                <i className="fa fa-plus-circle wbdv-button wbdv-add-course"
                                   onClick={this.addCourse}>
                                </i>
                            </div>

                        </div>
                    </h2>
                }
                <div>
                    {
                        this.state.showEditor &&
                        <CourseEditorComponent
                            hideEditor={this.hideEditor}/>
                    }
                    {

                        !this.state.showEditor &&
                        <div>

                            <h4 className="d-none d-lg-block "
                                id="wbdv-title-row">
                                <div className="row">
                                    {
                                        this.state.layout === 'table' &&
                                        <a class="col-4 wbdv-header wbdv-title offset-1">
                                            Title
                                        </a>
                                    }
                                    {
                                        this.state.layout === 'table' &&
                                        <a className="col-2">
                                            Owned by
                                        </a>
                                    }
                                    {
                                        this.state.layout === 'table' &&
                                        <a className="col-3">
                                            Last modified
                                        </a>
                                    }

                                    <i onClick={this.toggle}
                                       className="col-2 fa fa-th wbdv-button wbdv-grid-layout">
                                    </i>


                                </div>
                            </h4>

                            {
                                this.state.layout === 'table' &&
                                <CourseTableComponent
                                    editCourse={this.editCourse}
                                    showEditor={this.showEditor}
                                    deleteCourse={this.deleteCourse}
                                    courses={this.state.courses}
                                />
                            }
                            {
                                this.state.layout === 'grid' &&
                                <CourseGridComponent
                                    courses={this.state.courses}
                                    editCourse={this.editCourse}
                                    showEditor={this.showEditor}
                                    deleteCourse={this.deleteCourse}
                                />
                            }
                        </div>


                    }
                </div>
            </div>

        )
    }
}


export default CourseManagerContainer