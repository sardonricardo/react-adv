import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';

import { LazyPage1, LazyPage2, LazyPage3 } from '../../src/01-lazyload/pages/index';
import logo from '../logo.svg'


export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {routes.map(({ to, name }) => (
                                <li key={to}>
                                    <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                                </li>
                            ))}


                        </ul>
                    </nav>


                    <Routes>

                        {
                            routes.map(({ path, Component }) => (
                                <Route key={path}
                                    path={path}
                                    element={<Component />} />
                            ))
                        }


                        <Route path="/*" element={<Navigate to="/lazy1" replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}