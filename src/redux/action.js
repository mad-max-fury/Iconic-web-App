import iconicWebApp from "../Api/iconicWebApp"
const FETCH_PRODUCTS = 'FETCH_PRODUCTS'


export const handleProduct = (url) => async dispatch => {
  const response = await iconicWebApp.post(url);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data
  })
}



