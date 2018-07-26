// counter is a function
const counter = (state = 0 , action) => {
  switch (action.type) {
    case 'INCREMENT': // this is a action
      return state + 1
    case 'DECREMENT': // this is another action
      return state - 1
    default:
      return state
  }
}

export default counter;
