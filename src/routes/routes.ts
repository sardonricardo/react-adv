import { lazy, LazyExoticComponent  } from 'react'
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages/index"; 


//tipo personalizado 
type JSXComponent = () => JSX.Element


interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string; 
}


//Lazyload
const Lazy1 = lazy(() => import(/* webpackChunkName: 'LazyPage1'  */'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: 'LazyPage2'  */'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: 'LazyPage3'  */'../01-lazyload/pages/LazyPage3'));



//construcción dinámica
export const routes: Route[] = [
    {
        to: '/lazy1', 
        path: 'lazy1', //path que me sirven para...,
        Component: Lazy1, 
        name: 'Lazy-1'
    },
    {
        to: '/lazy2', 
        path: 'lazy2', //path que me sirven para...,
        Component: Lazy2, 
        name: 'Lazy-2'
    },
    {
        to: '/lazy3', 
        path: 'lazy3', //path que me sirven para...,
        Component: Lazy3, 
        name: 'Lazy-3'
    }
]