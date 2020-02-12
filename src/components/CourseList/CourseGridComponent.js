import React from "react";
import CourseRow from "./CourseRow";
import CourseGrid from "./CourseGrid";


const CourseGridComponent = ({courses, deleteCourse, showEditor, editCourse}) =>
    <div class="row">
        {
            courses.map(function (course, index) {
                return (
                    <CourseGrid
                        key={index}
                        course ={course}
                        editCourse = {editCourse}
                        showEditor = {showEditor}
                        deleteCourse = {deleteCourse}/>
                )
            })
        }

    </div>



export default CourseGridComponent