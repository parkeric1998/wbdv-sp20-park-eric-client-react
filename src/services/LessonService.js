import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../common/constants";

export const createLesson = (moduleId, lesson) =>
    fetch(MODULES_LESSONS_API_URL(moduleId), {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001203225/modules/${moduleId}/lessons`)
        .then(response => response.json())

export const updateLesson = async (lessonId,lesson) =>
{
    const response = await fetch(`${LESSONS_API_URL}/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001203225/modules/${lessonId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default{
    findLessonsForModule,
    createLesson,
    updateLesson,
    deleteLesson
}