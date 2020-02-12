import React from "react";
import CourseRow from "./CourseRow";
import {deleteCourse} from "../../services/CourseService";

const CourseTableComponent = ({courses, deleteCourse, showEditor, editCourse }) =>

    <div>
        {/*<h2>Course Table Component {courses.length}</h2>*/}
        <ul>
            {
                courses.map(function(course,index){
                    return (
                        <CourseRow
                            key={index}
                            course ={course}
                            editCourse = {editCourse}
                            showEditor = {showEditor}
                            deleteCourse = {deleteCourse}/>
                    )
                })
            }
        </ul>
    </div>
export default CourseTableComponent