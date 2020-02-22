const initialState = {

    topics : [
        {_id : "123", title: "Topic 1" },
        {_id : "234", title: "Topic 2"},
        {_id : "345", title: "Topic test"},
        {_id : "000", title: "Topic 4"}
    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FIND_TOPICS_FOR_LESSONS":
            return {
                topics: action.topics
            }
        case "FIND_ALL_TOPICS":
            return {
                topics: action.topics
            }

        case "CREATE_TOPIC" :
            return {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "DELETE_TOPIC" :
            return {
                topics: state.topics.filter(topics => topics._id !== action.lessonId)
            }

        case "UPDATE_TOPIC" :
            return {
                topics: action.topics
            }

        default:
            return state
    }
    return state
}
export default topicReducer