import { ProductTitle, ProductImage, ProductButtons } from "../components";
import ProductCard from "../components";
import '../styles/custom-styles.css';


const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

{/* HOC; HIGHER ORDER COMPONENT. RECIBE CHILDREN */ }

const ShoppingPage = () => {
  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>


        {/* importa el componente y sus props de ../components  */}
        <ProductCard product={product}>
          < ProductCard.Image className="custom-image" />
          < ProductCard.Title title={'Hola Caracola'} className="text-bold" activeClass="active" />
          < ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark"
        >
          < ProductImage className="custom-image" />
          < ProductTitle className="text-bold" activeClass="active" />
          < ProductButtons className="custom-buttons" />
        </ProductCard>


        <ProductCard
          product={product}
          style={{
            backgroundColor: 'orange'
          }}
        >

          < ProductImage
            style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
            }}
            className="custom-image" />
          < ProductTitle
            style={{
              fontWeight: 'bold'
            }}
            className="text-bold" activeClass="active" />
          < ProductButtons
            className="custom-buttons"
            style={{
              display: 'flex',
              justifyContent: 'end'
            }} />
        </ProductCard>

      </div>

    </div>
  )
}

export default ShoppingPage