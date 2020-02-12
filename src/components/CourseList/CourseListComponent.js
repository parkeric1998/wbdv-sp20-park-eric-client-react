import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import React from "react";
import CourseManagerHeader from "./CourseManagerHeader";

const CourseListComponent =
    ({
        layout,
        toggle,
        courses,
        editCourse,
        showEditor,
        deleteCourse,
        addCourse,
        updateForm,
        newCourseTitle

     }) =>


<div>
    <CourseManagerHeader
        updateForm={updateForm}
        newCourseTitle={newCourseTitle}
        addCourse={addCourse}
    />

    <h4 className="d-none d-lg-block "
        id="wbdv-title-row">
        <div className="row">
            {
                layout === 'table' &&
                <a className="col-4 wbdv-header wbdv-title offset-1">
                    Title
                </a>
            }
            {
                layout === 'table' &&
                <a className="col-2">
                    Owned by
                </a>
            }
            {
                layout === 'table' &&
                <a className="col-3">
                    Last modified
                </a>
            }

            <i onClick={toggle}
               className="col-2 fa fa-th wbdv-button wbdv-grid-layout">
            </i>


        </div>
    </h4>

    {
        layout === 'table' &&
        <CourseTableComponent
            editCourse={editCourse}
            showEditor={showEditor}
            deleteCourse={deleteCourse}
            courses={courses}
        />
    }
    {
        layout === 'grid' &&
        <CourseGridComponent
            courses={courses}
            editCourse={editCourse}
            showEditor={showEditor}
            deleteCourse={deleteCourse}
        />
    }
</div>

export default CourseListComponent