import {API_URL} from "../common/constants";

export const createModule = (courseId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001203225/courses/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findModulesForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001203225/courses/${courseId}/modules`)
        .then(response => response.json())

export const updateModule =(moduleId, module) => {
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001203225/courses/${moduleId}/modules`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001203225/modules/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export default {
    deleteModule,
    findModulesForCourse,
    createModule,
    updateModule
}