import React, { lazy } from 'react';

const Index = lazy(() => import('../home/index'));
const Register = lazy(() => import('../User/Register/index'));
const Login = lazy(() => import('../User/Login/index'));
const Routes = [
    {
        path: "/tacos",
        name: 'tacos',
        icon: "home",
        component: lazy(() => import('../tacos/index'))
    },
    {
        path: "/tac",
        name: 'tac',
        icon: "user",
        routes: [
            {
                path: "/tac/bus",
                name: "/tac/bus",
                icon: null,
                component: lazy(() => import('../About/About/index')),
                routes: [
                    {
                        path: "/tac/bus/bus2",
                        name: "/tac/bus/bus2",
                        icon: null,
                        component: lazy(() => import('../About/About/index'))
                    },
                    {
                        path: "/tac/bus/bus3",
                        name: "/tac/bus/bus3",
                        icon: null,
                        component: lazy(() => import('../About/About/index'))
                    }
                ]
            },
            {
                path: "/tac/cart",
                name: "/tac/Cart",
                icon: null,
                component: lazy(() => import('../About/About/index'))
            }
        ]
    },
    {
        path: "/about",
        name: 'About',
        icon: "user",
        component: lazy(() => import('../About/About/index'))
    }
]

export { Index,Routes,Login }
