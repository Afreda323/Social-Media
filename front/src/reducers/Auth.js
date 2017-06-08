const initial = {
  isLogged: localStorage.getItem('logged'),
  userID: localStorage.getItem('userId')
}
export default function(state=initial, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        userID: action.userID,
        isLogged: true
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        userID: action.userID,
        isLogged: true
      }
    case 'LOGOUT_SUCCESS':
      localStorage.removeItem('logged')
      localStorage.removeItem('userId')
      return {
        ...state,
        isLogged: false,
        userID: ''
      }
    default:
      return state;
  }
}
