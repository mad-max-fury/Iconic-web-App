// import action from '../action'
const init = []


const landingPageReducer = (state = init, action) => {
  switch (action.type) {
    case 'FETCH_LANDING_PAGEITEMS':
      return {
        ...state,
        landingPageProducts: action.payload
      }
    default:
      return state
  }


}

export default landingPageReducer