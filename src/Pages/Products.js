import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleProduct } from '../redux/action'
import PaginationBtn from '../components/PaginationBtn'
import "../styles/Products.css"
const Products = (props) => {
  const [url, setUrl] = useState("http://iconic-med.herokuapp.com/api/v1/pag_products/")
  // const [searchValue, setSearchValue] = useState(null)
  useEffect(() => {
    props.handleProduct(url, props.searchValue, props.category, props.minprice, props.maxprice)
  }, [url, props.searchValue, props.category, props.minprice, props.maxprice])
  // useEffect(() => {
  //   alert(props.category)
  // }, [])

  const [state, setState] = useState([])
  useEffect(() => {
    setState(props.products)
  }, [props.products])

  const [products, setProducts] = useState([])
  const [prevPage, setPrevPage] = useState(state.products?.previous)
  const [nextPage, setNextPage] = useState(null)

  useEffect(() => {
    setProducts(state.products?.results)
    setNextPage(state.products?.next)
    setPrevPage(state.products?.previous)
  }, [state])

  const handleSetPrevpage = () => {
    if (prevPage === null || nextPage === undefined) {
      return
    }
    setUrl(prevPage)
  }
  const handleSetNextpage = () => {
    if (nextPage === null || nextPage === undefined) {
      return
    }
    setUrl(nextPage)
  }


  const renderList = () => {
    return products?.map((product) => {
      return (<>
        <div class=" box" onClick={handleProduct} key={product.code_num + "hi"}>
          <img src={product.images[1]} alt={product.name} />
          <div class="product-name">
            <small> {product.name}</small>
          </div>
          <div class="price"> &#8358;{product.price} </div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <a class="btn">add to cart</a>
        </div>
      </>)
    })
  }

  // console.log(prevPage, nextPage)
  return (
    <>
      <aside class="displaySearchResult" id="displaySearchResult">
        {
          products === [] || undefined ? <>
            <div>loading</div>
          </> : renderList()
        }
      </aside>
      <aside className="filterItems">
        <PaginationBtn setPrevPage={() => handleSetPrevpage()} setNextPage={() => handleSetNextpage()} />
      </aside>
    </>
  )

}

const mapStateToProps = (state) => {
  return { products: state.products }
}
export default connect(
  mapStateToProps, { handleProduct }
)(Products)
