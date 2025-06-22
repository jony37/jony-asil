import '../app/App.css'

import Header from "../header/header";
import Home from "../home/home";
import Shop from "../shop/shop";
import Product from "../product/product";
import Footer from "../footer/footer";
import img from '../images/product-01.jpg'

function App() {
  const productData = [
    {tovarImg: "../images/product-01.jpg", tovarName: "Esprit Ruffle Shirt", price: "$16.64"},
    {tovarImg: "../images/product-01.jpg", tovarName: "Esprit Ruffle Shirt", price: "$16.64"},
    {tovarImg: "../images/product-01.jpg", tovarName: "Esprit Ruffle Shirt", price: "$16.64"}
  ]
  return (
    <div className='container'>
      <Header/>
      <Home/>
      <Shop/>
      <Product productData = {productData}/>
      <Footer/>
    </div>
  );
}

export default App;
