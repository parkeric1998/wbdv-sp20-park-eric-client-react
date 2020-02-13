const initialState = {

    lessons : [
        {title: "Lessons 123", _id : "123"},
        {title: "Lessons 234", _id : "234"},
        {title: "Lessons 345", _id : "345"},
        {title: "Lessons 000", _id : "000"}
    ]
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FIND_LESSONS_FOR_MODULE":
            return {
                lessons: action.lessons
            }
        case "FIND_ALL_LESSONS":
            return {
                lessons: action.lessons
            }

        case "CREATE_LESSON" :
            return {
                lessons: [
                    ...state.lessons,

                    action.newLesson
                ]
            }
        case "DELETE_LESSON" :
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }

        case "UPDATE_LESSON":
            return{
                lessons: action.lessons
            }

        default:
            return state
    }
    return state
}
export default lessonReducer