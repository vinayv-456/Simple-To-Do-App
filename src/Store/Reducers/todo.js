import {
    ADD_TASK_SUCCESS,
    DELETE_TASK_SUCCESS,
    MARK_COMPLETE_TASK_SUCCESS,
    ADD_RANDOM_NAMES_REQUEST,
    ADD_RANDOM_NAMES_SUCCESS,
} from '../Actions/ActionTypes'

const INIT_STATE = {
    list: [],
    isLoading: false
};

const todo = (state=INIT_STATE, action) => {
    let temp;
    switch (action.type) {
        case ADD_RANDOM_NAMES_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ADD_RANDOM_NAMES_SUCCESS:
            temp = [...state.list];
            action.payload.map((ele)=>temp.push({task: ele.name, completed: false}))
            return {
                ...state,
                list: temp,
                isLoading: false
            }
        case DELETE_TASK_SUCCESS:
            temp = [...state.list];
            console.log("action.index==", action.index, state.list)
            temp = temp.filter((item, itrIndex)=>{
                return itrIndex !== action.index
            })
            return {
                ...state,
                list: temp
            }
        case ADD_TASK_SUCCESS:
            if(action.task!=='')
            {
                temp = [...state.list];
                temp.push({task: action.task, completed: false});
                console.log(temp);
            }
            return {
                ...state,
                list: temp
            }
        case MARK_COMPLETE_TASK_SUCCESS:
            temp = [...state.list];
            temp.map((item, itrIndex)=>{
                if(itrIndex === action.index){
                    item.completed = true;
                }
                return item;
            })
            return{
                ...state,
                list: temp
            }
        default:
            return state;
    }
} 

export default todo;