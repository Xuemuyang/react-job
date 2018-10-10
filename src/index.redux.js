const ADD = 'add'
const REMOVE = 'remove'

// reducer
export function counter (state = 0, action) {
  switch(action.type) {
    case ADD:
      return state + 1
    case REMOVE:
      return state - 1
    default:
      return 10
  }
}

// action creater
export function addOne() {
  return {
    type: ADD
  }
}

export function removeOne() {
  return {
    type: REMOVE
  }
}

export function addOneAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addOne())
    }, 2000)
  }
}
