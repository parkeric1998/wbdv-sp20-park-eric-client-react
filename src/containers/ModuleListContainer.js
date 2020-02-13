import React from "react";
import {connect} from "react-redux";
import {findModulesForCourse, createModule} from "../actions/moduleActions";

import moduleService from "../services/ModuleService";
import ModuleListComponent from "../components/CourseEditor/ModuleListComponent";

const stateToPropertyMapper = (state) => ({
    modules: state.modules.modules
})

const dispatchToPropertyMapper = (dispatch) => ({
    createModule: (courseId, module) =>
        moduleService.createModule(courseId, module)
            .then(actualModule =>
                dispatch(createModule(actualModule))),
    findModulesForCourse: (courseId) =>
        moduleService.findModulesForCourse(courseId)
            .then(modules =>
                dispatch(findModulesForCourse(modules)))
})

const ModuleListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListComponent)

export default ModuleListContainer