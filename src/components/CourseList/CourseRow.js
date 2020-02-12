import React from "react";
import './CourseRow.css';
import {Link} from "react-router-dom";

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            newTitle: "",
            bgColor: "white"
        }
    }

    render() {
        const newCourse = this.props.course;

        const wrapperFunction = () => {
            this.props.editCourse(this.props.course, newCourse);
            this.setState({editing: false, bgColor: 'white'})
        }

        return (
            <div className="row course-row"
                 style={{backgroundColor: this.state.bgColor}}
            >

                <i className="fa fa-file wbdv-row wbdv-icon"></i>
                <div className="col-5">
                    {
                        !this.state.editing &&
                        <Link
                            className ="col-3"
                            to ={`/course-editor/${this.props.course._id}`}>


                            {this.props.course.title}
                        </Link>
                    }
                    {this.state.editing &&
                    <input
                        className="col-3"
                        onChange={(e) => {
                            newCourse.title = e.target.value
                        }}
                        // value={this.props.course.title}
                    />
                    }
                </div>
                <div className="col-2 d-sm-none d-md-block">
                    Eric Park
                </div>

                <div className="col-3 d-none d-lg-block d-xl-block">
                    {new Date().toLocaleString()}
                </div>

                {
                    !this.state.editing &&
                    < i className="fa-2x fa fa-pencil wbdv-edit"
                        onClick={() => {
                            this.setState({
                                editing: true,
                                bgColor: 'blue'
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
        )
    }
}


export default CourseRow
