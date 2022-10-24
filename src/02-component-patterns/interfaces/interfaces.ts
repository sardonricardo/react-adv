import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle"; 
import { Props as ProductImageProps } from "../components/ProductImage"; 
import { Props as ProductButtonProps } from '../components/ProductButtons';



export interface Product {
    id: string;
    title: string;
    img?: string;
}


export interface ProductButtonsProps {
    increaseBy: (value: number) => void;
    counter: number;
}


//interface que se necesita para elaborar el contexto
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;

}

//definir la misma interfaz que hay en index.ts
//opcional
export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps ):JSX.Element,
    Title: ( Props : ProductTitleProps)  => JSX.Element,
    Image: ( Props : ProductImageProps ) => JSX.Element,
    Buttons: ( Props : ProductButtonProps ) => JSX.Element

}