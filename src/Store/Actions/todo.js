import Types from './ActionTypes'

export const generateUsers = () => {
    return {
        type: Types.ADD_RANDOM_NAMES_REQUEST 
    }
}

export const addTask = (task) => {
    return {
        type: Types.ADD_TASK_SUCCESS,
        task: task
    }
}

export const deleteTask = (index) => {
    return {
        type: Types.DELETE_TASK_SUCCESS,
        index: index 
    }
}

export const markComplete = (index) => {
    return {
        type: Types.MARK_COMPLETE_TASK_SUCCESS,
        index: index
    }
}