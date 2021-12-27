import iconicWebApp from "../Api/iconicWebApp"
const FETCH_PRODUCTS = 'FETCH_PRODUCTS'


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



