import io from 'socket.io-client';

// const URL = 'https://chat-app-vietnam.herokuapp.com/';
const URL = 'http://localhost:5000';

const socket = io(URL);

export default socket;