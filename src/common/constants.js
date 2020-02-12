export const API_URL = "https://wbdv-generic-server.herokuapp.com/api/001203225/courses"
export const DEFAULT_COURSE_TITLE = "New Course"

export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001203225/courses"
export const MODULES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001203225/modules"
export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001203225/lessons"
export const COURSES_MODULES_API_URL = (courseId) => `https://wbdv-generic-server.herokuapp.com/api/001203225/courses/${courseId}/modules`
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/001203225/modules/${moduleId}/lessons`
export const LESSONS_TOPICS_API_URL = (lessonId) => `https://wbdv-generic-server.herokuapp.com/api/001203225/lessons/${lessonId}/topics`