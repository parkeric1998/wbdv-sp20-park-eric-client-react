import React from "react";
import './CourseEditorComponent.css'
import {connect} from "react-redux";
import {CREATE_MODULE, createModule, DELETE_MODULE, deleteModule} from "../../actions/moduleActions";
import moduleService, {findModuleForCourse} from '../../services/ModuleService'
import ModuleListItem from "./ModuleListItem";
import {Link} from "react-router-dom";

export default class ModuleListComponent extends React.Component {
    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.moduleId !== prevProps.moduleId) {
            this.props.findModulesForCourse(this.props.courseId)
        }
    }

    state = {
        editing: false,
        activeModuleId: this.props.moduleId,
        editingModuleId: ''
    }

    render() {
        return (
            <ul>
                {/*<li>*/}
                {/*    <Link to={`/course-editor/${this.props.courseId}/modules/${this.props.moduleId}/topic/111`}>*/}
                {/*        test*/}
                {/*    </Link>*/}

                {/*</li>*/}
                {this.props.modules && this.props.modules.map(module =>
                    <ModuleListItem
                        key={module._id}
                        edit={() => {
                            const moduleId = module._id
                            this.props.history.push(`/course-editor/${this.props.courseId}/modules/${moduleId}/lessons`)
                            this.setState({
                                editingModuleId: module._id
                            })
                        }}
                        select={() => {
                            const moduleId = module._id
                            this.props.history.push(`/course-editor/${this.props.courseId}/modules/${moduleId}/lessons`)
                            this.setState({
                                activeModuleId: module._id
                            })
                        }}
                        save={() => this.setState({
                            editingModuleId: ''
                        })}
                        editing={module._id === this.state.editingModuleId}
                        active={module._id === this.state.activeModuleId}
                        module={module}/>
                )}

                <li>
                    <button onClick={
                        () => this.props.createModule(this.props.courseId, {title: "New Module"})
                    }>
                        Create
                    </button>
                </li>
            </ul>
        )
    }
}
