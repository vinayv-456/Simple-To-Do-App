import {all} from 'redux-saga/effects';
import generateNames from './randomNames'

export default function* rootSaga(getState) {
    yield all([
        generateNames()
    ]);
}
