import Types from '../Actions/ActionTypes'
import { Types as ReduxSauceTypes, createReducer } from 'reduxsauce'

const INIT_STATE = {
    list: [],
    isLoading: false
};

export const addRandomNamesRequest = (state=INIT_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
} 
export const addRandomNamesSuccess = (state=INIT_STATE, action) => {
    const {payload} = action;
    let temp = [...state.list];
    payload.map((ele)=>temp.push({task: ele.name, completed: false}))
    return {
        ...state,
        list: temp,
        isLoading: false
    }
}

export const deleteTaskSuccess = (state=INIT_STATE, action) => {
    const {index} = action;
    let temp = [...state.list];
    temp = temp.filter((item, itrIndex)=>{
        return itrIndex !== index
    })
    return {
        ...state,
        list: temp
    }
}

export const addTaskSuccess = (state=INIT_STATE, action) => {
    const {task} = action;
    let temp;
    if(task!=='')
    {
        temp = [...state.list];
        temp.push({task: task, completed: false});
        return {
            ...state,
            list: temp
        }
    }
    return {
        ...state,
    }    
}

export const markCompleteTaskSuccess = (state=INIT_STATE, action) => {
    const {index} = action;
    let temp = [...state.list];
    temp.map((item, itrIndex)=>{
        if(itrIndex === index){
            item.completed = true;
        }
        return item;
    })
    return{
        ...state,
        list: temp
    }
}

export const defaultHandler = (state=INIT_STATE, action) => {
    return {...state};
}

export const HANDLERS = {
    [Types.ADD_RANDOM_NAMES_REQUEST]: addRandomNamesRequest,
    [Types.ADD_RANDOM_NAMES_SUCCESS]: addRandomNamesSuccess,
    [Types.MARK_COMPLETE_TASK_SUCCESS]: markCompleteTaskSuccess,
    [Types.DELETE_TASK_SUCCESS]: deleteTaskSuccess,
    [Types.ADD_TASK_SUCCESS]: addTaskSuccess,
    [ReduxSauceTypes.DEFAULT]: defaultHandler,
}



export default createReducer(INIT_STATE, HANDLERS);
