const url = "https://chat-app-vietnam.herokuapp.com/api";
// const url = "http://localhost:5000/api";
const createUserUri = `${url}/user/signup`;
const loginUserUri = `${url}/user/login`;
const getUserUri = `${url}/user`;
const getRoomUri = `${url}/room`;
const createRoomUri = `${url}/room/create`;
const getMessage = `${url}/room/message`;
const sendMessage = `${url}/room/send`;

export {
  createUserUri,
  loginUserUri,
  getUserUri,
  createRoomUri,
  getRoomUri,
  getMessage,
  sendMessage
}