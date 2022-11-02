import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { 
  developerReducer, 
  hobbiesReducer, 
  selfReducer
} from '../reducers/dataReducer'

const reducer = combineReducers({
  developer: developerReducer,
  hobbies: hobbiesReducer,
  self: selfReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store