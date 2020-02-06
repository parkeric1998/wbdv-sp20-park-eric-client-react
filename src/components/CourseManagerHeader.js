import React from "react"


function CourseManagerHeader() {
    return (
        <h2>
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
    )

}

export default CourseManagerHeader