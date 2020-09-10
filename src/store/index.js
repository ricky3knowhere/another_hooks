import { createStore } from 'redux'

const initialState = {
  counter: 0,
  name: ''
}

function rootState(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT': {
      const { counter, ...rest} = state
      return { counter: counter + 1, ...rest }
    }
    case 'DECREMENT': {
      const { counter, ...rest} = state
      return { counter: counter - 1, ...rest }
    }
    case 'SET_NAME': {
      const { name, ...rest} = state
      return { name: action.name, ...rest }
    }
    default:
      return state
  }
}

let store = createStore(rootState)

export default store