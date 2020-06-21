const userReducer = (state = {}, action) => {
  switch (action.type) {
      case 'GET USER': return state;
      case 'USER RECEIVED': return action.data;
      default:
          return state;
  }
}


export default userReducer;