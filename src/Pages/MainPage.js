import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleLandingPageProduct } from '../redux/action'
import Explore from '../components/Explore'
import Hero from '../components/Hero'
import MedicalWears from '../components/MedicalWears'
import Topsell from '../components/Topsell'

function MainPage(props) {
  const [url] = useState("http://iconic-med.herokuapp.com/api/v1/products/")

  useEffect(() => {
    props.handleLandingPageProduct(url)
  }, [url])


  const [state, setState] = useState([])
  useEffect(() => {
    setState(props.landingPageProduct)
  }, [props.landingPageProduct])
  console.log(state?.landingPageProducts)
  return (
    <main style={{ height: "fit-content", width: "100%" }}>
      <Hero medicalbooks={state?.landingPageProducts?.ads} />
      <Topsell topproducts={state?.landingPageProducts?.top_products} />
      <Explore medicaltools={state?.landingPageProducts?.Medical_Tools} />
      <MedicalWears medicalwears={state?.landingPageProducts?.Medical_Wears} />
    </main>
  )
}

const mapStateToProps = (state) => {
  return { landingPageProduct: state.landingPageProduct }
}
export default connect(
  mapStateToProps, { handleLandingPageProduct }
)(MainPage)
