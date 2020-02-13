export const API_URL = "https://wbdv-generic-server.herokuapp.com/api/001203225/courses"
export const DEFAULT_COURSE_TITLE = "New Course"

export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001203225/courses"
export const MODULES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001203225/modules"
export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001203225/lessons"
export const TOPICS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001203225/topics"
export const COURSES_MODULES_API_URL = (courseId) => `https://wbdv-generic-server.herokuapp.com/api/001203225/courses/${courseId}`
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/001203225/modules/${moduleId}`
export const LESSONS_TOPICS_API_URL = (lessonId) => `https://wbdv-generic-server.herokuapp.com/api/001203225/lessons/${lessonId}`
export const TOPICS_TOPICS_API_URL = (topicId) => `https://wbdv-generic-server.herokuapp.com/api/001203225/topics/${topicId}`