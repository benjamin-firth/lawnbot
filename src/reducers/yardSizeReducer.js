export const yardSizeReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_SIZE' :
      return action.sqft;
    default:
      return state;
  }
}