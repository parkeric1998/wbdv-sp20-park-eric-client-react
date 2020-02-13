import React from "react";
import moduleService from "../../services/ModuleService";
import {createModule, deleteModule, updateModule} from "../../actions/moduleActions";
import {connect} from "react-redux";

const ModuleListItem =({save, edit, editing, module, deleteModule,updateModule, active, select})=>
    <li className="col-11 wbdv-module-item"
        // onClick={select}
         key={module._id}>

        {editing &&
        <input
            placeholder={module.title}
        />

        }

        {editing &&
        <button onClick={() => deleteModule(module._id)}>
            Delete
        </button>

        }
        {editing &&
        <button onClick={save}>
            Save
        </button>

        }
        {!editing &&
        module.title
        }

        {!editing &&
        <button onClick={edit
        }>
            Edit
        </button>
        }
    </li>


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
        },

        updateModule: (moduleId,module) => {
            moduleService.updateModule(moduleId,module)
                .then(actualModule =>
                    dispatch(updateModule(moduleId,actualModule)))
        }
    }
}


export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListItem)