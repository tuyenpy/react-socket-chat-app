import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects';

const createUserUri = "https://chat-app-vietnam.herokuapp.com/api/user/signup";
const loginUserUri = "https://chat-app-vietnam.herokuapp.com/api/user/login";
const getUserUri = "https://chat-app-vietnam.herokuapp.com/api/user";
const getRoomUri = "https://chat-app-vietnam.herokuapp.com/api/room";
const createRoomUri = "https://chat-app-vietnam.herokuapp.com/api/room/create"

//get room action
function* getRoom() {
    let res = yield axios.get(getRoomUri);
    console.log(res);
    yield put({ type: 'DATA RECEIVED', data: res.data })
}
function* actionWatcher() {
    yield takeLatest('GET ROOM', getRoom);
}

//create room action
function* createRoom(disp) {
    let res = yield axios.post(createRoomUri, disp.data)
    yield put({type: 'DATA RECEIVED', data: res.data})
}

function* createRoomActionWatcher() {
    yield takeLatest('CREATE ROOM', createRoom)
}

//get user
function* getUser(disp) {
    let res = yield axios.get(getUserUri, {
        params: {
            id: disp.data
        }
    });
    yield put({type: 'USER RECEIVED', data: res.data});
}

function* getUserActionWatcher() {
    yield takeLatest('GET USER', getUser);
}
//create user
function* createUser(disp) {
    let res = yield axios.post(createUserUri, disp.data);
    yield put({type: 'USER RECEIVED', data: res.data});
}
function* createUserActionWatcher() {
    yield takeLatest('CREATE USER', createUser);
}

//login user
function* loginUser(disp) {
    let res = yield axios.post(loginUserUri, disp.data);
    yield put({type: 'USER RECEIVED', data: res.data});
}

function* loginUserActionWatcher() {
    yield takeLatest('LOGIN USER', loginUser);
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
        createRoomActionWatcher(),
        createUserActionWatcher(),
        loginUserActionWatcher(),
        getUserActionWatcher(),
    ]);
}