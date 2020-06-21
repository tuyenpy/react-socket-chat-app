import { all } from 'redux-saga/effects';

import {
    createUserActionWatcher,
    loginUserActionWatcher,
    getUserActionWatcher
} from './user.saga';
import {
    actionWatcher,
    createRoomActionWatcher
} from './room.saga';

import {
    getMessageActionWatcher,
    sendMessageActionWatcher
} from './message.saga';


export default function* rootSaga() {
    yield all([
        actionWatcher(),
        createRoomActionWatcher(),
        createUserActionWatcher(),
        loginUserActionWatcher(),
        getUserActionWatcher(),
        getMessageActionWatcher(),
        sendMessageActionWatcher()
    ]);
}