import React from "react";
import CourseRow from "./CourseRow";


const CourseGridComponent = ({courses}) =>
    <div class="row">
        {
            courses.map(function (course, index) {
                return (
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div>
                            <i className="fa-5x fa fa-file wbdv-row wbdv-icon"></i>
                        </div>

                        <div>
                            {course.title}
                        </div>

                        <div>
                            Last Modified
                        </div>

                        <div>
                            {new Date().toLocaleString()}
                        </div>

                        <div>
                            Owned by Eric Park
                        </div>
                    </div>
                )
            })
        }

    </div>


// class CourseGridComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {editing: false, newTitle: ""}
//     }
//     render() {
//         const newCourse = this.props.course;
//
//         const wrapperFunction = () => {
//             this.props.editCourse(this.props.course, newCourse);
//             this.setState({editing: false})
//         }
//         return (
//
//             // <h2>Course Grid Component </h2>
//             <div>
//                 {this.props.course.title}
//             </div>
//         )
//     }
// }

export default CourseGridComponent