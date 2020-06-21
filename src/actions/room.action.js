//get all room
export const getRoom = () => ({
  type: 'GET ROOM',
});

//create room
export const createRoom = (value) => ({
  type: 'CREATE ROOM',
  data: value
})
