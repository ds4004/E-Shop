import "./App.css";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
// import ProductComponent from "./containers/ProductComponent";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router basename="/E-Shop/">
        <Header />
        <Routes>
          <Route path="/" Component={ProductListing} />
          <Route path="/product/:productId" Component={ProductDetail} />
          <Route>404 Page not Found!</Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
