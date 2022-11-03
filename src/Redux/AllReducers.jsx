const initialState = {
  userLoginData: {},
  blogData: {}
};

export default function AllReducers(state = initialState, action) {
  const { value, type } = action;
  switch(type){
    case 'USER_LOGIN_DATA' : 
    return {
        ...state,
        userLoginData: value
    }
    case 'BLOG_DATA' : 
    return {
        ...state,
        blogData: value
    }
    default:
      return state;
  }
}
