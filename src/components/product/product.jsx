import "../product/product.css";
import ProductCard from "./product-card/product-card";

const Product = (productData) => {
  return (
    <div>
        {
            productData.map(item => (
                <ProductCard productImg = {item.productImg} tovarName ={item.tovarName} price = {item.price}/>
            ))
        }
    </div>
  );
};

export default Product;
