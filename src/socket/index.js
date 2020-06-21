import io from 'socket.io-client';

const URL = 'https://chatapp-room.herokuapp.com';

const socket = io(URL);

export default socket;