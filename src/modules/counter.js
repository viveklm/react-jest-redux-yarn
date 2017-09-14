export const INCREMENT = 'counter/INCREMENT'

const initialState = {
  count: 0,
  isIncrementing: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
   case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT
    })
  }
}

