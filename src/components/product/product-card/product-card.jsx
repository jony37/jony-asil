import '../product-card/product-card.css'

const ProductCard = ({tovarImg, tovarName, price}) => {
  return (
    <div>
        <img src={tovarImg} alt="aaaa" />
        <p>Asil</p>
    </div>
  )
}

export default ProductCard