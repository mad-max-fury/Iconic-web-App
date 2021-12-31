import { combineReducers } from 'redux'
import landingPageReducer from './LandingPageReducer'

import productReducer from './productReducer'

export default combineReducers({
  products: productReducer,
  landingPageProduct: landingPageReducer
})