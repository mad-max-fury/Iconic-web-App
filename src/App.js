import "./bases/base.css"
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./Pages/MainPage";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
// import Dashboard from "./Pages/Dashboard";

function App() {

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />

        </Routes>
        <Footer />
      </div>
    </Router>
    // <Dashboard />
    // <ProductDetailsPage />
  );
}

export default App;
