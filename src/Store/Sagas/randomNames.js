import axios from "axios";
import { fork, takeLatest, put, all } from "redux-saga/effects";
import Types from '../Actions/ActionTypes'

function* generateNames(){
    try{
        const data = yield axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(data.data);
        yield put({
            type: Types.ADD_RANDOM_NAMES_SUCCESS,
            payload: data.data
        });
    }catch{
        yield put({
            type: Types.ADD_RANDOM_NAMES_FAILURE,
        })
    }
}

export function* generateNameWatcher(){
    yield takeLatest(Types.ADD_RANDOM_NAMES_REQUEST, generateNames)
} 

export default function* rootSaga(){
    yield all([
        fork(generateNameWatcher)
    ])
};