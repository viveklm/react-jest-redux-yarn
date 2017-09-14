export const USER_TOTAL = 'user/USER_TOTAL'

const initialState = {
  userTotal: 0
}

export default (state = initialState, action) => {
  //console.log("action.type : ", action.type);
  //console.log("state : ", state);
  switch (action.type) {
   case USER_TOTAL:
      return {
        ...state,
        userTotal: 20
      }

    default:
      return state
  }
}

export const userTotalCount = () => {
  return dispatch => {
    dispatch({
      type: USER_TOTAL
    })
  }
}

