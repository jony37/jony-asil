import '../product-card/product-card.css'

const ProductCard = ({tovarImg, tovarName, price}) => {
  return (
    <div>
        <img src={tovarImg} alt="aaaa" />
    </div>
  )
}

export default ProductCard