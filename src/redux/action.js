import iconicWebApp from "../Api/iconicWebApp"
const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
const FETCH_LANDING_PAGEITEMS = 'FETCH_LANDING_PAGEITEMS'

export const handleProduct = (url, query, category, min_price, max_price) => async dispatch => {
  const response = await iconicWebApp({
    method: "POST", url: url, data: {
      query: query,
      category: category,
      min_price: min_price,
      max_price: max_price,

    }
  });
  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data
  })
}


export const handleLandingPageProduct = (url) => async dispatch => {
  const response = await iconicWebApp({
    method: "GET", url: url
  });
  dispatch({
    type: FETCH_LANDING_PAGEITEMS,
    payload: response.data
  })
}
