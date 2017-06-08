export default function(state={}, action) {
  switch (action.type) {
    case 'TEXT':
      return {
        ...state,
        text: action.payload
      }
    default:
      return state;
  }
}
