//get user
export const getUser = (data) => ({
  type: 'GET USER',
  data: data,
});

//create user
export const createUser = (data) => ({
  type: 'CREATE USER',
  data: data,
})

//user login
export const loginUser = (data) => ({
  type: 'LOGIN USER',
  data: data,
});
