import {CREATE_MODULE, DELETE_MODULE} from "../actions/moduleActions";

const initialState = {
    modules: [
        {_id: "1", title: "Module 1 - jQuery"},
        {_id: "2", title: "Module 2 - React"},
        {_id: "3", title: "Module 3 - Redux"},
        {_id: "4", title: "Module 4 - Native"},
        {_id: "5", title: "Module 5 - Angular"},
        {_id: "6", title: "Module 6 - Node"},
        {_id: "7", title: "Module 7 - Mongo"}
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case"FIND_MODULES_FOR_COURSE":
            return {
                modules: action.modules
            }
        case "FIND_ALL_MODULES":
            return {
                modules: action.modules
            }
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }
        case DELETE_MODULE: {
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }
        }
        default:
            return state
    }
}

export default moduleReducer