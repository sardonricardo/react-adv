import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg'
import { createContext, useContext, useState } from 'react';
import useProduct from '../hooks/useProduct';
import { ReactElement } from 'react';
import { ProductContextProps, Product } from '../interfaces/interfaces';






//Context genérico
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string; 
    style?: React.CSSProperties; 
}



export const ProductCard = ({ product, children, className, style }: Props) => {

  console.log(styles)

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }
    }>
      <div className={`${styles.productCard} ${ 
        className }`}
        style={ style }>

        {children}

        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons increaseBy={ increaseBy } counter={ counter }/> */}


      </div>
    </Provider>
  )
}

