import React from "react";

class CourseRow extends React.Component {
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
            <div class="row">
                <i className="fa fa-file wbdv-row wbdv-icon"></i>
                <div class="col-5">
                    {
                        !this.state.editing &&
                        <a
                            class="col-3"
                            onClick={this.props.showEditor}
                            href="#">
                            {this.props.course.title}
                        </a>
                    }
                    {this.state.editing &&
                    <input
                        class="col-3"
                        onChange={(e) => {
                            newCourse.title = e.target.value
                        }}
                        // value={this.props.course.title}
                    />
                    }
                </div>
                <div class="col-2 d-sm-none d-md-block">
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
                                editing: true
                            })
                        }}/>
                }

                {
                    this.state.editing &&
                    <i className="fa-2x fa fa-plus wbdv-create"
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
