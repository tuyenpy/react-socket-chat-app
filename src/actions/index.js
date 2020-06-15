//get all room
const getRoom = () => ({
  type: 'GET ROOM',
});

//create room
const createRoom = (value) => ({
  type: 'CREATE ROOM',
  data: value
})

//get user
const getUser = (data) => ({
  type: 'GET USER',
  data: data,
});

//create user
const createUser = (data) => ({
  type: 'CREATE USER',
  data: data,
})

//user login
const loginUser = (data) => ({
  type: 'LOGIN USER',
  data: data,
});

export {
  getRoom,
  createRoom,
  createUser,
  loginUser,
  getUser
};