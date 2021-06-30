import {
    ADD_RANDOM_NAMES_REQUEST, 
    DELETE_TASK_SUCCESS,
    ADD_TASK_SUCCESS,
    MARK_COMPLETE_TASK_SUCCESS
} from './ActionTypes'

export const generateUsers = () => {
    return {
        type: ADD_RANDOM_NAMES_REQUEST 
    }
}

export const addTask = (task) => {
    return {
        type: ADD_TASK_SUCCESS,
        task: task
    }
}

export const deleteTask = (index) => {
    return {
        type: DELETE_TASK_SUCCESS,
        index: index 
    }
}

export const markComplete = (index) => {
    return {
        type: MARK_COMPLETE_TASK_SUCCESS,
        index: index
    }
}