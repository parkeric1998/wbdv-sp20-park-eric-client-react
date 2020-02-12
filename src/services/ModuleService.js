export const findModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001203225/courses/${courseId}/modules`)
        .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001203225/modules/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const createModule =(courseId)=>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001203225/courses/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify({title: "New Module"}),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export default{
    deleteModule,
    findModuleForCourse,
    createModule
}