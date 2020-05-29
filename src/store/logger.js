const logger = store => next => action => {
  console.log('current state', store.getState())
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default logger