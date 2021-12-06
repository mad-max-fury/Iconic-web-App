import "./bases/base.css"
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./Pages/MainPage";
import Shop from "./Pages/Shop";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Cart from "./Pages/Cart";

import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

function App() {

  return (
    <Router>
      <div className="container">
        <SignIn />
        <SignUp />
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
  );
}

export default App;
