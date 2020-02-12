import React from "react";
import './CourseEditorComponent.css'
import {connect} from "react-redux";
import {CREATE_MODULE, createModule, DELETE_MODULE, deleteModule} from "../../actions/moduleActions";
import moduleService from '../../services/ModuleService'

class ModuleListComponent extends React.Component {
    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)
    }

    render() {
        return (
            <ul>
                {this.props.modules && this.props.modules.map(module =>
                    <div className="col-11 wbdv-module-item"
                         key={module._id}>
                        <button onClick={() => this.props.deleteModule(module._id)}>
                            Delete
                        </button>
                        {module.title}
                    </div>
                )}
                <li>
                    <button onClick={
                        () => this.props.createModule(this.props.courseId)}>
                        Create</button>
                </li>
            </ul>
        )
    }
}


const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModuleForCourse: (courseId) =>
            moduleService.findModuleForCourse(courseId)
                .then(actualModules => dispatch({
                    type: 'FIND_MODULES_FOR_COURSE',
                    modules: actualModules
                })),
        findAllModules: () =>
            fetch("https://wbdv-generic-server.herokuapp.com/api/001203225/modules")
                .then(response => response.json())
                .then(actualModules =>
                    dispatch({
                        type: "FIND_ALL_MODULES",
                        modules: actualModules
                    })),
        deleteModule: (moduleId) =>
           moduleService.deleteModule(moduleId)
                .then(status =>
                    dispatch(deleteModule(moduleId))),
        createModule: (courseId) => {
          moduleService.createModule(courseId)
                .then(actualModule =>
            dispatch(createModule(actualModule)))
        }
    }
}


export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent)