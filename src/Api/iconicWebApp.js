import axios from 'axios'

export default axios.create(
  {
    baseUrl: "http://iconic-med.herokuapp.com/api/v1/"
  }
)