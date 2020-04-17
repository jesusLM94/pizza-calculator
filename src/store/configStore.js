import { createStore, applyMiddleware, compose } from 'redux'
import logger from "./logger";
import reducer from './reducer'

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  // Store
  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(logger)),
  )

}

export default configureStore()
