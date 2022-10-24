import { ProductCard as ProductCardHOC } from './ProductCard'; 
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';

export { ProductButtons } from './ProductButtons';
/* export { ProductCard } from './ProductCard'; */
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';


const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle, 
    Image: ProductImage,
    Buttons: ProductButtons

}) 


export default ProductCard