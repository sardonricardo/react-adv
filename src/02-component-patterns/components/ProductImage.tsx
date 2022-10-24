import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';


export interface Props {
  img?: string,
  className?: string,
  style?: React.CSSProperties
}

export const ProductImage = ({ className, img, style }: Props) => {

  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {

  } else {
    imgToShow = noImage
  }

  return (
    <img style={ style } className={`${styles.productImg} ${className}`} src={img ? img : noImage} alt="Coffee Mug" />
  )
}

