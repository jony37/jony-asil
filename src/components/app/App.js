import '../app/App.css'

import Header from "../header/header";
import Home from "../home/home";
import Shop from "../shop/shop";
import Product from "../product/product";
import Footer from "../footer/footer";

function App() {
  return (
    <div className='container'>
      <Header/>
      <Home/>
      <Shop/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
