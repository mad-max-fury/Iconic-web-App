// import action from '../action'
const init = []


const reducer = (state = init, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }


}

export default reducer