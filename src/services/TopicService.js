import {TOPICS_API_URL, TOPICS_TOPICS_API_URL} from "../common/constants";

export const createTopic = (topicId, topic) =>
    fetch(TOPICS_TOPICS_API_URL(topicId), {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findTopicsForLesson = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001203225/module/${topicId}/lessons`)
        .then(response => response.json())

export const updateTopic = async (topicId,topic) =>
{
    const response = await fetch(`${TOPICS_API_URL}/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const deleteTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001203225/modules/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default{
    findTopicsForLesson,
    createTopic,
    updateTopic,
    deleteTopic
}