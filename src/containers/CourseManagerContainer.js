import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse} from "../services/CourseService";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle:'Whatever',
        courses: [
            {_id: '123', title: 'Course A'},
            {_id: '234', title: 'Course B'},
            {_id: '345', title: 'Course C'},
            {_id: '456', title: 'Course D'},
            {_id: '567', title: 'Course E'}
        ]
    }
    componentDidMount = async () =>{
        const courses = await findAllCourses()
            this.setState({
                courses: courses
            })

    }

    toggle = () =>
        this.setState(prevState =>{
            if(prevState.layout === 'table'){
                return({
                    layout: 'grid'
                })
            } else{
                return({
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
                            .filter(function(crs) {
                                return crs._id !== course._id
                            })
                    })
                })
            })


    addCourse = () =>
        createCourse({
            title: this.state.newCourseTitle
        }).then(actualCourse => this.setState(prevState =>{
            return({
                courses:[
                    ...prevState.courses,
                    {
                        _id: (new Date()).getTime(),
                        title: prevState.newCourseTitle
                    }
                ]
            })
        }))


    showEditor =() =>
        this.setState({
            showEditor: true
        })

    hideEditor =() =>
        this.setState({
            showEditor: false
        })

    updateForm =(newState) => {
        this.setState(newState)
    }


    render(){
        return (
            <div>
                <h1>Course Manager</h1>
                {
                    this.state.showEditor &&
                    <CourseEditorComponent
                        hideEditor ={this.hideEditor}/>
                }
                {
                    !this.state.showEditor &&
                    <div>
                        <button onClick={this.toggle}>Toggle</button>
                        <input
                            onChange={(e)=> this.updateForm({
                                newCourseTitle: e.target.value
                            })}
                            value = {this.state.newCourseTitle}/>
                        <button onClick={this.addCourse}>Add Course</button>
                        {
                            this.state.layout === 'table' &&
                            <CourseTableComponent
                                showEditor ={this.showEditor}
                                deleteCourse = {this.deleteCourse}
                                courses ={this.state.courses}/>
                        }
                        {
                            this.state.layout === 'grid' &&
                            <CourseGridComponent courses ={this.state.courses}/>
                        }
                    </div>
                }
           </div>

        )
    }
}


export default CourseManagerContainer