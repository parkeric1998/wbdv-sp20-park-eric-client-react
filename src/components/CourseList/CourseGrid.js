import React from "react";
import {Link} from "react-router-dom";

class CourseGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editing: false, newTitle: ""}
    }

    render() {
        const newCourse = this.props.course;

        const wrapperFunction = () => {
            this.props.editCourse(this.props.course, newCourse);
            this.setState({editing: false})
        }

        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div>
                    <i className="fa-5x fa fa-file wbdv-row wbdv-icon"></i>
                </div>
                {
                    !this.state.editing &&
                    <Link
                        onClick={this.props.showEditor}
                        href="#"
                        to ={`/course-editor/${this.props.course._id}`}>
                        {this.props.course.title}
                    </Link>
                }
                {this.state.editing &&
                <input
                    onChange={(e) => {
                        newCourse.title = e.target.value
                    }}
                    // value={this.props.course.title}
                />
                }

                <div>
                    Last Modified
                </div>

                <div>
                    {new Date().toLocaleString()}
                </div>

                <div>
                    Owned by Eric Park
                </div>

                <div>
                    {
                        !this.state.editing &&
                        < i className="fa-2x fa fa-pencil wbdv-edit"
                            onClick={() => {
                                this.setState({
                                    editing: true
                                })
                            }}/>
                    }

                    {
                        this.state.editing &&
                        <i className="fa-2x fa fa-check wbdv-create"
                           onClick={wrapperFunction}>
                        </i>
                    }


                    <i
                        className="fa-2x fa fa-times wbdv-row wbdv-button wbdv-delete"
                        onClick={() => this.props.deleteCourse(this.props.course)}>
                    </i>

                </div>
            </div>
        )
    }
}

export default CourseGrid