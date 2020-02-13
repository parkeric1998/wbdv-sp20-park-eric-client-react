export const CREATE_MODULE = "CREATE_MODULE"
export const createModule=(module) =>({
    type: CREATE_MODULE,
    newModule: module
})

export const DELETE_MODULE = "DELETE_MODULE"
export const deleteModule=(moduleId) =>({
    type: DELETE_MODULE,
    moduleId: moduleId
})

export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"
export const findModulesForCourse = (modules) => ({
    modules: modules,
    type: FIND_MODULES_FOR_COURSE
})

export const UPDATE_MODULE = "UPDATE_MODULE"
export const updateModule = (moduleId,module) => ({
    moduleId: moduleId,
    module: module,
    type: UPDATE_MODULE
})